(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9eSz":function(e,t,i){"use strict";var a=i("TqRt");t.__esModule=!0,t.default=void 0;var r,n=a(i("PJYZ")),o=a(i("VbXa")),l=a(i("8OQS")),d=a(i("pVnL")),s=a(i("q1tI")),c=a(i("17x9")),u=function(e){var t=(0,d.default)({},e),i=t.resolutions,a=t.sizes,r=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,i=e.fixed,a=p(t||i||[]);return a&&a.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),i=m(t);return g[i]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,w=y&&window.IntersectionObserver,v=new WeakMap;function x(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},a&&s.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:n}),i&&s.default.createElement("source",{media:r,srcSet:i,sizes:n}))}))}function E(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function S(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return s.default.createElement("source",{key:t,media:i,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return s.default.createElement("source",{key:t,media:i,srcSet:a})}))}function _(e,t){var i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:i)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var C=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return i&&(i.observe(e),v.set(e,t)),function(){i.unobserve(e),v.delete(e)}},T=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?_(e,!0):"")+_(e)})).join("")+"<img "+s+o+l+i+a+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=s.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,o=e.ariaHidden,l=s.default.createElement(z,(0,d.default)({ref:t,src:i},n,{ariaHidden:o}));return a.length>1?s.default.createElement("picture",null,r(a),l):l})),z=s.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:i,srcSet:a,src:r},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=y&&h(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!b&&w&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||y&&(b||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn,isHydrated:!1},i.imageRef=s.default.createRef(),i.placeholderRef=t.placeholderRef||s.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)(i)),i.handleRef=i.handleRef.bind((0,n.default)(i)),i}(0,o.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),(i=m(t))&&(g[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,w=e.Tag,v=e.itemProp,E=e.loading,_=e.draggable,C=g||h;if(!C)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,d.default)({opacity:L?1:0,transition:O?"opacity "+y+"ms":"none"},l),H="boolean"==typeof b?"lightgray":b,j={transitionDelay:y+"ms"},V=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&j,l,f),P={title:t,alt:this.state.isVisible?"":i,style:V,className:m,itemProp:v},k=this.state.isHydrated?p(C):C[0];if(g)return s.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:k.maxWidth?k.maxWidth+"px":null,maxHeight:k.maxHeight?k.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},s.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),H&&s.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&j)}),k.base64&&s.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:P,imageVariants:C,generateSources:I}),k.tracedSVG&&s.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:P,imageVariants:C,generateSources:S}),this.state.isVisible&&s.default.createElement("picture",null,x(C),s.default.createElement(z,{alt:i,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:_})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,d.default)({alt:i,title:t,loading:E},k,{imageVariants:C}))}}));if(h){var W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete W.display,s.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},H&&s.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:H,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},O&&j)}),k.base64&&s.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:P,imageVariants:C,generateSources:I}),k.tracedSVG&&s.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:P,imageVariants:C,generateSources:S}),this.state.isVisible&&s.default.createElement("picture",null,x(C),s.default.createElement(z,{alt:i,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:_})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,d.default)({alt:i,title:t,loading:E},k,{imageVariants:C}))}}))}return null},t}(s.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,i,a){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[i]=e,r),t,"prop",a)}}L.propTypes={resolutions:O,sizes:R,fixed:H(c.default.oneOfType([O,c.default.arrayOf(O)])),fluid:H(c.default.oneOfType([R,c.default.arrayOf(R)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=L;t.default=j},ADZ4:function(e,t,i){e.exports=i.p+"static/Tavel-5e86a5c8c4f48b188ab423b0ee93abb5.mp4"},RXBc:function(e,t,i){"use strict";i.r(t);var a=i("q1tI"),r=i.n(a),n=i("Bl7J"),o=i("vrFN"),l=i("vOnD"),d=i("5Wrh"),s=i("ADZ4"),c=i.n(s),u=function(){return r.a.createElement(f,null,r.a.createElement(m,null,r.a.createElement(p,{src:c.a,type:"video/mp4",muted:!0,loop:!0,autoPlay:!0,playsInline:!0})),r.a.createElement(g,null,r.a.createElement(h,null,r.a.createElement(b,null,"Unreal Destinations"),r.a.createElement(y,null,"Out of this world"),r.a.createElement(d.a,{primary:!0,round:!0,big:!0,to:"/trips"},"Travel Now"))))},f=l.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-13hxmx1-0"})(['display:flex;justify-content:center;align-items:center;color:#fff;height:100vh;padding:0 1.6rem;position:relative;margin-top:-80px;::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;background:linear-gradient( 100deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100% ),linear-gradient(100deg,rgba(0,0,0,0.2) 0%,transparent 100% );}']),m=l.b.div.withConfig({displayName:"Hero__HeroBg",componentId:"sc-13hxmx1-1"})(["position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;overflow:hidden;"]),p=l.b.video.withConfig({displayName:"Hero__VideoBg",componentId:"sc-13hxmx1-2"})(["width:100%;height:100%;-o-object-fit:cover;object-fit:cover;"]),g=l.b.div.withConfig({displayName:"Hero__HeroContent",componentId:"sc-13hxmx1-3"})(["z-index:3;height:calc(100vh - 80px);max-height:100%;padding:0 calc((100vw - 1300px) / 2);"]),h=l.b.div.withConfig({displayName:"Hero__HeroItems",componentId:"sc-13hxmx1-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:100vh;max-height:100%;padding:0;color:#fff;line-height:1.1;font-weight:bold;"]),b=l.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-13hxmx1-5"})(["font-size:clamp(2.4rem,6vw,7rem);margin-bottom:2.4rem;letter-spacing:3px;padding:0 1.6rem;font-weight:800;"]),y=l.b.h2.withConfig({displayName:"Hero__HeroText",componentId:"sc-13hxmx1-6"})(["font-size:clamp(1.6rem,3vw,5rem);margin-bottom:2rem;font-weight:400;"]),w=i("Wbzz"),v=i("9eSz"),x=i.n(v),E=i("+jxT"),S=Object(l.b)(d.a).withConfig({displayName:"Trips___StyledButton",componentId:"sc-1ib5fjn-0"})(["position:absolute;top:420px;font-size:14px;"]),I=function(e){var t=e.heading,i=Object(w.useStaticQuery)("1783343308");return r.a.createElement(_,null,r.a.createElement(C,null," ",t," "),r.a.createElement(T,null," ",function(e){var t=[];return e.allTripsJson.edges.forEach((function(e,i){t.push(r.a.createElement(N,{key:i},r.a.createElement(z,{alt:e.node.alt,fluid:e.node.img.childImageSharp.fluid}),r.a.createElement(L,null,r.a.createElement(O,null,r.a.createElement(E.a,null),r.a.createElement(R,null,e.node.name)),r.a.createElement(S,{to:"/trips",primary:"true",round:"true"},e.node.button))))})),t}(i)," "))},_=l.b.section.withConfig({displayName:"Trips__ProductsContainer",componentId:"sc-1ib5fjn-1"})(["min-height:100vh;padding:5rem calc((100vw - 1300px)/ 2);color:#fff;"]),C=l.b.h2.withConfig({displayName:"Trips__ProductsHeading",componentId:"sc-1ib5fjn-2"})(["font-size:clamp(2.4rem,6vw,7rem);text-align:center;margin-bottom:5rem;color:#000;"]),T=l.b.div.withConfig({displayName:"Trips__ProductWrapper",componentId:"sc-1ib5fjn-3"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:10px;justify-items:center;padding:0 2rem;@media only screen and (max-width:1200px){grid-template-columns:1fr 1fr;}@media only screen and (max-width:860px){grid-template-columns:1fr;}"]),N=l.b.div.withConfig({displayName:"Trips__ProductCard",componentId:"sc-1ib5fjn-4"})(["width:100%;height:500px;line-height:2;border-radius:10px;position:relative;transition:0.2s ease;"]),z=Object(l.b)(x.a).withConfig({displayName:"Trips__ProductImg",componentId:"sc-1ib5fjn-5"})(["overflow:hidden;height:100%;max-width:100%;position:relative;border-radius:10px;filter:brightness(60%);transition:filter .5s cubic-bezier(0.075,0.82,0.165,1);&:hover{filter:brightness(100%);}"]),L=l.b.div.withConfig({displayName:"Trips__ProductInfo",componentId:"sc-1ib5fjn-6"})(["display:flex;flex-direction:column;align-items:flex-start;padding:0 2rem;@media only screen and (max-width:200px){padding:0 2rem;}"]),O=l.b.div.withConfig({displayName:"Trips__TextWrap",componentId:"sc-1ib5fjn-7"})(["display:flex;align-items:center;position:absolute;top:375px;"]),R=l.b.h3.withConfig({displayName:"Trips__ProductTitle",componentId:"sc-1ib5fjn-8"})(["font-weight:800;font-size:2rem;margin-left:0.8rem;"]),H=i("IdFE"),j=i("ma3e"),V=Object(l.b)(H.a).withConfig({displayName:"Testimonials___StyledIoIosCheckmarkCircleOutline",componentId:"lilmub-0"})(["color:#3fffa8;font-size:3.2rem;margin-bottom:1.6rem;"]),P=Object(l.b)(j.a).withConfig({displayName:"Testimonials___StyledFaRegLightbulb",componentId:"lilmub-1"})(["color:#f9b19b;font-size:3.2rem;margin-bottom:1.6rem;"]),k=function(){var e=Object(w.useStaticQuery)("2304301606");return r.a.createElement(W,null,r.a.createElement(q,null,"Testimonials"),r.a.createElement(F,null,"What people are saying"),r.a.createElement(M,null,r.a.createElement(B,null,r.a.createElement(D,null,r.a.createElement(V,null),r.a.createElement("h3",null,"Sean Micheals"),r.a.createElement("p",null,'  "The greatest experience of my life it was so much fun exploring the mountains and they made it super easy to book the trip and accomodation.')),r.a.createElement(D,null,r.a.createElement(P,null),r.a.createElement("h3",null,"Jane Tracy"),r.a.createElement("p",null,'"It was so easy to set up my trip! They answered all my questions right away and gave me the best price out of all the companies I researched."'))),r.a.createElement(J,null,e.allFile.edges.map((function(e,t){return r.a.createElement(G,{key:t,fluid:e.node.childImageSharp.fluid})})))))},W=l.b.section.withConfig({displayName:"Testimonials__TestimonialsContainer",componentId:"lilmub-2"})(["width:100%;background:#fcfcfc;color:#000;padding:8rem calc((100vw - 1300px) / 2);height:100%;"]),q=l.b.h3.withConfig({displayName:"Testimonials__TopLine",componentId:"lilmub-3"})(["color:#077bf1;font-size:1.6rem;padding-left:3.2rem;margin-bottom:1.2rem;"]),F=l.b.p.withConfig({displayName:"Testimonials__Description",componentId:"lilmub-4"})(["text-align:start;padding-left:3.2rem;margin-bottom:4rem;font-size:clamp(2.4rem,5vw,3.2rem);font-weight:bold;"]),M=l.b.div.withConfig({displayName:"Testimonials__ContentWrapper",componentId:"lilmub-5"})(["display:grid;grid-template-columns:1fr 1fr;padding:0 3.2rem;@media only screen and (max-width:768px){grid-template-columns:1fr;}"]),B=l.b.div.withConfig({displayName:"Testimonials__ColumnOne",componentId:"lilmub-6"})(["display:grid;grid-template-rows:1fr 1fr;"]),D=l.b.div.withConfig({displayName:"Testimonials__Testimonial",componentId:"lilmub-7"})(["padding-top:1.6rem;padding-right:3.2rem;h3{margin-bottom:1.6rem;font-size:2.4rem;color:red;}P{color:#3b3b3b;}"]),J=l.b.div.withConfig({displayName:"Testimonials__ColumnTwo",componentId:"lilmub-8"})(["display:grid;grid-template-columns:1fr 1fr;margin-top:3.2rem;grid-gap:18px;@media screen and (max-width:500px){grid-template-columns:1fr;}"]),G=Object(l.b)(x.a).withConfig({displayName:"Testimonials__Images",componentId:"lilmub-9"})(["border-radius:10px;height:100%;"]);t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement(u,null),r.a.createElement(I,{heading:"Our Favourite Destination"}),r.a.createElement(k,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-96a6c6f4a2f1d41b91b1.js.map