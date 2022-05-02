// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", myfunction)
var matchdata =JSON.parse(localStorage.getItem("schedule")) || [];
function myfunction(){
    event.preventDefault()
    var data={
        number:document.querySelector("#matchNum").value,
        teamfirst:document.querySelector("#teamA").value,
        teamsecond:document.querySelector("#teamB").value,
        date:document.querySelector("#date").value,
        venue:document.querySelector("#venue").value,
    }
    matchdata.push(data);
    console.log(matchdata)
    localStorage.setItem("schedule",JSON.stringify(matchdata));

}