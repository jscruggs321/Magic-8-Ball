const points = [
    "Certainly",
    "Without a doubt",
    "For sure!",
    "Most definitely",
    "Better believe it",
    "It will be so",
    "From what I can see, yes",
    "Most likely",
    "Yes",
    "It's looking bright",
    "The signs are showing yes",
    "Reply Hazy, Try Again",
    "Maybe",
    "It's better if I not tell you now",
    "Ask again at another time",
    "Ask in a different way",
    "Can't predict now",
    "Wouldn't count on it",
    "Not looking so good",
    "My sources are telling me no",
    "Very doubtful",
    "Not at the moment",
    "No"
];

document.getElementById("response").innerHTML=points;

function myFunction(){
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=points[0];
    document.getElementById("response").style.fontSize="18px";
    setTimeout(timeUp, 4000);

    function timeUp(){
        document.getElementById("response").innerHTML="8";
        document.getElementById("response").style.fontSize="120px";
        document.getElementById("clear").value="";
    }
}