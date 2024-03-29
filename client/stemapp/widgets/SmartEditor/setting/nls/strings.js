define({
  root: ({
    layersPage: {
      allLayers: "All Layers",
      title: "Select a template to create features",
      generalSettings: "General Settings",
      layerSettings: "Layer Settings",
      smartActionsTabTitle: "Smart Actions",
      attributeActionsTabTitle: "Attribute  Actions",
      presetValueText: "Define Preset Values",
      geocoderSettingsText: "Geocoder Settings",
      editDescription: "Provide display text for the edit panel",
      editDescriptionTip: "This text is displayed above the Template picker, leave blank for no text.",
      promptOnSave: "Prompt to save unsaved edits when form is closed or switched to the next record.",
      promptOnSaveTip: "Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits.",
      promptOnDelete: "Require confirmation when deleting a record.",
      promptOnDeleteTip: "Display a prompt when the user clicks delete to confirm the action.",
      removeOnSave: "Remove feature from selection on save.",
      removeOnSaveTip: "Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page.",
      useFilterEditor: "Use feature template filter",
      useFilterEditorTip: "Option to use the Filter Template picker which provides the ability to view one layer's template or search for templates by name.",
      displayShapeSelector: "Show drawing options",
      createNewFeaturesFromExisting: "Allow user to create new feature(s) from existing feature(s)",
      createNewFeaturesFromExistingTip: "Option to allow user to copy existing feature to create new features",
      copiedFeaturesOverrideDefaults: "Copied features values override defaults",
      copiedFeaturesOverrideDefaultsTip: "Values from the copied features will override the default template values only for the matched field(s)",
      displayShapeSelectorTip: "Option to show a list of valid drawing options for the selected template.",
      displayPresetTop: "Display preset value list on top",
      displayPresetTopTip: "Option to show the preset value list above the template picker.",
      listenToGroupFilter: "Apply filter values from Group Filter widget to Preset fields",
      listenToGroupFilterTip: "When a filter is applied in the Group Filter widget, apply the value to a matching field in the Preset value list.",
      keepTemplateActive: "Keep selected template active",
      keepTemplateActiveTip: "When the template picker is shown, if a template was previously selected, reselect it.",
      geometryEditDefault: "Enable geometry edit by default",
      autoSaveEdits: "Saves new feature automatically",
      enableAttributeUpdates : "Show Attribute Actions update button when edit geometry is active",
      enableAutomaticAttributeUpdates : "Automatically call Attribute Action after geometry update",
      enableLockingMapNavigation : "Enable locking of map navigation",
      enableMovingSelectedFeatureToGPS : "Enable moving of selected point feature to GPS location",
      enableMovingSelectedFeatureToXY : "Enable moving of selected point feature to XY location",
      featureTemplateLegendLabel : "Feature Template and Filter value Settings",
      saveSettingsLegendLabel : "Save Settings",
      geometrySettingsLegendLabel : "Geometry Settings",
      buttonPositionsLabel : "Position of Save, Delete, Back and Clear buttons",
      belowEditLabel : "Below Edit Form",
      aboveEditLabel : "Above Edit Form",
      layerSettingsTable: {
        allowDelete: "Allow Delete",
        allowDeleteTip: "Allow Delete - Option to allow the user to delete a feature; disabled if the layer does not support delete",
        edit: "Editable",
        editTip: "Editable - Option to include the layer in the widget",
        label: "Layer",
        labelTip: "Layer - Name of the layer as defined in the map",
        update: "Disable Geometry Editing",
        updateTip: "Disable Geometry Editing - Option to disable the ability to move the geometry once placed or move the geometry on an existing feature",
        allowUpdateOnly: "Update Only",
        allowUpdateOnlyTip: "Update Only - Option to allow only the modification of existing features, checked on by default and disabled if the layer does not support creating new features",
        fieldsTip: "Modify the fields to be edited and define Smart Attributes",
        actionsTip: "Actions - Option to edit fields or access related layers/tables",
        description: "Description",
        descriptionTip: "Description - Option to enter text to display on top of the attribute page.",
        relationTip: "View related layers and tables"
      },
      editFieldError: "Field modifications and Smart attributes are not available to layers that are not editable",
      noConfigedLayersError: "Smart Editor requires one or more editable layers",
      toleranceErrorMsg: "Invalid Defalut Intersection Tolerance value"

    },
    editDescriptionPage: {
      title: "Define attribute overview text for <b>${layername}</b> "
    },
    fieldsPage: {
      title: "Configure fields for <b>${layername}</b>",
      copyActionTip: "Attribute Actions",
      editActionTip: "Smart Actions",
      description: "Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields. Use the Actions copy button to activate and define field value source by intersection, address, coordinates and preset.",
      fieldsNotes: "* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record.",
      smartAttachmentText: "Configure the smart Attachments action",
      smartAttachmentPopupTitle: "Configure smart attachments for <b>${layername}</b>",
      fieldsSettingsTable: {
        display: "Display",
        displayTip: "Display - Determine whether the field is not visible",
        edit: "Editable",
        editTip: "Editable - Check on if the field is present in the attribute form",
        fieldName: "Name",
        fieldNameTip: "Name - Name of the field defined in the database",
        fieldAlias: "Alias",
        fieldAliasTip: "Alias - Name of the field defined in the map",
        canPresetValue: "Preset",
        canPresetValueTip: "Preset - Option to show the field in the preset field list and allow the user to set the value prior to editing",
        actions: "Actions",
        actionsTip: "Actions - Change the order of the fields or set up Smart Attributes"
      },
      smartAttSupport: "Smart Attributes are not supported on required database fields"
    },
    actionPage: {
      title: "Configure the Attribute Actions for <b>${fieldname}</b>",
      smartActionTitle: "Configure the Smart Attribute Actions for <b>${fieldname}</b>",
      description: "The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria.",
      copyAttributesNote: "Disabling any action having group name will be same as editiing that action independently, and it will remove the action for this field from the respective group.",
      actionsSettingsTable: {
        rule: "Action",
        ruleTip: "Action - Action performed when the criteria is satisfied",
        expression: "Expression",
        expressionTip: "Expression - The resulting expression in SQL format from the defined criteria",
        groupName: "Group Name",
        groupNameTip: "Group Name - Dispalys the group name from which the expression is applied",
        actions: "Criteria",
        actionsTip: "Criteria - Change the order of the rule and define the criteria when it is triggered"
      },
      copyAction: {
        description : "Field value source are processed in order if activated until a valid criteria is triggered or the list is completed. Use the Criteria Edit button to define the criteria.",
        intersection: "Intersection",
        coordinates: "Coordinates",
        address: "Address",
        preset: "Preset",
        actionText: "Actions",
        criteriaText: "Criteria",
        enableText: "Enabled"
      },
      actions: {
        hide: "Hide",
        required: "Required",
        disabled: "Disabled"
      },
      editOptionsPopup: {
        editAttributeGroupHint : "Warning: Edit independently will remove the selected attribute action associated for this field from the group",
        editGroupHint : "Warning: Edit independently will remove the selected smart action associated for this field from the group",
        popupTitle: "Choose editing option",
        editAttributeGroup : "The selected attribute action is defined from the group. Choose one of the following options to edit attribute action:",
        expression : "The expression of selected smart action is defined from the group. Choose one of the following options to edit smart action expression:",
        editGroupButton: "Edit Group",
        editIndependentlyButton: "Edit Independently"
      }
    },
    filterPage: {
      submitHidden: "Submit attribute data for this field even when hidden?",
      title: "Configure expression for the ${action} rule",
      filterBuilder: "Set action on field when record matches ${any_or_all} of the following expressions",
      noFilterTip: "Using the tools below, define the statement for when the action is active."
    },
    geocoderPage: {
      setGeocoderURL: "Set Geocoder URL", // Shown as a popup title while selecting geocoder URL
      hintMsg: "Note: You are changing the geocoder service, please be sure to update any geocoder field mappings you have configured.", //Show as text in geocoder popup
      invalidUrlTip: "The URL ${URL} is invalid or inaccessible." // Shown as error message if URL is invalid
    },
    addressPage: {
      popupTitle: "Address",
      checkboxLabel: "Get value from the Geocoder",
      selectFieldTitle: "Attribute",
      geocoderHint: "To change geocoder go to 'Geocoder Settings' button in general settings",
      prevConfigruedFieldChangedMsg: "Previously configured attribute is not found in the current geocoder settings. Attribute has been reset to default."
    },
    coordinatesPage: {
      popupTitle: "Coordinates",
      checkboxLabel: "Get coordinates",
      coordinatesSelectTitle: "Coordinate System",
      coordinatesAttributeTitle: "Attribute",
      mapSpatialReference: "Map Spatial Reference",
      latlong: "Latitude/Longitude",
      allGroupsCreatedMsg: "All possible groups are already created"
    },
    presetPage: {
      popupTitle: "Preset",
      checkboxLabel: "Field will be preset",
      presetValueLabel : "Current preset value is:",
      changePresetValueHint: "To change this preset value go to 'Define Preset Values' button in general settings"
    },
    intersectionPage: {
      groupNameLabel: "Name",
      dataTypeLabel: "Data Type",
      ignoreLayerRankingCheckboxLabel: "Ignore layer ranking and find closest feature across all defined layers",
      intersectingLayersLabel: "Layer(s) to extract a value",
      layerAndFieldsApplyLabel:"Layer(s) and field(s) to apply extracted value",
      checkboxLabel: "Get value from intersection layer's field",
      layerText: "Layers",
      fieldText: "Fields",
      actionsText: "Actions",
      toleranceSettingText: "Tolerance Settings",
      addLayerLinkText: "Add a Layer",
      useDefaultToleranceText: "Use Default Tolerance",
      toleranceValueText: "Tolerance Value",
      toleranceUnitText: "Tolerance Unit",
      useLayerName: "- Use Layer Name -",
      noLayersMessage: "No field found in any layer of the map which matches the selected data type."
    },
    presetAll: {
      popupTitle: "Define the default preset values",
      deleteTitle: "Delete preset value",
      hintMsg:"All unique preset fields name are listed here. Removing preset field will disable respective field as preset from all layers/tables."
    },
    intersectionTolerance: {
      intersectionTitle: "Default Intersection Tolerance"
    },
    smartActionsPage: {
      addNewSmartActionLinkText: "Add New",
      definedActions: "Defined Actions",
      priorityPopupTitle: "Set Smart Actions priority",
      priorityPopupColumnTitle: "Smart Actions",
      priorityOneText: "1",
      priorityTwoText: "2",
      priorityThreeText: "3",
      groupNameLabel: "Group Name",
      layerForExpressionLabel: "Layer for Expression",
      layerForExpressionNote: "Note: Selected layer's fields will be used to define criteria",
      expressionText: "Expression",
      editExpressionLabel: "Edit Expression",
      layerAndFieldsApplyLabel: "Layers and fields to apply on",
      submitAttributeText: "Submit attribute data for the selected hidden field(s)?",
      priorityColumnText: "Priority",
      requiredGroupNameMsg: "This value is required",
      uniqueGroupNameMsg: "Enter unique group name, group with this name allready exist.",
      deleteGroupPopupTitle: "Delete Smart Action Group",
      deleteGroupPopupMsg: "Deleting group will result in removing expression from all the associated Field(s) Action.",
      invalidExpression: "Expression cannot be blank",
      warningMsgOnLayerChange: "The defined expression and the fields which it is applied on will be cleared.",
      smartActionsTable: {
        name: "Name",
        expression: "Expression",
        definedFor: "Defined For"

      }
    },
    attributeActionsPage: {
      name: "Name",
      type: "Type",
      deleteGroupPopupTitle: "Delete Attribute Action Group",
      deleteGroupPopupMsg: "Deleting group will result in removing attribute action from all the associated Field(s).",
      alreadyAppliedActionMsg: "${action} action already applied on this field."
    },
    chooseFromLayer: {
      fieldLabel: "Field",
      valueLabel: "Value",
      selectValueLabel: "Select Value"
    },
    presetPopup: {
      presetValueLAbel: "Preset Value"
    },
    dataType: {
      esriFieldTypeString: "String",
      esriFieldTypeInteger: "Number",
      esriFieldTypeDate: "Date",
      esriFieldTypeGUID: "GUID"
    }
  }),
  "ar": 1,
  "bs": 1,
  "ca": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hi": 1,
  "hr": 1,
  "hu": 1,
  "it": 1,
  "id": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nb": 1,
  "nl": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sl": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "uk": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});