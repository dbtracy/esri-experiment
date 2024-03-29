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
  "_widgetLabel": "スクリーニング",
  "geometryServicesNotFound": "ジオメトリ サービスを利用できません。",
  "unableToDrawBuffer": "バッファーを描画できません。もう一度やり直してください。",
  "invalidConfiguration": "無効な構成です。",
  "clearAOIButtonLabel": "やり直す",
  "noGraphicsShapefile": "アップロードされたシェープファイルにグラフィックスが含まれていません。",
  "zoomToLocationTooltipText": "位置にズーム",
  "noGraphicsToZoomMessage": "拡大するグラフィックスが見つかりません。",
  "placenameWidget": {
    "placenameLabel": "位置の検索"
  },
  "drawToolWidget": {
    "useDrawToolForAOILabel": "描画モードの選択",
    "toggleSelectability": "クリックして選択可能設定を切り替えます",
    "chooseLayerTitle": "選択可能なレイヤーの選択",
    "selectAllLayersText": "すべて選択",
    "layerSelectionWarningTooltip": "AOI を作成するために少なくとも 1 つのレイヤーを選択する必要があります",
    "selectToolLabel": "[選択] ツール"
  },
  "shapefileWidget": {
    "shapefileLabel": "圧縮されたシェープファイルのアップロード",
    "uploadShapefileButtonText": "アップロード",
    "unableToUploadShapefileMessage": "シェープファイルをアップロードできません。"
  },
  "coordinatesWidget": {
    "selectStartPointFromSearchText": "始点の定義",
    "addButtonTitle": "追加",
    "deleteButtonTitle": "削除",
    "mapTooltipForStartPoint": "マップをクリックして始点を定義",
    "mapTooltipForUpdateStartPoint": "マップをクリックして始点を更新",
    "locateText": "検索",
    "locateByMapClickText": "初期座標の選択",
    "enterBearingAndDistanceLabel": "始点からの方位と距離を入力",
    "bearingTitle": "方位",
    "distanceTitle": "距離",
    "planSettingTooltip": "プラン設定",
    "invalidLatLongMessage": "有効な値を入力してください。"
  },
  "bufferDistanceAndUnit": {
    "bufferInputTitle": "バッファー距離 (オプション)",
    "bufferInputLabel": "範囲内の結果を表示",
    "bufferDistanceLabel": "バッファー距離",
    "bufferUnitLabel": "バッファー単位"
  },
  "traverseSettings": {
    "bearingLabel": "方位",
    "lengthLabel": "長さ",
    "addButtonTitle": "追加",
    "deleteButtonTitle": "削除",
    "deleteBearingAndLengthLabel": "今すぐ方位と長さを削除",
    "addButtonLabel": "方位と長さの追加"
  },
  "planSettings": {
    "expandGridTooltipText": "グリッドの展開",
    "collapseGridTooltipText": "グリッドをたたむ",
    "directionUnitLabelText": "方向単位",
    "distanceUnitLabelText": "距離と長さの単位",
    "planSettingsComingSoonText": "近日公開"
  },
  "newTraverse": {
    "invalidBearingMessage": "無効な方位です。",
    "invalidLengthMessage": "無効な長さです。",
    "negativeLengthMessage": "負の長さ"
  },
  "reportsTab": {
    "aoiAreaText": "AOI の面積",
    "downloadButtonTooltip": "ダウンロード",
    "printButtonTooltip": "印刷",
    "uploadShapefileForAnalysisText": "解析に含めるシェープファイルのアップロード",
    "uploadShapefileForButtonText": "参照",
    "downloadLabelText": "形式の選択:",
    "downloadBtnText": "ダウンロード",
    "noDetailsAvailableText": "結果が見つかりませんでした",
    "featureCountText": "個数",
    "featureAreaText": "面積",
    "featureLengthText": "長さ",
    "attributeChooserTooltip": "表示する属性を選択",
    "csv": "CSV",
    "filegdb": "ファイル ジオデータベース",
    "shapefile": "シェープファイル",
    "noFeaturesFound": "選択したファイル形式の結果が見つかりませんでした",
    "selectReportFieldTitle": "フィールドの選択",
    "noFieldsSelected": "フィールドが選択されていません",
    "intersectingFeatureExceedsMsgOnCompletion": "1 つ以上のレイヤーで最大レコード数に到達しています。",
    "unableToAnalyzeText": "解析できません。最大レコード数に到達しています。",
    "errorInPrintingReport": "レポートを印刷できません。 レポート設定が有効であるか確認してください。",
    "aoiInformationTitle": "対象地域 (AOI) 情報",
    "summaryReportTitle": "サマリー",
    "notApplicableText": "N/A",
    "downloadReportConfirmTitle": "ダウンロードの確認",
    "downloadReportConfirmMessage": "ダウンロードしますか？",
    "noDataText": "データはありません",
    "createReplicaFailedMessage": "次のレイヤーのダウンロード操作が失敗しました。 <br/> ${layerNames}",
    "extractDataTaskFailedMessage": "ダウンロード操作に失敗しました。",
    "printLayoutLabelText": "レイアウト",
    "printBtnText": "印刷",
    "printDialogHint": "注意: レポートのタイトルとコメントは、レポート プレビューで編集できます。",
    "unableToDownloadFileGDBText": "ポイントまたはラインの位置を含む AOI の場合、ファイル ジオデータベースをダウンロードできません。",
    "unableToDownloadShapefileText": "ポイントまたはラインの位置を含む AOI の場合、シェープファイルをダウンロードできません。",
    "analysisAreaUnitLabelText": "面積の結果の表示単位:",
    "analysisLengthUnitLabelText": "長さの結果の表示単位:",
    "analysisUnitButtonTooltip": "解析の単位の選択",
    "analysisCloseBtnText": "閉じる",
    "areaSquareFeetUnit": "平方フィート",
    "areaAcresUnit": "エーカー",
    "areaSquareMetersUnit": "平方メートル",
    "areaSquareKilometersUnit": "平方キロメートル",
    "areaHectaresUnit": "ヘクタール",
    "lengthFeetUnit": "フィート",
    "lengthMilesUnit": "マイル",
    "lengthMetersUnit": "メートル",
    "lengthKilometersUnit": "キロメートル",
    "hectaresAbbr": "ヘクタール",
    "layerNotVisibleText": "解析できません。 レイヤーが非表示になっているか、縮尺の表示設定の範囲外です。",
    "refreshBtnTooltip": "レポートの更新",
    "featureCSVAreaText": "交差しているエリア",
    "featureCSVLengthText": "交差している長さ",
    "errorInFetchingPrintTask": "印刷タスク情報の取得中にエラーが発生しました。もう一度試してください。",
    "selectAllLabel": "すべて選択",
    "errorInLoadingProjectionModule": "投影モジュールの依存関係を読み込み中にエラーが発生しました。 ファイルをもう一度ダウンロードしてみてください。",
    "expandCollapseIconLabel": "交差するフィーチャ",
    "intersectedFeatureLabel": "交差するフィーチャの詳細"
  }
});