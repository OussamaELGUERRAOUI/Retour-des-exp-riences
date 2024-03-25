const express = require('express');
const app = express();
const XLSX = require('xlsx');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const { dataEcole, listePays, listEcole, listeSpecialite, listeCadres } = require('./public/src/donneeEcole.js');
const { getDataTe } = require('./public/src/organisationDonnee.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const workbook = XLSX.readFile('public/data/dd_ech_free-moveon.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = XLSX.utils.sheet_to_json(sheet);
const data = dataEcole(jsonData);
const lPays = listePays(data);
const dataExp = {};




app.use(express.static('public/style'));
app.use(express.static('public/web'));
app.use(express.static('public/src'));

app.set('view engine', 'ejs');
app.set('views', 'public/web');


// Connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Oussama2001.',
  database: 'ri'
});

connection.connect((error) => {
  if (error) {
      console.error('Erreur lors de la connexion à la base de données :', error);
  } else {
      console.log('Connecté à la base de données.');
  }
}
);

// Récupérer le nom de toutes les tables
connection.query('SHOW TABLES', (err, tables) => {
  if (err) {
    console.error('Erreur lors de la récupération des tables :', err);
    return;
  }

  

  // Pour chaque table, récupérer ses données
  tables.forEach(table => {
    const tableName = table[`Tables_in_${connection.config.database}`];
    connection.query(`SELECT * FROM ${tableName}`, (err, rows) => {
      if (err) {
        console.error(`Erreur lors de la récupération des données de la table ${tableName} :`, err);
        return;
      }
      // Ajouter les données de la table au format JSON
      dataExp[tableName] = rows;
      //console.log(data);
    });
  });


});

  



//app.use(express.static('public')); // Servir les fichiers statiques depuis le dossier 'public'
app.get('/pays/:paysId', (req, res) => {
    console.log('Accès à la page pays');
    const pays = req.params.paysId;
    if (pays){
        console.log('le pays est :', pays);
        const ecole = listEcole(pays, data);
        res.json({pays: pays, univ: ecole});
    }
    else {
        res.status(404).send('Pays non trouvé');
    }
   
  }
    );

  app.get('/payschange', (req, res) => {
    console.log('Accès à la page payschange');
    res.json({lPays : lPays});
  });

    app.post('/submit', (req, res) => {
      console.log('Accès à la page submit');
      // Récupération des données envoyées depuis le formulaire
      const selectedEcole = req.body.university;
      console.log("ecole selectionne : ",selectedEcole);
      console.log("dataExp : ",dataExp);
      const dataTe = getDataTe(selectedEcole, dataExp);
      console.log("dataTe : ",dataTe);
      const selectedPays = req.body.pays;
      const spe = listeSpecialite(selectedEcole, data);
      const cadre = listeCadres(selectedEcole, data);
      const site = data.find(e => e.ecole === selectedEcole).Site;
      console.log(req.body);
     
      res.render('index', {
        selectedPays: selectedPays,
        specialite: spe,
        cadre: cadre,
        site: site,
        selectedEcole: selectedEcole,
      
    });
     

      
      
      // Faites quelque chose avec les données sélectionnées
      console.log('École sélectionnée :', spe);
  
      
  });


app.get('/', (req, res) => {
    console.log('Accès à la racine du site');
    res.render('index', {lPays: lPays,
      specialite: [''],
      cadre: [''],
      site: '',
      selectedEcole: '',
      selectedPays : ''});
  });




  
  // Lancement du serveur sur le port 3000
  const port = process.env.PORT|| 3000;
  app.listen(port, () => {
      console.log(`Serveur lancé sur le port ${port}`);
  });