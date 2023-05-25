// baska bir js dosyasindan modul seklinde fonksiyonlar alindi ve degiskene atandi
const { circleArea, circleCircumference } = require("./circle");

// degisken uzerinden fonksiyonlar cagrildi
circleArea(5);
circleCircumference(5);

/*
farklı bir yazım şekli
const circle = require("./circle");
circle.circleArea(5);
circle.circleCircumference(5)
*/