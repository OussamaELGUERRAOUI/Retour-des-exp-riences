function getPaysInfo(i) {
    

    // Récupérer les informations du pays à partir de l'objet paysInfo


    // Mettre à jour l'affichage avec les informations du pays sélectionné
    //document.getElementById('accordion-capitale').textContent = info.capitale;
    //document.getElementById('accordion-continent').textContent = info.continent;
    //document.getElementById('ca' + i).innerHTML = " ";
    //document.getElementById('co' + i).innerHTML = " ";
}

// Événement de clic pour afficher les informations du pays dans l'accordéon
/*document.querySelector('.accordion-header').addEventListener('click', function () {
    var selectedPays = paysSelect.value;
    getPaysInfo(selectedPays);


    var accordionContent = document.getElementById('accordion-content');

    accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';

    this.querySelector('.accordion-toggle').classList.toggle('collapsed');
}); */

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le premier accordéon et son contenu
    var accordionHeader = document.querySelector('#accordion-header');
    var accordionContent = document.getElementById('accordion-content');
    getPaysInfo('');
    
    // Cacher le premier accordéon initialement
    accordionContent.style.display = 'none';

    // Ajouter un écouteur d'événements de clic sur l'en-tête du premier accordéon
    accordionHeader.addEventListener('click', function() {
        // Afficher ou masquer le premier accordéon en fonction de son état actuel
        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
        
        // Modifier la classe de l'icône pour indiquer l'état du premier accordéon
        this.querySelector('.accordion-toggle').classList.toggle('collapsed');
    });

    // Sélectionner le deuxième accordéon et son contenu
    var accordionHeader1 = document.querySelector('#accordion-header1');
    var accordionContent1 = document.getElementById('accordion-content1');
    getPaysInfo('1');
    
    // Cacher le deuxième accordéon initialement
    accordionContent1.style.display = 'none';

    // Ajouter un écouteur d'événements de clic sur l'en-tête du deuxième accordéon
    accordionHeader1.addEventListener('click', function() {
        // Afficher ou masquer le deuxième accordéon en fonction de son état actuel
        accordionContent1.style.display = accordionContent1.style.display === 'block' ? 'none' : 'block';
        
        // Modifier la classe de l'icône pour indiquer l'état du deuxième accordéon
        this.querySelector('.accordion-toggle').classList.toggle('collapsed');
    });

    // Sélectionner le troisième accordéon et son contenu
    var accordionHeader2 = document.querySelector('#accordion-header2');
    var accordionContent2 = document.getElementById('accordion-content2');
    getPaysInfo('2');

    // Cacher le troisième accordéon initialement
    accordionContent2.style.display = 'none';

    // Ajouter un écouteur d'événements de clic sur l'en-tête du troisième accordéon
    accordionHeader2.addEventListener('click', function() {
        // Afficher ou masquer le troisième accordéon en fonction de son état actuel
        accordionContent2.style.display = accordionContent2.style.display === 'block' ? 'none' : 'block';
        
        // Modifier la classe de l'icône pour indiquer l'état du troisième accordéon
        this.querySelector('.accordion-toggle').classList.toggle('collapsed');
    });
    
    // Sélectionner le quatriéme accordéon et son contenu
    var accordionHeader3 = document.querySelector('#accordion-header3');
    var accordionContent3 = document.getElementById('accordion-content3');
    getPaysInfo('3');

    // Cacher le troisième accordéon initialement
    accordionContent3.style.display = 'none';

    // Ajouter un écouteur d'événements de clic sur l'en-tête du troisième accordéon
    accordionHeader3.addEventListener('click', function() {
        // Afficher ou masquer le troisième accordéon en fonction de son état actuel
        accordionContent3.style.display = accordionContent3.style.display === 'block' ? 'none' : 'block';
        
        // Modifier la classe de l'icône pour indiquer l'état du troisième accordéon
        this.querySelector('.accordion-toggle').classList.toggle('collapsed');
    });

    // Sélectionner le troisième accordéon et son contenu
    var accordionHeader4 = document.querySelector('#accordion-header4');
    var accordionContent4 = document.getElementById('accordion-content4');
    getPaysInfo('4');

    // Cacher le troisième accordéon initialement
    accordionContent4.style.display = 'none';

    // Ajouter un écouteur d'événements de clic sur l'en-tête du troisième accordéon
    accordionHeader4.addEventListener('click', function() {
        // Afficher ou masquer le troisième accordéon en fonction de son état actuel
        accordionContent4.style.display = accordionContent4.style.display === 'block' ? 'none' : 'block';
        
        // Modifier la classe de l'icône pour indiquer l'état du troisième accordéon
        this.querySelector('.accordion-toggle').classList.toggle('collapsed');
    });

    // Sélectionner le troisième accordéon et son contenu
    var accordionHeader5 = document.querySelector('#accordion-header5');
    var accordionContent5 = document.getElementById('accordion-content5');
    getPaysInfo('5');

    // Cacher le troisième accordéon initialement
    accordionContent5.style.display = 'none';

    // Ajouter un écouteur d'événements de clic sur l'en-tête du troisième accordéon
    accordionHeader5.addEventListener('click', function() {
        // Afficher ou masquer le troisième accordéon en fonction de son état actuel
        accordionContent5.style.display = accordionContent5.style.display === 'block' ? 'none' : 'block';
        
        // Modifier la classe de l'icône pour indiquer l'état du troisième accordéon
        this.querySelector('.accordion-toggle').classList.toggle('collapsed');
    });

    // Sélectionner le troisième accordéon et son contenu
    var accordionHeader6 = document.querySelector('#accordion-header6');
    var accordionContent6 = document.getElementById('accordion-content6');
    getPaysInfo('6');

    // Cacher le troisième accordéon initialement
    accordionContent6.style.display = 'none';

    // Ajouter un écouteur d'événements de clic sur l'en-tête du troisième accordéon
    accordionHeader6.addEventListener('click', function() {
        // Afficher ou masquer le troisième accordéon en fonction de son état actuel
        accordionContent6.style.display = accordionContent6.style.display === 'block' ? 'none' : 'block';
        
        // Modifier la classe de l'icône pour indiquer l'état du troisième accordéon
        this.querySelector('.accordion-toggle').classList.toggle('collapsed');
    });

    // Sélectionner le troisième accordéon et son contenu
    var accordionHeader7 = document.querySelector('#accordion-header7');
    var accordionContent7 = document.getElementById('accordion-content7');
    getPaysInfo('7');

    // Cacher le troisième accordéon initialement
    accordionContent7.style.display = 'none';

    // Ajouter un écouteur d'événements de clic sur l'en-tête du troisième accordéon
    accordionHeader7.addEventListener('click', function() {
        // Afficher ou masquer le troisième accordéon en fonction de son état actuel
        accordionContent7.style.display = accordionContent7.style.display === 'block' ? 'none' : 'block';
        
        // Modifier la classe de l'icône pour indiquer l'état du troisième accordéon
        this.querySelector('.accordion-toggle').classList.toggle('collapsed');
    });

    // Sélectionner le troisième accordéon et son contenu
    var accordionHeader8 = document.querySelector('#accordion-header8');
    var accordionContent8 = document.getElementById('accordion-content8');
    getPaysInfo('8');

    // Cacher le troisième accordéon initialement
    accordionContent8.style.display = 'none';

    // Ajouter un écouteur d'événements de clic sur l'en-tête du troisième accordéon
    accordionHeader8.addEventListener('click', function() {
        // Afficher ou masquer le troisième accordéon en fonction de son état actuel
        accordionContent8.style.display = accordionContent8.style.display === 'block' ? 'none' : 'block';
        
        // Modifier la classe de l'icône pour indiquer l'état du troisième accordéon
        this.querySelector('.accordion-toggle').classList.toggle('collapsed');
    });

}); 