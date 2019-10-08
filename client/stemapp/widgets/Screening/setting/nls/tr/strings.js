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
    "areaSquareFeetUnit": "Fitkare",
    "areaAcresUnit": "Akre",
    "areaSquareMetersUnit": "Metrekare",
    "areaSquareKilometersUnit": "Kilometrekare",
    "areaHectaresUnit": "Hektar",
    "lengthFeetUnit": "Feet",
    "lengthMilesUnit": "Mil",
    "lengthMetersUnit": "Metre",
    "lengthKilometersUnit": "Kilometre"
  },
  "analysisTab": {
    "analysisTabLabel": "Analiz",
    "selectAnalysisLayerLabel": "Analiz Katmanları",
    "addLayerLabel": "Katman Ekle",
    "noValidLayersForAnalysis": "Seçilen web haritasında geçerli katman bulunamadı.",
    "noValidFieldsForAnalysis": "Seçilen web haritasında geçerli alan bulunamadı. Lütfen seçilen katmanı kaldırın.",
    "addLayersHintText": "İpucu: Analize ve rapora eklenecek katmanları ve alanları seçin",
    "addLayerNameTitle": "Katman Adı",
    "addFieldsLabel": "Alan Ekle",
    "addFieldsPopupTitle": "Alanları Seç",
    "addFieldsNameTitle": "Alan Adları",
    "aoiToolsLegendLabel": "İlgi Alanı Araçları",
    "aoiToolsDescriptionLabel": "İlgi alanını oluşturmak için kullanılabilecek araçları seçin ve etiketleyin.",
    "placenameLabel": "Yer Adı",
    "drawToolsLabel": "Çizim araçları seçin",
    "uploadShapeFileLabel": "Bir shapefile yükle",
    "coordinatesLabel": "Koordinatlar",
    "coordinatesDrpDwnHintText": "İpucu: Girilen çapraz çizgilerin görüntüleneceği birimi seçin",
    "coordinatesBearingDrpDwnHintText": "İpucu: Girilen çapraz çizgilerin görüntüleneceği yönü seçin",
    "allowShapefilesUploadLabel": "Kullanıcıların analize eklenecek shapefile’ları yüklemelerine olanak tanı",
    "allowShapefilesUploadLabelHintText": "İpucu: Kullanıcıların kendi verilerini analiz raporuna eklenmek üzere bir shapefile olarak yükleyebilmeleri için Rapor sekmesine bir seçenek ekleyin",
    "allowVisibleLayerAnalysisLabel": "Görünür olmayan katmanlar için sonuçları analiz etme veya rapor etme",
    "allowVisibleLayerAnalysisHintText": "İpucu: Ölçek görünürlük ayarlarından dolayı kapatılan veya görülemeyen katmanlar analiz edilmez veya basılı veya indirilen sonuçlara dahil edilmez.",
    "areaUnitsLabel": "Analiz sonuçları için birimler (Alan)",
    "lengthUnitsLabel": "Analiz sonuçları için birimler (Uzunluk)",
    "maxFeatureForAnalysisLabel": "Analiz edilecek maksimum detay sayısı",
    "maxFeatureForAnalysisHintText": "İpucu: Analize eklenecek maksimum detay sayısını ayarlayın",
    "searchToleranceLabelText": "Arama toleransı",
    "searchToleranceHint": "İpucu: Arama toleransı nokta ve çizgi girişleri analiz edilirken kullanılır",
    "placenameButtonText": "Yer adı",
    "drawToolsButtonText": "Çiz",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Koordinatlar",
    "invalidLayerErrorMsg": "Lütfen alanları şunun için yapılandırın",
    "drawToolSelectableLayersLabel": "Seçilebilir katmanları seç",
    "drawToolSelectableLayersHint": "İpucu: Çizim aracı seç kullanılarak seçilebilecek detayları içeren katmanları seçin",
    "drawToolsSettingsFieldsetLabel": "Çizim Araçları",
    "drawToolPointLabel": "Nokta",
    "drawToolPolylineLabel": "Çoklu Çizgi",
    "drawToolExtentLabel": "Yayılım",
    "drawToolPolygonLabel": "Çokgen",
    "drawToolCircleLabel": "Daire",
    "selectDrawToolsText": "İlgi alanını oluşturmak için kullanılabilecek çizim araçlarını seçin.",
    "selectingDrawToolErrorMessage": "AOI (İlgi Alanı) Araçları için Çizim Araçları seçeneğini kullanmak üzere en az bir çizim aracı veya seçim katmanı seçin."
  },
  "downloadTab": {
    "downloadLegend": "İndirme Ayarları",
    "reportLegend": "Rapor Ayarları",
    "downloadTabLabel": "İndir",
    "syncEnableOptionLabel": "Detay katmanları",
    "syncEnableOptionHint": "İpucu: İndirilebilecek katmanları seçin ve her bir katmanın kullanılabileceği biçimleri belirtin. İndirilen veri kümeleri, ilgi alanıyla kesişen detayları içerir.",
    "syncEnableOptionNote": "Not: Dosya coğrafi veri tabanı ve shapefile indirmeleri, senkronize edilebilir detay katmanları gerektirir. Shapefile yalnızca, ArcGIS Online tarafından barındırılan detay katmanlarıyla desteklenir.",
    "extractDataTaskOptionLabel": "Veri Ayıklama Görevi coğrafi işleme servisi",
    "extractDataTaskOptionHint": "İpucu: Coğrafi veritabanı dosyası veya shapefile biçimindeki ilgi alanıyla kesişen detayları indirmek için yayınlanmış bir Veri Ayıklama Görevi coğrafi işleme servisi kullanın.",
    "cannotDownloadOptionLabel": "İndirmeyi devre dışı bırak",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Katman adı",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Coğrafi Veri Tabanı Dosyası",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "İndirmeye İzin Ver"
    },
    "setButtonLabel": "Ayarla",
    "GPTaskLabel": "Coğrafi işleme servisi url’sini belirtin",
    "printGPServiceLabel": "Servis URL’sini yazdır",
    "setGPTaskTitle": "Gerekli Coğrafi İşleme Servisi URL’sini Belirtin",
    "logoLabel": "Logo",
    "logoChooserHint": "İpucu: Raporun sol üst köşesinde gösterilen logoyu değiştirmek için görüntü simgesini tıklayın",
    "footnoteLabel": "Altbilgi",
    "columnTitleColorPickerLabel": "Rapor sütun başlığı rengi",
    "reportTitleLabel": "Rapor başlığı",
    "errorMessages": {
      "invalidGPTaskURL": "Geçersiz coğrafi işlem servisi. Veri Ayıklama Görevi içeren bir coğrafi işlem servisi seçin.",
      "noExtractDataTaskURL": "Veri Ayıklama Görevi içeren bir coğrafi işlem servisi seçin.",
      "duplicateCustomOption": "Mevcut ${duplicateValueSizeName} için girişi yineleyin.",
      "invalidLayoutWidth": "${customLayoutOptionValue} için geçersiz genişlik girildi.",
      "invalidLayoutHeight": "${customLayoutOptionValue} için geçersiz yükseklik girildi.",
      "invalidLayoutPageUnits": "${customLayoutOptionValue} için geçersiz sayfa birimi seçildi.",
      "failtofetchbuddyTaskDimension": "Hareketli görev boyutu bilgileri getirilirken hata oluştu. Lütfen tekrar deneyin.",
      "failtofetchbuddyTaskName": "Hareketli görev adı getirilirken hata oluştu. Lütfen tekrar deneyin.",
      "failtofetchChoiceList": "Baskı servisinden seçim listesi getirilirken hata oluştu. Lütfen tekrar deneyin.",
      "invalidWidth": "Geçersiz genişlik.",
      "invalidHeight": "Geçersiz yükseklik."
    },
    "addCustomLayoutTitle": "Özel düzen ekle",
    "customLayoutOptionHint": "İpucu: Baskı servisinizden baskı seçenekleri listesine düzen ekleyin.",
    "reportDefaultOptionLabel": "Varsayılan düzen",
    "pageSizeUnits": {
      "millimeters": "Milimetre",
      "points": "Noktalar"
    },
    "noDataTextRepresentation": "Veri değeri yok",
    "naTextRepresentation": "Değer uygulanamaz",
    "noDataDefaultText": "Veri Yok",
    "notApplicableDefaultText": "Yok"
  },
  "generalTab": {
    "generalTabLabel": "Genel",
    "tabLabelsLegend": "Panel Etiketleri",
    "tabLabelsHint": "İpucu: Etiketleri belirtin",
    "AOITabLabel": "İlgi alanı paneli",
    "ReportTabLabel": "Rapor paneli",
    "bufferSettingsLegend": "Tampon Ayarları",
    "defaultBufferDistanceLabel": "Varsayılan tampon mesafesi",
    "defaultBufferUnitsLabel": "Tampon birimleri",
    "generalBufferSymbologyHint": "İpucu: Tanımlanan ilgi alanı çevresinde tampon alanını göstermek için kullanılan semboloji",
    "aoiGraphicsSymbologyLegend": "İlgi Alanı Sembolojisi",
    "aoiGraphicsSymbologyHint": "İpucu: Nokta, çizgi ve alan biçiminde ilgi alanları tanımlamak için kullanılan semboloji",
    "pointSymbologyLabel": "Nokta",
    "previewLabel": "Önizleme",
    "lineSymbologyLabel": "Çizgi",
    "polygonSymbologyLabel": "Alan",
    "aoiBufferSymbologyLabel": "Tampon sembolojisi",
    "pointSymbolChooserPopupTitle": "Adres veya nokta konumu sembolü",
    "polygonSymbolChooserPopupTitle": "Çokgen sembolü",
    "lineSymbolChooserPopupTitle": "Çizgi sembolü",
    "aoiSymbolChooserPopupTitle": "Tampon sembolü",
    "aoiTabText": "AOI",
    "reportTabText": "Rapor",
    "invalidSymbolValue": "Geçersiz sembol değeri."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Kaynak Ayarlarını Ara",
    "searchSourceSettingTitle": "Kaynak Ayarlarını Ara",
    "searchSourceSettingTitleHintText": "Coğrafi kodlama hizmetlerini veya detay katmanlarını arama kaynağı olarak ekleyin ve yapılandırın. Belirtilen bu kaynaklar arama kutusunda neyin aranabileceğini belirler",
    "addSearchSourceLabel": "Arama Kaynağı Ekle",
    "featureLayerLabel": "Detay Katmanı",
    "geocoderLabel": "Coğrafi Kodlayıcı",
    "generalSettingLabel": "Genel Ayar",
    "allPlaceholderLabel": "Tümünü aramak için yer tutucu metin:",
    "allPlaceholderHintText": "İpucu: Tüm katmanları ve coğrafi kodlayıcıyı ararken yer tutucu olarak gösterilecek metni girin",
    "generalSettingCheckboxLabel": "Bulunan detay veya konum için açılır pencere göster",
    "countryCode": "Ülke veya Bölge Kodları",
    "countryCodeEg": "örneğin ",
    "countryCodeHint": "Bu değer boş bırakılırsa tüm ülkeler ve bölgeler aranır",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Yalnızca geçerli harita yayılımını ara",
    "locatorUrl": "Coğrafi Kodlayıcı URL'si",
    "locatorName": "Coğrafi Kodlayıcı Adı",
    "locatorExample": "Örnek",
    "locatorWarning": "Coğrafi kodlama servisinin bu sürümü desteklenmiyor. Araç, 10.0 veya üstü sürümdeki coğrafi kodlama servisini destekliyor.",
    "locatorTips": "Coğrafi kodlama hizmeti öneri özelliğini desteklemediğinden öneriler kullanılamıyor.",
    "layerSource": "Katman Kaynağı",
    "setLayerSource": "Kaynak Katmanı Ayarla",
    "setGeocoderURL": "Coğrafi Kodlayıcı URL'si Düzenle",
    "searchLayerTips": "Detay servisi sayfa oluşturma özelliğini desteklemediğinden öneriler kullanılamıyor.",
    "placeholder": "Yer Tutucu Metni",
    "searchFields": "Alanlarda Ara",
    "displayField": "Alan Görüntüle",
    "exactMatch": "Tam Eşleşme",
    "maxSuggestions": "Maksimum Öneri Sayısı",
    "maxResults": "Maksimum Sonuç Sayısı",
    "enableLocalSearch": "Yerel aramayı etkinleştir",
    "minScale": "Min Ölçek",
    "minScaleHint": "Harita ölçeği bu ölçekten daha büyük olduğunda yerel arama uygulanır",
    "radius": "Yarıçap",
    "radiusHint": "Coğrafi kodlama adaylarının sıralamasını yükseltmek için kullanılan geçerli harita merkezi etrafındaki bir alanın yarıçapını belirtir, böylelikle konuma en yakın olan adaylar öncelikli olarak döndürülür",
    "setSearchFields": "Arama Alanlarını Ayarla",
    "set": "Ayarla",
    "invalidUrlTip": "${URL} URL'si geçersiz veya erişilemez durumda.",
    "invalidSearchSources": "Geçersiz arama kaynağı ayarları"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Lütfen gerekli alanları doldurun",
    "bufferDistanceFieldsErrorMsg": "Geçerli değer girin",
    "invalidSearchToleranceErrorMsg": "Arama toleransı için geçerli değer girin",
    "atLeastOneCheckboxCheckedErrorMsg": "Geçersiz yapılandırma: En az bir İlgi Alanı aracı gereklidir.",
    "noLayerAvailableErrorMsg": "Kullanılabilir katman yok",
    "layerNotSupportedErrorMsg": "Desteklenmiyor ",
    "noFieldSelected": "Düzenleme işlemini kullanarak analiz alanlarını seçin.",
    "duplicateFieldsLabels": "Şunun için yinelenen \"${labelText}\" etiketi eklendi: \"${itemNames}\"",
    "noLayerSelected": "Lütfen analiz için en az bir katman seçin.",
    "errorInSelectingLayer": "Katman seçilemedi. Yeniden deneyin.",
    "errorInMaxFeatureCount": "Lütfen analiz için geçerli bir detay sayısı üst sınır değeri girin."
  }
});