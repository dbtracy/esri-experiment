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
    "areaSquareFeetUnit": "Τετραγωνικά πόδια",
    "areaAcresUnit": "Έικρ",
    "areaSquareMetersUnit": "Τετραγωνικά μέτρα",
    "areaSquareKilometersUnit": "Τετραγωνικά χιλιόμετρα",
    "areaHectaresUnit": "Εκτάρια",
    "lengthFeetUnit": "Πόδια",
    "lengthMilesUnit": "Μίλια",
    "lengthMetersUnit": "Μέτρα",
    "lengthKilometersUnit": "Χιλιόμετρα"
  },
  "analysisTab": {
    "analysisTabLabel": "Ανάλυση",
    "selectAnalysisLayerLabel": "Θεματικά επίπεδα ανάλυσης",
    "addLayerLabel": "Προσθήκη θεματικών επιπέδων",
    "noValidLayersForAnalysis": "Δεν βρέθηκαν έγκυρα θεματικά επίπεδα στον επιλεγμένο web χάρτη.",
    "noValidFieldsForAnalysis": "Δεν βρέθηκαν έγκυρα πεδία στον επιλεγμένο web χάρτη. Καταργήστε το επιλεγμένο θεματικό επίπεδο.",
    "addLayersHintText": "Υπόδειξη: Επιλέξτε τα θεματικά επίπεδα και τα πεδία που θα περιλαμβάνονται στην ανάλυση και στην αναφορά.",
    "addLayerNameTitle": "Όνομα θεματικού επιπέδου",
    "addFieldsLabel": "Προσθήκη πεδίου",
    "addFieldsPopupTitle": "Επιλογή πεδίων",
    "addFieldsNameTitle": "Ονόματα πεδίων",
    "aoiToolsLegendLabel": "Εργαλεία περιοχής ενδιαφέροντος",
    "aoiToolsDescriptionLabel": "Επιλέξτε και επισημάνετε τα εργαλεία που είναι διαθέσιμα για τη δημιουργία της περιοχής ενδιαφέροντος.",
    "placenameLabel": "Όνομα τόπου",
    "drawToolsLabel": "Επιλογή εργαλείων σχεδίασης",
    "uploadShapeFileLabel": "Μεταφόρτωση shapefile",
    "coordinatesLabel": "Συντεταγμένες",
    "coordinatesDrpDwnHintText": "Υπόδειξη: Επιλέξτε μια μονάδα για την εμφάνιση των καταχωρισμένων προκαθορισμένων διαδρομών.",
    "coordinatesBearingDrpDwnHintText": "Υπόδειξη: Επιλέξτε διόπτευση για την εμφάνιση των καταχωρισμένων προκαθορισμένων διαδρομών.",
    "allowShapefilesUploadLabel": "Να επιτρέπεται στους χρήστες να μεταφορτώνουν shapefile που θα περιλαμβάνονται στην ανάλυση.",
    "allowShapefilesUploadLabelHintText": "Υπόδειξη: Προσθέστε μια επιλογή στην καρτέλα «Αναφορά» με την οποία οι χρήστες θα μπορούν να μεταφορτώνουν δικά τους δεδομένα ως shapefile ώστε να περιλαμβάνονται στην αναφορά της ανάλυσης.",
    "allowVisibleLayerAnalysisLabel": "Μην αναλύετε ή αναφέρετε αποτελέσματα θεματικών επιπέδων που δεν είναι ορατά",
    "allowVisibleLayerAnalysisHintText": "Υπόδειξη: Δεν θα γίνει ανάλυση ή συμπερίληψη σε εκτυπωμένα ή μεταφορτωμένα αποτελέσματα θεματικών επιπέδων που έχουν απενεργοποιηθεί ή δεν είναι ορατά λόγω των ρυθμίσεων ορατότητας κλίμακας.",
    "areaUnitsLabel": "Μονάδες για αποτελέσματα ανάλυσης (εμβαδόν)",
    "lengthUnitsLabel": "Μονάδες για αποτελέσματα ανάλυσης (μήκος)",
    "maxFeatureForAnalysisLabel": "Ανώτατος αριθμός στοιχείων προς ανάλυση",
    "maxFeatureForAnalysisHintText": "Υπόδειξη: Καθορίστε τον ανώτατο αριθμό των στοιχείων που θα περιλαμβάνονται στην ανάλυση.",
    "searchToleranceLabelText": "Ανοχή αναζήτησης",
    "searchToleranceHint": "Υπόδειξη: Η ανοχή αναζήτησης χρησιμοποιείται κατά την ανάλυση εισόδων σημείων και γραμμών.",
    "placenameButtonText": "Όνομα τόπου",
    "drawToolsButtonText": "Σχεδίαση",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Συντεταγμένες",
    "invalidLayerErrorMsg": "Διαμορφώστε τα πεδία για",
    "drawToolSelectableLayersLabel": "Επιλογή επιλέξιμων θεματικών επιπέδων",
    "drawToolSelectableLayersHint": "Υπόδειξη: Επιλέξτε τα θεματικά επίπεδα που περιέχουν τα στοιχεία τα οποία θα μπορούν να επιλεχθούν κατά τη χρήση του εργαλείου σχεδίασης της δυνατότητας «Επιλογή».",
    "drawToolsSettingsFieldsetLabel": "Εργαλεία σχεδίασης",
    "drawToolPointLabel": "Σημείο",
    "drawToolPolylineLabel": "Σύνθετη Γραμμή",
    "drawToolExtentLabel": "Έκταση",
    "drawToolPolygonLabel": "Πολύγωνο",
    "drawToolCircleLabel": "Κύκλος",
    "selectDrawToolsText": "Επιλέξτε τα εργαλεία σχεδίασης που είναι διαθέσιμα για τη δημιουργία της περιοχής ενδιαφέροντος.",
    "selectingDrawToolErrorMessage": "Επιλέξτε τουλάχιστον ένα εργαλείο σχεδίασης ή θεματικό επίπεδο επιλογής που θα χρησιμοποιείται στην επιλογή «Εργαλεία σχεδίασης» για εργαλεία AOI."
  },
  "downloadTab": {
    "downloadLegend": "Ρυθμίσεις λήψης",
    "reportLegend": "Ρυθμίσεις αναφοράς",
    "downloadTabLabel": "Λήψη",
    "syncEnableOptionLabel": "Feature layer",
    "syncEnableOptionHint": "Υπόδειξη: Επιλέξτε τα θεματικά επίπεδα που μπορούν να ληφθούν και καθορίστε τα μορφότυπα στα οποία είναι διαθέσιμο κάθε θεματικό επίπεδο. Τα ληφθέντα σύνολα δεδομένων θα περιλαμβάνουν όσα στοιχεία τέμνουν την περιοχή ενδιαφέροντος.",
    "syncEnableOptionNote": "Σημείωση: Για τη λήψη file geodatabase και shapefile απαιτούνται feature layer με δυνατότητα συγχρονισμού. Το μορφότυπο shapefile υποστηρίζεται μόνο με hosted feature layer του ArcGIS Online.",
    "extractDataTaskOptionLabel": "Geoprocessing service εργασίας εξαγωγής δεδομένων",
    "extractDataTaskOptionHint": "Υπόδειξη: Χρησιμοποιήστε μια δημοσιευμένη υπηρεσία γεωεπεξεργασίας για Εργασία εξαγωγής δεδομένων ώστε να προχωρήσετε στη λήψη στοιχείων που τέμνουν την περιοχή ενδιαφέροντος σε μορφότυπα file geodatabase ή shapefile.",
    "cannotDownloadOptionLabel": "Απενεργοποίηση λήψης",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Όνομα θεματικού επιπέδου",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "File Geodatabase",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Δυνατότητα λήψης"
    },
    "setButtonLabel": "Ορισμός",
    "GPTaskLabel": "Καθορισμός url για geoprocessing service",
    "printGPServiceLabel": "Διεύθυνση URL υπηρεσίας εκτύπωσης",
    "setGPTaskTitle": "Καθορισμός απαιτούμενου Geoprocessing Service URL",
    "logoLabel": "Λογότυπο",
    "logoChooserHint": "Υπόδειξη: Κάντε κλικ στο εικονίδιο της εικόνας για να αλλάξετε το λογότυπο που εμφανίζεται στην επάνω δεξιά γωνία της αναφοράς.",
    "footnoteLabel": "Υποσημείωση",
    "columnTitleColorPickerLabel": "Χρώμα τίτλου στηλών αναφοράς",
    "reportTitleLabel": "Τίτλος αναφοράς",
    "errorMessages": {
      "invalidGPTaskURL": "Μη έγκυρη υπηρεσία γεωεπεξεργασίας. Επιλέξτε μια υπηρεσία γεωεπεξεργασίας που να περιέχει μια Εργασία εξαγωγής δεδομένων.",
      "noExtractDataTaskURL": "Επιλέξτε μια υπηρεσία γεωεπεξεργασίας που να περιέχει μια Εργασία εξαγωγής δεδομένων.",
      "duplicateCustomOption": "Υπάρχει διπλότυπη εγγραφή για ${duplicateValueSizeName} .",
      "invalidLayoutWidth": "Καταχωρίσατε μη έγκυρο πλάτος για ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Καταχωρίσατε μη έγκυρο ύψος για ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Επιλέξατε μη έγκυρη μονάδα σελίδας για ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Σφάλμα κατά τη λήψη πληροφοριών διαστάσεων φιλικής εργασίας. Προσπαθήστε ξανά.",
      "failtofetchbuddyTaskName": "Σφάλμα κατά τη λήψη ονόματος φιλικής εργασίας. Προσπαθήστε ξανά.",
      "failtofetchChoiceList": "Σφάλμα κατά τη λήψη της λίστας επιλογών από την υπηρεσία εκτύπωσης. Προσπαθήστε ξανά.",
      "invalidWidth": "Μη έγκυρο πλάτος.",
      "invalidHeight": "Μη έγκυρο ύψος."
    },
    "addCustomLayoutTitle": "Προσθήκη εξατομικευμένης διάταξης",
    "customLayoutOptionHint": "Υπόδειξη: Προσθέστε διάταξη από την υπηρεσία εκτύπωσης που χρησιμοποιείτε στη λίστα των επιλογών εκτύπωσης.",
    "reportDefaultOptionLabel": "Προεπιλεγμένη διάταξη",
    "pageSizeUnits": {
      "millimeters": "Χιλιοστά",
      "points": "Σημεία"
    },
    "noDataTextRepresentation": "Δεν υπάρχουν τιμές δεδομένων.",
    "naTextRepresentation": "Μη εφαρμόσιμη τιμή",
    "noDataDefaultText": "Δεν υπάρχουν δεδομένα.",
    "notApplicableDefaultText": "Δ/Ι"
  },
  "generalTab": {
    "generalTabLabel": "Γενικά",
    "tabLabelsLegend": "Ετικέτες πλαισίου",
    "tabLabelsHint": "Υπόδειξη: Καθορίστε ετικέτες",
    "AOITabLabel": "Πίνακας περιοχής ενδιαφέροντος",
    "ReportTabLabel": "Πίνακας αναφοράς",
    "bufferSettingsLegend": "Ρυθμίσεις ζώνης",
    "defaultBufferDistanceLabel": "Προεπιλεγμένη απόσταση ζώνης",
    "defaultBufferUnitsLabel": "Μονάδες ζώνης",
    "generalBufferSymbologyHint": "Υπόδειξη: Η συμβολολογία χρησιμοποιείται για να υποδείξει την περιοχή της ζώνης γύρω από την καθορισμένη περιοχή ενδιαφέροντος.",
    "aoiGraphicsSymbologyLegend": "Συμβολολογία περιοχής ενδιαφέροντος",
    "aoiGraphicsSymbologyHint": "Υπόδειξη: Η συμβολολογία χρησιμοποιείται για να υποδείξει περιοχές ενδιαφέροντος με σημεία, γραμμές και πολύγωνα.",
    "pointSymbologyLabel": "Σημείο",
    "previewLabel": "Προεπισκόπηση",
    "lineSymbologyLabel": "Γραμμή",
    "polygonSymbologyLabel": "Πολύγωνο",
    "aoiBufferSymbologyLabel": "Συμβολολογία ζώνης",
    "pointSymbolChooserPopupTitle": "Σύμβολο διεύθυνσης ή τοποθεσίας σημείου",
    "polygonSymbolChooserPopupTitle": "Σύμβολο πολυγώνου",
    "lineSymbolChooserPopupTitle": "Σύμβολο γραμμής",
    "aoiSymbolChooserPopupTitle": "Σύμβολο ζώνης",
    "aoiTabText": "AOI",
    "reportTabText": "Αναφορά",
    "invalidSymbolValue": "Μη έγκυρη τιμή συμβόλου."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Ρυθμίσεις αναζήτησης πηγής",
    "searchSourceSettingTitle": "Ρυθμίσεις αναζήτησης πηγής",
    "searchSourceSettingTitleHintText": "Προσθέστε και διαμορφώστε geocode service ή feature layer ως πηγές αναζήτησης. Αυτές οι καθορισμένες πηγές προσδιορίζουν τι μπορείτε να αναζητήσετε στο πλαίσιο αναζήτησης",
    "addSearchSourceLabel": "Προσθήκη πηγής αναζήτησης",
    "featureLayerLabel": "Feature Layer",
    "geocoderLabel": "Γεωκωδικοποίηση",
    "generalSettingLabel": "Γενική ρύθμιση",
    "allPlaceholderLabel": "Κείμενο υπόδειξης για αναζήτηση όλων:",
    "allPlaceholderHintText": "Υπόδειξη: Εισαγάγετε κείμενο που θα εμφανίζεται ως θέση περιγραφής κατά την αναζήτηση σε όλα τα επίπεδα και το εργαλείο γεωκωδικοποίησης",
    "generalSettingCheckboxLabel": "Εμφάνιση αναδυόμενου παράθυρου για το στοιχείο ή την τοποθεσία που βρέθηκε",
    "countryCode": "Κωδικοί χώρας ή περιοχής",
    "countryCodeEg": "π.χ. ",
    "countryCodeHint": "Εάν αφήσετε κενή αυτήν την τιμή, θα γίνει αναζήτηση σε όλες τις χώρες και περιοχές",
    "questionMark": ";",
    "searchInCurrentMapExtent": "Αναζήτηση μόνο στην τρέχουσα έκταση χάρτη",
    "locatorUrl": "URL Εργαλείου Γεωκωδικοποίησης",
    "locatorName": "Όνομα εργαλείου γεωκωδικοποίησης",
    "locatorExample": "Παράδειγμα",
    "locatorWarning": "Αυτή η έκδοση του geocoding service δεν υποστηρίζεται. Το widget υποστηρίζει geocoding service έκδοσης 10.0 και νεότερες.",
    "locatorTips": "Δεν διατίθενται προτάσεις επειδή το geocoding service δεν υποστηρίζει δυνατότητα προτάσεων.",
    "layerSource": "Πηγή θεματικού επιπέδου",
    "setLayerSource": "Ορισμός πηγής θεματικού επιπέδου",
    "setGeocoderURL": "Ορισμός URL Εργαλείου γεωκωδικοποίησης",
    "searchLayerTips": "Δεν διατίθενται προτάσεις επειδή το feature service δεν υποστηρίζει δυνατότητα σελιδοποίησης.",
    "placeholder": "Κείμενο υπόδειξης",
    "searchFields": "Πεδία αναζήτησης",
    "displayField": "Πεδίο εμφάνισης",
    "exactMatch": "Ακριβής αντιστοιχία",
    "maxSuggestions": "Μέγιστος αριθμός προτάσεων",
    "maxResults": "Μέγιστος αριθμός αποτελέσματα",
    "enableLocalSearch": "Ενεργοποίηση τοπικής αναζήτησης",
    "minScale": "Ελάχιστη κλίμακα",
    "minScaleHint": "Όταν η κλίμακα του χάρτη είναι μεγαλύτερη από αυτήν την κλίμακα, εφαρμόζεται τοπική αναζήτηση",
    "radius": "Ακτίνα",
    "radiusHint": "Προσδιορίζει την ακτίνα μιας περιοχής γύρω από το κέντρο του τρέχοντα χάρτη που χρησιμοποιείται για να ενισχύσει την κατάταξη των υποψηφίων γεωκωδικοποίησης, ώστε να εμφανίζονται πρώτα οι υποψήφιοι που βρίσκονται πιο κοντά στην τοποθεσία",
    "setSearchFields": "Ορισμός πεδίων αναζήτησης",
    "set": "Ορισμός",
    "invalidUrlTip": "Η URL διεύθυνση ${URL} είναι μη έγκυρη ή χωρίς δυνατότητα πρόσβασης.",
    "invalidSearchSources": "Μη έγκυρες ρυθμίσεις πηγής αναζήτησης"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Συμπληρώστε τα απαιτούμενα πεδία.",
    "bufferDistanceFieldsErrorMsg": "Εισαγάγετε έγκυρες τιμές",
    "invalidSearchToleranceErrorMsg": "Εισαγάγετε έγκυρη τιμή για την ανοχή αναζήτησης",
    "atLeastOneCheckboxCheckedErrorMsg": "Μη έγκυρη παραμετροποίηση: Απαιτείται τουλάχιστον ένα εργαλείο περιοχής ενδιαφέροντος.",
    "noLayerAvailableErrorMsg": "Δεν υπάρχουν διαθέσιμα θεματικά επίπεδα",
    "layerNotSupportedErrorMsg": "Δεν υποστηρίζεται ",
    "noFieldSelected": "Χρησιμοποιήστε την ενέργεια επεξεργασίας για την επιλογή πεδίων προς ανάλυση.",
    "duplicateFieldsLabels": "Διπλότυπη ετικέτα \"${labelText}\" προστέθηκε για: \"${itemNames}\"",
    "noLayerSelected": "Επιλέξτε τουλάχιστον ένα θεματικό επίπεδο για ανάλυση.",
    "errorInSelectingLayer": "Δεν είναι δυνατή η επιλογή θεματικού επιπέδου. Προσπαθήστε ξανά.",
    "errorInMaxFeatureCount": "Καταχωρίστε έγκυρο ανώτατο αριθμό στοιχείων προς ανάλυση."
  }
});