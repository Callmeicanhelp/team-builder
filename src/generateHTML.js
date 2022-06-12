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
        <h2 class="title">My Team</h2>

            <div class="team">
                <div class="members">
                ${JSON.stringify(data)}
                </div>
            </div>
        </body>
    </html>
    `
}

module.exports = generateHTML;