define({
  "taskUrl": "작업 URL",
  "setTask": "설정",
  "setTaskPopupTitle": "작업 설정",
  "validate": "설정",
  "inValidGPService": "유효한 지오프로세싱 서비스를 입력하세요.",
  "GPFeatureRecordSetLayerERR": "입력 유형이 'GPFeatureRecordSetLayer'인 지오프로세싱 서비스만 입력하세요.",
  "invalidInputParameters": "입력 매개변수의 수가 1개 미만이거나 3개를 초과합니다. 유효한 지오프로세싱 서비스를 입력하세요.",
  "projectSetting": {
    "title": "프로젝트 설정",
    "note": "참고: 프로젝트 설정은 선택 사항입니다. 이 설정을 구성한 경우에는 사용자가 네트워크 중단 영역 및 입력 매개변수와 함께 원하는 웹맵 레이어에 프로젝트를 저장할 수 있습니다. 사용자는 \"입력/결과\" 탭의 \"결과\" 그룹에서 다른 결과 매개변수를 저장할 수 있습니다.",
    "projectPolygonLayer": "프로젝트 폴리곤 레이어",
    "outputParameterName": "결과 매개변수 이름",
    "projectPointLayer": "프로젝트 포인트 레이어",
    "selectLabel": "선택",
    "polygonLayerHelp": "<p>다음과 같은 조건의 폴리곤 레이어가 표시됩니다.<br/><ul><li>'생성', '삭제', '업데이트'라는 편집 기능이 있어야 하는 레이어</li><li>다음과 같은 이름과 데이터 유형이 사용된 2개의 필드가 있어야 하는 레이어</li><ul><li>name(문자열 유형 필드)</li><li>globalid(GlobalID 유형 필드)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>작업 URL의 결과 폴리곤 레이어가 표시됩니다.<p/>",
    "pointLayerHelp": "<p>다음과 같은 조건의 포인트 레이어가 표시됩니다.<br/><ul><li>'생성', '삭제', '업데이트'라는 편집 기능이 있어야 하는 레이어</li><li>다음과 같은 이름과 데이터 유형이 사용된 2개의 필드가 있어야 하는 레이어</li><ul><li>inputtype(문자열 유형 필드)</li><li>projectid(GUID 유형 필드)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "입력/결과",
    "inputSettingsLabel": "입력 설정",
    "outputSettingsLabel": "결과 설정",
    "inputLabel": "레이블",
    "inputTooltip": "도구 팁",
    "symbol": "심볼",
    "typeText": "유형",
    "outputParametersText": "결과 변수",
    "saveToLayerText": "레이어에 저장(옵션)",
    "skipText": "건너뛸 수 있음",
    "visibilityText": "가시",
    "exportToCsvText": "CSV로 내보내기",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "설정",
    "addFieldTitle": "필드 추가",
    "enterDisplayText": "표시 텍스트 입력",
    "setScale": "축척 설정",
    "outputDisplay": "표시 텍스트",
    "saveToLayerHelp": "<p>다음과 같은 조건의 레이어가 표시됩니다.<br/><ul><li>'생성', '삭제', '업데이트'라는 편집 기능이 있어야 하는 레이어</li><li>다음과 같은 이름과 데이터 유형이 사용된 2개의 필드가 있어야 하는 레이어</li><ul><li>parametername(문자열 유형 필드)</li><li>projectid(GUID 유형 필드)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "일반 설정",
    "summaryFieldsetText": "요약 설정",
    "inputOutput": "입력/결과",
    "field": "필드",
    "operator": "연산자",
    "inputOperatorCountOption": "개수",
    "outputOperatorCountOption": "개수",
    "outputOperatorSkipCountOption": "건너뛰기 개수",
    "fieldOperatorSumOption": "합계",
    "fieldOperatorMinOption": "최소값",
    "fieldOperatorMaxOption": "최대값",
    "fieldOperatorMeanOption": "평균",
    "expressionAddButtonText": "추가",
    "expressionVerifyButtonText": "검증",
    "summaryEditorText": "요약 텍스트",
    "autoZoomAfterTrace": "추가 옵션",
    "zoomText": "추적 후 자동 확대",
    "summarSettingTooltipText": "입력/결과 개수 추가"
  },
  "validationErrorMessage": {
    "webMapError": "웹맵에 레이어가 없습니다. 유효한 웹맵을 선택하세요.",
    "inputTypeFlagGreaterThanError": "플래그 유형의 입력은 1개 이하여야 합니다.",
    "inputTypeFlagLessThanError": "하나 이상의 플래그 유형 입력이 필요합니다.",
    "inputTypeBarrierErr": "장애물 유형의 입력은 1개 이하여야 합니다.",
    "inputTypeSkipErr": "건너뛰기 유형의 입력은 1개 이하여야 합니다.",
    "displayTextForButtonError": "'실행' 버튼의 표시 텍스트는 비워 둘 수 없습니다.",
    "UnableToLoadGeoprocessError": "지오프로세싱 서비스를 불러올 수 없습니다.",
    "invalidSummaryExpression": "식이 유효하지 않습니다.",
    "validSummaryExpression": "수고하셨습니다!",
    "invalidProjectSettings": "유효하지 않은 프로젝트 설정입니다.<br/> '${projectSetting}'에서 유효한 값을 선택하세요."
  },
  "hintText": {
    "labelTextHint": "힌트: 결과 매개변수의 결과 패널에 대한 표시 레이블을 제공하세요.",
    "displayTextHint": "힌트: 이 결과 매개변수의 세부정보 패널에 표시됩니다.",
    "inputTextHint": "힌트: 입력, 결과, 필드 이름을 선택하여 위의 식을 작성하세요.",
    "expressionHint": "힌트: 항목을 선택한 다음 추가를 클릭하여 식을 작성합니다."
  }
});