///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "areaSquareFeetUnit": "Neliöjalkaa",
    "areaAcresUnit": "Eekkeriä",
    "areaSquareMetersUnit": "Neliömetriä",
    "areaSquareKilometersUnit": "Neliökilometriä",
    "areaHectaresUnit": "Hehtaaria",
    "lengthFeetUnit": "Jalkaa",
    "lengthMilesUnit": "Mailia",
    "lengthMetersUnit": "Metriä",
    "lengthKilometersUnit": "Kilometriä"
  },
  "analysisTab": {
    "analysisTabLabel": "Analyysi",
    "selectAnalysisLayerLabel": "Analyysitasot",
    "addLayerLabel": "Lisää karttatasoja",
    "noValidLayersForAnalysis": "Valitusta web-kartasta ei löytynyt kelvollisia karttatasoja.",
    "noValidFieldsForAnalysis": "Valitusta web-kartasta ei löytynyt kelvollisia kenttiä. Poista valittu karttataso.",
    "addLayersHintText": "Vihje: valitse analyysin ja raporttiin sisällytettävät karttatasot ja kentät",
    "addLayerNameTitle": "Karttatason nimi",
    "addFieldsLabel": "Lisää kenttä",
    "addFieldsPopupTitle": "Valitse kentät",
    "addFieldsNameTitle": "Kenttien nimet",
    "aoiToolsLegendLabel": "Kiinnostusalue-työkalut",
    "aoiToolsDescriptionLabel": "Valitse ja nimeä työkalut, jotka ovat käytettävissä kiinnostusalueen luonnissa.",
    "placenameLabel": "Paikannimi",
    "drawToolsLabel": "Valitse piirtotyökalut",
    "uploadShapeFileLabel": "Lataa Shapefile-tiedosto palvelimeen",
    "coordinatesLabel": "Koordinaatit",
    "coordinatesDrpDwnHintText": "Vihje: valitse yksikkö, jota käytetään syötettyjen läpikäyntien näyttämisessä",
    "coordinatesBearingDrpDwnHintText": "Vihje: valitse suuntima, jota käytetään syötettyjen läpikäyntien näyttämisessä",
    "allowShapefilesUploadLabel": "Salli käyttäjien ladata analyysiin sisällytettäviä Shapefile-tiedostoja palvelimeen",
    "allowShapefilesUploadLabelHintText": "Vihje: Lisää Raportti-välilehdelle asetus, jonka valitsemalla käyttäjät voivat ladata palvelimeen omaa aineistoaan Shapefile-tiedostona analyysiraporttiin sisällytettäväksi",
    "allowVisibleLayerAnalysisLabel": "Älä analysoi tai raportoi niiden karttatasojen tuloksia, jotka eivät ole näkyvissä",
    "allowVisibleLayerAnalysisHintText": "Vihje: karttatasoja, jotka on poistettu käytöstä tai jotka eivät näy mittakaavan näkyvyysasetusten takia, ei analysoida eikä niitä sisällytetä tulostettuihin tai ladattaviin tuloksiin.",
    "areaUnitsLabel": "Analyysin tulosten yksiköt (Alue)",
    "lengthUnitsLabel": "Analyysin tulosten yksiköt (Pituus)",
    "maxFeatureForAnalysisLabel": "Analysoitavien kohteiden enimmäismäärä",
    "maxFeatureForAnalysisHintText": "Vihje: määritä analyysiin sisällytettävien kohteiden enimmäismäärä",
    "searchToleranceLabelText": "Hakutoleranssi",
    "searchToleranceHint": "Vihje: hakutoleranssia käytetään, kun analysoidaan piste- ja viivasyötteitä",
    "placenameButtonText": "Paikannimi",
    "drawToolsButtonText": "Piirrä",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Koordinaatit",
    "invalidLayerErrorMsg": "Määritä kentät kohteelle",
    "drawToolSelectableLayersLabel": "Valitse valittavissa olevat karttatasot",
    "drawToolSelectableLayersHint": "Vihje: valitse karttatasot, jotka sisältävät Valinta-piirtotyökalun avulla valittavissa olevat kohteet",
    "drawToolsSettingsFieldsetLabel": "Piirtotyökalut",
    "drawToolPointLabel": "Piste",
    "drawToolPolylineLabel": "Taiteviiva",
    "drawToolExtentLabel": "Laajuus",
    "drawToolPolygonLabel": "Aluekohde",
    "drawToolCircleLabel": "Ympyrä",
    "selectDrawToolsText": "Valitse piirtotyökalut, jotka ovat käytettävissä kiinnostusalueen luonnissa",
    "selectingDrawToolErrorMessage": "Valitse vähintään yksi piirtotyökalu tai valintakarttataso, jotta voit käyttää AOI-työkalujen Piirtotyökalut-asetusta."
  },
  "downloadTab": {
    "downloadLegend": "Latausasetukset",
    "reportLegend": "Raporttiasetukset",
    "downloadTabLabel": "Lataa",
    "syncEnableOptionLabel": "Kohdekarttatasot",
    "syncEnableOptionHint": "Vihje: valitse karttatasot, jotka voidaan ladata, ja määritä kunkin karttatason käytettävissä oleva muoto. Ladatut aineistoryhmät sisältävät kohteet, jotka leikkaavat kiinnostusalueen.",
    "syncEnableOptionNote": "Huomautus: File Geodatabasen ja Shapefile-tiedostojen lataaminen edellyttää synkronointia käyttäviä kohdekarttatasoja. Shapefile-muotoa tuetaan vain ArcGIS Onlinen isännöimissä kohdekarttatasoissa.",
    "extractDataTaskOptionLabel": "Poimi aineistotehtävä -geoprosessointipalvelu",
    "extractDataTaskOptionHint": "Vihje: käytä julkaistua Poimi aineistotehtävä -geoprosessointipalvelua niiden kohteiden lataamiseen, jotka leikkaavat File Geodatabase- tai Shapefile-muotoisen kiinnostusalueen.",
    "cannotDownloadOptionLabel": "Poista lataus käytöstä",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Karttatason nimi",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "File Geodatabase",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Salli lataus"
    },
    "setButtonLabel": "Aseta",
    "GPTaskLabel": "Määritä geoprosessointipalvelun URL-osoite",
    "printGPServiceLabel": "Tulostuspalvelun URL-osoite",
    "setGPTaskTitle": "Määritä pakollinen geoprosessointipalvelun URL-osoite",
    "logoLabel": "Logo",
    "logoChooserHint": "Vihje: muuta raportin vasemmassa yläkulmassa näkyvää logoa napsauttamalla kuvan kuvaketta",
    "footnoteLabel": "Alaviite",
    "columnTitleColorPickerLabel": "Raportin sarakeotsikon väri",
    "reportTitleLabel": "Raportin otsikko",
    "errorMessages": {
      "invalidGPTaskURL": "Virheellinen geoprosessointipalvelu. Valitse geoprosessointipalvelu, joka sisältää Poimi aineistotehtävä -toiminnon.",
      "noExtractDataTaskURL": "Valitse geoprosessointipalvelu, joka sisältää Poimi aineistotehtävä -toiminnon.",
      "duplicateCustomOption": "Kohteen ${duplicateValueSizeName} kaksoismerkintä on olemassa.",
      "invalidLayoutWidth": "Kohteelle ${customLayoutOptionValue} on annettu virheellinen leveys.",
      "invalidLayoutHeight": "Kohteelle ${customLayoutOptionValue} on annettu virheellinen korkeus.",
      "invalidLayoutPageUnits": "Kohteelle ${customLayoutOptionValue} on valittu virheellinen sivuyksikkö.",
      "failtofetchbuddyTaskDimension": "Virhe noudettaessa aputehtävän ulottuvuustietoja. Yritä uudelleen.",
      "failtofetchbuddyTaskName": "Virhe noudettaessa aputehtävän nimeä. Yritä uudelleen.",
      "failtofetchChoiceList": "Virhe noudettaessa valintaluetteloa tulostuspalvelusta. Yritä uudelleen.",
      "invalidWidth": "Virheellinen leveys.",
      "invalidHeight": "Virheellinen korkeus."
    },
    "addCustomLayoutTitle": "Lisää mukautettu asettelu",
    "customLayoutOptionHint": "Vihje: lisää tulostusasetusluetteloon asetteluvaihtoehto tulostuspalvelusta.",
    "reportDefaultOptionLabel": "Oletusasettelu",
    "pageSizeUnits": {
      "millimeters": "Millimetriä",
      "points": "Pisteet"
    },
    "noDataTextRepresentation": "Ei aineistoarvoja",
    "naTextRepresentation": "Arvo ei sovellu",
    "noDataDefaultText": "Ei tietoja",
    "notApplicableDefaultText": "Ei mitään"
  },
  "generalTab": {
    "generalTabLabel": "Yleinen",
    "tabLabelsLegend": "Paneelin tunnustekstit",
    "tabLabelsHint": "Vihje: määritä tunnustekstit",
    "AOITabLabel": "Kiinnostusalue-paneeli",
    "ReportTabLabel": "Raportti-paneeli",
    "bufferSettingsLegend": "Puskurin asetukset",
    "defaultBufferDistanceLabel": "Puskurin oletusetäisyys",
    "defaultBufferUnitsLabel": "Puskuriyksiköt",
    "generalBufferSymbologyHint": "Vihje: symbolit, joita käytetään määritetyn kiinnostusalueen puskurialueen ilmaisemiseen",
    "aoiGraphicsSymbologyLegend": "Kiinnostusalueen symbolit",
    "aoiGraphicsSymbologyHint": "Vihje: symbolit, joita käytetään piste-, viiva- ja aluemuotoisten kiinnostusalueiden ilmaisemiseen",
    "pointSymbologyLabel": "Piste",
    "previewLabel": "Esikatselu",
    "lineSymbologyLabel": "Viiva",
    "polygonSymbologyLabel": "Alue",
    "aoiBufferSymbologyLabel": "Puskurisymbolit",
    "pointSymbolChooserPopupTitle": "Osoitteen tai pistesijainnin symboli",
    "polygonSymbolChooserPopupTitle": "Aluesymboli",
    "lineSymbolChooserPopupTitle": "Viivasymboli",
    "aoiSymbolChooserPopupTitle": "Puskurisymboli",
    "aoiTabText": "AOI",
    "reportTabText": "Raportti",
    "invalidSymbolValue": "Virheellinen symbolisarvo."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Hakulähteen asetukset",
    "searchSourceSettingTitle": "Hakulähteen asetukset",
    "searchSourceSettingTitleHintText": "Lisää ja määritä geokoodauspalveluja tai kohdekarttatasoja haun lähteiksi. Nämä määritetyt lähteet määrittävät, mitä hakuruudussa voi hakea",
    "addSearchSourceLabel": "Lisää haun lähde",
    "featureLayerLabel": "Kohdekarttataso",
    "geocoderLabel": "Geokooderi",
    "generalSettingLabel": "Yleinen asetus",
    "allPlaceholderLabel": "Paikkamerkkiteksti haulle kaikkialta:",
    "allPlaceholderHintText": "Vinkki: Anna teksti, joka näytetään paikkamerkkinä kaikista karttatasoista ja geokooderista haettaessa",
    "generalSettingCheckboxLabel": "Näytä löydetyn kohteen tai sijainnin ponnahdusikkuna",
    "countryCode": "Maa- tai aluekoodit",
    "countryCodeEg": "esim. ",
    "countryCodeHint": "Jos jätät tämän arvon tyhjäksi, ohjelma etsii kaikista maista ja kaikilta alueilta",
    "questionMark": "tulisi käyttää?",
    "searchInCurrentMapExtent": "Etsi vain nykyisestä karttalaajuudesta",
    "locatorUrl": "Geokooderin URL-osoite",
    "locatorName": "Geokooderin nimi",
    "locatorExample": "Esimerkki",
    "locatorWarning": "Tätä geokoodauspalvelun versiota ei tueta. Pienoisohjelma tukee geokoodauspalvelua 10.0 ja sitä uudempia versioita.",
    "locatorTips": "Ehdotukset eivät ole käytettävissä, koska geokoodauspalvelu ei tue ehdotustoimintoa.",
    "layerSource": "Karttatason lähde",
    "setLayerSource": "Määritä karttatason lähde",
    "setGeocoderURL": "Määritä geokooderin URL-osoite",
    "searchLayerTips": "Ehdotukset eivät ole käytettävissä, koska kohdepalvelu ei tue sivutustoimintoa.",
    "placeholder": "Muuttujan teksti",
    "searchFields": "Hakukentät",
    "displayField": "Näyttökenttä",
    "exactMatch": "Tarkka vastine",
    "maxSuggestions": "Ehdotusten enimmäismäärä",
    "maxResults": "Tulosten enimmäismäärä",
    "enableLocalSearch": "Ota käyttöön paikallinen haku",
    "minScale": "Vähimmäismittakaava",
    "minScaleHint": "Kun kartan mittakaava on suurempi kuin tämä mittakaava, käytetään paikallista hakua",
    "radius": "Säde",
    "radiusHint": "Määrittää nykyisen kartan keskikohdan ympärillä olevan alueen säteen. Säteen avulla arvioidaan geokoodausehdokkaiden sijoitusta, jotta sijaintia lähinnä olevat ehdokkaat palautetaan ensin",
    "setSearchFields": "Määritä hakukentät",
    "set": "Aseta",
    "invalidUrlTip": "Syötetty URL-osoite ${URL} on virheellinen, tai se ei ole käytettävissä.",
    "invalidSearchSources": "Virheelliset hakulähteen asetukset"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Täytä pakolliset kentät",
    "bufferDistanceFieldsErrorMsg": "Anna kelvolliset arvot",
    "invalidSearchToleranceErrorMsg": "Anna kelvollinen arvo kuhunkin toleranssiin",
    "atLeastOneCheckboxCheckedErrorMsg": "Virheellinen kokoonpano: vähintään yksi kiinnostusalue on pakollinen.",
    "noLayerAvailableErrorMsg": "Karttatasoja ei ole käytettävissä",
    "layerNotSupportedErrorMsg": "Ei tuettu ",
    "noFieldSelected": "Valitse analysoitavat kentät muokkaustoiminnon avulla.",
    "duplicateFieldsLabels": "Tunnustekstin kaksoiskappale ${labelText} on lisätty kohteelle: ${itemNames}",
    "noLayerSelected": "Valitse vähintään yksi karttataso analyysia varten.",
    "errorInSelectingLayer": "Karttatasoa ei voi valita. Yritä uudelleen.",
    "errorInMaxFeatureCount": "Anna kelvollinen kohteiden enimmäismäärä analyysia varten."
  }
});