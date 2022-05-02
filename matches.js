// write js code here corresponding to matches.html

var favo= JSON.parse(localStorage.getItem("favourites")) || []

var match=JSON.parse(localStorage.getItem("schedule"))
displaydata(match)
function displaydata(match){
    match.forEach(function(elem){
        var tr=document.createElement("tr");

        var td1=document.createElement("td")
        td1.innerText=elem.number;

        var td2=document.createElement("td")
        td2.innerText=elem.teamfirst;

        var td3=document.createElement("td")
    td3.innerText=elem.teamsecond;
        var td4=document.createElement("td")
    td4.innerText=elem.date;
        var td5=document.createElement("td")
   td5.innerText=elem.venue;
        var td6=document.createElement("td")
    td6.innerText="favourite";
    td6.style.color="green";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
        checkfav(elem)
    })
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr);


    })
}

function checkfav(elem){
favo.push(elem);
localStorage.setItem("favourites", JSON.stringify(favo))
}
document.querySelector("#filterVenue").addEventListener("change",filterdata)

function filterdata(){
    var filt = document.querySelector("#filterVenue").value;
    if(filt!=null){
        match.filter(function(ele){
            return (ele.venue==filt);
        })
    }
    
    
}