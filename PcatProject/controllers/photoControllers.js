const Photo = require('../models/Photo');
const fs = require('fs');


// get all photos
exports.getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort({dateCreated:-1});
    //const photos = await Photo.find({}).sort('-dateCreated');
    res.render('index', {
      photos: photos,
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
}

// delete photo
exports.deletePhoto = async (req, res) => {
    const photo = await Photo.findOne({_id: req.params.id})
    let deletedImage = __dirname + '/../public' + photo.image; // to delete the image from the public folder
    fs.unlinkSync(deletedImage);
    await Photo.findByIdAndRemove(req.params.id);
    res.redirect('/')
}
