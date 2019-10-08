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
    "areaSquareFeetUnit": "Pies cuadrados",
    "areaAcresUnit": "Acres",
    "areaSquareMetersUnit": "Metros cuadrados",
    "areaSquareKilometersUnit": "Kilómetros cuadrados",
    "areaHectaresUnit": "Hectáreas",
    "lengthFeetUnit": "Pies",
    "lengthMilesUnit": "Millas",
    "lengthMetersUnit": "Metros",
    "lengthKilometersUnit": "Kilómetros"
  },
  "analysisTab": {
    "analysisTabLabel": "Análisis",
    "selectAnalysisLayerLabel": "Capas de análisis",
    "addLayerLabel": "Agregar capas",
    "noValidLayersForAnalysis": "No se ha encontrado ninguna capa en el mapa web seleccionado.",
    "noValidFieldsForAnalysis": "No se ha encontrado ningún campo válido en el mapa web seleccionado. Elimine la capa seleccionada.",
    "addLayersHintText": "Sugerencia: Seleccione las capas y los campos que desea incluir en el análisis y el informe",
    "addLayerNameTitle": "Nombre de capa",
    "addFieldsLabel": "Agregar campo",
    "addFieldsPopupTitle": "Selecciona campos",
    "addFieldsNameTitle": "Nombres de campo",
    "aoiToolsLegendLabel": "Herramientas de Área de interés",
    "aoiToolsDescriptionLabel": "Elija y etiquete las herramientas disponibles para crear el área de interés.",
    "placenameLabel": "Nombre de lugar",
    "drawToolsLabel": "Elegir herramientas de dibujo",
    "uploadShapeFileLabel": "Cargar shapefile",
    "coordinatesLabel": "Coordenadas",
    "coordinatesDrpDwnHintText": "Sugerencia: Seleccione una unidad para mostrar los trazados poligonales introducidos",
    "coordinatesBearingDrpDwnHintText": "Sugerencia: Seleccione un rumbo para mostrar los trazados poligonales introducidos",
    "allowShapefilesUploadLabel": "Permitir a los usuarios cargar shapefiles para incluirlos en el análisis",
    "allowShapefilesUploadLabelHintText": "Sugerencia: Agregue una opción a la pestaña Informe en la que los usuarios puedan cargar sus propios datos como shapefile para incluirlo en el informe de análisis",
    "allowVisibleLayerAnalysisLabel": "No analizar ni ofrecer resultados sobre capas no visibles",
    "allowVisibleLayerAnalysisHintText": "Sugerencia: Las capas desactivadas o no visibles debido a la configuración de la visibilidad de la escala no se analizarán ni se incluirán en los resultados impresos o descargados.",
    "areaUnitsLabel": "Unidades de resultados de análisis (área)",
    "lengthUnitsLabel": "Unidades de resultados de análisis (longitud)",
    "maxFeatureForAnalysisLabel": "Número máximo de entidades a analizar",
    "maxFeatureForAnalysisHintText": "Sugerencia: Defina el número máximo de entidades que se incluirán en el análisis",
    "searchToleranceLabelText": "Tolerancia de búsqueda",
    "searchToleranceHint": "Sugerencia: La tolerancia de búsqueda se utiliza al analizar entradas de puntos y líneas",
    "placenameButtonText": "Nombre de lugar",
    "drawToolsButtonText": "Dibujar",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Coordenadas",
    "invalidLayerErrorMsg": "Configure los campos de",
    "drawToolSelectableLayersLabel": "Elegir capas seleccionables",
    "drawToolSelectableLayersHint": "Sugerencia: Seleccione las capas que contienen las entidades que se pueden seleccionar con la herramienta de dibujo Seleccionar",
    "drawToolsSettingsFieldsetLabel": "Herramientas de dibujo",
    "drawToolPointLabel": "Point",
    "drawToolPolylineLabel": "Polilínea",
    "drawToolExtentLabel": "Extensión",
    "drawToolPolygonLabel": "Polígono",
    "drawToolCircleLabel": "Círculo",
    "selectDrawToolsText": "Elegir las herramientas de dibujo disponibles para crear el área de interés",
    "selectingDrawToolErrorMessage": "Elija al menos una herramienta de dibujo o capa de selección para poder utilizar la opción Herramientas de dibujo en Herramientas AOI."
  },
  "downloadTab": {
    "downloadLegend": "Configuración de descarga",
    "reportLegend": "Ajustes de informe",
    "downloadTabLabel": "Descargar",
    "syncEnableOptionLabel": "Capas de entidades",
    "syncEnableOptionHint": "Sugerencia: Seleccione las capas que se pueden descargar y especifique los formatos en que cada capa está disponible. Los datasets descargados incluirán aquellas entidades que intersequen el área de interés.",
    "syncEnableOptionNote": "Nota: Las descargas de shapefiles y geodatabases de archivos requieren capas de entidades con la sincronización habilitada. El formato de shapefile solo es compatible con las capas de entidades alojadas de ArcGIS Online.",
    "extractDataTaskOptionLabel": "Servicio de geoprocesamiento Tarea de extracción de datos",
    "extractDataTaskOptionHint": "Sugerencia: Use un servicio de geoprocesamiento Tarea de extracción de datos publicado para descargar las entidades que se intersequen con el área de interés en los formatos de geodatabase de archivos o shapefile.",
    "cannotDownloadOptionLabel": "Deshabilitar descarga",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nombre de capa",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Geodatabase de archivos",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Permitir descarga"
    },
    "setButtonLabel": "Establecer",
    "GPTaskLabel": "Especificar la dirección URL del servicio de geoprocesamiento",
    "printGPServiceLabel": "URL del servicio de impresión",
    "setGPTaskTitle": "Especificar la dirección URL del servicio de geoprocesamiento requerido",
    "logoLabel": "Logo",
    "logoChooserHint": "Sugerencia: Haga clic en el icono de la imagen para cambiar el logotipo que aparece en la esquina superior izquierda del informe",
    "footnoteLabel": "Nota a pie de página",
    "columnTitleColorPickerLabel": "Color de título de la columna del informe",
    "reportTitleLabel": "Título del informe",
    "errorMessages": {
      "invalidGPTaskURL": "Servicio de geoprocesamiento no válido. Seleccione un servicio de geoprocesamiento que contenga una Tarea de extracción de datos.",
      "noExtractDataTaskURL": "Seleccione un servicio de geoprocesamiento que contenga una Tarea de extracción de datos.",
      "duplicateCustomOption": "Existe una entrada duplicada para ${duplicateValueSizeName}.",
      "invalidLayoutWidth": "Anchura no válida introducida para ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Altura no válida introducida para ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Unidad de página no válida seleccionada para ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Error al obtener información de dimensión de la tarea de acompañamiento. Inténtelo de nuevo.",
      "failtofetchbuddyTaskName": "Error al obtener el nombre de la tarea de acompañamiento. Inténtelo de nuevo.",
      "failtofetchChoiceList": "Error al obtener la lista de opciones del servicio de impresión. Inténtelo de nuevo.",
      "invalidWidth": "Ancho no válido.",
      "invalidHeight": "Altura no válida."
    },
    "addCustomLayoutTitle": "Agregar diseño personalizado",
    "customLayoutOptionHint": "Sugerencia: Agregue un diseño de su servicio de impresión a la lista de opciones de impresión.",
    "reportDefaultOptionLabel": "Diseño predeterminado",
    "pageSizeUnits": {
      "millimeters": "Milímetros",
      "points": "Puntos"
    },
    "noDataTextRepresentation": "Valor sin datos",
    "naTextRepresentation": "Valor no aplicable",
    "noDataDefaultText": "No hay datos",
    "notApplicableDefaultText": "N/A"
  },
  "generalTab": {
    "generalTabLabel": "General",
    "tabLabelsLegend": "Etiquetas del panel",
    "tabLabelsHint": "Sugerencia: especifique las etiquetas",
    "AOITabLabel": "Panel Área de interés",
    "ReportTabLabel": "Panel Informe",
    "bufferSettingsLegend": "Configuración de la zona de influencia",
    "defaultBufferDistanceLabel": "Distancia de zona de influencia predeterminada",
    "defaultBufferUnitsLabel": "Unidades de zona de influencia",
    "generalBufferSymbologyHint": "Sugerencia: La simbología se utilizará para indicar el área de zona de influencia alrededor del área de interés definida",
    "aoiGraphicsSymbologyLegend": "Simbología de Área de interés",
    "aoiGraphicsSymbologyHint": "Sugerencia: La simbología se utilizará para indicar áreas de interés de polígonos, líneas y puntos",
    "pointSymbologyLabel": "Punto",
    "previewLabel": "Previsualización",
    "lineSymbologyLabel": "Línea",
    "polygonSymbologyLabel": "Polígono",
    "aoiBufferSymbologyLabel": "Simbología de zona de influencia",
    "pointSymbolChooserPopupTitle": "Símbolo de dirección o ubicación de punto",
    "polygonSymbolChooserPopupTitle": "Símbolo de polígono",
    "lineSymbolChooserPopupTitle": "Símbolo de línea",
    "aoiSymbolChooserPopupTitle": "Símbolo de zona de influencia",
    "aoiTabText": "AOI",
    "reportTabText": "Informe",
    "invalidSymbolValue": "Valor de símbolo no válido."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Configuración de fuente de búsqueda",
    "searchSourceSettingTitle": "Configuración de fuente de búsqueda",
    "searchSourceSettingTitleHintText": "Agrega y configura servicios de geocodificación o capas de entidades como fuentes de búsqueda. Estas fuentes especificadas determinan qué se puede buscar en el cuadro de búsqueda",
    "addSearchSourceLabel": "Agregar origen de búsqueda",
    "featureLayerLabel": "Capa de entidades",
    "geocoderLabel": "Geocodificador",
    "generalSettingLabel": "Configuración general",
    "allPlaceholderLabel": "Texto del marcador de posición para buscar en todo:",
    "allPlaceholderHintText": "Sugerencia: escriba el texto que se va a mostrar como marcador de posición mientras busca todas las capas y el geocodificador",
    "generalSettingCheckboxLabel": "Mostrar ventana emergente de la entidad o la ubicación encontrada",
    "countryCode": "Código(s) de país o región",
    "countryCodeEg": "p. ej., ",
    "countryCodeHint": "Si se deja este valor en blanco, se buscará en todos los países y regiones",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Buscar solo en la extensión de mapa actual",
    "locatorUrl": "Dirección URL del geocodificador",
    "locatorName": "Nombre del geocodificador",
    "locatorExample": "Ejemplo",
    "locatorWarning": "No se admite esta versión del servicio de geocodificación. El widget admite servicios de geocodificación 10.0 y superiores.",
    "locatorTips": "No hay sugerencias disponibles porque el servicio de geocodificación no admite la opción de sugerencias.",
    "layerSource": "Origen de capa",
    "setLayerSource": "Establecer origen de capa",
    "setGeocoderURL": "Establecer dirección URL de geocodificador",
    "searchLayerTips": "No hay sugerencias disponibles porque el servicio de entidades no admite la opción de paginación.",
    "placeholder": "Texto del marcador de posición",
    "searchFields": "Campos de búsqueda",
    "displayField": "Mostrar campo",
    "exactMatch": "Coincidencia exacta",
    "maxSuggestions": "Máximo de sugerencias",
    "maxResults": "Resultados máximos",
    "enableLocalSearch": "Habilitar búsqueda local",
    "minScale": "Escala Mínima",
    "minScaleHint": "Si la escala del mapa es mayor que esta escala, se aplicará la búsqueda local",
    "radius": "Radio",
    "radiusHint": "Permite especificar el radio de un área alrededor del centro del mapa actual que se utilizará para mejorar la clasificación de los candidatos de geocodificación a fin de que se devuelvan primero aquellos más cercanos a la ubicación",
    "setSearchFields": "Establecer campos de búsqueda",
    "set": "Establecer",
    "invalidUrlTip": "No se puede acceder a la dirección URL ${URL} o bien no es válida.",
    "invalidSearchSources": "Configuración de fuente de búsqueda no válida"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Rellene los campos obligatorios",
    "bufferDistanceFieldsErrorMsg": "Introduzca valores válidos",
    "invalidSearchToleranceErrorMsg": "Introduzca un valor válido para la tolerancia de búsqueda",
    "atLeastOneCheckboxCheckedErrorMsg": "Configuración no válida: se requiere al menos una herramienta de Área de interés.",
    "noLayerAvailableErrorMsg": "No hay capas disponibles",
    "layerNotSupportedErrorMsg": "No compatible ",
    "noFieldSelected": "Use la acción de editar para seleccionar los campos para el análisis.",
    "duplicateFieldsLabels": "Se ha agregado una etiqueta duplicada \"${labelText}\" para: \"${itemNames}\"",
    "noLayerSelected": "Seleccione al menos una capa para el análisis.",
    "errorInSelectingLayer": "No se puede seleccionar la capa. Inténtelo de nuevo.",
    "errorInMaxFeatureCount": "Introduzca un recuento máximo de entidades válido para el análisis."
  }
});