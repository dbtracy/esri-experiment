define({
  "taskUrl": "URL zadatka",
  "setTask": "Postavi",
  "setTaskPopupTitle": "Postavi zadatak",
  "validate": "Postavi",
  "inValidGPService": "Unesite važeću uslugu geoprocesiranja.",
  "GPFeatureRecordSetLayerERR": "Unesite uslugu geoprocesiranja samo s unosima tipa „GPFeatureRecordSetLayer”.",
  "invalidInputParameters": "Broj ulaznih parametara manji je od 1 ili veći od 3. Unesite važeću uslugu geoprocesiranja.",
  "projectSetting": {
    "title": "Postavke projekta",
    "note": "Napomena: Postavke projekta nisu obavezne, kad se konfiguriraju, korisnik može pohraniti projekt u željene slojeve web-karte s mrežnim područjem nestanka struje i ulaznim parametrima. Korisnik može pohraniti druge izlazne parametre iz grupe „Izlaz” na kartici „Ulaz/Izlaz”.",
    "projectPolygonLayer": "Poligonalni sloj projekta",
    "outputParameterName": "Naziv izlaznog parametra",
    "projectPointLayer": "Točkasti sloj projekta",
    "selectLabel": "Odaberi",
    "polygonLayerHelp": "<p>Prikazat će se poligonalni slojevi sa sljedećim uvjetima:<br/><ul><li>Sloj mora imati mogućnosti uređivanja, i to „Stvori”, „Izbriši” i „Ažuriraj”</li><li>Sloj mora imati 2 polja s točnom vrstom naziva i podataka:</li><ul><li>naziv (polje niza)</li><li>globalid (polje vrste GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Prikazat će se izlazni poligonski slojevi s URL-a zadatka<p/>",
    "pointLayerHelp": "<p>Prikazat će se točkasti slojevi sa sljedećim uvjetima: <br/><ul><li>Sloj mora imati mogućnosti uređivanja, i to „Stvori”, „Izbriši” i „Ažuriraj”</li><li>Sloj mora imati 2 polja s točnom vrstom naziva i podataka:</li><ul><li>inputtype (polje niza)</li><li>projectid (polje vrste GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Ulaz/Izlaz",
    "inputSettingsLabel": "Ulazne postavke",
    "outputSettingsLabel": "Izlazne postavke",
    "inputLabel": "Oznaka",
    "inputTooltip": "Opis elementa",
    "symbol": "Simbol",
    "typeText": "Vrsta",
    "outputParametersText": "Izlazni parametri",
    "saveToLayerText": "Spremi u sloj (neobavezno)",
    "skipText": "Može se preskočiti",
    "visibilityText": "Vidljivo",
    "exportToCsvText": "Izvezi u CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Postavke",
    "addFieldTitle": "Dodaj polje",
    "enterDisplayText": "Unesi tekst za prikaz",
    "setScale": "Postavi mjerilo",
    "outputDisplay": "Tekst za prikaz",
    "saveToLayerHelp": "<p>Prikazat će se sloj sa sljedećim uvjetima:<br/><ul><li>Sloj mora imati mogućnosti uređivanja, i to „Stvori”, „Izbriši” i „Ažuriraj”</li><li>Sloj mora imati dva polja s vrstom naziva i podataka:</li><ul><li>parametername (polje niza)</li><li>projectid (polje vrste Guid)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Opće postavke",
    "summaryFieldsetText": "Postavke sažetka",
    "inputOutput": "Ulazi/Izlazi",
    "field": "Polja",
    "operator": "Rukovatelji",
    "inputOperatorCountOption": "Zbroj",
    "outputOperatorCountOption": "Zbroj",
    "outputOperatorSkipCountOption": "Broj preskakanja",
    "fieldOperatorSumOption": "Zbroj",
    "fieldOperatorMinOption": "Min.",
    "fieldOperatorMaxOption": "Maks.",
    "fieldOperatorMeanOption": "Prosjek",
    "expressionAddButtonText": "Dodaj",
    "expressionVerifyButtonText": "Provjeri",
    "summaryEditorText": "Tekst sažetka",
    "autoZoomAfterTrace": "Dodatne opcije",
    "zoomText": "Automatsko zumiranje nakon praćenja",
    "summarSettingTooltipText": "Dodaj zbroj unosa/izlaza"
  },
  "validationErrorMessage": {
    "webMapError": "Na web-karti nema dostupnih slojeva. Odaberite valjanu web-kartu.",
    "inputTypeFlagGreaterThanError": "Unos zastavice vrste ne može biti više od jednog.",
    "inputTypeFlagLessThanError": "Potreban je barem jedan unos zastavice vrste.",
    "inputTypeBarrierErr": "Unos prepreke vrste ne može biti više od jednog.",
    "inputTypeSkipErr": "Unos preskakanja vrste ne može biti više od jednog.",
    "displayTextForButtonError": "Tekst za prikaz za gumb „Pokreni” ne može biti prazan.",
    "UnableToLoadGeoprocessError": "Nije moguće učitati uslugu geoprocesiranja.",
    "invalidSummaryExpression": "Nevaljani izraz.",
    "validSummaryExpression": "Uspjeh!",
    "invalidProjectSettings": "Nevaljane postavke projekta.<br/> Odaberite važeću vrijednost u '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Savjet: navedite oznaku prikaza za ploču rezultata izlaznog parametra.",
    "displayTextHint": "Savjet: to će se prikazati na ploči s pojedinostima za ovaj izlazni parametar.",
    "inputTextHint": "Savjet: sastavite prethodno navedeni izraz odabirom naziva ulaza, izlaza i polja.",
    "expressionHint": "Savjet: odaberite stavke i kliknite Dodaj za sastavljanje izraza."
  }
});