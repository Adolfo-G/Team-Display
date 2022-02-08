
////////////////////////////////////////////////////////////////////
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
                                            <td>${"Email: "+data[i].email}</td>
                                        </tr>
                                        <tr>
                                            <td>${("Github: "+data[i].github) || ("School: "+data[i].school) || ("Number: "+data[i].officeNumber)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>`
                    
    }
    return addedHtml
}
////////////////////////////////////////////////////////////////////////////



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
    <link rel="stylesheet" href="style.css">
</head>
<body>
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