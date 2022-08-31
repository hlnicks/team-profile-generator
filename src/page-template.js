function createCard (employeeList) {
    let cardHtml = ""
    for (var i =0; i < employeeList.length; i++) {
        let employee = employeeList[i];
        let position = employee.getPosition();
        if (position === "Engineer") {
            cardHtml += `
            <div class="card border-dark" style="width: 18rem;">
                <div class="card-header text-center" style="background-color:">
                    <h3 class="card-title">${employee.name}</h3>
                    <h5 class="card-subtitle">Engineer</h5>
                    <i class="h1 lh-lg bi bi-terminal-fill"></i></p>
                </div>
                <div class="card-body">
                    <p>ID: ${employee.id} </p>
                    <p>Email: <a href="mailto:${employee.email}" class="text-decoration-none" target="_blank">${employee.email}</a></p>
                    <p>Github: <a href="https://github.com/${employee.username}" target="_blank">${employee.username}</a></p>
                </div>
            </div>`
        } else if (position === "Intern") {
            cardHtml += `
            <div class="card border-dark" style="width: 18rem;">
                <div class="card-header text-center" style="background-color:">
                    <h3 class="card-title">${employee.name}</h3>
                    <h5 class="card-subtitle">Intern</h5>
                    <i class="h1 lh-lg bi bi-mortarboard-fill"></i>
                </div>
                <div class="card-body">
                <p>ID: ${employee.id} </p>
                <p>Email: <a href="mailto:${employee.email}" class="text-decoration-none" target="_blank">${employee.email}</a></p>
                <p>School: ${employee.school}</p>
                </div>
            </div>`
        } else {
            cardHtml += `
            <div class="card border-dark" style="width: 18rem;">
                <div class="card-header text-center" style="background-color:">
                    <h3 class="card-title">${employee.name}</h3>
                    <h5 class="card-subtitle">Manager</h5>
                    <i class="h1 lh-lg bi bi-clipboard2-check-fill"></i></p>
                </div>
                <div class="card-body">
                    <p>ID: ${employee.id} </p>
                    <p>Email: <a href="mailto:${employee.email}" class="text-decoration-none" target="_blank">${employee.email}</a></p>
                    <p>Office Number: ${employee.office}</p>
                </div>
            </div>`
        };
    }
    let pageHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap" rel="stylesheet">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="text-center">
            My Team
        </header>
        <main class="d-flex justify-content-around">
            ${cardHtml}
        </main>
    </body>
    </html>`
    
    return pageHTML;
};

module.exports = createCard;