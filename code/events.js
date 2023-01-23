// Checking if a nine am event exists in local storage, if it does, display in text area

var nineAm = (localStorage.getItem("nineAm")); 

if(nineAm != 0) {
    nineAmTextarea.text(nineAm);
}