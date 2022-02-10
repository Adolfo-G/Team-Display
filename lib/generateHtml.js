
function altAnswer(github,school,number){
    if(github){return `Github: ${github}`}
    else if(school){return `School: ${school}`}
    else if(number){return `Office Number: ${number}`}
}
function htmlInsert(data){
    let addedHtml=""
    for(let i = 0; i<data.length;i++){
        addedHtml+=`
                    <div class="cell">
                        <div class="card">
                            <div class="card-divider">
                                <h2>${data[i].name}</h2>
                                <h3>${data[i].position}</h3>
                            </div>
                            <div class="card-section">
                                <table class="unstriped">
                                    <tbody>
                                        <tr>
                                            <td>${"ID: "+data[i].id}</td>
                                        </tr>
                                        <tr>
                                            <td>Email: <a href="mailto:${data[i].email}">${data[i].email}</a></td>
                                        </tr>
                                        <tr>
                                            <td>${altAnswer(data[i].github, data[i].school,data[i].officeNumber)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>`           
    }
    return addedHtml
}

const generateHtml = (data) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous">
</head>
<body>
<style>
    body{
        border: unset;
        padding: unset;
        margin: unset;
    }
    h1{
        font-size: 200%;
        color: white;
        background-color: rgb(232, 71, 86);
        text-align: center;
        border:unset;
        margin: unset;
        padding:2.5%;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
    }
    h2,
    h3{
        font-size: unset;
        font-weight: unset;
        font-family: unset;
    }
    .content-container{
        padding: 3% 18% 0% 18%;
    }
    div .card-divider{
        display: block;
        color: white;
        background-color: rgb(2, 119, 250);
        font-size: 150%;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
    }

    div .card-section{
        background-color:rgb(246,247,249) ;
    }

    div .card{
        border-radius: 10px;
        box-shadow: 5px 5px 5px gray;
        border:unset;
    }
</style>
    <h1>My Team</h1>
<div class="content-container">
    <div class="grid-container">
        <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3">
            ${htmlInsert(data)}
        </div>
    </div>
</div>

  <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/js/foundation.min.js" crossorigin="anonymous"></script>
</body>
</html>
    `
}

exports.generateHtml = generateHtml;