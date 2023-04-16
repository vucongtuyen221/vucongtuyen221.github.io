
var elem = document.querySelector('.nhieumon');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.motmon',
  layoutMode: 'masonry'
});
var iso = new Isotope( '.nhieumon', {
  // options
 
});
;
// imagesLoaded( document.querySelector('.nhieumon'), function( instance ) {
//     console.log('all images are loaded');
//   });
//   // selector string
//   imagesLoaded( '.nhieumon', function(){});
//   // multiple elements
//   var posts = document.querySelectorAll('.motmon');
//   imagesLoaded( posts, function() {});

const abc = document.querySelector('.tieudect a')
// alert('ac')

abc.addEventListener('click', () => {console.log(abc);
 
    dulieu = this.data('monan');
    console.log(dulieu);
    elem.isotope({filter: dulieu});
   
    return false;
});
const noidung = document.querySelector('.noidungct');
const soluongmon = ('.motmon').length;
const docao = soluongmon*120
console.log(soluongmon, docao);

noidung.addEventListener('click',()=>{
});

