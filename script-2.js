window.onload = function(){


var chinese_yes=0
var chinese_no=0
var italian_yes=0
var italian_no=0
var mexican_yes=0
var mexican_no=0
var american_yes=0
var american_no=0
var korean_yes=0
var korean_no=0
var japanese_yes=0
var japanese_no=0
var etc_yes=0
var etc_no=0


// / random pics 
 // chinese
 var chinese= ["#chinese","#chinese2","#chinese3"
 ,"#chinese4","#chinese5","#chinese6","#chinese7","#chinese8","#chinese9","#chinese10"]

  $(".one").on("click", function(){
    console.log("random")
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 

     var numb = Math.random();
     if (numb < 0.1) {
      //  1 divde by number of restaurents 
        $(this).attr("href", chinese[0]);
      } else if(numb < 0.2){
        $(this).attr("href", chinese[1]);
      } else if(numb < 0.3){
        $(this).attr("href", chinese[2]);
      } else if(numb < 0.4){
        $(this).attr("href", chinese[3]);
        } else if(numb < 0.5){
        $(this).attr("href", chinese[4]);
      } else if(numb < 0.6){
        $(this).attr("href", chinese[5]);
        } else if(numb < 0.7){
        $(this).attr("href", chinese[6]);
      } else if(numb < 0.8){
        $(this).attr("href", chinese[7]);
      } else if(numb < 0.9){
        $(this).attr("href", chinese[8]);
      } else {

         $(this).attr("href", chinese[9]);
      } 

  })
// italian
 var italian= ["#italian","#italian2","#italian3","#italian4","#italian5",
 "#italian6","#italian7","#italian8","#italian9","#italian10"]

  $(".two").on("click", function(){
    console.log("random")
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 

     var numb = Math.random();
     if (numb < 0.1) {
      //  1 divde by number of restaurents 
        $(this).attr("href", italian[0]);
      } else if(numb < 0.2){
        $(this).attr("href", italian[1]);
      } else if(numb < 0.3){
        $(this).attr("href", italian[2]);
      } else if(numb < 0.4){
        $(this).attr("href", italian[3]);
        } else if(numb < 0.5){
        $(this).attr("href", italian[4]);
      } else if(numb < 0.6){
        $(this).attr("href", italian[5]);
        } else if(numb < 0.7){
        $(this).attr("href", italian[6]);
      } else if(numb < 0.8){
        $(this).attr("href", italian[7]);
      } else if(numb < 0.9){
        $(this).attr("href", italian[8]);
      } else {

         $(this).attr("href", italian[9]);
      } 

  })

  //mexican
  var mexican= ["#mexican","#mexican2","#mexican3","#mexican4","#mexican5","#mexican6","#mexican7",
  "#mexican8","#mexican9","#mexican10"]

  $(".three").on("click", function(){
    console.log("random")
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 

     var numb = Math.random();
     if (numb < 0.1) {
      //  1 divde by number of restaurents 
        $(this).attr("href", mexican[0]);
      } else if(numb < 0.2){
        $(this).attr("href", mexican[1]);
      } else if(numb < 0.3){
        $(this).attr("href", mexican[2]);
      } else if(numb < 0.4){
        $(this).attr("href", mexican[3]);
        } else if(numb < 0.5){
        $(this).attr("href", mexican[4]);
      } else if(numb < 0.6){
        $(this).attr("href", mexican[5]);
        } else if(numb < 0.7){
        $(this).attr("href", mexican[6]);
      } else if(numb < 0.8){
        $(this).attr("href", mexican[7]);
      } else if(numb < 0.9){
        $(this).attr("href", mexican[8]);
      } else {

         $(this).attr("href", mexican[9]);
      } 

  })
 //  //american
   var american= ["#american","#american2","#american3","#american4","#american5","#american6","#american7",
  "#american8","#american9","#american10"]

  $(".four").on("click", function(){
    console.log("random")
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 

     var numb = Math.random();
     if (numb < 0.1) {
      //  1 divde by number of restaurents 
        $(this).attr("href", american[0]);
      } else if(numb < 0.2){
        $(this).attr("href", american[1]);
      } else if(numb < 0.3){
        $(this).attr("href", american[2]);
      } else if(numb < 0.4){
        $(this).attr("href", american[3]);
        } else if(numb < 0.5){
        $(this).attr("href", american[4]);
      } else if(numb < 0.6){
        $(this).attr("href", american[5]);
        } else if(numb < 0.7){
        $(this).attr("href", american[6]);
      } else if(numb < 0.8){
        $(this).attr("href", american[7]);
      } else if(numb < 0.9){
        $(this).attr("href", american[8]);
      } else {

         $(this).attr("href", american[9]);
      } 

  })

 // korean
  var korean= ["#korean","#korean2","#korean3","#korean4","#korean5","#korean6","#korean7",
  "#korean8","#korean9","#korean10"]

  $(".five").on("click", function(){
    console.log("random")
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 

     var numb = Math.random();
     if (numb < 0.1) {
      //  1 divde by number of restaurents 
        $(this).attr("href", korean[0]);
      } else if(numb < 0.2){
        $(this).attr("href", korean[1]);
      } else if(numb < 0.3){
        $(this).attr("href", korean[2]);
      } else if(numb < 0.4){
        $(this).attr("href", korean[3]);
        } else if(numb < 0.5){
        $(this).attr("href", korean[4]);
      } else if(numb < 0.6){
        $(this).attr("href", korean[5]);
        } else if(numb < 0.7){
        $(this).attr("href", korean[6]);
      } else if(numb < 0.8){
        $(this).attr("href", korean[7]);
      } else if(numb < 0.9){
        $(this).attr("href", korean[8]);
      } else {

         $(this).attr("href", korean[9]);
      } 

  })
 //  //japanese
 var japanese= ["#japanese","#japanese2","#japanese3","#japanese4","#japanese5",
 "#japanese6","#japanese7","#japanese8","#japanese9","#japanese10"]

  $(".six").on("click", function(){
    console.log("random")
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 

     var numb = Math.random();
     if (numb < 0.1) {
      //  1 divde by number of restaurents 
        $(this).attr("href", japanese[0]);
      } else if(numb < 0.2){
        $(this).attr("href", japanese[1]);
      } else if(numb < 0.3){
        $(this).attr("href", japanese[2]);
      } else if(numb < 0.4){
        $(this).attr("href", japanese[3]);
        } else if(numb < 0.5){
        $(this).attr("href", japanese[4]);
      } else if(numb < 0.6){
        $(this).attr("href", japanese[5]);
        } else if(numb < 0.7){
        $(this).attr("href", japanese[6]);
      } else if(numb < 0.8){
        $(this).attr("href", japanese[7]);
      } else if(numb < 0.9){
        $(this).attr("href", japanese[8]);
      } else {

         $(this).attr("href", japanese[9]);
      } 

  })
 //  //etc
var etc= ["#etc","#etc2","#etc3","#etc4","#etc5","#etc6","#etc",
  "#etc8","#etc9","#etc10"]

  $(".seven").on("click", function(){
    console.log("random")
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 

     var numb = Math.random();
     if (numb < 0.1) {
      //  1 divde by number of restaurents 
        $(this).attr("href", etc[0]);
      } else if(numb < 0.2){
        $(this).attr("href", etc[1]);
      } else if(numb < 0.3){
        $(this).attr("href", etc[2]);
      } else if(numb < 0.4){
        $(this).attr("href", etc[3]);
        } else if(numb < 0.5){
        $(this).attr("href", etc[4]);
      } else if(numb < 0.6){
        $(this).attr("href", etc[5]);
        } else if(numb < 0.7){
        $(this).attr("href", etc[6]);
      } else if(numb < 0.8){
        $(this).attr("href", etc[7]);
      } else if(numb < 0.9){
        $(this).attr("href", etc[8]);
      } else {

         $(this).attr("href", etc[9]);
      } 

  })

 // restaurent reults

 // chinese
  var chinese_restaurants = ["#thetang","#pekingduckhouse","#malaproject","#cafechina","#nomwah"]

 $(".chinese_no").on("click", function(){
     chinese_no++
  if(chinese_no>=5){
    $(this).attr("href", "#home");
  }
 })
  $(".chinese_yes").on("click", function(){
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 
  chinese_yes++
  if(chinese_yes>=3){

     var numb = Math.random();
     if (numb < 0.2) {
      //  1 divde by number of restaurents 
        $(this).attr("href", chinese_restaurants[0]);
      } else if(numb < 0.4){
        $(this).attr("href", chinese_restaurants[1]);
      } else if(numb < 0.6){
        $(this).attr("href", chinese_restaurants[2]);
      } else if(numb < 0.8){
        $(this).attr("href", chinese_restaurants[3]);
      } else {

         $(this).attr("href", chinese_restaurants[4]);
      } 
      chinese_yes=0;
    }

  })
// italian
  var italian_restaurants = ["#lapecorabianca","#barpitti","#lilia"]

    $(".italian_no").on("click", function(){
     italian_no++
  if(italian_no>=5){
    $(this).attr("href", "#home");
  }
 })
  $(".italian_yes").on("click", function(){
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 
  italian_yes++
  if(italian_yes>=3){

     var numb = Math.random();
     if (numb < 0.33) {
      //  1 divde by number of restaurents 
        $(this).attr("href", italian_restaurants[0]);
      } else if(numb < 0.88){
        $(this).attr("href", italian_restaurants[1]);
      // } else if(numb < 0.6){
      //   $(this).attr("href", chinese_restaurants[2]);
      // } else if(numb < 0.8){
      //   $(this).attr("href", chinese_restaurants[3]);
      } else {

         $(this).attr("href", italian_restaurants[2]);
      } 
      italian_yes=0;
    }
})

 // mexican
    var mexican_restaurants = ["#tacombi","#fonda","#ottos"]

    $(".mexican_no").on("click", function(){
     mexican_no++
  if(mexican_no>=5){
    $(this).attr("href", "#home");
  }
 })
  $(".mexican_yes").on("click", function(){
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 
  mexican_yes++
  if(mexican_yes>=3){

     var numb = Math.random();
     if (numb < 0.33) {
      //  1 divde by number of restaurents 
        $(this).attr("href", mexican_restaurants[0]);
      } else if(numb < 0.88){
        $(this).attr("href", mexican_restaurants[1]);
      // } else if(numb < 0.6){
      //   $(this).attr("href", chinese_restaurants[2]);
      // } else if(numb < 0.8){
      //   $(this).attr("href", chinese_restaurants[3]);
      } else {

         $(this).attr("href", mexican_restaurants[2]);
      } 
      mexican_yes=0;
    }
})

 // // american
      var american_restaurants = ["#upland","#wildair","#peterlugers"]

    $(".american_no").on("click", function(){
     american_no++
  if(american_no>=5){
    $(this).attr("href", "#home");
  }
 })
  $(".american_yes").on("click", function(){
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 
  american_yes++
  if(american_yes>=3){

     var numb = Math.random();
     if (numb < 0.33) {
      //  1 divde by number of restaurents 
        $(this).attr("href", american_restaurants[0]);
      } else if(numb < 0.88){
        $(this).attr("href", american_restaurants[1]);
      // } else if(numb < 0.6){
      //   $(this).attr("href", chinese_restaurants[2]);
      // } else if(numb < 0.8){
      //   $(this).attr("href", chinese_restaurants[3]);
      } else {

         $(this).attr("href", american_restaurants[2]);
      } 
      american_yes=0;
    }
})

 // // korean
      var korean_restaurants = ["#misskorea","#oiji","#osamil"]

    $(".korean_no").on("click", function(){
     korean_no++
  if(korean_no>=5){
    $(this).attr("href", "#home");
  }
 })
  $(".korean_yes").on("click", function(){
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 
  korean_yes++
  if(korean_yes>=3){
    
     var numb = Math.random();
     if (numb < 0.33) {
      //  1 divde by number of restaurents 
        $(this).attr("href", korean_restaurants[0]);
      } else if(numb < 0.88){
        $(this).attr("href", korean_restaurants[1]);
      // } else if(numb < 0.6){
      //   $(this).attr("href", chinese_restaurants[2]);
      // } else if(numb < 0.8){
      //   $(this).attr("href", chinese_restaurants[3]);
      } else {

         $(this).attr("href", korean_restaurants[2]);

      } 
      korean_yes=0;
    }
})

 // //japanese
   var japanese_restaurants = ["#sakagura","#aburia","#kosaka","#sobaya","#ootoya"]

    $(".japanese_no").on("click", function(){
     japanese_no++
  if(japanese_no>=5){
    $(this).attr("href", "#home");
  }
 })
  $(".japanese_yes").on("click", function(){
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 
  japanese_yes++
  if(japanese_yes>=3){

     var numb = Math.random();
     if (numb < 0.2) {
      //  1 divde by number of restaurents 
        $(this).attr("href", japanese_restaurants[0]);
      } else if(numb < 0.4){
        $(this).attr("href", japanese_restaurants[1]);
      } else if(numb < 0.6){
        $(this).attr("href", japanese_restaurants[2]);
      } else if(numb < 0.8){
        $(this).attr("href", japanese_restaurants[3]);
      } else {

         $(this).attr("href", japanese_restaurants[4]);
      } 
      japanese_yes=0
    }
})

 // //etc
 var etc_restaurants = ["#thaivilla","#laut","#katz","#babuji","#maharlika"]

    $(".etc_no").on("click", function(){
     etc_no++
  if(etc_no>=5){
    $(this).attr("href", "#home");
  }
 })
  $(".etc_yes").on("click", function(){
    //  var numb = Math.random(0,chinese_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 
  etc_yes++
  if(etc_yes>=3){

     var numb = Math.random();
     if (numb < 0.2) {
      //  1 divde by number of restaurents 
        $(this).attr("href", etc_restaurants[0]);
      } else if(numb < 0.4){
        $(this).attr("href", etc_restaurants[1]);
      } else if(numb < 0.6){
        $(this).attr("href", etc_restaurants[2]);
      } else if(numb < 0.8){
        $(this).attr("href", etc_restaurants[3]);
      } else {

         $(this).attr("href", etc_restaurants[4]);
      } 
      etc_yes=0
    }
})



}

