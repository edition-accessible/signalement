---
title: "Recommandations pour l'affichage des informations d'accessibilité"
author: "EDRLab"
---
<p>La directive Européenne 2018/ entrera en vigueur en juin 2025. À cette date les livres numériques sur le marché devront respecter un niveau d'accessibilité minimum ou faire preuve d'une dérogation.</p>
<p>Ce document propose des recommandations permettant un affichage harmonieux des informations d'accessibilité d'un livre numérique avant son achat afin que les lecteurs sachent si le livre correspondra à leurs besoins.</p>
<p>Il est l'aboutissement d'un travail interprofessionnel piloté par EDRLab dans le cadre d'une mission confiée par le comité de pilotage interministeriel.</p>
<p>Il s'appuie sur un travail de prototypes itératifs ayant servis de support pour interroger les publics généralistes ou concernés ainsi que les acteurs de la chaine de distribution. <em><span>Bien que stabilisé, ce travail ets toujours en cours et ces recommandations peuvent-être amenées à évoluer</span></em></p>

# Recommandations pour l'affichage des informations d'accessibilité

 <p>L'approche retenue vise à proposer un accès rapide aux informations clés en les affichant à priori, c'est à dire non masquées et clairement identifiées.
 Les informations plus détaillées sont contenues dans un element masqué et peuvent être consultées sur action de l'utilisateur.</p>
 <p>Une attention particulière est portée sur l'évitement de possibles redondances. </p>
 <p>Le vocabulaire proposé se base sur une enquête nationale menée an 2022.</p>
 <p>Une grille de correspondance, en fin de document, permet d'identifier les métadonnées ONIX qui assurent cette information. Un Crosswalk est disponible pour assurer l'interopérabilité des principales autres normes de métadonnées (Schema.org, MARC, MARC21 et UNIMARC).</p>

 <article>

## Fiche livre : informations générales

### Détails du produit

 <p><em>Doivent être affiché à minima les informations suivantes : </em></p>
 <ul>
 <li>Format de fichier (EPUB, PDF, MP3, Audiobook, Etc.)</li>
 <li>La mesure de protection ou son absence</li>
 <li>Date de publication</li>
 <li>Nom de la maison d'édition</li>
 <li>La langue principale du contenu</li>
 </ul>
<details><summary>Pourquoi ces informations sont importantes pour l'accessibilité</summary>
 <p><em> <ul>
 <li>Le format du fichier donne une indication forte sur les possibilités d'accessibilité, un livre audio au format MP3 sera moins structuré qu'un Audiobook par exemple. </li>
 <li>La mesure de protection peut bloquer les technologies d'assistance comme les lecteurs d'écrans. Par ailleurs de nombreux matériels de lecture spécifiques comme les lecteurs DAISY ou les bloc note braille ne sont pas équipés pour lire des fichiers chiffrés.</li>
 <li>Date de publication donne une indication sur la date de réalisation des fichiers. Un livre publié avant 2011 sera sans doute un fichier EPUB2, et un livre publié en 2022 aura plus de chance d'être correctement structuré.</li>
 <li>Le nom de la maison d'édition peut valoriser les efforts faits par celle-ci en terme d'accessibilité.</li>
 <li>La langue principale du contenu permet au lecteur de s'assurer qu'il pourra lire dans de bonnes conditions en vérifiant qu'il dispose d'une voix de synthèse ou de la table braille correspondante.</li>
 </ul></em></p>
</details>

### Accessibilité

 <p><em>Un niveau de titre logique doit regrouper les informations d'accessibilité. L'intitulé de ce titre devrait être <strong>Accessibilité</strong> ou <strong>Informations d'accessibilité</strong>. Le pictogramme de l'homme de Vitruve pourra être utilisé en complément.</p><p>Si aucune des informations n'est fournie, n'utilisez pas un niveau de titre mais affichez dans un paragraphe : <strong>Aucune information sur l'accessibilité n'est disponible</strong> à la place.</p>
 Sous ce niveau de titre seront indiquées les modes de lecture et les fonctionnalités principales, soit à minima les informations suivantes : </em></p>
 <ul>

|Valeur affichée|Définition|code ONIX|En cas d'absence|Note|
|---|---|---|---|---|
|Accessible|*Le fichier est conforme au standard d'accessibilité reconnu comme répondant aux exigences de la directive Européenne*|Liste 196 Code 03 : Spécifications d’accessibilité EPUB 1.0 AA|Ignorer||
|Texte et images sont disponibles en voix de synthèse et braille|*Le contenu nécessaire à la compréhension est entièrement restitué aux techonologies d'assistance*|Pas actuellement exprimable en ONIX mais la conformité EPUB AA (Liste 196 Code 03) implique ce mode de lecture|Ignorer||
|Affichage adaptable|*L'aspect du texte et la mise en page peuvent-être modifiés selon les possibilitées offertes par le système de lecture*|<a href="https://ns.editeur.org/onix/fr/175/E200">Liste 175 Code E200 : Redimensionnable.</a>|ignorer||
|Mise en page fixe|L'aspect du texte et la mise en page sont une représentation exacte de la version papier et ne peuvent pas être modifiées ou de façon limitée.|Liste 175 Code E201 : Format fixe.|ignorer||
|Texte et audio synchronisés||Liste 196 Code 20 : Audio préenregistré synchronisé|ignorer||
|Référence à la pagination des livres imprimés||<a href="https://ns.editeur.org/onix/fr/196/19">Liste 196 Code 19 Numérotation de pages équivalente au document imprimé</a>|ignorer|
|Attention ce livre inclut des Flashs lumineux||Liste 143 Code 13 : Avertissement : risque de clignotement|ignorer|
|Attention ce livre inclut des bruitages sonores||Liste 175 Code A310 : Effets sonores|ignorer|
|Attention ce livre inclut des stimulations corporelles simulant le mouvement||Liste 143 Code 17 : Avertissement : risque de simulation de mouvement|ignorer|

<details><summary>Notes sur les modes de lecture et fonctions d'accessibilité</summary>
 <p><em></em></p>
</details>

### Plus d'informations sur l'accessibilité

À la suite immédiate des focntionnalités d'accessibilité clef, il est conseillé d'ajouter une liste plus détaillée. Pour ne pas alourdir la lecture, cette liste devrait être affichée uniquement sur action de l'utilisateur. l'usage de l'élément HTML `details` assure l'accessibilité du composant. Son `summary` Devrait indiquer **Plus d'informations sur l'accessibilité**.

*Afin d'éviter les redondances, les éléments suivants ne sont pas implémentés :*

- *Certified By (l'information est disponible dans le rapport)*
- *schema:structural & schema:NavigationreadingOrder are implied by WCAG A*

accessibilitySummary is now at the very end of this section.

|Valeur affichée|Définition|code ONIX|En cas d'absence|Note|
|---|---|---|---|---|
|Les ressources graphiques sont décrites de façon détaillée|Le texte alternatif des images est complété par une description détaillée. Cela indique que les tableaux en images, les schémas ou les diagrammes sont complétés par un accès complet aux données qu'ils représentent|Liste 196 Code 16 Représentations graphiques de données également accessibles comme données non graphiques|ignorer||
|<a href="ace-smart-report-fr.html">Rapport de conformité</a> ||Liste 196 code 94 Page web pour les informations détaillées d’accessibilité|ignorer|C'est un lien vers un fichier HTML|
|<a href="infos-accessibilite-ed.html">Politique d'accessibilité de l'éditeur</a> ||Liste 196 code 96 Page web de l’éditeur pour les informations détaillées d’accessibilité|ignorer|C'est un lien vers un fichier HTML|
|*texte* |Texte écrit par l'éditeur indiquant les limites ou les particularitées qui ne sont pas exprimable autrement en ONIX|Liste 196 Code 00 : Résumé sur l'accessibilité content="textetext ... lorem ipsum ..."|ignorer|*[afficher le contenu tel quel, le marquer avec la balise lang de publication - cet élément n'est pas dans un élément de liste mais dans un `p`. Dernier élément à afficher]*|

 </article>
  <article>
## Filtres de recherche

   <ul class="facet-multiselect-checkbox">
   <li><input type="checkbox"><label class="option">Accessible</label></li>
   <li><input type="checkbox"><label class="option">Texte et images accessibles en voix de synthèse et braille</label></li>
   <li><input type="checkbox"><label class="option">Texte et audio synchronisés</label></li>

   </ul>

Un pictogramme Homme de Vitruve avec texte alt " accessible" peut-être affecté à tout fichier déclarant **Liste 196 Code 03 Spécifications d’accessibilité EPUB 1.0 AA** : <img src="https://www.w3.org/2021/09/UX-Guide-metadata-1.0/principles/media/accessibility.svg" alt="Informations sur l'accessibilité" width="15">

 </article>
