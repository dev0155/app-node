let pdfMake = require('pdfmake/build/pdfmake.js');
let pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// var dd = [
//   content:
// ];

// module.exports = pdfMake.createPdf(dd);
