
function generateHTML(data) {
    return `

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>Team Profile</title>
        </head>

        <body>
            <h2 class="title">
                My Team
            </h2>
            
            <div>
                <div class="card">
                    <div class="container">
                        <h4>
                            Manager                
                            ${JSON.stringify(data[0].name)}
                        </h4>
                        <ul>                
                            <li>ID: ${JSON.stringify(data[0].id)}</li>
                            <li>Email:<a href="#">${JSON.stringify(data[0].email)}</a></li>
                            <li>Office Number:${JSON.stringify(data[0].officeNumber)}</li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <h4>
                            Engineer            
                            ${JSON.stringify(data[1].name)}
                        </h4>
                        <ul>                
                            <li>ID: ${JSON.stringify(data[1].id)}</li>
                            <li>Email:<a href="#">${JSON.stringify(data[1].email)}</a></li>
                            <li>GitHub:<a href="#">${JSON.stringify(data[1].github)}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <h4>
                            Intern   
                            ${JSON.stringify(data[2].name)}
                        </h4>
                        <ul>                
                            <li>ID: ${JSON.stringify(data[2].id)}</li>
                            <li>Email:<a href="#">${JSON.stringify(data[2].email)}</a></li>
                            <li>School:${JSON.stringify(data[2].school)}</li>
                        </ul>
                    </div>
                </div>
        </body>
    </html>
    `
}

module.exports = generateHTML;