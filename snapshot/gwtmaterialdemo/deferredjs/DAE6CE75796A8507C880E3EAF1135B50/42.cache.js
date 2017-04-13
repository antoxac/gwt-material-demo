$wnd.gwtmaterialdemo.runAsyncCallback42("function ThemesPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(873, 59, $intern_57, ThemesPresenter);\n_.onReveal = function onReveal_63(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Theming', 'Learn how to easily start using GWT Material Design in your app.', '', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesPresenter', 873);\nfunction ThemesView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_36(new ThemesView_BinderImpl$Widgets));\n}\n\ndefineClass(1185, 62, $intern_58, ThemesView);\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesView', 1185);\nfunction $build_f_HTMLPanel1_36(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow7, f_MaterialTitle3, f_MaterialLink4, f_MaterialTitle5, f_PrettyPre6, sb, f_MaterialTitle8, f_PrettyPre9, sb_0;\n  f_HTMLPanel1 = new HTMLPanel($html3_3(this$static.domId0, this$static.domId1).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_13(f_MaterialTitle3.paragraph, 'We created another project for gwtmaterial themes .See below the link of the repo.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Theming'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (f_MaterialLink4 = new MaterialLink , $setIconType(f_MaterialLink4, ($clinit_IconType() , LINK_2)) , $setIconPosition(f_MaterialLink4, ($clinit_IconPosition() , LEFT_6)) , $setText_7(f_MaterialLink4.span_1, 'Gwt Material Themes Github Repo') , f_MaterialLink4.span_1.attached || $add_14(f_MaterialLink4, f_MaterialLink4.span_1) , f_MaterialLink4.element_0.setAttribute('href', 'https://github.com/GwtMaterialDesign/gwt-material-themes') , $setTextColor(f_MaterialLink4, ($clinit_Color() , BLUE)) , f_MaterialLink4.element_0.setAttribute('target', '_blank') , f_MaterialLink4)) , $add_14(f_MaterialRow2, (f_MaterialTitle5 = new MaterialTitle , $setText_13(f_MaterialTitle5.paragraph, 'First: Make sure you are using GwtMaterialDesignBasic module (This will not load the materialize.css default file allowing you to customize your design.)') , f_MaterialTitle5)) , $add_14(f_MaterialRow2, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb = new StringBuilder , sb.string += '&lt;inherits name=\"gwt.material.design.GwtMaterialDesignBasic\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'lang-xml', true) , f_PrettyPre6)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow7 = new MaterialRow , $add_14(f_MaterialRow7, (f_MaterialTitle8 = new MaterialTitle , $setText_13(f_MaterialTitle8.paragraph, 'Second: Checkout the theme project and add it to your build path. And define it on your app.gwt.xml file.') , f_MaterialTitle8)) , $add_14(f_MaterialRow7, (f_PrettyPre9 = new PrettyPre , $setHTML_0(f_PrettyPre9, (sb_0 = new StringBuilder , sb_0.string += '&lt;inherits name=\"gwt.material.design.themes.ThemeBlue\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre9.element_0, 'lang-xml', true) , f_PrettyPre9)) , setStyleName(f_MaterialRow7.element_0, 'code', true) , f_MaterialRow7), $get_0(this$static.domId1Element));\n  return f_HTMLPanel1;\n}\n\nfunction ThemesView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n}\n\ndefineClass(1592, 1, {}, ThemesView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_themes_ThemesView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.themes', 'ThemesView_BinderImpl/Widgets', 1592);\nfunction $html3_3(arg0, arg1){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$) {\n    result0 = new ThemesPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$) {\n    result = new ThemesView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesView$_annotation$$none$$;\n}\n\ndefineClass(802, 1, $intern_111);\n_.onSuccess_0 = function onSuccess_43(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$themes$ThemesPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(42);\n\n//# sourceURL=gwtmaterialdemo-42.js\n")
