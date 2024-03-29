define({
  "taskUrl": "Opgave-URL",
  "setTask": "Indstil",
  "setTaskPopupTitle": "Indstil opgave",
  "validate": "Indstil",
  "inValidGPService": "Angiv en gyldig geoprocesseringstjeneste.",
  "GPFeatureRecordSetLayerERR": "Angiv en geoprocesseringstjeneste udelukkende med input af typen 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "Antallet af inputparametre er enten mindre end 1 eller mere end 3. Angiv en gyldig geoprocesseringstjeneste.",
  "projectSetting": {
    "title": "Projektindstillinger",
    "note": "Bemærk: Projektindstillingerne er valgfrie, når den konfigurerede bruger kan lagre projektet i de ønskede webkortlag med område for netværksnedbrud og inputparametre. Brugeren kan lagre andre outputparametre fra gruppen “Output” på fanen “Input/Output”.",
    "projectPolygonLayer": "Projektpolygonlag",
    "outputParameterName": "Navn på outputparameter",
    "projectPointLayer": "Projektpunktlag",
    "selectLabel": "Vælg",
    "polygonLayerHelp": "<p>Polygonlag med følgende betingelser vil blive vist:<br/><ul><li>Laget skal have redigeringsfunktioner, nemlig “Opret”, “Slet” og “Opdatér”</li><li>Laget skal have to felter med præcist navn og datatype:</li><ul><li>Name (Strengtypefelt)</li><li>GlobalID (GlobalID-typefelt)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Outputpolygonlag fra opgave-URL vil blive vist<p/>",
    "pointLayerHelp": "<p>Punktlag med følgende betingelser vil blive vist:<br/><ul><li>Laget skal have redigeringsfunktioner, nemlig “Opret”, “Slet” og “Opdatér”</li><li>Laget skal have to felter med præcist navn og datatype:</li><ul><li>Inputtype (Strengtypefelt)</li><li>Projectid (GUID-typefelt)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Input/Output",
    "inputSettingsLabel": "Inputindstillinger",
    "outputSettingsLabel": "Outputindstillinger",
    "inputLabel": "Mærke",
    "inputTooltip": "Værktøjstip",
    "symbol": "Symbol",
    "typeText": "Type",
    "outputParametersText": "Outputparametre",
    "saveToLayerText": "Gem til lag (valgfrit)",
    "skipText": "Kan udelades",
    "visibilityText": "Synlig",
    "exportToCsvText": "Export to CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Indstillinger",
    "addFieldTitle": "Tilføj felt",
    "enterDisplayText": "Indtast visningstekst",
    "setScale": "Indstil skala",
    "outputDisplay": "Vis tekst",
    "saveToLayerHelp": "<p>Lag med følgende betingelser vil blive vist:<br/><ul><li>Laget skal have redigeringsfunktioner, nemlig “Opret”, “Slet” og “Opdatér”</li><li>Laget skal have to felter med navn og datatype:</li><ul><li>Parametername (Strengtypefelt)</li><li>Projectid (GUID-typefelt)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Generelle indstillinger",
    "summaryFieldsetText": "Resumé-indstillinger",
    "inputOutput": "Input/Output",
    "field": "Felter",
    "operator": "Operatorer",
    "inputOperatorCountOption": "Tælling",
    "outputOperatorCountOption": "Tælling",
    "outputOperatorSkipCountOption": "SkipCount",
    "fieldOperatorSumOption": "Sum",
    "fieldOperatorMinOption": "Min.",
    "fieldOperatorMaxOption": "Maks.",
    "fieldOperatorMeanOption": "Middel",
    "expressionAddButtonText": "Tilføj",
    "expressionVerifyButtonText": "Bekræft",
    "summaryEditorText": "Resumé-tekst",
    "autoZoomAfterTrace": "Yderligere indstillinger",
    "zoomText": "Auto-zoom efter sporing",
    "summarSettingTooltipText": "Tilføj input/output-antal"
  },
  "validationErrorMessage": {
    "webMapError": "Der er ingen tilgængelige lag i webkortet. Vælg et gyldigt webkort.",
    "inputTypeFlagGreaterThanError": "Der kan ikke være mere end ét input for typeflag.",
    "inputTypeFlagLessThanError": "Der kræves mindst ét input for typeflag.",
    "inputTypeBarrierErr": "Der kan ikke være mere end ét input for typegrænse.",
    "inputTypeSkipErr": "Der kan ikke være mere end ét input for typeudeladelse.",
    "displayTextForButtonError": "Visningstekst til knappen 'Kør' må ikke være tom.",
    "UnableToLoadGeoprocessError": "Kan ikke indlæse geoprocesseringstjeneste.",
    "invalidSummaryExpression": "Ugyldigt udtryk.",
    "validSummaryExpression": "Færdig!",
    "invalidProjectSettings": "Ugyldige projektindstillinger.<br/> Angiv en gyldig værdi i '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Tip: Angiv visningsetiket for outputparameterens resultatpanel.",
    "displayTextHint": "Tip: Dette vil blive vist i oplysningspanelet for denne outputparameter.",
    "inputTextHint": "Tip: Opret dit udtryk ovenfor ved at vælge input, output og feltnavne.",
    "expressionHint": "Tip: Vælg elementer, og klik på Tilføj for at oprette udtrykket."
  }
});