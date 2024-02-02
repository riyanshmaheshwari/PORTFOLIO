const api_url="https://leetcode-stats-api.herokuapp.com/riyanshmaheshwari"

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

getapi(api_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data){
   let tab=`
   <div>
   ${data.totalHard}
   </div>

   `

document.getElementById("employees").innerHTML = tab;
}