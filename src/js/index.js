let character = document.querySelectorAll('.mutant');
let mutants = document.querySelectorAll(".character");
let infoMutant = document.querySelectorAll(".info-mutant");

function resetMutant(){
    mutants.forEach(mutant =>{
        mutant.classList.remove('show');
        mutant.classList.add("hidden");
    })

    infoMutant.forEach(info =>{
        info.classList.remove('show');
        info.classList.add('hidden');
    })

    character.forEach(selected =>{
        selected.classList.remove('selected');
    })
}

character[0].addEventListener("click", ()=>{
    const characterJeanGrey = document.querySelector(".character-jean-grey");
    const infoJeanGrey = document.querySelector(".info-jean-grey");

    resetMutant();
   
    characterJeanGrey.classList.remove('hidden');
    characterJeanGrey.classList.add('show');

    infoJeanGrey.classList.remove('hidden');
    infoJeanGrey.classList.add('show');

    character[0].classList.add('selected');
});

character[1].addEventListener("click", ()=>{
    const characterCiclope = document.querySelector(".character-ciclope");
    const infoCiclope = document.querySelector(".info-ciclope");

    resetMutant();

    characterCiclope.classList.remove('hidden');
    characterCiclope.classList.add('show');

    infoCiclope.classList.remove('hidden');
    infoCiclope.classList.add('show');

    character[1].classList.add('selected');
});

character[2].addEventListener("click", ()=>{
    const characterLinceNegra = document.querySelector(".character-lince-negra");
    const infoLinceNegra = document.querySelector(".info-lince-negra");

    resetMutant();

    characterLinceNegra.classList.remove('hidden');
    characterLinceNegra.classList.add('show');

    infoLinceNegra.classList.remove('hidden');
    infoLinceNegra.classList.add('show');

    character[2].classList.add('selected');
});

character[3].addEventListener("click", ()=>{
    const characterTempestade = document.querySelector(".character-tempestade");
    const infoTempestade = document.querySelector(".info-tempestade");

    resetMutant();

    characterTempestade.classList.remove('hidden');
    characterTempestade.classList.add('show');

    infoTempestade.classList.remove('hidden');
    infoTempestade.classList.add('show');

    character[3].classList.add('selected');
});

character[4].addEventListener("click", ()=>{
    const characterWolverine = document.querySelector(".character-wolverine");
    const infoWolverine = document.querySelector(".info-wolverine");

    resetMutant();

    characterWolverine.classList.remove('hidden');
    characterWolverine.classList.add('show');

    infoWolverine.classList.remove('hidden');
    infoWolverine.classList.add('show');

    character[4].classList.add('selected');
});

character[5].addEventListener("click", ()=>{
    const characterNoturno = document.querySelector(".character-noturno");
    const infoNoturno = document.querySelector(".info-noturno");

    resetMutant();

    characterNoturno.classList.remove('hidden');
    characterNoturno.classList.add('show');

    infoNoturno.classList.remove('hidden');
    infoNoturno.classList.add('show');

    character[5].classList.add('selected');
});

character[6].addEventListener("click", ()=>{
    const characterMagneto = document.querySelector(".character-magneto");
    const infoMagneto = document.querySelector(".info-magneto");

    resetMutant();

    characterMagneto.classList.remove('hidden');
    characterMagneto.classList.add('show');

    infoMagneto.classList.remove('hidden');
    infoMagneto.classList.add('show');

    character[6].classList.add('selected');
});

character[7].addEventListener("click", ()=>{
    const characterVampira = document.querySelector(".character-vampira");
    const infoVampira = document.querySelector(".info-vampira");

    resetMutant();

    characterVampira.classList.remove('hidden');
    characterVampira.classList.add('show');

    infoVampira.classList.remove('hidden');
    infoVampira.classList.add('show');

    character[7].classList.add('selected');
});