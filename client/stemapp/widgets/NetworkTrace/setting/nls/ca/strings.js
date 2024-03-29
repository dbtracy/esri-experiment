define({
  "taskUrl": "URL de la tasca",
  "setTask": "Defineix",
  "setTaskPopupTitle": "Defineix la tasca",
  "validate": "Defineix",
  "inValidGPService": "Introduïu un servei de geoprocessament vàlid.",
  "GPFeatureRecordSetLayerERR": "Introduïu un servei de geoprocessament amb entrades de tipus \"GPFeatureRecordSetLayer\" únicament.",
  "invalidInputParameters": "El nombre de paràmetres d'entrada és més petit que 1 o més gran que 3. Introduïu un servei de geoprocessament vàlid.",
  "projectSetting": {
    "title": "Configuració del projecte",
    "note": "Nota: la configuració del projecte és opcional. Un cop definida, l'usuari pot emmagatzemar el projecte a les capes del mapa web desitjades amb paràmetres d'entrada i d'àrea de talls de xarxa. L'usuari pot emmagatzemar altres paràmetres de sortida des del grup \"Sortida\" de la pestanya \"Entrada/sortida\".",
    "projectPolygonLayer": "Capa de polígon del projecte",
    "outputParameterName": "Nom del paràmetre de sortida",
    "projectPointLayer": "Capa de punt del projecte",
    "selectLabel": "Selecciona",
    "polygonLayerHelp": "<p>Es mostraran les capes de polígons amb les condicions següents:<br/><ul><li>La capa ha de tenir funcions d'edició, com ara \"Crea\", \"Suprimeix\" i \"Actualitza\"</li><li>La capa ha de tenir dos camps amb el nom i el tipus de dades exactes:</li><ul><li>name (camp de tipus de cadena)</li><li>globalid (camp de tipus GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Es mostraran les capes de polígon des de la URL de la tasca<p/>",
    "pointLayerHelp": "<p>Es mostraran les capes de punts amb les condicions següents: <br/><ul><li>La capa ha de tenir funcions d'edició, com ara \"Crea\", \"Suprimeix\" i \"Actualitza\"</li><li>La capa ha de tenir dos camps amb el nom i el tipus de dades exactes:</li><ul><li>inputtype (camp de tipus de cadena)</li><li>projectid (camp de tipus GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Entrada/sortida",
    "inputSettingsLabel": "Configuració d'entrada",
    "outputSettingsLabel": "Configuració de sortida",
    "inputLabel": "Etiqueta",
    "inputTooltip": "Informació sobre eines",
    "symbol": "Símbol",
    "typeText": "Tipus",
    "outputParametersText": "Paràmetres de sortida",
    "saveToLayerText": "Desa-ho a la capa (opcional)",
    "skipText": "Es pot ometre",
    "visibilityText": "Visible",
    "exportToCsvText": "Exporta a CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Configuració",
    "addFieldTitle": "Afegeix un camp",
    "enterDisplayText": "Introduïu el text de visualització",
    "setScale": "Defineix l'escala",
    "outputDisplay": "Text de visualització",
    "saveToLayerHelp": "<p>Es mostrarà la capa amb les condicions següents:<br/><ul><li>La capa ha de tenir funcions d'edició, com ara \"Crea\", \"Suprimeix\" i \"Actualitza\"</li><li>La capa ha de tenir dos camps amb el nom i el tipus de dades:</li><ul><li>parametername (camp de tipus de cadena)</li><li>projectid (camp de tipus GUID)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Configuració general",
    "summaryFieldsetText": "Configuració del resum",
    "inputOutput": "Entrades/sortides",
    "field": "Camps",
    "operator": "Operadors",
    "inputOperatorCountOption": "Recompte",
    "outputOperatorCountOption": "Recompte",
    "outputOperatorSkipCountOption": "SkipCount",
    "fieldOperatorSumOption": "Suma",
    "fieldOperatorMinOption": "Mín.",
    "fieldOperatorMaxOption": "Màx.",
    "fieldOperatorMeanOption": "Mitjana",
    "expressionAddButtonText": "Afegeix",
    "expressionVerifyButtonText": "Verifica",
    "summaryEditorText": "Text de resum",
    "autoZoomAfterTrace": "Opcions addicionals",
    "zoomText": "Aplica el zoom automàtic després del traçat",
    "summarSettingTooltipText": "Afegeix el recompte d'entrada o sortida"
  },
  "validationErrorMessage": {
    "webMapError": "No hi ha cap capa disponible al mapa web. Seleccioneu un mapa web vàlid.",
    "inputTypeFlagGreaterThanError": "No hi pot haver més d'una entrada de tipus de marca.",
    "inputTypeFlagLessThanError": "És necessària una entrada de tipus de marca com a mínim.",
    "inputTypeBarrierErr": "No hi pot haver més d'una entrada de tipus de barrera.",
    "inputTypeSkipErr": "No hi pot haver més d'una entrada de tipus omès.",
    "displayTextForButtonError": "El text de visualització del botó \"Executa\" no pot estar en blanc.",
    "UnableToLoadGeoprocessError": "No es pot carregar el servei de geoprocessament.",
    "invalidSummaryExpression": "Expressió no vàlida.",
    "validSummaryExpression": "Bé!",
    "invalidProjectSettings": "La configuració del projecte no és vàlida.<br/> Seleccioneu un valor vàlid a \"${projectSetting}\"."
  },
  "hintText": {
    "labelTextHint": "Suggeriment: proporcioneu una etiqueta de visualització per a la subfinestra de resultats del paràmetre de sortida.",
    "displayTextHint": "Suggeriment: es mostrarà a la subfinestra de detalls d'aquest paràmetre de sortida.",
    "inputTextHint": "Suggeriment: per crear la vostra expressió anterior, seleccioneu l'entrada, la sortida i els noms de camps.",
    "expressionHint": "Suggeriment: seleccioneu els elements i feu clic a Afegeix per crear l'expressió."
  }
});