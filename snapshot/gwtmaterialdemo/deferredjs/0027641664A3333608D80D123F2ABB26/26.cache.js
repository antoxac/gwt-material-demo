$wnd.gwtmaterialdemo.runAsyncCallback26("function $addCloseHandler_2(this$static, handler){\n  return $addHandler_0(this$static, new MaterialDatePicker$2(this$static, handler), TYPE_15?TYPE_15:(TYPE_15 = new GwtEvent$Type));\n}\n\nfunction $addOpenHandler_2(this$static, handler){\n  return $addHandler_0(this$static, new MaterialDatePicker$3(this$static, handler), (!TYPE_16 && (TYPE_16 = new GwtEvent$Type) , TYPE_16));\n}\n\nfunction $addValueChangeHandler_3(this$static, handler){\n  return $addHandler_0(this$static, new MaterialDatePicker$1(this$static, handler), (!TYPE_19 && (TYPE_19 = new GwtEvent$Type) , TYPE_19));\n}\n\nfunction $setFormat(this$static){\n  if (this$static.initialized) {\n    throw new IllegalStateException_0('setFormat can be called only before initialization');\n  }\n  this$static.format = 'Yehey yyyy mm dd';\n}\n\nfunction $setSelectionType(this$static, selectionType){\n  if (this$static.initialized) {\n    throw new IllegalStateException_0('setSelectionType can be called only before initialization');\n  }\n  this$static.selectionType = selectionType;\n}\n\nfunction MaterialDatePicker$1(this$0, val$handler){\n  this.this$01 = this$0;\n  this.val$handler2 = val$handler;\n}\n\ndefineClass(1408, 1, $intern_42, MaterialDatePicker$1);\n_.onValueChange = function onValueChange_4(event_0){\n  $isEnabled(this.this$01) && $onValueChange_1(event_0);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialDatePicker$1_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialDatePicker/1', 1408);\nfunction MaterialDatePicker$2(this$0, val$handler){\n  this.this$01 = this$0;\n  this.val$handler2 = val$handler;\n}\n\ndefineClass(1409, 1, $intern_45, MaterialDatePicker$2);\n_.onClose = function onClose_4(event_0){\n  $isEnabled(this.this$01) && $onClose_2(event_0);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialDatePicker$2_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialDatePicker/2', 1409);\nfunction MaterialDatePicker$3(this$0, val$handler){\n  this.this$01 = this$0;\n  this.val$handler2 = val$handler;\n}\n\ndefineClass(1410, 1, $intern_75, MaterialDatePicker$3);\n_.onOpen = function onOpen_3(event_0){\n  $isEnabled(this.this$01) && $onOpen_1(event_0);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialDatePicker$3_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialDatePicker/3', 1410);\nfunction PickersPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(704, 53, $intern_52, PickersPresenter);\n_.onReveal = function onReveal_44(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Date Picker', 'A dialog picker is used to select a single date on mobile. The selected day is indicated by a filled circle. The current day is indicated by a different color and type weight.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersPresenter', 704);\nfunction PickersView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_22(new PickersView_BinderImpl$Widgets(this)));\n  $setDateMin(this.dpLimit, new Date_1(117, 0, 1));\n  $setDateMax(this.dpLimit, new Date_1(117, 0, 15));\n  $addOpenHandler_2(this.dpEvents, new PickersView$1);\n  $addCloseHandler_2(this.dpEvents, new PickersView$2);\n  $addValueChangeHandler_3(this.dpEvents, new PickersView$3);\n}\n\ndefineClass(963, 56, $intern_53, PickersView);\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView', 963);\nfunction $onOpen_1(event_0){\n  $getPickerDate(dynamicCast(event_0.target_0, 140))?fireToast('Opened Date Picker ' + $getPickerDate(dynamicCast(event_0.target_0, 140))):$toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Opened Date Picker', $intern_63, null);\n}\n\nfunction PickersView$1(){\n}\n\ndefineClass(964, 1, $intern_75, PickersView$1);\n_.onOpen = function onOpen_6(event_0){\n  $onOpen_1(event_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView/1', 964);\nfunction $onClose_2(event_0){\n  fireToast('Closed Date Picker with value ' + $getPickerDate(dynamicCast(event_0.target_0, 140)));\n}\n\nfunction PickersView$2(){\n}\n\ndefineClass(965, 1, $intern_45, PickersView$2);\n_.onClose = function onClose_9(event_0){\n  $onClose_2(event_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView/2', 965);\nfunction $onValueChange_1(event_0){\n  fireToast('Date Selected ' + event_0.value_0);\n}\n\nfunction PickersView$3(){\n}\n\ndefineClass(966, 1, $intern_42, PickersView$3);\n_.onValueChange = function onValueChange_10(event_0){\n  $onValueChange_1(event_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView/3', 966);\nfunction PickersView_BinderImpl(){\n}\n\ndefineClass(1305, 1, {}, PickersView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl', 1305);\nfunction $build_f_HTMLPanel1_22(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialDatePicker3, f_PrettyPre4, f_MaterialTitle5, f_MaterialDatePicker6, f_MaterialTitle7, f_MaterialDatePicker8, f_PrettyPre9, f_MaterialTitle10, dp, btnSetDate, btnGetDate, f_PrettyPre11, f_PrettyPre12, f_MaterialTitle13, dpFormat, btnSetFormat, f_PrettyPre14, f_MaterialTitle15, dpLimit, f_PrettyPre16, f_MaterialTitle17, dpClear, btnClear, f_PrettyPre18, f_MaterialTitle19, dpEvents, f_PrettyPre20, sb, sb_0, sb_1, sb_2, sb_3, sb_4, sb_5, sb_6;\n  f_HTMLPanel1 = new HTMLPanel($html9_3(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13, this$static.domId14, this$static.domId15, this$static.domId16, this$static.domId17, this$static.domId18, this$static.domId19, this$static.domId20, this$static.domId21, this$static.domId22, this$static.domId23, this$static.domId24, this$static.domId25, this$static.domId26, this$static.domId27).html_0);\n  __attachRecord__ = attachToDom(f_HTMLPanel1.element);\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId13Element);\n  $get_0(this$static.domId14Element);\n  $get_0(this$static.domId15Element);\n  $get_0(this$static.domId16Element);\n  $get_0(this$static.domId17Element);\n  $get_0(this$static.domId18Element);\n  $get_0(this$static.domId19Element);\n  $get_0(this$static.domId20Element);\n  $get_0(this$static.domId21Element);\n  $get_0(this$static.domId22Element);\n  $get_0(this$static.domId23Element);\n  $get_0(this$static.domId24Element);\n  $get_0(this$static.domId25Element);\n  $get_0(this$static.domId26Element);\n  $get_0(this$static.domId27Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML(f_MaterialTitle2.header.element, 'Date Picker') , $setText_9(f_MaterialTitle2.paragraph, 'Material Datepicker') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialDatePicker3 = new MaterialDatePicker , f_MaterialDatePicker3.placeholder = 'Date' , f_MaterialDatePicker3.initialized && $setText_7(f_MaterialDatePicker3.lblName, 'Date') , f_MaterialDatePicker3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre4 = new PrettyPre , $setHTML_0(f_PrettyPre4, (sb = new StringBuilder , sb.string += '&lt;m:MaterialDatePicker ui:field=\"dp\" placeholder=\"Date\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre4.element, 'lang-xml', true) , setStyleName(f_PrettyPre4.element, 'z-depth-1', true) , f_PrettyPre4), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle5 = new MaterialTitle , $setInnerHTML(f_MaterialTitle5.header.element, 'Disabled Styles') , $setText_9(f_MaterialTitle5.paragraph, \"You can disable the datepicker by adding enabled='false'\") , f_MaterialTitle5), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialDatePicker6 = new MaterialDatePicker , $setEnabled_3((!f_MaterialDatePicker6.enabledMixin && (f_MaterialDatePicker6.enabledMixin = new EnabledMixin(f_MaterialDatePicker6)) , f_MaterialDatePicker6.enabledMixin), false) , $setEnabled_0(f_MaterialDatePicker6.dateInput) , f_MaterialDatePicker6.placeholder = 'Birthday' , f_MaterialDatePicker6.initialized && $setText_7(f_MaterialDatePicker6.lblName, 'Birthday') , f_MaterialDatePicker6), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML(f_MaterialTitle7.header.element, 'Date Picker Selection Types') , $setText_9(f_MaterialTitle7.paragraph, \"You can set easily the selection type of your datepicker by adding an attribute, selectionType='YEAR'. Here is the available formats [DAY, MONTH_DAY, YEAR_MONTH_DAY, YEAR]\") , f_MaterialTitle7), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialDatePicker8 = new MaterialDatePicker , f_MaterialDatePicker8.placeholder = 'Date' , f_MaterialDatePicker8.initialized && $setText_7(f_MaterialDatePicker8.lblName, 'Date') , $setSelectionType(f_MaterialDatePicker8, ($clinit_MaterialDatePicker$MaterialDatePickerType() , YEAR)) , f_MaterialDatePicker8), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre9 = new PrettyPre , $setHTML_0(f_PrettyPre9, (sb_0 = new StringBuilder , sb_0.string += '&lt;m:MaterialDatePicker placeholder=\"Date\" selectionType=\"YEAR\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre9.element, 'lang-xml', true) , setStyleName(f_PrettyPre9.element, 'z-depth-1', true) , f_PrettyPre9), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle10 = new MaterialTitle , $setInnerHTML(f_MaterialTitle10.header.element, 'setDate() and getDate()') , f_MaterialTitle10), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (dp = new MaterialDatePicker , dp.placeholder = 'Date' , dp.initialized && $setText_7(dp.lblName, 'Date') , $setSelectionType(dp, YEAR) , this$static.owner.dp = dp , dp), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (btnSetDate = new MaterialButton , btnSetDate.span_1.setText('Set Date to January 1 2020') , $add_11(btnSetDate, btnSetDate.span_1) , $addClickHandler(btnSetDate, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , btnSetDate), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (btnGetDate = new MaterialButton , btnGetDate.span_1.setText('Get the date') , $add_11(btnGetDate, btnGetDate.span_1) , $addClickHandler(btnGetDate, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnGetDate), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre11 = new PrettyPre , $setHTML_0(f_PrettyPre11, (sb_1 = new StringBuilder , sb_1.string += '\\u2003// setDate();<br> dp.setDate(new Date(116, 0,1));' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre11.element, 'lang-java', true) , setStyleName(f_PrettyPre11.element, 'z-depth-1', true) , f_PrettyPre11), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb_2 = new StringBuilder , sb_2.string += '\\u2003// getDate();<br> dp.getDate();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre12.element, 'lang-java', true) , setStyleName(f_PrettyPre12.element, 'z-depth-1', true) , f_PrettyPre12), $get_0(this$static.domId13Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle13 = new MaterialTitle , $setInnerHTML(f_MaterialTitle13.header.element, 'Formats') , $setText_9(f_MaterialTitle13.paragraph, \"You can set the format of the date picker by adding format='FORMAT'\") , f_MaterialTitle13), $get_0(this$static.domId14Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (dpFormat = new MaterialDatePicker , dpFormat.placeholder = 'Custom Format' , dpFormat.initialized && $setText_7(dpFormat.lblName, 'Custom Format') , $setFormat(dpFormat) , this$static.owner.dpFormat = dpFormat , dpFormat), $get_0(this$static.domId15Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (btnSetFormat = new MaterialButton , btnSetFormat.span_1.setText('Set Date with custom format') , $add_11(btnSetFormat, btnSetFormat.span_1) , $addClickHandler(btnSetFormat, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , btnSetFormat), $get_0(this$static.domId16Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre14 = new PrettyPre , $setHTML_0(f_PrettyPre14, (sb_3 = new StringBuilder , sb_3.string += '\\u2003&lt;m:MaterialDatePicker ui:field=\"dpFormat\" placeholder=\"Custom Format\" format=\"yyyy mm dd\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre14.element, 'lang-xml', true) , setStyleName(f_PrettyPre14.element, 'z-depth-1', true) , f_PrettyPre14), $get_0(this$static.domId17Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle15 = new MaterialTitle , $setInnerHTML(f_MaterialTitle15.header.element, 'Date Limit') , $setText_9(f_MaterialTitle15.paragraph, 'You can limit the date by calling setDateLimit(Date min, Date max) method.') , f_MaterialTitle15), $get_0(this$static.domId18Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (dpLimit = new MaterialDatePicker , dpLimit.placeholder = 'With Limit' , dpLimit.initialized && $setText_7(dpLimit.lblName, 'With Limit') , this$static.owner.dpLimit = dpLimit , dpLimit), $get_0(this$static.domId19Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre16 = new PrettyPre , $setHTML_0(f_PrettyPre16, (sb_4 = new StringBuilder , sb_4.string += '\\u2003setDateLimit(Date dateMin, Date dateMax);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre16.element, 'lang-java', true) , setStyleName(f_PrettyPre16.element, 'z-depth-1', true) , f_PrettyPre16), $get_0(this$static.domId20Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle17 = new MaterialTitle , $setInnerHTML(f_MaterialTitle17.header.element, 'Clear()') , $setText_9(f_MaterialTitle17.paragraph, 'Clearing the value of datepicker.') , f_MaterialTitle17), $get_0(this$static.domId21Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (dpClear = new MaterialDatePicker , dpClear.placeholder = 'Birthday' , dpClear.initialized && $setText_7(dpClear.lblName, 'Birthday') , this$static.owner.dpClear = dpClear , dpClear), $get_0(this$static.domId22Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (btnClear = new MaterialButton , btnClear.span_1.setText('Clear') , $add_11(btnClear, btnClear.span_1) , $setIconType(btnClear, ($clinit_IconType() , CLEAR_0)) , $addClickHandler(btnClear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4) , btnClear), $get_0(this$static.domId23Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre18 = new PrettyPre , $setHTML_0(f_PrettyPre18, (sb_5 = new StringBuilder , sb_5.string += 'datePicker.clear();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html_0) , setStyleName(f_PrettyPre18.element, 'lang-java', true) , setStyleName(f_PrettyPre18.element, 'z-depth-1', true) , f_PrettyPre18), $get_0(this$static.domId24Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle19 = new MaterialTitle , $setInnerHTML(f_MaterialTitle19.header.element, 'Events') , $setText_9(f_MaterialTitle19.paragraph, 'We provided events on date picker namely : Close, Open, ValueChange events.') , f_MaterialTitle19), $get_0(this$static.domId25Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (dpEvents = new MaterialDatePicker , dpEvents.placeholder = 'Birthday' , dpEvents.initialized && $setText_7(dpEvents.lblName, 'Birthday') , this$static.owner.dpEvents = dpEvents , dpEvents), $get_0(this$static.domId26Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre20 = new PrettyPre , $setHTML_0(f_PrettyPre20, (sb_6 = new StringBuilder , sb_6.string += '\\u2003dpEvents.addOpenHandler(new OpenHandler&lt;MaterialDatePicker&gt;() {<br> \\u2003@Override<br> \\u2003public void onOpen(OpenEvent&lt;MaterialDatePicker&gt; event) {<br> \\u2003if(event.getTarget().getValue() != null){<br> \\u2003\\u2003MaterialToast.fireToast(\"Opened Date Picker \" + event.getTarget().getValue());<br> \\u2003}else{<br> \\u2003\\u2003MaterialToast.fireToast(\"Opened Date Picker\" );<br> \\u2003}<br> \\u2003}<br> });<br><br> dpEvents.addCloseHandler(new CloseHandler&lt;MaterialDatePicker&gt;() {<br> \\u2003@Override<br> \\u2003public void onClose(CloseEvent&lt;MaterialDatePicker&gt; event) {<br> \\u2003MaterialToast.fireToast(\"Closed Date Picker with value \" + event.getTarget().getValue());<br> \\u2003}<br> });<br><br> dpEvents.addValueChangeHandler(new ValueChangeHandler&lt;Date&gt;() {<br> \\u2003@Override<br> \\u2003public void onValueChange(ValueChangeEvent&lt;Date&gt; event) {<br> \\u2003\\u2003MaterialToast.fireToast(\"Date Selected \" + event.getValue());<br> \\u2003}<br> });<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_6.string)).html_0) , setStyleName(f_PrettyPre20.element, 'lang-java', true) , setStyleName(f_PrettyPre20.element, 'z-depth-1', true) , f_PrettyPre20), $get_0(this$static.domId27Element));\n  return f_HTMLPanel1;\n}\n\nfunction PickersView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new PickersView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new PickersView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new PickersView_BinderImpl$Widgets$3(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new PickersView_BinderImpl$Widgets$4(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId14 = $createUniqueId($doc);\n  this.domId15 = $createUniqueId($doc);\n  this.domId16 = $createUniqueId($doc);\n  this.domId17 = $createUniqueId($doc);\n  this.domId18 = $createUniqueId($doc);\n  this.domId19 = $createUniqueId($doc);\n  this.domId20 = $createUniqueId($doc);\n  this.domId21 = $createUniqueId($doc);\n  this.domId22 = $createUniqueId($doc);\n  this.domId23 = $createUniqueId($doc);\n  this.domId24 = $createUniqueId($doc);\n  this.domId25 = $createUniqueId($doc);\n  this.domId26 = $createUniqueId($doc);\n  this.domId27 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId13Element = new LazyDomElement(this.domId13);\n  this.domId14Element = new LazyDomElement(this.domId14);\n  this.domId15Element = new LazyDomElement(this.domId15);\n  this.domId16Element = new LazyDomElement(this.domId16);\n  this.domId17Element = new LazyDomElement(this.domId17);\n  this.domId18Element = new LazyDomElement(this.domId18);\n  this.domId19Element = new LazyDomElement(this.domId19);\n  this.domId20Element = new LazyDomElement(this.domId20);\n  this.domId21Element = new LazyDomElement(this.domId21);\n  this.domId22Element = new LazyDomElement(this.domId22);\n  this.domId23Element = new LazyDomElement(this.domId23);\n  this.domId24Element = new LazyDomElement(this.domId24);\n  this.domId25Element = new LazyDomElement(this.domId25);\n  this.domId26Element = new LazyDomElement(this.domId26);\n  this.domId27Element = new LazyDomElement(this.domId27);\n}\n\ndefineClass(1306, 1, {}, PickersView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl/Widgets', 1306);\nfunction PickersView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1307, 1, $intern_61, PickersView_BinderImpl$Widgets$1);\n_.onClick = function onClick_153(event_0){\n  $setValue_9(this.this$11.owner.dp, new Date_1(116, 0, 1));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl/Widgets/1', 1307);\nfunction PickersView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1308, 1, $intern_61, PickersView_BinderImpl$Widgets$2);\n_.onClick = function onClick_154(event_0){\n  fireToast('' + $getPickerDate(this.this$11.owner.dp));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl/Widgets/2', 1308);\nfunction PickersView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1309, 1, $intern_61, PickersView_BinderImpl$Widgets$3);\n_.onClick = function onClick_155(event_0){\n  $setValue_9(this.this$11.owner.dpFormat, new Date_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl/Widgets/3', 1309);\nfunction PickersView_BinderImpl$Widgets$4(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1310, 1, $intern_61, PickersView_BinderImpl$Widgets$4);\n_.onClick = function onClick_156(event_0){\n  $clear_5(this.this$11.owner.dpClear);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_pickers_PickersView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.pickers', 'PickersView_BinderImpl/Widgets/4', 1310);\nfunction $html9_3(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26, arg27){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg14));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg15));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg16));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg17));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg18));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg19));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg20));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg21));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg22));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg23));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg24));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg25));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg26));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg27));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$) {\n    result = new PickersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$) {\n    result = new PickersView(new PickersView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersView$_annotation$$none$$;\n}\n\ndefineClass(624, 1, $intern_92);\n_.onSuccess_0 = function onSuccess_27(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$pickers$PickersPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(26);\n\n//# sourceURL=gwtmaterialdemo-26.js\n")
