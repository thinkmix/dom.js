;(function(a){
	a.$=function(selector,context){
	    return new $.fn.init(selector,context)
	}
	$.fn=$.prototype;
	$.fn.init=function(selector,context){
		if(selector.nodeType) {
			this.context = this[0] = selector;
			this.length = 1;
		}else if(selector instanceof Array){
			for(var i=0;i<selector.length;i++){
				this[i]=selector[i];
				this.length=i+1;
			}
		}else{
		    var nodeList=(context || document).querySelectorAll(selector);
		    this.length=nodeList.length;
		    for(var i=0;i<this.length;i+=1){
		        this[i]=nodeList[i];
		    }
		}
	    return this;
	}
	$.fn.each=function(fn){
	    var i=0,len=this.length;
	    for(;i<len;i++){
	        fn.call(this[i],i,this[i])
	    }
	    return this;
	}
	$.fn.hide=function(){
	    this.each(function(){
	        this.style.display="none";
	    })
	}
	$.fn.show=function(){
	    this.each(function(){
	        this.style.display="block";
	    })
	}
	$.fn.insert=function(position,html){//beforebegin,afterbegin,beforeend,afterend
	    this.each(function(){
	        this.insertAdjacentHTML(position,html);
	    });
	}
	$.fn.hasClass=function(obj,cls){
		//cls=cls.replace(/\s+/g,"");
		var s,i=0,len=this.length;
		for(;i<len;i++){
			s=obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
		}
		return s;
	}
	$.fn.addClass=function(cls){
		var self=this,i=0,len=this.length;
		for(;i<len;i++){
			this.hasClass(this[i],cls) || (this[i].className ? this[i].className += " " + cls : this[i].className=cls);
		}
	}
	$.fn.removeClass=function(cls){
		var self=this,i=0,len=this.length;
		for(;i<len;i++){
			if(this.hasClass(this[i],cls)){
				var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
		        this[i].className = this[i].className.replace(reg, '');
			}
		}
	}
	$.fn.css=function(c,v){
		var self=this,x;
		if("object"==typeof c){
			for(var i in c){
				self.each(function() {
					this.style[i]=c[i];
				});
			}
		}else if(v){
			self.each(function() {
				this.style[c]=v;
			});
		}else{
			self.each(function() {
				x=this.style[c];
			});
			return x;
		}
	}
	$.fn.attr=function(c,v){
		var self=this,x;
		if(!v){
			self.each(function() {
				x=this.getAttribute(c);
			});
			return x;
		}else{
			self.each(function() {
				this.setAttribute(c,v);
			});
		}
	}
	$.fn.parent=function(){
		var self=this,x;
		self.each(function() {
			var parent = this.parentNode;
			x=parent && parent.nodeType !== 11 ? parent : null;
		});
		return x;		
	}
	$.fn.siblings=function(a){
		var self=this,x=[];
		self.each(function() {
			var c=this.parentNode.childNodes;
			for(var n=0;n<c.length;n++){
					if ( c[n].nodeType === 1 && c[n] !== this ) {
						x.push( c[n] );
					}
			}
		});
		return $(x);
	}
	$.extend=$.fn.extend=function(){
	    var a, b, c, d, e, f, g = arguments[0] || {},
	            h = 1,
	            i = arguments.length,
	            j = !1;
	        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
	            if (null != (a = arguments[h]))
	                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
	        return g
	}
	$.extend({
	    //插件添加
	});
	$.fn.init.prototype = $.fn;
})(window);


