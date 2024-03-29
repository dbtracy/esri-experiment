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
    "areaSquareFeetUnit": "Kvadrātpēdas",
    "areaAcresUnit": "Akri",
    "areaSquareMetersUnit": "Kvadrātmetri",
    "areaSquareKilometersUnit": "Kvadrātkilometri",
    "areaHectaresUnit": "Hektāri",
    "lengthFeetUnit": "Pēdas",
    "lengthMilesUnit": "Jūdzes",
    "lengthMetersUnit": "Metri",
    "lengthKilometersUnit": "Kilometri"
  },
  "analysisTab": {
    "analysisTabLabel": "Analīze",
    "selectAnalysisLayerLabel": "Analīzes slāņi",
    "addLayerLabel": "Pievienot slāņus",
    "noValidLayersForAnalysis": "Izvēlētajā tīmekļa kartē nav atrasti derīgi slāņi.",
    "noValidFieldsForAnalysis": "Izvēlētajā tīmekļa kartē nav atrasti derīgi lauki. Lūdzu, noņemiet izvēlēto slāni.",
    "addLayersHintText": "Padoms. Izvēlieties slāņus un laukus, ko iekļaut analīzē un pārskatā",
    "addLayerNameTitle": "Slāņa nosaukums",
    "addFieldsLabel": "Pievienot lauku",
    "addFieldsPopupTitle": "Atlasīt laukus",
    "addFieldsNameTitle": "Lauku nosaukumi",
    "aoiToolsLegendLabel": "Interesējošās teritorijas rīki",
    "aoiToolsDescriptionLabel": "Izvēlieties un marķējiet rīkus, kas pieejami interesējošās teritorijas izveidei.",
    "placenameLabel": "Vietas nosaukums",
    "drawToolsLabel": "Izvēlēties zīmēšanas rīkus",
    "uploadShapeFileLabel": "Augšupielādēt shapefile",
    "coordinatesLabel": "Koordinātas",
    "coordinatesDrpDwnHintText": "Padoms. Izvēlēties mērvienību ievadīto traversu attēlošanai",
    "coordinatesBearingDrpDwnHintText": "Padoms. Izvēlēties vērsumu ievadīto traversu attēlošanai",
    "allowShapefilesUploadLabel": "Atļaut lietotājiem augšupielādēt Shape failus, lai tos iekļautu analīzē",
    "allowShapefilesUploadLabelHintText": "Padoms. Pievienojiet opciju cilnei Pārskats, kur lietotāji var augšupielādēt savus datus kā Shape failu, ko pēc tam iekļaut analīzes pārskatā",
    "allowVisibleLayerAnalysisLabel": "Neanalizēt vai neiekļaut pārskatā neredzamu slāņu rezultātus",
    "allowVisibleLayerAnalysisHintText": "Uzvedne: slāņi, kas ir izslēgti vai nav redzami mēroga redzamības iestatījumu dēļ, netiks analizēti vai iekļauti drukātajos vai lejupielādētajos rezultātos.",
    "areaUnitsLabel": "Analīzes rezultātu mērvienības (teritorija)",
    "lengthUnitsLabel": "Analīzes rezultātu mērvienības (garums)",
    "maxFeatureForAnalysisLabel": "Maksimālais analizējamo elementu skaits",
    "maxFeatureForAnalysisHintText": "Padoms. Iestatiet maksimālo analīzē iekļaujamo elementu skaitu",
    "searchToleranceLabelText": "Meklēšanas tolerance",
    "searchToleranceHint": "Padoms. Meklēšanas pielaide tiek izmantota punktu un līniju ievades analīzē",
    "placenameButtonText": "Vietas nosaukums",
    "drawToolsButtonText": "Zīmēt",
    "shapefileButtonText": "Shape fails",
    "coordinatesButtonText": "Koordinātas",
    "invalidLayerErrorMsg": "Konfigurējiet laukus šim objektam:",
    "drawToolSelectableLayersLabel": "Izvēlēties atlasāmus slāņus",
    "drawToolSelectableLayersHint": "Padoms. Izvēlieties slāņus, kuros ir elementi, ko var atlasīt, izmantojot iespēju Izvēlēties zīmēšanas rīku",
    "drawToolsSettingsFieldsetLabel": "Zīmēšanas rīki",
    "drawToolPointLabel": "Punkts",
    "drawToolPolylineLabel": "Polilīnija",
    "drawToolExtentLabel": "Pārklājums",
    "drawToolPolygonLabel": "Laukums",
    "drawToolCircleLabel": "Aplis",
    "selectDrawToolsText": "Izvēlieties zīmēšanas rīkus, kas pieejami interesējošās teritorijas izveidei",
    "selectingDrawToolErrorMessage": "Izvēlieties vismaz vienu zīmēšanas rīku vai izvēles slāni, ko lietot ar opciju Zīmēšanas rīki iespējā Interesējošo teritoriju rīki."
  },
  "downloadTab": {
    "downloadLegend": "Lejupielādēt iestatījumus",
    "reportLegend": "Pārskata iestatījumi",
    "downloadTabLabel": "Lejupielādēt",
    "syncEnableOptionLabel": "Elementu slāņi",
    "syncEnableOptionHint": "Padoms. Izvēlieties slāni, ko var lejupielādēt, un norādiet formātus, kādos katrs slānis būs pieejams. Lejupielādētās datu kopas ietvers šos elementus, kas pārklājas ar interesējošo teritoriju.",
    "syncEnableOptionNote": "Piezīme. Lai lejupielādētu ģeodatubāzi un Shape failu, ir nepieciešami elementu slāņi ar iespējotu sinhronizāciju. Shape faila formāts tiek atbalstīts tikai ar ArcGIS Online viesotiem jeb uzturētiem elementu slāņiem.",
    "extractDataTaskOptionLabel": "Ģeoapstrādes serviss Datu izvilkšanas serviss",
    "extractDataTaskOptionHint": "Padoms. Izmantojiet publicēto ģeoapstrādes servisu Datu izvilkšanas uzdevums, lai lejupielādētu elementus, kuri šķērso interesējošo teritoriju, failu ģeodatubāzes vai Shape failu formātos.",
    "cannotDownloadOptionLabel": "Deaktivizēt lejupielādi",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Slāņa nosaukums",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Faila ģeodatubāze",
      "ShapefileFormatLabel": "Shape fails",
      "allowDownloadLabel": "Atļaut lejupielādi"
    },
    "setButtonLabel": "Iestatīt",
    "GPTaskLabel": "Norādīt ģeoapstrādes servisa URL",
    "printGPServiceLabel": "Drukas servisa vietrādis (URL)",
    "setGPTaskTitle": "Norādīt obligāto ģeoapstrādes servisa URL",
    "logoLabel": "Logotips",
    "logoChooserHint": "Padoms. Noklikšķiniet uz attēla ikonas, lai mainītu logotipu, kas redzams pārskata augšējā kreisajā stūrī",
    "footnoteLabel": "Vēre",
    "columnTitleColorPickerLabel": "Pārskata ailes virsraksta krāsa",
    "reportTitleLabel": "Pārskata virsraksts",
    "errorMessages": {
      "invalidGPTaskURL": "Nederīgs ģeodatu apstrādes serviss. Izvēlieties ģeodatu apstrādes serviss, kurā ir Datu izvilkšanas uzdevums.",
      "noExtractDataTaskURL": "Izvēlieties ģeodatu apstrādes servisu, kurā ir Datu izvilkšanas uzdevums.",
      "duplicateCustomOption": "Ierakstam ${duplicateValueSizeName} eksistē dublikāts.",
      "invalidLayoutWidth": "Šim ievadīts nederīgs platums: ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Šim ievadīts nederīgs augstums: ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Šim izvēlēta nederīga lapas mērvienība: ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Ienesot savstarpēji saistītā uzdevuma dimensiju informāciju, radās kļūda. Lūdzu, mēģiniet vēlreiz.",
      "failtofetchbuddyTaskName": "Ienesot savstarpēji saistītā uzdevuma nosaukumu, radās kļūda. Lūdzu, mēģiniet vēlreiz.",
      "failtofetchChoiceList": "Ienesot izvēles sarakstu no drukas servisa, radās kļūda. Lūdzu, mēģiniet vēlreiz.",
      "invalidWidth": "Nederīgs platums.",
      "invalidHeight": "Nederīgs augstums."
    },
    "addCustomLayoutTitle": "Pievienot pielāgotu izkārtojumu",
    "customLayoutOptionHint": "Padoms. Pievienojiet drukas opcijām izkārtojumu no sava drukas servisa.",
    "reportDefaultOptionLabel": "Noklusējuma izkārtojums",
    "pageSizeUnits": {
      "millimeters": "Milimetri",
      "points": "Punkti"
    },
    "noDataTextRepresentation": "Nav datu vērtība",
    "naTextRepresentation": "Nav lietojama vērtība",
    "noDataDefaultText": "Nav datu",
    "notApplicableDefaultText": "N/P"
  },
  "generalTab": {
    "generalTabLabel": "Vispārējs",
    "tabLabelsLegend": "Paneļu apzīmējumi",
    "tabLabelsHint": "Padoms. Norādiet apzīmējumus",
    "AOITabLabel": "Interesējošās teritorijas panelis",
    "ReportTabLabel": "Pārskata panelis",
    "bufferSettingsLegend": "Buferzonas iestatījumi",
    "defaultBufferDistanceLabel": "Noklusējuma buferzonas attālums",
    "defaultBufferUnitsLabel": "Buferzonas mērvienības",
    "generalBufferSymbologyHint": "Padoms. Simbolu sistēma, kas jāizmanto, lai norādītu buferzonu ap norādīto interesējošo teritoriju",
    "aoiGraphicsSymbologyLegend": "Interesējošās teritorijas simbolu sistēma",
    "aoiGraphicsSymbologyHint": "Padoms. Simbolu sistēma, ko izmanto, norādot interesējošās punktu, līniju un laukuma teritorijas",
    "pointSymbologyLabel": "Punkts",
    "previewLabel": "Priekšskatījums",
    "lineSymbologyLabel": "Līnija",
    "polygonSymbologyLabel": "Laukums",
    "aoiBufferSymbologyLabel": "Buferzonu simbolu sistēma",
    "pointSymbolChooserPopupTitle": "Adrese vai punkta novietojuma simbols",
    "polygonSymbolChooserPopupTitle": "Laukuma simbols",
    "lineSymbolChooserPopupTitle": "Līnijas simbols",
    "aoiSymbolChooserPopupTitle": "Buferzonas simbols",
    "aoiTabText": "AOI",
    "reportTabText": "Iesniegt",
    "invalidSymbolValue": "Nederīga simbola vērtība."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Meklēšanas avota iestatījumi",
    "searchSourceSettingTitle": "Meklēšanas avota iestatījumi",
    "searchSourceSettingTitleHintText": "Pievienojiet un konfigurējiet ģeokodēšanas pakalpojumus vai elementu slāņus kā meklēšanas avotus. Šie norādītie avoti nosaka, ko var meklēt meklēšanas lodziņā",
    "addSearchSourceLabel": "Pievienot meklēšanas avotu",
    "featureLayerLabel": "Elementu slānis",
    "geocoderLabel": "Ģeokodētājs",
    "generalSettingLabel": "Vispārīgs iestatījums",
    "allPlaceholderLabel": "Viettura teksts visu vērtību meklēšanai:",
    "allPlaceholderHintText": "Mājiens: ievadiet tekstu, kas tiks rādīts kā vietturis, kad meklēsit visus slāņus un ģeokodētāju",
    "generalSettingCheckboxLabel": "Rādīt atrastā elementa vai novietojuma uznirstošo logu",
    "countryCode": "Valsts vai reģiona kods(-i)",
    "countryCodeEg": "piem., ",
    "countryCodeHint": "Ja šī vērtība tiks atstāta tukša, tiks meklētas visas valstis un reģioni.",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Meklēt tikai pašreizējā kartes pārklājumā",
    "locatorUrl": "Ģeokodētāja URL",
    "locatorName": "Ģeokodētāja nosaukums",
    "locatorExample": "Piemērs",
    "locatorWarning": "Šī ģeokodēšanas servisa versija netiek atbalstīta. Šis logrīks atbalsta ģeokodēšanas servisa versiju 10.0 un jaunākas.",
    "locatorTips": "Ieteikumi nav pieejami, jo ģeokodēšanas pakalpojums neatbalsta ieteikšanas iespēju.",
    "layerSource": "Slāņa avots",
    "setLayerSource": "Iestatīt slāņa avotu",
    "setGeocoderURL": "Iestatīt ģeokodētāja vietrādi URL",
    "searchLayerTips": "Ieteikumi nav pieejami, jo elementu pakalpojums neatbalsta lappušu numerācijas iespēju.",
    "placeholder": "Viettura teksts",
    "searchFields": "Meklēšanas lauki",
    "displayField": "Rādīt lauku",
    "exactMatch": "Precīza atbilstība",
    "maxSuggestions": "Ieteikumu maksimums",
    "maxResults": "Maks. rezultātu skaits",
    "enableLocalSearch": "Aktivizēt lokālo meklēšanu",
    "minScale": "Minimālo vērtību mērogs",
    "minScaleHint": "Ja kartes mērogs ir lielāks par šo mērogu, tiks lietota lokālā meklēšana",
    "radius": "Rādiuss",
    "radiusHint": "Norāda tā apgabala rādiusu ap pašreizējo kartes centru, kas tiek izmantots, lai uzlabotu ģeokodēšanas kandidātu rangu un tādējādi vispirms tiktu atgriezti izvietojumam tuvākie kandidāti",
    "setSearchFields": "Iestatīt meklēšanas laukus",
    "set": "Uzstādīt",
    "invalidUrlTip": "URL ${URL} nav derīgs vai tam nevar piekļūt.",
    "invalidSearchSources": "Nederīgi meklēšanas avota iestatījumi"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Lūdzu, aizpildiet obligātos laukus",
    "bufferDistanceFieldsErrorMsg": "Lūdzu, ievadiet derīgas vērtības",
    "invalidSearchToleranceErrorMsg": "Lūdzu, ievadiet derīgu meklēšanas tolerances vērtību",
    "atLeastOneCheckboxCheckedErrorMsg": "Nederīga konfigurācija: ir nepieciešams vismaz viens interesējošās teritorijas rīks.",
    "noLayerAvailableErrorMsg": "Nav pieejams neviens slānis",
    "layerNotSupportedErrorMsg": "Netiek atbalstīts ",
    "noFieldSelected": "Lūdzu, lietojiet rediģēšanas darbību, lai izvēlētos laukus analīzei.",
    "duplicateFieldsLabels": "Kartes teksta \"${labelText}\" dublikāts pievienots: \"${itemNames}\"",
    "noLayerSelected": "Lūdzu, izvēlieties analīzei vismaz vienu slāni.",
    "errorInSelectingLayer": "Nevar izvēlēties slāni. Lūdzu, mēģiniet vēlreiz.",
    "errorInMaxFeatureCount": "Lūdzu, ievadiet analīzei derīgu maksimālo elementu skaitu."
  }
});