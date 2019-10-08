define({
  "taskUrl": "Görev URL'si",
  "setTask": "Ayarla",
  "setTaskPopupTitle": "Görev Ayarla",
  "validate": "Ayarla",
  "inValidGPService": "Lütfen geçerli coğrafi işlem servisi girin.",
  "GPFeatureRecordSetLayerERR": "Lütfen yalnızca ‘GPFeatureRecordSetLayer’ türünde girdiler içeren bir coğrafi işleme servisi girin.",
  "invalidInputParameters": "Girdi parametrelerinin sayısı 1’den az veya 3’ten çoktur. Lütfen geçerli bir coğrafi işlem servisi girin.",
  "projectSetting": {
    "title": "Proje Ayarları",
    "note": "Not: Proje Ayarları isteğe bağlıdır, yapılandırıldıktan sonra, kullanıcı projeyi istediği web haritası katmanlarında, ağ kesinti alanı ve girdi parametreleriyle birlikte saklayabilir. Kullanıcı, “Çıktı” grubundan alınan diğer çıktı parametrelerini “Girdi/Çıktı” sekmesinde saklayabilir.",
    "projectPolygonLayer": "Proje çokgen katmanı",
    "outputParameterName": "Çıktı parametre adı",
    "projectPointLayer": "Proje nokta katmanı",
    "selectLabel": "Seç",
    "polygonLayerHelp": "<p>Aşağıdaki koşulları içeren çokgen katmanları gösterilir:<br/><ul><li>Katmanın, “Oluştur”, “Sil” ve “Güncelle” adlı düzenleme yetenekleri olmalıdır</li><li>Katmanda aynı ad ve aynı veri türüne sahip 2 alan bulunmalıdır:</li><ul><li>name (Dizi türü alan)</li><li>globalid (GlobalID türü alan)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Görev URL’den alınan çıktı çokgen katmanları gösterilir<p/>",
    "pointLayerHelp": "<p>Aşağıdaki koşulları içeren nokta katmanları gösterilir:<br/><ul><li>Katmanın, “Oluştur”, “Sil” ve “Güncelle” adlı düzenleme yetenekleri olmalıdır</li><li>Katmanda aynı ad ve aynı veri türüne sahip 2 alan bulunmalıdır:</li><ul><li>inputtype (Dizi türü alan)</li><li>projectid (GIUD türü alan)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Girdi/Çıktı",
    "inputSettingsLabel": "Girdi Ayarları",
    "outputSettingsLabel": "Çıktı Ayarları",
    "inputLabel": "Etiket",
    "inputTooltip": "Araç ipucu",
    "symbol": "Sembol",
    "typeText": "Tür",
    "outputParametersText": "Çıktı Değişkenleri",
    "saveToLayerText": "Katmana Kaydet (İsteğe bağlı)",
    "skipText": "Atlanabilir",
    "visibilityText": "Görünür",
    "exportToCsvText": "CSV'ye Aktar",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Ayarlar",
    "addFieldTitle": "Alan Ekle",
    "enterDisplayText": "Görüntü metni girin",
    "setScale": "Ölçeği Ayarla",
    "outputDisplay": "Görüntü metni",
    "saveToLayerHelp": "<p>Aşağıdaki koşulları içeren katmanlar gösterilir:<br/><ul><li>Katmanın, “Oluştur”, “Sil” ve “Güncelle” adlı düzenleme yetenekleri olmalıdır</li><li>Katmanda ad ve veri türüne sahip iki alan bulunmalıdır:</li><ul><li>parametername (Dizi türü alan)</li><li>projectid (Guid türü alan)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Genel Ayarlar",
    "summaryFieldsetText": "Özet ayarlar",
    "inputOutput": "Girdiler/Çıktılar",
    "field": "Alanlar",
    "operator": "İşleçler",
    "inputOperatorCountOption": "Sayım",
    "outputOperatorCountOption": "Sayım",
    "outputOperatorSkipCountOption": "SayımıAtla",
    "fieldOperatorSumOption": "Toplam",
    "fieldOperatorMinOption": "Min",
    "fieldOperatorMaxOption": "Maks",
    "fieldOperatorMeanOption": "Ortalama",
    "expressionAddButtonText": "Ekle",
    "expressionVerifyButtonText": "Doğrula",
    "summaryEditorText": "Özet metin",
    "autoZoomAfterTrace": "İlave Seçenekler",
    "zoomText": "İzlemeden sonra otomatik yakınlaştır",
    "summarSettingTooltipText": "Giriş/çıkış sayımı ekle"
  },
  "validationErrorMessage": {
    "webMapError": "Web haritasında katman yok. Lütfen geçerli bir web haritası seçin.",
    "inputTypeFlagGreaterThanError": "Tür bayraklı girdi birden çok olamaz.",
    "inputTypeFlagLessThanError": "Tür bayraklı en az bir girdi gereklidir.",
    "inputTypeBarrierErr": "Engel türünde girdi birden çok olamaz.",
    "inputTypeSkipErr": "Atlama türünde girdi birden çok olamaz.",
    "displayTextForButtonError": "‘Çalıştır’ düğmesi görüntü metni boş olamaz.",
    "UnableToLoadGeoprocessError": "Coğrafi işlem servisi yüklenemiyor.",
    "invalidSummaryExpression": "Geçersiz ifade.",
    "validSummaryExpression": "Başarılı !",
    "invalidProjectSettings": "Geçersiz Proje Ayarları.<br/> Lütfen ‘${projectSetting}’ içinde geçerli değer seçin."
  },
  "hintText": {
    "labelTextHint": "İpucu: Çıktı parametresinin sonuç paneli için görüntü etiketi sağlayın.",
    "displayTextHint": "İpucu: Bu, bu çıktı parametresi için ayrıntılar panelinde görüntülenir.",
    "inputTextHint": "İpucu: Girdi, çıktı ve alan adlarını seçerek, yukarıda ifadenizi oluşturun.",
    "expressionHint": "İpucu: Öğeleri seçin ve ifadeyi oluşturmak için Ekle’ye tıklayın."
  }
});