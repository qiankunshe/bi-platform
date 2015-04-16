define(["dialog","report/global-menu-btns/component-menu-template","report/global-menu-btns/main-model"],function(a,b,c){return Backbone.View.extend({events:{"click .j-global-component":"shiftMenu","click .j-button-skin":"shiftMenu","click .j-skin-btn":"chanceTheme","click .reportName":"editReportName"},nowReportName:"",initialize:function(a){this.model=new c;var d=this.model;this.canvasView=a.canvasView,this.$el.find(".j-global-btn").html(this.createBtns()),this.$el.find(".j-global-menu").html(b.render()),this.$el.find(".reportName").ready(function(){d.editReportName(window.dataInsight.main.id)}),this.changeReportName()},shiftMenu:function(a){var b=$(a.target).parent().attr("id"),c=$(".global-menus").not("#"+b);c.hide();var d=$(".comp-menu").find("#"+b);"none"==d.css("display")?d.show():d.hide()},chanceTheme:function(a){var b="",c=$(a.target),d=window.dataInsight.main.id;b=-1!=c.attr("class").indexOf("j-skin-btn")?c.attr("id"):c.parent().attr("id"),this.model.getSkinType(d,b),$(".link-skin").attr("href","asset/"+b+"/css/-di-product-debug.css"),$(".skin-menu").hide(),this.canvasView.showReport()},referenceLine:function(){var b="url(/silkroad/src/css/img/grid.png)",c="url(/silkroad/src/css/img/grid-empty.png)",d=$(".report");console.log(d.css("background-image")),d.css("background-image")!=b?(d.css("background-image",c),a.alert("背景参考线已关闭")):(d.css("background-image",b),a.alert("背景参考线已打开"))},btnBox:[{id:"para",picName:"para",title:"参数维度设置",className:"global-para"},{id:"component",picName:"component",title:"组件工具箱",className:"global-component"},{id:"save-report",picName:"save",title:"保存",className:"button-save-report"},{id:"close-report",picName:"close",title:"关闭",className:"button-close-report button-right"},{id:"preview-report",picName:"preview",title:"预览",className:"button-preview-report"},{id:"skin-report",picName:"skin",title:"换肤设置",className:"button-skin"}],createBtns:function(){var a="",b=this.btnBox||[];if(0==b.length)a="";else for(var c=0;c<b.length;c++)a+="<div class='global-setting-btns j-"+b[c].className+"'"+"title='"+b[c].title+"'"+"id='"+b[c].id+"'>"+"<img src='../silkroad/src/css/img/global-btns/btn_"+b[c].picName+".png' />"+"</div>";return a+='<div class="reportNameBox"><div class="reportName"></div><input type="text" class="reportSetName"/></div>'},editReportName:function(){var a=$(".reportSetName"),b=$(".reportName");a.val(b.html()),b.hide(),a.show()},changeReportName:function(){var b=$(".reportSetName"),c=$(".reportName"),d=c.text(),e=null;b.keydown(function(f){var g=f||event;13==g.keyCode&&(e=b.val(),$.ajax({type:"POST",dataType:"json",cache:!1,timeout:1e4,url:"reports/"+window.dataInsight.main.id+"/name/"+e,success:function(f){0===f.status?(c.html(e).show(),b.hide(),a.success(f.statusInfo)):(c.html(d).show(),b.hide(),a.error(f.statusInfo))}}))})}})});