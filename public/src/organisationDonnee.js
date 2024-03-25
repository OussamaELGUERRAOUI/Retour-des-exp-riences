

function getIdUniversite(university, jsonData) {
    const id = [];
    const ficheUniv = jsonData.universite;
    for (let i = 0; i < ficheUniv.length; i++) {
        if (ficheUniv[i].universite === university) {
            id.push(ficheUniv[i].id_universite);
        }
    }
    return id;
}

function getFicheUniversite(university, jsonData) {
    const id = getIdUniversite(university, jsonData);
    const ficheUniv = jsonData.universite;
    const fiche = [];
    if (id.length === 0) {
        fiche.push({
            cadre: '',
            pays: '',
            ville: '',
            universite: "",
            type_sejour: '',
            stage_remunere: '',
            langue_enseignement: '',
            residence_universitaire: '',
            date_normale_rattrapage: '',
            moyenne: '',
            exigence_linguistique: '',
            affichage: true
        })
    } else {
        for (let i = 0; i < id.length; i++) {
            fiche.push(ficheUniv[id[i] - 1]);
        }
    }

    return fiche;
}


function getFicheSejour(university, jsonData) {
    const id = getIdUniversite(university, jsonData);
    const ficheSejour = jsonData.sejour;
    const fiche = [];
    if (id.length === 0) {
        fiche.push({ satis_sejour: '', affichage: true })
    } else {
        for (let i = 0; i < id.length; i++) {
            fiche.push(ficheSejour[id[i] - 1]);
        }
    }

    return fiche;
}

function getPrepationSejour(university, jsonData) {
    const id = getIdUniversite(university, jsonData);
    const fichePreparation = jsonData.preparation_sejour;
    const fiche = [];
    if (id.length === 0) {
        fiche.push({
            aides: '',
            demarches_administratives: '',
            recommendations: '',
            affichage: true
        })
    } else {
        for (let i = 0; i < id.length; i++) {
            fiche.push(fichePreparation[id[i] - 1]);
        }
    }

    return fiche;
}

function geticheArrive(university, jsonData) {
    const id = getIdUniversite(university, jsonData);
    const ficheArrive = jsonData.arrivee_universite;
    const fiche = [];
    if (id.length === 0) {
        fiche.push({
            demarches_ad_arri: '',
            acceuil_aide: '',
            difficulte: '',
            ressource_orrientation: '',
            affichage: true
        })
    } else {
        for (let i = 0; i < id.length; i++) {
            fiche.push(ficheArrive[id[i] - 1]);
        }
    }

    return fiche;
}

function getFicheLogement(university, jsonData) {
    const id = getIdUniversite(university, jsonData);
    const ficheLogement = jsonData.logement;
    const fiche = [];
    if (id.length === 0) {
        fiche.push({
            demarche_recherche: '', lrecommandation: '', affichage: true
        })
    } else {
        for (let i = 0; i < id.length; i++) {
            fiche.push(ficheLogement[id[i] - 1]);
        }
    }

    return fiche;
}


function getFicheCoutVie(university, jsonData) {
    const id = getIdUniversite(university, jsonData);
    const ficheCoutVie = jsonData.cout_vie;
    const fiche = [];
    if (id.length === 0) {
        fiche.push({
            logement: '',
            nourriture: '',
            transport: '',
            frais_scolarite: '',
            mutuelle: '',
            autres: '',
        })
    } else {
        for (let i = 0; i < id.length; i++) {
            fiche.push(ficheCoutVie[id[i] - 1]);
        }
    }

    return fiche;
}


function getCours(university, jsonData) {
    const id = getIdUniversite(university, jsonData);
    const ficheCours = jsonData.cours;
    const fiche = [];
    if (id.length === 0) {
        fiche.push({
            cours_desire: '',
            cours_propose: '',
            recommandation_choix: '',
            connaissances_linguistique: '',
            difference_enseeiht: '',
            charge_parrapport_enseeiht: '',
            affichage: true
        })
    } else {
        for (let i = 0; i < id.length; i++) {
            fiche.push(ficheCours[id[i] - 1]);
        }
    }

    return fiche;
}

function getActivite(university, jsonData) {
    const id = getIdUniversite(university, jsonData);
    const ficheActivite = jsonData.activite;
    const fiche = [];
    if (id.length === 0) {
        fiche.push({
            parascolaire: '', culturelle: '', affichage: true 
        })
    } else {
        for (let i = 0; i < id.length; i++) {
            fiche.push(ficheActivite[id[i] - 1]);
        }
    }

    return fiche;
}

function getConseil (university, jsonData) {
    const id = getIdUniversite(university, jsonData);
    const ficheConseil = jsonData.conseil;
    const fiche = [];
    if (id.length === 0) {
        fiche.push({
            conseil: '', affichage: true 
        })
    } else {
        for (let i = 0; i < id.length; i++) {
            fiche.push(ficheConseil[id[i] - 1]);
        }
    }

    return fiche;
}

function getDataTe (university, jsonData) {
    return {
        ficheUniversite: getFicheUniversite(university, jsonData),
        ficheSejour: getFicheSejour(university, jsonData),
        fichePreparation: getPrepationSejour(university, jsonData),
        ficheArrive: geticheArrive(university, jsonData),
        ficheLogement: getFicheLogement(university, jsonData),
        ficheCoutVie: getFicheCoutVie(university, jsonData),
        ficheCours: getCours(university, jsonData),
        ficheActivite: getActivite(university, jsonData),
        ficheConseil: getConseil(university, jsonData)
    };
}

module.exports = {
    getDataTe,
};