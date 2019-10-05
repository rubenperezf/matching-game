var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];


function generateFaces() {
    for(var i =0; i < numberOfFaces; i++) {
        var img = document.createElement("img"); 
        img.src="smiley-face.png"
        var left = Math.random()*401;
        left = Math.floor(left);
        var top = Math.random()*401;
        top = (Math.floor(top)+100);
        img.style.left = left + "px";
        img.style.top = top + "px";
        theLeftSide.appendChild(img);
    }
        //right part
        var leftSideImages;
        leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastElementChild);
        theRightSide.appendChild(leftSideImages);

        theLeftSide.lastChild.onclick=function nextLevel(event){
            event.stopPropagation();
            numberOfFaces += 5;
            generateFaces();
         };

         theBody.onclick = function gameOver() {
            alert("Game Over!");
            theBody.onclick = null;
            theLeftSide.lastChild.onclick = null;
            while (theLeftSide.firstChild) {
                theLeftSide.removeChild(theLeftSide.firstChild);
              }
            while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild);
              }
              numberOfFaces = 5;
              generateFaces();
         }; 
         
        
}
