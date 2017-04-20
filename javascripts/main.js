var myTenImagesArray = [
{
  image: "http://www.sequimproperty.com/wp-content/uploads/2014/04/exterior-artdeco.jpg",
},
{
  image: "https://cdn.houseplans.com/product/su4kht77gnanrknqfdets47srg/w300x200.jpg",
},
{
  image: "https://www.walldevil.com/wallpapers/w05/thumb/rivers-trees-fallingwater-architecture-frank-lloyd-wright.jpg",
},
{
  image: "http://doclibrary.com/MSC174/CMM/twilight-tours-sm.jpg",
},
{
  image: "https://s-media-cache-ak0.pinimg.com/originals/2b/3e/2a/2b3e2a76333dd64132b6408a50db3f7f.jpg",
},
{
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Exterior_-_Rear.jpg/300px-Exterior_-_Rear.jpg",
},
{
  image: "http://i281.photobucket.com/albums/kk218/slimssims/m_P_1304568107863_IMG_8062.jpg",
},
{
  image: "http://fthmb.tqn.com/AQrJYrVXC3RTpIRvKyN8_pRh0NA=/300x0/filters:no_upscale()/about/richards-1916-147725780-56aad2453df78cf772b48dfa.jpg",
},
{
  image: "https://fthmb.tqn.com/EGE0ZKQOf5BeTjbC3_E7hfHPZSs=/300x200/filters:no_upscale()/about/flw-zimmerman-front5280001-lg-56a02f3d5f9b58eba4af48a5.JPG",
},
{
  image: "http://media.chicagomag.com//images/cache/cache_e/cache_5/cache_1/20192-DE20101103-02-584b415e.jpeg?ver=1482369302&aspectratio=1.5",
}
];

var pictureOutput = $("#picture-container")

function showMePictures(){
	var pictureString="";
	var currentImage;

	pictureString += `<div class="row">`;
	for(var i = 0; i < myTenImagesArray.length; i++) {
		currentImage = myTenImagesArray[i];

		pictureString += `<div class="col-sm-6 col-md-3 thumbnail">`;
		pictureString += `<img src="${currentImage.image}"/>`;
		pictureString += `<p>${[i]}</p>`;
		pictureString += `</div>`;
		if ((i + 1) % 3 === 0) {
			pictureString += `</div><div class="row">`;
		}
	}
	pictureString += `</div>`;	
	pictureOutput.append(pictureString);
}

showMePictures();

