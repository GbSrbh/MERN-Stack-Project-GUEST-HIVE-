const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoConnect = require('./Config/MongoDb');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const User = require('./Models/User');
const Place = require('./Models/Place');
const Booking = require('./Models/Booking');

require("dotenv").config();

mongoConnect();

app.use(express.json());
app.use(cookieParser());

app.use('/Uploads', express.static(__dirname + '/Uploads'));

app.use(cors({
  credentials: true,
  origin: process.env.FrontEndPort
}))



//Test Route
app.get('/test', (req, res) => {
  res.json("app running");
})

//Set user in usercontext after logging in
app.get('/profile', async (req, res) => {
  const { Cookie } = req.cookies;
  if (Cookie) {
    const decodedToken = jwt.verify(Cookie, process.env.jsonSecret);
    const id = decodedToken.user.id;
    const { name } = await User.findOne({ _id: id });
    res.json({ name });
  } else {
    res.json(null);
  }
})


//Route to Register
app.post('/register', async (req, res) => {
  let { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (user) {
      console.log("User Already exists!")
      return res.status(400).json({ msg: "User Already Exists!!" });
    }

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      password
    });
    await user.save();
    console.log("User Saved!")
    res.json(user);

  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error!!");
  }
})

//Route to login
app.post('/login', async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email: email });
    if (!user) {
      console.error("Invalid Credentials!!");
      return res.status(400).json({ msg: "Invalid Credentials!!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error("Invalid Credentials!!");
      return res.status(400).json({ msg: "Invalid Credentials!!" });
    }

    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(payload, process.env.jsonSecret, (err, token) => {
      if (err) throw err;
      res.cookie("Cookie", token).json(user);
    })
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error!!");
  }
})

//Route to logout
app.post('/logout', (req, res) => {
  res.cookie('Cookie', '').json(true);
});

//Route to upload photos
app.post('/upload-by-link', async (req, res) => {
  const { link } = req.body;
  const newName = 'photo' + Date.now() + '.jpg';
  await imageDownloader.image({
    url: link,
    dest: __dirname + '/Uploads/' + newName
  });
  res.json(newName);

})

//Route to upload via button
const photosMiddleware = multer({ dest: 'Uploads/' });
app.post('/upload', photosMiddleware.array('photos', 100), async (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path: filePath, originalname } = req.files[i];
    const ext = path.extname(originalname);
    const newPath = filePath + ext;
    // newPath.replace('Uploads\\', '');
    fs.renameSync(filePath, newPath);
    uploadedFiles.push(newPath.replace('Uploads\\', ''));
  }
  res.json(uploadedFiles);
})

//Route to save places
app.post('/places', async (req, res) => {
  const { Cookie } = req.cookies;
  const placeData = req.body;
  const { title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price } = placeData;
  if (Cookie) {
    try {
      const decodedToken = jwt.verify(Cookie, process.env.jsonSecret);
      const id = decodedToken.user.id;
      let place = new Place({
        owner: id,
        title, address, photos: addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price
      })
      await place.save();
      res.json(place);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error!!')
    }

  } else {
    res.json(null);
  }
})

//Route to return place present on the user account
app.get('/places', async (req, res) => {
  const { Cookie } = req.cookies;
  if (Cookie) {
    try {
      const decodedToken = jwt.verify(Cookie, process.env.jsonSecret);
      const id = decodedToken.user.id;
      const place = await Place.find({ owner: id });
      res.json(place);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error!!");
    }
  }
})

//Route to get a place by id, used to edit your accomodations or display a single place page
app.get('/places/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const place = await Place.findById(id);
    if (!place) {
      return res.status(400).json({ msg: "No Place Found!!" })
    }
    res.json(place);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: "No Place Found!!" })
    }
    console.error(err.message);
    return res.status(500).send("Server Error!!");
  }
})

//Route to put updated place in your accomodations
app.put('/places', async (req, res) => {
  const { Cookie } = req.cookies;
  if (Cookie) {
    const decodedToken = jwt.verify(Cookie, process.env.jsonSecret);

    const { id, title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price } = req.body;

    try {
      let place = await Place.findById(id);
      if (place.owner.toString() !== userId) {//If owner of the place is different from the person with token
        return res.status(400).json({ msg: "Access Denied!!" });
      }
      place.title = title;
      place.address = address;
      place.photos = addedPhotos;
      place.description = description;
      place.perks = perks;
      place.extraInfo = extraInfo;
      place.checkIn = checkIn;
      place.checkOut = checkOut;
      place.maxGuests = maxGuests;
      place.price = price;
      await place.save();
      res.json(place);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error!!");
    }
  }
})

//Route to fetch all places at home page
app.get('/home-places', async (req, res) => {
  res.json(await Place.find());
})


//Route to book a place from booking widget in place page.
app.post('/bookings', async (req, res) => {
  const { checkIn, checkOut, numberOfGuests, name, phone, place, price } = req.body;
  try {
    const { Cookie } = req.cookies;
    if (Cookie) {
      const decodedToken = jwt.verify(Cookie, process.env.jsonSecret);
      const user = decodedToken.user.id;

      const booking = new Booking({
        place,
        user,
        checkIn, checkOut, name, phone, price
      });
      await booking.save();
      res.json(booking);
    } else {
      res.send("No Cookie!!");
    }

  } catch (err) {
    if (err) console.log(err.message);
    return res.status(500).send("Server Error!!");
  }

})

//Route to fetch all the bookings
app.get('/bookings', async (req, res) => {
  const { Cookie } = req.cookies;
  try {
    if (Cookie) {
      const decodedToken = jwt.verify(Cookie, process.env.jsonSecret);
      const userId = decodedToken.user.id;
      const Bookings = await Booking.find({ user: userId }).populate({ path: 'place', model: 'place' });
      res.json(Bookings);
    } else {
      res.send("No Token Found!!");
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error!!")
  }
})


app.listen(process.env.PORT || 4000);
