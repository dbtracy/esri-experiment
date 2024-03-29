define({
  "taskUrl": "Tehtävän URL-osoite",
  "setTask": "Määritä",
  "setTaskPopupTitle": "Määritä tehtävä",
  "validate": "Määritä",
  "inValidGPService": "Anna kelvollinen geoprosessointipalvelu.",
  "GPFeatureRecordSetLayerERR": "Anna geoprosessointipalvelu, jossa on vain GPFeatureRecordSetLayer-tyypin lähtöaineistoa.",
  "invalidInputParameters": "Syöteparametreja on alle 1 tai yli 3. Anna kelvollinen geoprosessointipalvelu.",
  "projectSetting": {
    "title": "Projektiasetukset",
    "note": "Huomautus: projektiasetukset ovat valinnaiset, koska määritetty käyttäjä voi tallentaa projektin haluamiinsa web-kartan karttatasoihin verkon käyttökatkoalueiden ja lähtöaineiston parametrien kanssa. Käyttäjä voi tallentaa muut tulosparametrit Syöte/Tulos-välilehden Tulos-ryhmästä.",
    "projectPolygonLayer": "Projektin aluekarttataso",
    "outputParameterName": "Tulosparametrin nimi",
    "projectPointLayer": "Projektin pistekarttataso",
    "selectLabel": "Valitse",
    "polygonLayerHelp": "<p>Seuraavia ehtoja vastaavat aluekarttatasot näytetään:<br/><ul><li>Karttatasossa on oltava muokkaustoiminnot eli Luo, Poista ja Päivitä</li><li>Karttatasossa on oltava kaksi kenttää, joissa on tarkat nimi- ja tietotyypit:</li><ul><li>nimi (String-tyypin kenttä)</li><li>globalid (GlobalID-tyypin kenttä)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Tehtävän URL-osoitteen tulosaineiston aluekarttatasot näytetään<p/>",
    "pointLayerHelp": "<p>Seuraavia ehtoja vastaavat pistekarttatasot näytetään:<br/><ul><li>Karttatasossa on oltava muokkaustoiminnot eli Luo, Poista ja Päivitä</li><li>Karttatasossa on oltava kaksi kenttää, joissa on tarkat nimi- ja tietotyypit:</li><ul><li>inputtype  (String-tyypin kenttä)</li><li>projectid (GUID-tyypin kenttä)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Syöte/Tulos",
    "inputSettingsLabel": "Syöteasetukset",
    "outputSettingsLabel": "Tulosasetukset",
    "inputLabel": "Tunnusteksti",
    "inputTooltip": "Työkalun ohje",
    "symbol": "Symboli",
    "typeText": "Tyyppi",
    "outputParametersText": "Tulosparametrit",
    "saveToLayerText": "Tallenna karttatasoon (valinnainen)",
    "skipText": "Ohitettavissa",
    "visibilityText": "Näkyvä",
    "exportToCsvText": "Vie CSV-tiedostoon",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Asetukset",
    "addFieldTitle": "Lisää kenttä",
    "enterDisplayText": "Kirjoita näyttöteksti",
    "setScale": "Määritä mittakaava",
    "outputDisplay": "Näyttöteksti",
    "saveToLayerHelp": "<p>Seuraavia ehtoja vastaava karttataso näytetään:<br/><ul><li>Karttatasossa on oltava muokkaustoiminnot eli Luo, Poista ja Päivitä</li><li>Karttatasossa on oltava kaksi kenttää, joissa on nimi- ja tietotyypit:</li><ul><li>parametername (String-tyypin kenttä)</li><li>projectid (GUID-tyypin kenttä)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Yleiset asetukset",
    "summaryFieldsetText": "Yhteenvetoasetukset",
    "inputOutput": "Syötteet/Tulokset",
    "field": "Kentät",
    "operator": "Operaattorit",
    "inputOperatorCountOption": "Lukumäärä",
    "outputOperatorCountOption": "Lukumäärä",
    "outputOperatorSkipCountOption": "OhitettavaMäärä",
    "fieldOperatorSumOption": "Summa",
    "fieldOperatorMinOption": "Vähimmäisarvo",
    "fieldOperatorMaxOption": "Enimmäisarvo",
    "fieldOperatorMeanOption": "Keskiarvo",
    "expressionAddButtonText": "Lisää",
    "expressionVerifyButtonText": "Tarkasta",
    "summaryEditorText": "Yhteenvetoteksti",
    "autoZoomAfterTrace": "Lisävalinnat",
    "zoomText": "Automaattinen tarkennus jäljityksen jälkeen",
    "summarSettingTooltipText": "Lisää lähtöaineiston/tulosaineiston määrä"
  },
  "validationErrorMessage": {
    "webMapError": "Web-kartassa ei ole karttatasoja. Valitse kelvollinen web-kartta.",
    "inputTypeFlagGreaterThanError": "Lipputyypin syötteitä ei voi olla yhtä enempää.",
    "inputTypeFlagLessThanError": "Vähintään yksi lipputyypin syöte on pakollinen.",
    "inputTypeBarrierErr": "Estetyypin syötteitä ei voi olla yhtä enempää.",
    "inputTypeSkipErr": "Ohitustyypin syötteitä ei voi olla yhtä enempää.",
    "displayTextForButtonError": "Suorita-painikkeen näyttöteksti ei voi olla tyhjä.",
    "UnableToLoadGeoprocessError": "Geoprosessointipalvelua ei voi ladata.",
    "invalidSummaryExpression": "Virheellinen lauseke.",
    "validSummaryExpression": "Onnistui!",
    "invalidProjectSettings": "Virheelliset projektiasetukset.<br/> Valitse kelvollinen arvo asetuksessa ${projectSetting}."
  },
  "hintText": {
    "labelTextHint": "Vihje: määritä tulosparametrin tulosruudussa näytettävä tunnusteksti.",
    "displayTextHint": "Vihje: tämä näytetään tämän tulosparametrin Tiedot-ruudussa.",
    "inputTextHint": "Vihje: muodosta lausekkeesi yllä valitsemalla syöte, tulos ja kenttien nimet.",
    "expressionHint": "Vihje: muodosta lauseke valitsemalla kohteet ja napsauttamalla Lisää."
  }
});