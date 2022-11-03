const jPDinos = [`Velociraptors`, `Tyrannosaurus Rex`, `Dilophosarus`];

function seeDinos (a, ...b){
    console.log(a);
    console.log(b);
}

seeDinos(`Velociraptors`, `Tyrannosaurus Rex`, `Dilophosarus`)

const jPCharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
}
seeCharacters = (jPCharacters) => {
    console.log(jPCharacters.ellieSattler);
}

seeCharacters(jPCharacters)