define({
  "taskUrl": "URL da Tarefa",
  "setTask": "Configurar",
  "setTaskPopupTitle": "Definir Tarefa",
  "validate": "Configurar",
  "inValidGPService": "Insira serviço de geoprocessamento válido.",
  "GPFeatureRecordSetLayerERR": "Insira um serviço de geoprocessamento com entradas do tipo 'GPFeatureRecordSetLayer’ somente.",
  "invalidInputParameters": "O número de parâmetros de entrada é menor que 1 ou maior que 3. Insira um serviço de geoprocessamento válido.",
  "projectSetting": {
    "title": "Configurações do projeto",
    "note": "Nota: As Configurações do Projeto são opcionais, após configurado,  o usuário pode armazenar o projeto nas camadas do mapa da web desejadas com área de interrupção de rede e parâmetros de entrada. O usuário pode armazenar outros parâmetros de saída do grupo “Saída” na guia “Entrada/Saída”.",
    "projectPolygonLayer": "Camada de polígono do projeto",
    "outputParameterName": "Nome do parâmetro de saída",
    "projectPointLayer": "Camada de ponto do projeto",
    "selectLabel": "Selecionar",
    "polygonLayerHelp": "<p>As camadas de polígono com as condições seguintes serão exibidas:<br/><ul><li>A camada deve ter recursos de edição, isto é, “Criar”, “Excluir” e “Atualizar”</li><li>A camada deve ter 2 campos com nome e tipo de dados exatos:</li><ul><li>nome (campo de tipo String )</li><li>globalid (campo de tipo GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>As camadas de polígono de saída da URL da tarefa serão mostradas<p/>",
    "pointLayerHelp": "<p>As camadas de ponto com as condições seguintes serão exibidas:<br/><ul><li>A camada deve ter recursos de edição, isto é, “Criar”, “Excluir” e “Atualizar”</li><li>A camada deve ter 2 campos com nome e tipo de dados exatos:</li><ul><li>inputtype (campo de tipo String)</li><li>projectid (campo de tipo GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Entrada/Saída",
    "inputSettingsLabel": "Configurações de Entrada",
    "outputSettingsLabel": "Configurações de Saída",
    "inputLabel": "Rótulo",
    "inputTooltip": "Dica da Ferramenta",
    "symbol": "Símbolo",
    "typeText": "Tipo",
    "outputParametersText": "Parâmetros de Saída",
    "saveToLayerText": "Salvar na Camada (Opcional)",
    "skipText": "Ignorável",
    "visibilityText": "Visível",
    "exportToCsvText": "Exportar para CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Configurações",
    "addFieldTitle": "Adicionar Campo",
    "enterDisplayText": "Inserir texto de visualização",
    "setScale": "Configurar Escala",
    "outputDisplay": "Exibir texto",
    "saveToLayerHelp": "<p>A camada com as condições seguintes serão exibidas:<br/><ul><li>A camada deve ter recursos de edição, isto é, “Criar”, “Excluir” e “Atualizar”</li><li>A camada deve ter dois campos com nome e tipo de dados::</li><ul><li>parametername (campo de tipo String)</li><li>projectid (campo de tipo Guid)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Configurações Gerais",
    "summaryFieldsetText": "Configurações sumárias",
    "inputOutput": "Entradas/Saídas",
    "field": "Campos",
    "operator": "Operadores",
    "inputOperatorCountOption": "Contagem",
    "outputOperatorCountOption": "Contagem",
    "outputOperatorSkipCountOption": "SkipCount",
    "fieldOperatorSumOption": "Soma",
    "fieldOperatorMinOption": "Mín",
    "fieldOperatorMaxOption": "Máx",
    "fieldOperatorMeanOption": "Média",
    "expressionAddButtonText": "Adicionar",
    "expressionVerifyButtonText": "Verificar",
    "summaryEditorText": "Texto sumário",
    "autoZoomAfterTrace": "Opções Adicionais",
    "zoomText": "Zoom automático após traçado",
    "summarSettingTooltipText": "Adicionar contagem de entrada/saída"
  },
  "validationErrorMessage": {
    "webMapError": "Nenhuma camada disponível no mapa da web. Selecione um mapa da web válido.",
    "inputTypeFlagGreaterThanError": "Entrada de tipo de bandeira não pode ser mais de uma.",
    "inputTypeFlagLessThanError": "Pelo menos uma entrada de tipo de bandeira é exigida.",
    "inputTypeBarrierErr": "Entrada de tipo de barreira não pode ser mais de uma.",
    "inputTypeSkipErr": "Entrada de tipo de pulo não pode ser mais de uma.",
    "displayTextForButtonError": "Texto de exibição do botão 'Executar’ não pode estar em branco.",
    "UnableToLoadGeoprocessError": "Não é possível carregar serviço de geoprocessamento.",
    "invalidSummaryExpression": "Expressão inválida.",
    "validSummaryExpression": "Bem Sucedido !",
    "invalidProjectSettings": "Configurações do Projeto Inválidas.<br/>Selecione o valor válido em '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Sugestão: Forneça rótulo de exibição para painel do resultado do parâmetro de saída.",
    "displayTextHint": "Sugestão: Isto será exibido no painel de detalhes deste parâmetro de saída.",
    "inputTextHint": "Sugestão: Construa sua expressão acima selecionando entrada, saída e nomes de campo.",
    "expressionHint": "Sugestão: Selecione itens e clique em adicionar para construir expressão."
  }
});