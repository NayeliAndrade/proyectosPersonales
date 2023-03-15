const tiktokers = [
    {
        nombre: 'Luis Angel',
        estrellas: 10,
        tipo: '[Frio/ADA]',
        info: 'Este monstruo de angular, se alimenta de JavaScript, su debilidad son los corridos tumbados',
        atk: 1200,
        def: 900,
        img: 'url(img/LUIS.jpeg)',

    },
    {
        nombre: 'Daniel',
        estrellas: 10,
        tipo: '[Bestia Divina / Efecto]',
        info: 'Alias Dev Caress no puede ser invocado de modo especial. Requiere 3 sacrificios de desarrolladores, su debilidad es PHP',
        atk: 3200,
        def: 200,
        img: 'url(img/CARESS.jpeg)',

    },
    {
        nombre: "KaoLo",
        estrellas: 7,
        tipo: "[Especialista / Normal]",
        info: "Experta en horóscopos, habilidad sobre humana para el baile, debilidad maquetación en HTML",
        atk: 2500,
        def: 2200,
        img: 'url(img/KAO.jpeg)',

    },
    {
        nombre: 'Cesar García',
        estrellas: 1,
        tipo: '[Demonio / Efecto]',
        info: 'Alias Cesar Código Bits, habilidad experto en wordpress y en wix, debilidad la chancla, este demonio es hermano de Kuriboh',
        atk: 300,
        def: 200,
        img: 'url(img/CESAR.jpeg)',

    },
    {
        nombre: 'Gera Schekaiban',
        estrellas: 5,
        tipo: '[Guerrero/Fusion]',
        info: 'Poder especial "Yo soy tu amigo fiel de la programación" aumenta el poder de tus otros programadores en el campo de batalla, debilidad Andy',
        atk: 1800,
        def: 1200,
        img: 'url(img/GERARDO.jpeg)',

    },
    {
        nombre: 'Carlita M.F. Román',
        estrellas: 6,
        tipo: '[Especialista / Efecto]',
        info: 'Evangelizar a otros programadores al muno de la IA, por cada programador evangelizado Carlita.py aumenta 100 ATK, debilidad por las cumbias mexicanas',
        atk: 2000,
        def: 1700,
        img: 'url(img/CARLITA.jpeg)',

    },
    {
        nombre: 'Edrissi Machorro',
        estrellas: 7,
        tipo: '[Dragon/Fusión]',
        info: 'Habilidad dormir, y hacerle broma a Cesar Código Bits, cuando está carta en juego junto con la de Cesar García, Cesar García pierde 100 ATK',
        atk: 2400,
        def: 200,
        img: 'url(img/EDRISSI.jpeg)',

    },
    {
        nombre: 'Arelis Reyes',
        estrellas: 8,
        tipo: '[dragon]',
        info: 'Alias Chica Python, habilidad dar consejos de programación y evangelizar con su fuego de dragon.py debilidad Maeva',
        atk: 3000,
        def: 2500,
        img: 'url(img/ARELIS.jpeg)',

    },
    {
        nombre: 'Francisco Jiménez',
        estrellas: 2,
        tipo: '[Lanzador de conjuros / Efecto]',
        info: 'Alias Pamsho.dev habilidad maestro en las artes místicas de JavaScript y sacar tiempo para redes sociales, stream, trabajar y estudiar pero además tener pareja, debilidad la vacuna del covid',
        atk: 500,
        def: 400,
        img: 'url(img/FRANCISCO.jpeg)',

    },
    {
        nombre: 'Toledo Floang',
        estrellas: 12,
        tipo: '[Bestía Divina/EFECTO]',
        info: 'Alias: Ingesaurio. Habilidad especial: Dañar libros de ingeniería y dar consejos de ingenieria. En cada ronda aumenta 500ATK.',
        atk: 4000,
        def: 4000,
        img: 'url(img/TOLEDO.jpeg)',

    },
    {
        nombre: 'Stefan Castillo',
        estrellas: 10,
        tipo: '[Hechicero/EFECTO]',
        info: 'Habilidad para las artes oscuras del CSS mágico. Habilidad especial: Logos con CSS. Debilidad: Usar JavaScript le quita 100 ATK',
        atk: 2200,
        def: 2000,
        img: 'url(img/STEFAN.jpeg)',

    },
    {
        nombre: "Maeva Mazadiego",
        estrellas: 12,
        tipo: "[Hechicero / Efecto]",
        info: "Alias Mae, habilidad seriedad absoluta divina, cuando se encuentra en el juego Chica Python Maeva obtiene 1000 ATK",
        atk: 3200,
        def: 3000,
        img: 'url(img/MAEVA.jpeg)',

    },
    {
        nombre: 'Jessica Azcona',
        estrellas: 9,
        tipo: '[hechicera]',
        info: 'Hablilidad magia antigua que es capaz de borrar cuentas de github, debilidad C, C++',
        atk: 1200,
        def: 900,
        img: 'url(img/JESSICA.jpeg)',

    },
    {
        nombre: 'David Corteza',
        estrellas: 12,
        tipo: '[Bestia/Divino]',
        info: 'Habilidad hacer carnitas asadas, habiliad especial titktok geniales de risa, debilidad el hermano de Kuriboh le resta la mitad de DEF y ATK',
        atk: 4000,
        def: 4000,
        img: 'url(img/DAVID.jpeg)',

    },
    {
        nombre: 'Rodo Ferro',
        estrellas: 12,
        tipo: ' [Mona China / Synchro / Effect]',
        info: 'Habilidad sobre humana para generación de monas chinas para atacar con su ejército, si en el campo de batalla se encuentra Carlita.py evangelizan el doble de rápido al mundo del IA, debilidad el hermano de Kuriboh',
        atk: 3000,
        def: 2500,
        img: 'url(img/RODO.jpeg)',

    },
    {
        nombre: 'Joss Pelcastre',
        estrellas: 8,
        tipo: '[Metal/Efect]',
        info: 'Habilidad divina de charla astral, especial hackear Facebook de tu ex, si se encuentra al hermano de Kuriboh se igualan sus ATK y DEF',
        atk: 1900,
        def: 1400,
        img: 'url(img/JOSSPELCASTRE.jpeg)',

    },
    {
        nombre: 'David Portilla',
        estrellas: 8,
        tipo: '[Mona China / Metal / Efect]',
        info: 'Alias el Frontend Mecatronico Habilidad especial jugar pokemon con el Rodo Ferro y sus monas chinas, si en el campo se encuentra a Pamsho.dev incrementa ambos su poder con esteroides a 2500 ATK y DEF',
        atk: 1900,
        def: 1900,
        img: 'url(img/DAVIDPORTILLA.jpeg)',

    },
    {
        nombre: 'MaybeMar',
        estrellas: 12,
        tipo: '[Frio/ADA]',
        info: 'MaybeMAr eres la mejor programadora del mundo 🙂 aparte estas demasiado hermosa, todo eso acampañado de una hermosa carita de angel',
        atk: 5000,
        def: 5000,
        img: 'url(img/MAYBEMAR.jpeg)',
        
    },
];

const pintar = () => {

    let carta = document.getElementsByClassName('cartas')[0];
    console.log(carta);
    for (let index = 0; index < tiktokers.length; index++) {

        const imagenes = () =>{
            for (let contarImg = 0; contarImg < tiktokers[index].estrellas; contarImg++) {
                console.log(contarImg, tiktokers[index].estrellas);
               
                let contenedorEstrella = document.createElement('div');
                contenedorEstrella.innerHTML = `<img src="img/estrella.png" class="imgEstrella" alt="estrella" class="imgEstrella"></img>`;
                let estrella = document.getElementsByClassName('estrella')[index];
                console.log(estrella);
                estrella.appendChild(contenedorEstrella);
            }
            
        }
        
        let amarillo = document.createElement('div');
        amarillo.innerHTML = `
    <div class="carta">
        <div class="amarillo">
            <div class="titulo">${tiktokers[index].nombre}</div>
            <div class="estrella"></div>
            <div class="img"></div>
            <div class="informacion">
                <div class="tipo">${tiktokers[index].tipo}</div>
                <div class="descripcion">${tiktokers[index].info}</div>
                <div class="especificaciones">${tiktokers[index].atk},${tiktokers[index].def}</div>
            </div>
        </div>
    </div>`;
        carta.appendChild(amarillo);
        imagenes();
    }

    const imgTiktokers = () => {

        for (bgi = 0; bgi < tiktokers.length; bgi++){
         let bgiTiktokers = document.getElementsByClassName('img')[bgi];
        bgiTiktokers.style.backgroundImage = tiktokers[bgi].img;   
        }
        
    }
    imgTiktokers();
}

pintar();