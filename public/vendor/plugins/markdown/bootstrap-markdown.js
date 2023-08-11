!function($){"use strict";var Markdown=function(element,options){var opts=['autofocus','savable','hideable','width','height','resize','iconlibrary','language','footer','fullscreen','hiddenButtons','disabledButtons'];$.each(opts,function(_,opt){if(typeof $(element).data(opt)!=='undefined'){options=typeof options=='object'?options:{}
options[opt]=$(element).data(opt)}});this.$ns='bootstrap-markdown';this.$element=$(element);this.$editable={el:null,type:null,attrKeys:[],attrValues:[],content:null};this.$options=$.extend(true,{},$.fn.markdown.defaults,options,this.$element.data('options'));this.$oldContent=null;this.$isPreview=false;this.$isFullscreen=false;this.$editor=null;this.$textarea=null;this.$handler=[];this.$callback=[];this.$nextTab=[];this.showEditor();};Markdown.prototype={constructor:Markdown,__alterButtons:function(name,alter){var handler=this.$handler,isAll=(name=='all'),that=this;$.each(handler,function(k,v){var halt=true;if(isAll){halt=false;}else{halt=v.indexOf(name)<0;}
if(halt===false){alter(that.$editor.find('button[data-handler="'+v+'"]'));}});},__buildButtons:function(buttonsArray,container){var i,ns=this.$ns,handler=this.$handler,callback=this.$callback;for(i=0;i<buttonsArray.length;i++){var y,btnGroups=buttonsArray[i];for(y=0;y<btnGroups.length;y++){var z,buttons=btnGroups[y].data,btnGroupContainer=$('<div/>',{'class':'btn-group'});for(z=0;z<buttons.length;z++){var button=buttons[z],buttonContainer,buttonIconContainer,buttonHandler=ns+'-'+button.name,buttonIcon=this.__getIcon(button.icon),btnText=button.btnText?button.btnText:'',btnClass=button.btnClass?button.btnClass:'btn',tabIndex=button.tabIndex?button.tabIndex:'-1',hotkey=typeof button.hotkey!=='undefined'?button.hotkey:'',hotkeyCaption=typeof jQuery.hotkeys!=='undefined'&&hotkey!==''?' ('+hotkey+')':'';buttonContainer=$('<button></button>');buttonContainer.text(' '+this.__localize(btnText)).addClass('btn-default btn-sm').addClass(btnClass);if(btnClass.match(/btn\-(primary|success|info|warning|danger|link)/)){buttonContainer.removeClass('btn-default');}
buttonContainer.attr({'type':'button','title':this.__localize(button.title)+hotkeyCaption,'tabindex':tabIndex,'data-provider':ns,'data-handler':buttonHandler,'data-hotkey':hotkey});if(button.toggle===true){buttonContainer.attr('data-toggle','button');}
buttonIconContainer=$('<span/>');buttonIconContainer.addClass(buttonIcon);buttonIconContainer.prependTo(buttonContainer);btnGroupContainer.append(buttonContainer);handler.push(buttonHandler);callback.push(button.callback);}
container.append(btnGroupContainer);}}
return container;},__setListener:function(){var hasRows=typeof this.$textarea.attr('rows')!=='undefined',maxRows=this.$textarea.val().split("\n").length>5?this.$textarea.val().split("\n").length:'5',rowsVal=hasRows?this.$textarea.attr('rows'):maxRows;this.$textarea.attr('rows',rowsVal);if(this.$options.resize){this.$textarea.css('resize',this.$options.resize);}
this.$textarea.on('focus',$.proxy(this.focus,this)).on('keypress',$.proxy(this.keypress,this)).on('keyup',$.proxy(this.keyup,this)).on('change',$.proxy(this.change,this)).on('select',$.proxy(this.select,this));if(this.eventSupported('keydown')){this.$textarea.on('keydown',$.proxy(this.keydown,this));}
this.$textarea.data('markdown',this);},__handle:function(e){var target=$(e.currentTarget),handler=this.$handler,callback=this.$callback,handlerName=target.attr('data-handler'),callbackIndex=handler.indexOf(handlerName),callbackHandler=callback[callbackIndex];$(e.currentTarget).focus();callbackHandler(this);this.change(this);if(handlerName.indexOf('cmdSave')<0){this.$textarea.focus();}
e.preventDefault();},__localize:function(string){var messages=$.fn.markdown.messages,language=this.$options.language;if(typeof messages!=='undefined'&&typeof messages[language]!=='undefined'&&typeof messages[language][string]!=='undefined'){return messages[language][string];}
return string;},__getIcon:function(src){return typeof src=='object'?src[this.$options.iconlibrary]:src;},setFullscreen:function(mode){var $editor=this.$editor,$textarea=this.$textarea;if(mode===true){$editor.addClass('md-fullscreen-mode');$('body').addClass('md-nooverflow');this.$options.onFullscreen(this);}else{$editor.removeClass('md-fullscreen-mode');$('body').removeClass('md-nooverflow');}
this.$isFullscreen=mode;$textarea.focus();},showEditor:function(){var instance=this,textarea,ns=this.$ns,container=this.$element,originalHeigth=container.css('height'),originalWidth=container.css('width'),editable=this.$editable,handler=this.$handler,callback=this.$callback,options=this.$options,editor=$('<div/>',{'class':'md-editor',click:function(){instance.focus();}});if(this.$editor===null){var editorHeader=$('<div/>',{'class':'md-header btn-toolbar'});var allBtnGroups=[];if(options.buttons.length>0)allBtnGroups=allBtnGroups.concat(options.buttons[0]);if(options.additionalButtons.length>0)allBtnGroups=allBtnGroups.concat(options.additionalButtons[0]);if(options.reorderButtonGroups.length>0){allBtnGroups=allBtnGroups.filter(function(btnGroup){return options.reorderButtonGroups.indexOf(btnGroup.name)>-1;}).sort(function(a,b){if(options.reorderButtonGroups.indexOf(a.name)<options.reorderButtonGroups.indexOf(b.name))return-1;if(options.reorderButtonGroups.indexOf(a.name)>options.reorderButtonGroups.indexOf(b.name))return 1;return 0;});}
if(allBtnGroups.length>0){editorHeader=this.__buildButtons([allBtnGroups],editorHeader);}
if(options.fullscreen.enable){editorHeader.append('<div class="md-controls"><a class="md-control md-control-fullscreen" href="#"><span class="'+this.__getIcon(options.fullscreen.icons.fullscreenOn)+'"></span></a></div>').on('click','.md-control-fullscreen',function(e){e.preventDefault();instance.setFullscreen(true);});}
editor.append(editorHeader);if(container.is('textarea')){container.before(editor);textarea=container;textarea.addClass('md-input');editor.append(textarea);}else{var rawContent=(typeof toMarkdown=='function')?toMarkdown(container.html()):container.html(),currentContent=$.trim(rawContent);textarea=$('<textarea/>',{'class':'md-input','val':currentContent});editor.append(textarea);editable.el=container;editable.type=container.prop('tagName').toLowerCase();editable.content=container.html();$(container[0].attributes).each(function(){editable.attrKeys.push(this.nodeName);editable.attrValues.push(this.nodeValue);});container.replaceWith(editor);}
var editorFooter=$('<div/>',{'class':'md-footer'}),createFooter=false,footer='';if(options.savable){createFooter=true;var saveHandler='cmdSave';handler.push(saveHandler);callback.push(options.onSave);editorFooter.append('<button class="btn btn-success" data-provider="'
+ns
+'" data-handler="'
+saveHandler
+'"><i class="icon icon-white icon-ok"></i> '
+this.__localize('Save')
+'</button>');}
footer=typeof options.footer==='function'?options.footer(this):options.footer;if($.trim(footer)!==''){createFooter=true;editorFooter.append(footer);}
if(createFooter)editor.append(editorFooter);if(options.width&&options.width!=='inherit'){if(jQuery.isNumeric(options.width)){editor.css('display','table');textarea.css('width',options.width+'px');}else{editor.addClass(options.width);}}
if(options.height&&options.height!=='inherit'){if(jQuery.isNumeric(options.height)){var height=options.height;if(editorHeader)height=Math.max(0,height-editorHeader.outerHeight());if(editorFooter)height=Math.max(0,height-editorFooter.outerHeight());textarea.css('height',height+'px');}else{editor.addClass(options.height);}}
this.$editor=editor;this.$textarea=textarea;this.$editable=editable;this.$oldContent=this.getContent();this.__setListener();this.$editor.attr('id',(new Date()).getTime());this.$editor.on('click','[data-provider="bootstrap-markdown"]',$.proxy(this.__handle,this));if(this.$element.is(':disabled')||this.$element.is('[readonly]')){this.$editor.addClass('md-editor-disabled');this.disableButtons('all');}
if(this.eventSupported('keydown')&&typeof jQuery.hotkeys==='object'){editorHeader.find('[data-provider="bootstrap-markdown"]').each(function(){var $button=$(this),hotkey=$button.attr('data-hotkey');if(hotkey.toLowerCase()!==''){textarea.bind('keydown',hotkey,function(){$button.trigger('click');return false;});}});}
if(options.initialstate==='preview'){this.showPreview();}else if(options.initialstate==='fullscreen'&&options.fullscreen.enable){this.setFullscreen(true);}}else{this.$editor.show();}
if(options.autofocus){this.$textarea.focus();this.$editor.addClass('active');}
if(options.fullscreen.enable&&options.fullscreen!==false){this.$editor.append('<div class="md-fullscreen-controls">'
+'<a href="#" class="exit-fullscreen" title="Exit fullscreen"><span class="'+this.__getIcon(options.fullscreen.icons.fullscreenOff)+'">'
+'</span></a>'
+'</div>');this.$editor.on('click','.exit-fullscreen',function(e){e.preventDefault();instance.setFullscreen(false);});}
this.hideButtons(options.hiddenButtons);this.disableButtons(options.disabledButtons);options.onShow(this);return this;},parseContent:function(val){var content;var val=val||this.$textarea.val();if(typeof markdown=='object'){content=markdown.toHTML(val);}else if(typeof marked=='function'){content=marked(val);}else{content=val;}
return content;},showPreview:function(){var options=this.$options,container=this.$textarea,afterContainer=container.next(),replacementContainer=$('<div/>',{'class':'md-preview','data-provider':'markdown-preview'}),content,callbackContent;this.$isPreview=true;this.disableButtons('all').enableButtons('cmdPreview');callbackContent=options.onPreview(this);content=typeof callbackContent=='string'?callbackContent:this.parseContent();replacementContainer.html(content);if(afterContainer&&afterContainer.attr('class')=='md-footer'){replacementContainer.insertBefore(afterContainer);}else{container.parent().append(replacementContainer);}
replacementContainer.css({width:container.outerWidth()+'px',height:container.outerHeight()+'px'});if(this.$options.resize){replacementContainer.css('resize',this.$options.resize);}
container.hide();replacementContainer.data('markdown',this);if(this.$element.is(':disabled')||this.$element.is('[readonly]')){this.$editor.addClass('md-editor-disabled');this.disableButtons('all');}
return this;},hidePreview:function(){this.$isPreview=false;var container=this.$editor.find('div[data-provider="markdown-preview"]');container.remove();this.enableButtons('all');this.disableButtons(this.$options.disabledButtons);this.$textarea.show();this.__setListener();return this;},isDirty:function(){return this.$oldContent!=this.getContent();},getContent:function(){return this.$textarea.val();},setContent:function(content){this.$textarea.val(content);return this;},findSelection:function(chunk){var content=this.getContent(),startChunkPosition;if(startChunkPosition=content.indexOf(chunk),startChunkPosition>=0&&chunk.length>0){var oldSelection=this.getSelection(),selection;this.setSelection(startChunkPosition,startChunkPosition+chunk.length);selection=this.getSelection();this.setSelection(oldSelection.start,oldSelection.end);return selection;}else{return null;}},getSelection:function(){var e=this.$textarea[0];return(('selectionStart'in e&&function(){var l=e.selectionEnd-e.selectionStart;return{start:e.selectionStart,end:e.selectionEnd,length:l,text:e.value.substr(e.selectionStart,l)};})||function(){return null;})();},setSelection:function(start,end){var e=this.$textarea[0];return(('selectionStart'in e&&function(){e.selectionStart=start;e.selectionEnd=end;return;})||function(){return null;})();},replaceSelection:function(text){var e=this.$textarea[0];return(('selectionStart'in e&&function(){e.value=e.value.substr(0,e.selectionStart)+text+e.value.substr(e.selectionEnd,e.value.length);e.selectionStart=e.value.length;return this;})||function(){e.value+=text;return jQuery(e);})();},getNextTab:function(){if(this.$nextTab.length===0){return null;}else{var nextTab,tab=this.$nextTab.shift();if(typeof tab=='function'){nextTab=tab();}else if(typeof tab=='object'&&tab.length>0){nextTab=tab;}
return nextTab;}},setNextTab:function(start,end){if(typeof start=='string'){var that=this;this.$nextTab.push(function(){return that.findSelection(start);});}else if(typeof start=='number'&&typeof end=='number'){var oldSelection=this.getSelection();this.setSelection(start,end);this.$nextTab.push(this.getSelection());this.setSelection(oldSelection.start,oldSelection.end);}
return;},__parseButtonNameParam:function(nameParam){var buttons=[];if(typeof nameParam=='string'){buttons=nameParam.split(',')}else{buttons=nameParam;}
return buttons;},enableButtons:function(name){var buttons=this.__parseButtonNameParam(name),that=this;$.each(buttons,function(i,v){that.__alterButtons(buttons[i],function(el){el.removeAttr('disabled');});});return this;},disableButtons:function(name){var buttons=this.__parseButtonNameParam(name),that=this;$.each(buttons,function(i,v){that.__alterButtons(buttons[i],function(el){el.attr('disabled','disabled');});});return this;},hideButtons:function(name){var buttons=this.__parseButtonNameParam(name),that=this;$.each(buttons,function(i,v){that.__alterButtons(buttons[i],function(el){el.addClass('hidden');});});return this;},showButtons:function(name){var buttons=this.__parseButtonNameParam(name),that=this;$.each(buttons,function(i,v){that.__alterButtons(buttons[i],function(el){el.removeClass('hidden');});});return this;},eventSupported:function(eventName){var isSupported=eventName in this.$element;if(!isSupported){this.$element.setAttribute(eventName,'return;');isSupported=typeof this.$element[eventName]==='function';}
return isSupported;},keyup:function(e){var blocked=false;switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:var nextTab;if(nextTab=this.getNextTab(),nextTab!==null){var that=this;setTimeout(function(){that.setSelection(nextTab.start,nextTab.end);},500);blocked=true;}else{var cursor=this.getSelection();if(cursor.start==cursor.end&&cursor.end==this.getContent().length){blocked=false;}else{this.setSelection(this.getContent().length,this.getContent().length);blocked=true;}}
break;case 13:blocked=false;break;case 27:if(this.$isFullscreen)this.setFullscreen(false);blocked=false;break;default:blocked=false;}
if(blocked){e.stopPropagation();e.preventDefault();}
this.$options.onChange(this);},change:function(e){this.$options.onChange(this);return this;},select:function(e){this.$options.onSelect(this);return this;},focus:function(e){var options=this.$options,isHideable=options.hideable,editor=this.$editor;editor.addClass('active');$(document).find('.md-editor').each(function(){if($(this).attr('id')!==editor.attr('id')){var attachedMarkdown;if(attachedMarkdown=$(this).find('textarea').data('markdown'),attachedMarkdown===null){attachedMarkdown=$(this).find('div[data-provider="markdown-preview"]').data('markdown');}
if(attachedMarkdown){attachedMarkdown.blur();}}});options.onFocus(this);return this;},blur:function(e){var options=this.$options,isHideable=options.hideable,editor=this.$editor,editable=this.$editable;if(editor.hasClass('active')||this.$element.parent().length===0){editor.removeClass('active');if(isHideable){if(editable.el!==null){var oldElement=$('<'+editable.type+'/>'),content=this.getContent(),currentContent=(typeof markdown=='object')?markdown.toHTML(content):content;$(editable.attrKeys).each(function(k,v){oldElement.attr(editable.attrKeys[k],editable.attrValues[k]);});oldElement.html(currentContent);editor.replaceWith(oldElement);}else{editor.hide();}}
options.onBlur(this);}
return this;}};var old=$.fn.markdown;$.fn.markdown=function(option){return this.each(function(){var $this=$(this),data=$this.data('markdown'),options=typeof option=='object'&&option;if(!data)$this.data('markdown',(data=new Markdown(this,options)))})};$.fn.markdown.messages={};$.fn.markdown.defaults={autofocus:false,hideable:false,savable:false,width:'inherit',height:'inherit',resize:'none',iconlibrary:'glyph',language:'en',initialstate:'editor',buttons:[[{name:'groupFont',data:[{name:'cmdBold',hotkey:'Ctrl+B',title:'Bold',icon:{glyph:'glyphicon glyphicon-bold',fa:'fa fa-bold','fa-3':'icon-bold'},callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent();if(selected.length===0){chunk=e.__localize('strong text');}else{chunk=selected.text;}
if(content.substr(selected.start-2,2)==='**'&&content.substr(selected.end,2)==='**'){e.setSelection(selected.start-2,selected.end+2);e.replaceSelection(chunk);cursor=selected.start-2;}else{e.replaceSelection('**'+chunk+'**');cursor=selected.start+2;}
e.setSelection(cursor,cursor+chunk.length);}},{name:'cmdItalic',title:'Italic',hotkey:'Ctrl+I',icon:{glyph:'glyphicon glyphicon-italic',fa:'fa fa-italic','fa-3':'icon-italic'},callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent();if(selected.length===0){chunk=e.__localize('emphasized text');}else{chunk=selected.text;}
if(content.substr(selected.start-1,1)==='_'&&content.substr(selected.end,1)==='_'){e.setSelection(selected.start-1,selected.end+1);e.replaceSelection(chunk);cursor=selected.start-1;}else{e.replaceSelection('_'+chunk+'_');cursor=selected.start+1;}
e.setSelection(cursor,cursor+chunk.length);}},{name:'cmdHeading',title:'Heading',hotkey:'Ctrl+H',icon:{glyph:'glyphicon glyphicon-header',fa:'fa fa-header','fa-3':'icon-font'},callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent(),pointer,prevChar;if(selected.length===0){chunk=e.__localize('heading text');}else{chunk=selected.text+'\n';}
if((pointer=4,content.substr(selected.start-pointer,pointer)==='### ')||(pointer=3,content.substr(selected.start-pointer,pointer)==='###')){e.setSelection(selected.start-pointer,selected.end);e.replaceSelection(chunk);cursor=selected.start-pointer;}else if(selected.start>0&&(prevChar=content.substr(selected.start-1,1),!!prevChar&&prevChar!='\n')){e.replaceSelection('\n\n### '+chunk);cursor=selected.start+6;}else{e.replaceSelection('### '+chunk);cursor=selected.start+4;}
e.setSelection(cursor,cursor+chunk.length);}}]},{name:'groupLink',data:[{name:'cmdUrl',title:'URL/Link',hotkey:'Ctrl+L',icon:{glyph:'glyphicon glyphicon-link',fa:'fa fa-link','fa-3':'icon-link'},callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent(),link;if(selected.length===0){chunk=e.__localize('enter link description here');}else{chunk=selected.text;}
link=prompt(e.__localize('Insert Hyperlink'),'http://');if(link!==null&&link!==''&&link!=='http://'&&link.substr(0,4)==='http'){var sanitizedLink=$('<div>'+link+'</div>').text();e.replaceSelection('['+chunk+']('+sanitizedLink+')');cursor=selected.start+1;e.setSelection(cursor,cursor+chunk.length);}}},{name:'cmdImage',title:'Image',hotkey:'Ctrl+G',icon:{glyph:'glyphicon glyphicon-picture',fa:'fa fa-picture-o','fa-3':'icon-picture'},callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent(),link;if(selected.length===0){chunk=e.__localize('enter image description here');}else{chunk=selected.text;}
link=prompt(e.__localize('Insert Image Hyperlink'),'http://');if(link!==null&&link!==''&&link!=='http://'&&link.substr(0,4)==='http'){var sanitizedLink=$('<div>'+link+'</div>').text();e.replaceSelection('!['+chunk+']('+sanitizedLink+' "'+e.__localize('enter image title here')+'")');cursor=selected.start+2;e.setNextTab(e.__localize('enter image title here'));e.setSelection(cursor,cursor+chunk.length);}}}]},{name:'groupMisc',data:[{name:'cmdList',hotkey:'Ctrl+U',title:'Unordered List',icon:{glyph:'glyphicon glyphicon-list',fa:'fa fa-list','fa-3':'icon-list-ul'},callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent();if(selected.length===0){chunk=e.__localize('list text here');e.replaceSelection('- '+chunk);cursor=selected.start+2;}else{if(selected.text.indexOf('\n')<0){chunk=selected.text;e.replaceSelection('- '+chunk);cursor=selected.start+2;}else{var list=[];list=selected.text.split('\n');chunk=list[0];$.each(list,function(k,v){list[k]='- '+v;});e.replaceSelection('\n\n'+list.join('\n'));cursor=selected.start+4;}}
e.setSelection(cursor,cursor+chunk.length);}},{name:'cmdListO',hotkey:'Ctrl+O',title:'Ordered List',icon:{glyph:'glyphicon glyphicon-th-list',fa:'fa fa-list-ol','fa-3':'icon-list-ol'},callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent();if(selected.length===0){chunk=e.__localize('list text here');e.replaceSelection('1. '+chunk);cursor=selected.start+3;}else{if(selected.text.indexOf('\n')<0){chunk=selected.text;e.replaceSelection('1. '+chunk);cursor=selected.start+3;}else{var list=[];list=selected.text.split('\n');chunk=list[0];$.each(list,function(k,v){list[k]='1. '+v;});e.replaceSelection('\n\n'+list.join('\n'));cursor=selected.start+5;}}
e.setSelection(cursor,cursor+chunk.length);}},{name:'cmdCode',hotkey:'Ctrl+K',title:'Code',icon:{glyph:'glyphicon glyphicon-asterisk',fa:'fa fa-code','fa-3':'icon-code'},callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent();if(selected.length===0){chunk=e.__localize('code text here');}else{chunk=selected.text;}
if(content.substr(selected.start-4,4)==='```\n'&&content.substr(selected.end,4)==='\n```'){e.setSelection(selected.start-4,selected.end+4);e.replaceSelection(chunk);cursor=selected.start-4;}else if(content.substr(selected.start-1,1)==='`'&&content.substr(selected.end,1)==='`'){e.setSelection(selected.start-1,selected.end+1);e.replaceSelection(chunk);cursor=selected.start-1;}else if(content.indexOf('\n')>-1){e.replaceSelection('```\n'+chunk+'\n```');cursor=selected.start+4;}else{e.replaceSelection('`'+chunk+'`');cursor=selected.start+1;}
e.setSelection(cursor,cursor+chunk.length);}},{name:'cmdQuote',hotkey:'Ctrl+Q',title:'Quote',icon:{glyph:'glyphicon glyphicon-comment',fa:'fa fa-quote-left','fa-3':'icon-quote-left'},callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent();if(selected.length===0){chunk=e.__localize('quote here');e.replaceSelection('> '+chunk);cursor=selected.start+2;}else{if(selected.text.indexOf('\n')<0){chunk=selected.text;e.replaceSelection('> '+chunk);cursor=selected.start+2;}else{var list=[];list=selected.text.split('\n');chunk=list[0];$.each(list,function(k,v){list[k]='> '+v;});e.replaceSelection('\n\n'+list.join('\n'));cursor=selected.start+4;}}
e.setSelection(cursor,cursor+chunk.length);}}]},{name:'groupUtil',data:[{name:'cmdPreview',toggle:true,hotkey:'Ctrl+P',title:'Preview',btnText:'Preview',btnClass:'btn btn-primary btn-sm',icon:{glyph:'glyphicon glyphicon-search',fa:'fa fa-search','fa-3':'icon-search'},callback:function(e){var isPreview=e.$isPreview,content;if(isPreview===false){e.showPreview();}else{e.hidePreview();}}}]}]],additionalButtons:[],reorderButtonGroups:[],hiddenButtons:[],disabledButtons:[],footer:'',fullscreen:{enable:true,icons:{fullscreenOn:{fa:'fa fa-expand',glyph:'glyphicon glyphicon-fullscreen','fa-3':'icon-resize-full'},fullscreenOff:{fa:'fa fa-compress',glyph:'glyphicon glyphicon-fullscreen','fa-3':'icon-resize-small'}}},onShow:function(e){},onPreview:function(e){},onSave:function(e){},onBlur:function(e){},onFocus:function(e){},onChange:function(e){},onFullscreen:function(e){},onSelect:function(e){}};$.fn.markdown.Constructor=Markdown;$.fn.markdown.noConflict=function(){$.fn.markdown=old;return this;};var initMarkdown=function(el){var $this=el;if($this.data('markdown')){$this.data('markdown').showEditor();return;}
$this.markdown()};var blurNonFocused=function(e){var $activeElement=$(document.activeElement);$(document).find('.md-editor').each(function(){var $this=$(this),focused=$activeElement.closest('.md-editor')[0]===this,attachedMarkdown=$this.find('textarea').data('markdown')||$this.find('div[data-provider="markdown-preview"]').data('markdown');if(attachedMarkdown&&!focused){attachedMarkdown.blur();}})};$(document).on('click.markdown.data-api','[data-provide="markdown-editable"]',function(e){initMarkdown($(this));e.preventDefault();}).on('click focusin',function(e){blurNonFocused(e);}).ready(function(){$('textarea[data-provide="markdown"]').each(function(){initMarkdown($(this));})});}(window.jQuery);