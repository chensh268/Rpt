(function(b,g){var c={g:function(h){return document.getElementById(h)},encodeHTML:function(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},forEach:Array.prototype.forEach?function(h,i){Array.prototype.forEach.call(h,i)}:function(j,l){for(var k=0,h=j.length;k<h;k++){l(j[k],k)}}};var e=(function(h){function i(n,l,o,m){return function(){if(typeof o==="function"){try{var q=o.apply(n,arguments);if(j.isPromise(q)){q.then(function(){l.resolve.apply(l,arguments)},function(){l.reject.apply(l,arguments)})}else{l.resolve.call(l,q)}}catch(p){l.reject(p)}}else{l[m].apply(l,n._args)}}}function k(l){if(l._state==="pending"){return}var m=l._state==="resolved"?l._resolves.slice():l._rejects.slice();setTimeout(function(){h.forEach(m,function(p,n){try{p.apply(l,l._args)}catch(o){}})},0);l._resolves=[];l._rejects=[]}function j(){this._state="pending";this._args=null;this._resolves=[];this._rejects=[]}j.prototype={resolve:function(l){if(this._state!=="pending"){return}this._state="resolved";this._args=[].slice.call(arguments);k(this)},reject:function(){if(this._state!=="pending"){return}this._state="rejected";this._args=[].slice.call(arguments);k(this)},then:function(n,m){var l=new j();this._resolves.push(i(this,l,n,"resolve"));this._rejects.push(i(this,l,m,"reject"));k(this);return l},done:function(l){return this.then(l)},fail:function(l){return this.then(null,l)}};j.isPromise=function(l){return l&&typeof l.then==="function"};j.when=function(){};return j})(c);var a=(function(k,i){function h(m,l,n){m.setAttribute("type","text/javascript");n&&m.setAttribute("charset",n);m.setAttribute("src",l);k.getElementsByTagName("head")[0].appendChild(m)}function j(l){if(l&&l.parentNode){l.parentNode.removeChild(l)}l=null}return{callByServer:function(l,u,w){var v=new i(),p="loader_cbs_",s="lejuDataCallback"||p+Math.floor(Math.random()*2147483648).toString(36),q=k.createElement("SCRIPT"),x=w||{},n=x.charset||"utf-8",o="callback",t=x.timeOut||5000,m;b[s]=r(0);if(t){m=setTimeout(r(1),t)}l+=(l.indexOf("?")<0?"?":"&")+o+"="+s;h(q,l,n);return v;function r(y){return function(){try{if(y){v.reject()}else{v.resolve.apply(v,arguments);clearTimeout(m)}b[s]=null;delete b[s]}catch(z){}finally{j(q)}}}}}})(g,e);var d={data:null,defaultData:null,format:function(k){var h={};if("object"===typeof k&&(k.status===true)&&(k.data instanceof Array)){var j=0,l,m;while(l=k.data[j++]){l.params&&(l.params.sort=l.position);m=l.position.replace(/\-(\d)+$/,"");!h[m]&&(h[m]=[]);h[m].push(l)}return h}}};var f={conf:{},getData:function(){var h=new e();if(d.data){h.resolve();return h}if(!f.conf.url){h.reject();return h}a.callByServer(f.conf.url).done(function(i){d.data=d.format(i);h.resolve(d.data)}).fail(function(){if(d.defaultData){h.resolve(d.defaultData);return h}else{if(!f.conf.defaultUrl){h.reject();return h}else{a.callByServer(f.conf.defaultUrl).done(function(i){d.defaultData=d.format(i);h.resolve(d.defaultData)}).fail(function(){h.reject()})}}});return h},sliceLen:function(n,h){var k,m=[],o,j=n.length>h?h:n.length;for(k=0;k<j;k++){o=n[k];if(o.params&&o.params.link&&o.params.txt){m.push(o.params)}}m.sort(function(l,i){return l.sort<=i.sort?-1:1});for(k=0,j=h-m.length;k<j;k++){m.push(m[k])}return m},text:function(q,k,o,n){var h=null,l=0,p,m=[],j;if("number"!==typeof o){n=o;o=k.length}if(q&&(h=c.g(q))){k=f.sliceLen(k[q],o);while(p=k[l++]){j=c.encodeHTML(p.txt);m.push('<li><a href="'+p.link+'" target="_blank">'+(p.color?'<span style="color:'+p.color+'">':"")+("function"===typeof n?n(j):j)+(p.color?"</span>":"")+"</a></li>")}h.innerHTML="<ul>"+m.join("")+"</ul>"}},text2:function(q,j,o,n){var h=null,k=0,p,l,m=[];if("number"!==typeof o){n=o;o=j.length}if(q&&(h=c.g(q))){j=f.sliceLen(j[q],o);while(p=j[k++]){l=c.encodeHTML(p.txt);if(k%2){m.push('<div class="mod12-item" '+((k===j.length-1||k===j.length)?'style="border-right:none"':"")+">")}m.push('<a href="'+p.link+'" target="_blank">'+(p.color?'<span style="color:'+p.color+'">':"")+("function"===typeof n?n(l):l)+(p.color?"</span>":"")+"</a>");if(!(k%2)){m.push("</div>")}}h.innerHTML=m.join("")}},swf:function(p,m,n,i,l){var k=null,o,j;if(p&&n&&(m=m[p])&&(k=c.g(p))){if(m instanceof Array&&m[0]&&m[0].params&&m[0].params.src){i=i||m[0].params.width;l=l||m[0].params.height;j=m[0].params.src.substring(m[0].params.src.length-3).toLowerCase();switch(j){case"jpg":case"gif":case"png":if(m[0].params.link){k.innerHTML='<a href="'+m[0].params.link+'" target="_blank"><img src="'+m[0].params.src+'" border="0" width="'+i+'" height="'+l+'" /></a>'}else{k.innerHTML='<img src="'+m[0].params.src+'" border="0" width="'+i+'" height="'+l+'" /></a>'}break;default:o=new n(m[0].params.src,p+"_swf",i,l,"7","",false,"high");o.addParam("wmode","opaque");m[0].params.link&&o.addVariable("adlink",escape(m[0].params.link));o.write(p);break}}}},rotator:function(j,n,p,k,h,m){var l=0,o;if(p&&(n=n[p])){if(n instanceof Array){while(o=n[l++]){o.params&&o.params.link&&o.params.src&&j.unshift([o.params.src,o.params.link,"<startdate>"+k+"</startdate>","<enddate>"+h+"</enddate>","",parseInt(m,10)||""])}}}},couplet:function(o,m,j,h,l){var m=m.couplet,k=0,l=l||46,n;if(m instanceof Array){while(n=m[k++]){n.params&&n.params.link&&n.params.left&&n.params.right&&n.params.bar&&o.unshift([j,h,n.params.left,n.params.right,n.params.bar,n.params.link,"",l])}}}};b.leju=f})(window,document);