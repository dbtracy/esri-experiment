define({
  "taskUrl": "URL de la tâche",
  "setTask": "Définir",
  "setTaskPopupTitle": "Définir une tâche",
  "validate": "Définir",
  "inValidGPService": "Saisissez un service de géotraitement valide.",
  "GPFeatureRecordSetLayerERR": "Saisissez un service de géotraitement avec des entrées de type 'GPFeatureRecordSetLayer' uniquement.",
  "invalidInputParameters": "Le nombre de paramètres en entrée est inférieur à 1 ou supérieur à 3. Saisissez un service de géotraitement valide.",
  "projectSetting": {
    "title": "Paramètres du projet",
    "note": "Remarque : les paramètres du projet sont facultatifs une fois que l’utilisateur configuré peut stocker le projet dans les couches de carte web souhaitées, avec la zone de panne réseau et les paramètres en entrée. L’utilisateur peut stocker d’autres paramètres en sortie depuis le groupe “Sortie” de l’onglet “Entrée/Sortie”.",
    "projectPolygonLayer": "Couche surfacique du projet",
    "outputParameterName": "Nom du paramètre en sortie",
    "projectPointLayer": "Couche de points du projet",
    "selectLabel": "Sélectionner",
    "polygonLayerHelp": "<p>Les couches surfaciques avec les conditions suivantes s’afficheront :<br/><ul><li>La couche doit disposer des fonctionnalités de mise à jour “Créer”, “Supprimer” et “Mettre à jour”</li><li>La couche doit posséder 2 champs avec exactement le nom et le type de données suivants :</li><ul><li>name (champ de type chaîne)</li><li>globalid (champ de type GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Les couches surfaciques en sortie issues de l’URL de la tâche s’afficheront<p/>",
    "pointLayerHelp": "<p>Les couches de points avec les conditions suivantes s’afficheront : <br/><ul><li>La couche doit disposer des fonctionnalités de mise à jour “Créer”, “Supprimer” et “Mettre à jour”</li><li>La couche doit posséder 2 champs avec exactement le nom et le type de données suivants :</li><ul><li>inputtype (champ de type chaîne)</li><li>projectid (champ de type GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Entrée/Sortie",
    "inputSettingsLabel": "Paramètres en entrée",
    "outputSettingsLabel": "Paramètres en sortie",
    "inputLabel": "Etiquette",
    "inputTooltip": "Info-bulle",
    "symbol": "Symbole",
    "typeText": "Type",
    "outputParametersText": "Paramètres en sortie",
    "saveToLayerText": "Enregistrer dans une couche (facultatif)",
    "skipText": "Peut être ignoré",
    "visibilityText": "Visibles",
    "exportToCsvText": "Exporter au format CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Réglages",
    "addFieldTitle": "Ajouter un champ",
    "enterDisplayText": "Entrer le texte d’affichage",
    "setScale": "Définir l’échelle",
    "outputDisplay": "Texte d’affichage",
    "saveToLayerHelp": "<p>La couche avec les conditions suivantes s’affichera : <br/><ul><li>La couche doit disposer des fonctionnalités de mise à jour “Créer”, “Supprimer” et “Mettre à jour”</li><li>La couche doit posséder deux champs avec le nom et le type de données suivants :</li><ul><li>parametername (champ de type chaîne)</li><li>projectid (champ de type GUID)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Paramètres généraux",
    "summaryFieldsetText": "Paramètres de résumé",
    "inputOutput": "Entrées/Sorties",
    "field": "Champs",
    "operator": "Opérateurs",
    "inputOperatorCountOption": "Total",
    "outputOperatorCountOption": "Total",
    "outputOperatorSkipCountOption": "Nombre d’entités ignorées",
    "fieldOperatorSumOption": "Somme",
    "fieldOperatorMinOption": "Min",
    "fieldOperatorMaxOption": "Max",
    "fieldOperatorMeanOption": "Moyenne",
    "expressionAddButtonText": "Ajouter",
    "expressionVerifyButtonText": "Vérifier",
    "summaryEditorText": "Texte de résumé",
    "autoZoomAfterTrace": "Options supplémentaires",
    "zoomText": "Zoom automatique après le parcours",
    "summarSettingTooltipText": "Ajouter le nombre total d’entrées/sorties"
  },
  "validationErrorMessage": {
    "webMapError": "Aucune couche disponible dans la carte web. Sélectionnez une carte web valide.",
    "inputTypeFlagGreaterThanError": "Une seule entrée de type indicateur est possible.",
    "inputTypeFlagLessThanError": "Au moins une entrée de type indicateur est requise.",
    "inputTypeBarrierErr": "Une seule entrée de type interruption est possible.",
    "inputTypeSkipErr": "Une seule entrée de type ignorer est possible.",
    "displayTextForButtonError": "Le texte d’affichage pour le bouton 'Exécuter' ne peut pas être vide.",
    "UnableToLoadGeoprocessError": "Chargement du service de géotraitement impossible.",
    "invalidSummaryExpression": "Expression non valide.",
    "validSummaryExpression": "Opération réussie !",
    "invalidProjectSettings": "Paramètres de projet non valides.<br/> Sélectionnez une valeur valide dans '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Astuce : fournissez une étiquette d’affichage pour le volet généré du paramètre en sortie.",
    "displayTextHint": "Astuce : ceci apparaîtra dans le volet des détails pour ce paramètre en sortie.",
    "inputTextHint": "Astuce : construisez votre expression ci-dessus en sélectionnant les noms en entrée, en sortie et de champ.",
    "expressionHint": "Astuce : sélectionnez des éléments et cliquez sur Ajouter pour construire une expression."
  }
});