"use strict";


/* *** Fenêtre modale *** */
/* ***
On créé les variables pour stocker les objets du dispositif :
- la modale, 
- le bouton de contrôle, 
- le bouton de fermeture, 
- le dernier élément de la modale pouvant recevoir le focus, 
- le wrapper du contenu qui devra être inhibé par aria-hidden='true' tant que la modale est affichée.
	
Propriétés ARIA utilisées :
- Sur la zone de contenu
-- aria-hidden='true'
* ***/
var modalContent = document.getElementById('modal-def-content');
var modalBtn = document.getElementById('modal-def');
var modalClose = document.getElementById('btn-close-def');
var lastFocus = lastElem(modalContent);
var modalWrapper = document.getElementById('wrapper');
//traitement
/* ***
Configuration de la modale. À l'ouverture :
- la modale est rendue visible,
- la restitution du contenu est inhibée,
- le focus est donné au premier élément pouvant le recevoir dans la modale (le bouton de fermeture),
- l'événement focus est surveillé pour le contraindre dans la modale,
- l'événement click est surveillé pour empêcher les actions de click sur le contenu,
- la touche escape, qui doit fermer la modale, est surveillée,
- l'événement de fermeture est affecté au bouton de fermeture,
- la tabulation est surveillée pour assurer la navigation circulaire dans la modale.
*** */
modalBtn.addEventListener('click', function() {
 //open/close
 modalContent.classList.add('is-visible');
 modalWrapper.setAttribute('aria-hidden', 'true');
 modalClose.focus();
 //trapping focus
 document.addEventListener('focus', trapFocus, true);
 //pas de click en dehors de la modale
 document.addEventListener('click', noClick, true);
 //fermeture via escape
 document.addEventListener('keydown', function(event) {
 if (event.keyCode === 27) stopListening();
 }, false);
 //bouton de fermeture
 modalClose.addEventListener('click', stopListening, false);
 //Tabulation circulaire : 
 // si la fenêtre à le focus, en tabulation arrière on doit redonner le focus sur le dernier élément (variable 'lastFocus')
 document.addEventListener('keyup', function(event) {
 var curEle = document.activeElement;
 if (curEle === modalContent) {
 if (event.shiftKey && event.keyCode === 9) {
 lastFocus.focus();
 }
 event.stopPropagation();
 }
 }, false);
}, false);
/* *** Dépendances *** */
//Récupère le dernier élément de la fenêtre
function lastElem(modale) {
 var eleFocus = modale.getElementsByTagName('*'); //récupérer tous les éléments de la modale	
 for (var i = 0, len = eleFocus.length; i < len; i++) {
 if (eleFocus[i].tabIndex >= '0') { //On teste si l'élément peut recevoir le focus	
 lastFocus = eleFocus[i]; // Si oui, on affecte l'élément à 'lastFocus'
 }
 };
 return lastFocus;
}
//trapping focus
function trapFocus(event) {
 console.log('event focus');
 if (!modalContent.contains(event.target)) {
 console.log('focus !');
 modalContent.focus();
 }
};
//désactivation du click
function noClick(event) {
 console.log('event click');
 if (!modalContent.contains(event.target)) {
 console.log('no click');
 event.stopPropagation();
 event.preventDefault();
 }
};
//fermeture, rétablissement de la restitution du contenu, destruction des listener focus et click, remise du focus sur le bouton de contrôle
function stopListening() {
 modalContent.classList.remove('is-visible');
 modalWrapper.removeAttribute('aria-hidden');
 document.removeEventListener('focus', trapFocus, true);
 document.removeEventListener('click', noClick, true);
 modalBtn.focus();
};