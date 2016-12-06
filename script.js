window.onload = function(){

// / random pics 
 
var chinese_yes=0
var chinese_no=0
var mexican_yes=0
var italian_yes=0
var korean_yes=0


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


 // restaurent reults
  var chinese_restaurants = ["#thetang","#pekingduckhouse","#malaproject","#cafechina","#nomwah"]

 $(".chinese_no").on("click", function(){
     chinese_no++
  if(chinese_no>=3){
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
    }

  })

  var italian_restaurants = ["#lapecorabianca","#barpitti","#lilia"]

  $(".final_italian").on("click", function(){
    //  var numb = Math.random(0,itlain_restaurants.length)
    // $(this).attr("href", chinese_restaurants[numb]) 

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

  })

    var mexican_restaurants = ["#fonda","#tacombi","#ottos"]

  $(".final_mexican").on("click", function(){
    //  var numb = Math.random(0,mexican_restaurants.length)
    // $(this).attr("href", mexican_restaurants[numb]) 

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

  })




}

