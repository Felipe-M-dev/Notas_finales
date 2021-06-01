/* Input student name and grade */
let student__name = prompt('Nombre', 'Felipe Martinez');
let grade = prompt(`Carrera`, `${student__name}, indique su carrera`);

/* Input course and scores */
let course__1 = prompt('Ingrese el primer ramo\nEj: HTML', 'Ramo 1');
let course__1__score1 = prompt(`Primera nota en ${course__1}\nEj: 7.0`, '0');
let course__1__score2 = prompt(`Segunda nota en ${course__1}\nEj: 7.0`, '0');
let course__1__score3 = prompt(`Tercera nota en ${course__1}\nEj: 7.0`, '0');
let course__2 = prompt('Ahora ingrese el segundo ramo\nEj: CSS', 'Ramo 2');
let course__2__score1 = prompt(`Primera nota en ${course__2}\nEj: 7.0`, '0');
let course__2__score2 = prompt(`Segunda nota en ${course__2}\nEj: 7.0`, '0');
let course__2__score3 = prompt(`Tercera nota en ${course__2}\nEj: 7.0`, '0');
let course__3 = prompt('Finalmente, ingrese el tercer ramo\nEj: JavaScript', 'Ramo 3');
let course__3__score1 = prompt(`Primera nota en ${course__3}\nEj: 7.0`, '0');
let course__3__score2 = prompt(`Segunda nota en ${course__3}\nEj: 7.0`, '0');
let approve__score = prompt('¿Cuál es su nota mínima de aprobación?\nEj: 4', 'Nota de aprobación');

/* trasform string to int type */
course__1__score1 = parseInt(course__1__score1);
course__1__score2 = parseInt(course__1__score2);
course__1__score3 = parseInt(course__1__score3);
course__2__score1 = parseInt(course__2__score1);
course__2__score2 = parseInt(course__2__score2);
course__2__score3 = parseInt(course__2__score3);
course__3__score1 = parseInt(course__3__score1);
course__3__score2 = parseInt(course__3__score2);

/* Course 1 average and rounded */
let course_1_avr = (course__1__score1 + course__1__score2 + course__1__score3) / 3;
course_1_avr = Math.round(course_1_avr * 10) / 10;

/* Course 2 average and rounded */
let course_2_avr = (course__2__score1 + course__2__score2 + course__2__score3) / 3;
course_2_avr = Math.round(course_2_avr * 10) / 10;

/* New step to user */
alert(`Sabemos que no tiene la tercera nota en ${course__3}\nNo se preocupe, nosotros le ayudaremos...`);

/* Web Page */

/* Header opening */
document.write(`
    <header class="container">
    <p class="fw-bold d-inline-block">Notas finales</p><img src="assets/img/logo.png" alt="Logo Desafio Latam">
`);

/* Score table */
document.write(`
    <div class="col-12 col-md-6">
        <table class="table table-borderless">
            <tbody>
                <tr>
                    <th scope="row">Nombre: </th>
                    <td>${student__name}</td>
                </tr>
                <tr>
                    <th scope="row">Carrera: </th>
                    <td>${grade}</td>
                </tr>
            </body>
        </table>
    </div>
`);

/* Header closed */
document.write(`
    </header>
`);

/* Courses and scores table */

document.write(`
    <div class="container">
        <table class="table">
            <thead>
                <tr class="table-dark">
                    <th scope="col">Ramo</th>
                    <th scope="col">Nota 1</th>
                    <th scope="col">Nota 2</th>
                    <th scope="col">Nota 3</th>
                    <th scope="col">Promedio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">${course__1}</th>
                    <td>${course__1__score1}</td>
                    <td>${course__1__score2}</td>
                    <td>${course__1__score3}</td>
                    <td>${course_1_avr}</td>
                </tr>
                <tr>
                    <th scope="row">${course__2}</th>
                    <td>${course__2__score1}</td>
                    <td>${course__2__score2}</td>
                    <td>${course__2__score3}</td>
                    <td>${course_2_avr}</td>
                </tr>
                <tr>
                    <th scope="row">${course__3}</th>
                    <td>${course__3__score1}</td>
                    <td>${course__3__score2}</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
`);

/* Score recommendeed */

/* Open container with score recommended */
document.write('<div class="container">');

/* Score required to aprove */
let required__score = (approve__score * 3) - course__3__score1 - course__3__score2
if (required__score < 1) {
    required__score = 1
}

/* Message with score required to aprove */
document.write(`<p>Para aprobar el ramo ${course__3} con nota 4, necesitas obtener al menos un ${required__score} en la nota 3.</p>`);

/* Close container with score recommended */
document.write('</div>');