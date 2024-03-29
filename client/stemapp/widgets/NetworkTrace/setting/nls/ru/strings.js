define({
  "taskUrl": "URL задачи",
  "setTask": "Задать",
  "setTaskPopupTitle": "Задать задачу",
  "validate": "Задать",
  "inValidGPService": "Введите корректный сервис геообработки.",
  "GPFeatureRecordSetLayerERR": "Введите сервис геообработки с входными данными только типа 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "Количество входных параметров меньше 1 или больше 3. Введите корректный сервис геообработки.",
  "projectSetting": {
    "title": "Настройки проекта",
    "note": "Примечание. Параметры проекта являются необязательными, после настройки пользователь может сохранить проект в нужных слоях веб-карты с областью отключения сети и входными параметрами. Пользователь может сохранить другие выходные параметры из группы «Выходные» на вкладке «Входные/Выходные».",
    "projectPolygonLayer": "Полигональный слой проекта",
    "outputParameterName": "Имя выходного параметра",
    "projectPointLayer": "Точечный слой проекта",
    "selectLabel": "Выбрать",
    "polygonLayerHelp": "<p>Будут показаны полигональные слои со следующими условиями:<br/><ul><li>У слоя должны быть возможности редактирования “Создание”, “Удаление” и “Обновление”</li><li>У слоя должно быть два поля с точными именами и типами данных:</li><ul><li>name (строковый тип поля)</li><li>globalid (тип поля GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Будут показаны выходные полигональные слои из URL задания<p/>",
    "pointLayerHelp": "<p>Будут показаны точечные слои со следующими условиями:<br/><ul><li>У слоя должны быть возможности редактирования “Создание”, “Удаление” и “Обновление”</li><li>У слоя должно быть два поля с точными именами и типами данных:</li><ul><li>inputtype (строковый тип поля)</li><li>projectid (тип поля GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Входные/Выходные",
    "inputSettingsLabel": "Входные настройки",
    "outputSettingsLabel": "Выходные настройки",
    "inputLabel": "Подпись",
    "inputTooltip": "Подсказка инструмента",
    "symbol": "Символ",
    "typeText": "Тип",
    "outputParametersText": "Выходные параметры",
    "saveToLayerText": "Сохранить в слой (дополнительно)",
    "skipText": "Можно пропустить",
    "visibilityText": "Видимый",
    "exportToCsvText": "Экспорт в CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Настройки",
    "addFieldTitle": "Добавить поле",
    "enterDisplayText": "Введите отображаемый текст",
    "setScale": "Установить масштаб",
    "outputDisplay": "Отображаемый текст",
    "saveToLayerHelp": "<p>Будут показаны слои со следующими условиями:<br/><ul><li>У слоя должны быть возможности редактирования “Создание”, “Удаление” и “Обновление”</li><li>У слоя должно быть два поля с именами и типами данных:</li><ul><li>parametername (строковый тип поля)</li><li>projectid (тип поля GUID)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Общие параметры",
    "summaryFieldsetText": "Настройки краткой информации",
    "inputOutput": "Входные/Выходные",
    "field": "Поля",
    "operator": "Операторы",
    "inputOperatorCountOption": "Количество",
    "outputOperatorCountOption": "Количество",
    "outputOperatorSkipCountOption": "SkipCount",
    "fieldOperatorSumOption": "Сумма",
    "fieldOperatorMinOption": "Мин",
    "fieldOperatorMaxOption": "Макс",
    "fieldOperatorMeanOption": "Среднее",
    "expressionAddButtonText": "Добавить",
    "expressionVerifyButtonText": "Проверить",
    "summaryEditorText": "Текст краткой информации",
    "autoZoomAfterTrace": "Дополнительные параметры",
    "zoomText": "Автоматическое приближение после трассировки",
    "summarSettingTooltipText": "Добавить число входа/выхода"
  },
  "validationErrorMessage": {
    "webMapError": "Слои на веб-карте не представлены. Выберите корректную веб-карту.",
    "inputTypeFlagGreaterThanError": "Вводов типа флагов не может быть больше одного.",
    "inputTypeFlagLessThanError": "Необходим по крайней мере один входной флаг.",
    "inputTypeBarrierErr": "Вводов типа барьеров не может быть больше одного.",
    "inputTypeSkipErr": "Вводов типа пропусков не может быть больше одного.",
    "displayTextForButtonError": "Отображаемый текст для кнопки запуска не может быть пустым.",
    "UnableToLoadGeoprocessError": "Не удалось загрузить сервис геообработки.",
    "invalidSummaryExpression": "Некорректное выражение",
    "validSummaryExpression": "Успешно !",
    "invalidProjectSettings": "Некорректные настройки проекта.<br/> Введите корректное значение в '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Подсказка: укажите отображаемую подпись для панели результатов выходного параметра.",
    "displayTextHint": "Подсказка: это будет отображаться на панели деталей для этого выходного параметра.",
    "inputTextHint": "Подсказка: создайте свое выражение выше, выбрав входные, выходные и имена полей.",
    "expressionHint": "Подсказка: выберите элементы и нажмите Добавить для построения выражения."
  }
});