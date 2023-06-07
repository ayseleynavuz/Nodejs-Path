const Photo = require('../models/Photo');
const fs = require('fs');


// get all photos
exports.getAllPhotos = async (req, res) => {
  const page = req.query.page || 1; // if there is no page query, set it to 1
  const photosPerPage = 1; // display 1 photo per page
  const totalPhotos = await Photo.find().countDocuments(); // count the total number of photos in the database

  const photos = await Photo.find({})
  .sort('-dateCreated')
  .skip((page - 1) * photosPerPage) // skip the photos that are not in the current page
  .limit(photosPerPage); // limit the number of photos per page


  res.render('index', {
    photos: photos,
    current: page,
    pages: Math.ceil(totalPhotos / photosPerPage), // round up the number of pages
  });

}

// get photo by id
exports.getPhoto = async (req, res) => {
    const photo = await Photo.findById(req.params.id);
    res.render('photo', {
      photo,
    });
  };

  // create photo
exports.createPhoto = async (req, res) => {
    await Photo.create(req.body)
    res.redirect('/')
  const uploadDir = 'public/uploads';
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
    let uploadeImage = req.files.image;
    let uploadPath = __dirname + '/../public/uploads/' + uploadeImage.name;
  
    uploadeImage.mv(uploadPath, async () => {
      await Photo.create({
        ...req.body,
        image: '/uploads/' + uploadeImage.name,
      });
      res.redirect('/');
    });
};

// update photo
exports.updatePhoto = async (req, res) => {
    const photo = await Photo.findOne({_id: req.params.id})
    photo.title = req.body.title
    photo.description = req.body.description
    photo.save()
    res.redirect(`/photos/${req.params.id}`)
};

// delete photo

exports.deletePhoto  = async (req, res) => {
    const photo = await Photo.findByIdAndRemove(req.params.id)
    fs.unlinkSync(__dirname + `/../public/${photo.image}`)
    res.redirect('/')
} ;
