(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema4"],{"15ca":function(a,e,t){a.exports=t.p+"img/45.5a0a5a91.png"},"20a4":function(a,e,t){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const a=this.elements.map(a=>a.id),e=a.indexOf(this.selected);if(e<0)return{};const t={};return 0===e?t.next=a[e+1]:(e+1===a.length||(t.next=a[e+1]),t.back=a[e-1]),t}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((a,e)=>{const t=a.data&&a.data.attrs?a.data.attrs:[];return{id:this.mainId+e+1,elm:a.elm,...t}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(a){return this.$refs[a][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(a=>a.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},"21d9":function(a,e,t){a.exports=t.p+"img/64.32511e04.png"},"23dc":function(a,e,t){a.exports=t.p+"img/44.508b8002.png"},"265d":function(a,e,t){a.exports=t.p+"img/52.563e4615.png"},"2c02":function(a,e,t){a.exports=t.p+"img/50.ae157b53.png"},"327c":function(a,e,t){a.exports=t.p+"img/48.d7b6df95.svg"},"385b":function(a,e,t){a.exports=t.p+"img/27.6d2b3a73.png"},"3eb5":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a._self._c;return e("div",{staticClass:"curso-main-container pb-3"},[e("BannerInterno"),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a._m(0),e("div",{staticClass:"row bg4 align-items-center"},[e("div",{staticClass:"px-lg-5 px-4"},[a._m(1),e("Separador"),a._m(2),e("p",{staticClass:"mb-5"},[a._v("La transformación de datos requiere herramientas robustas y confiables que puedan manejar eficientemente grandes volúmenes de información mientras mantienen la integridad y calidad de los datos. El mercado actual ofrece una amplia gama de soluciones, desde productos comerciales altamente especializados hasta alternativas de código abierto flexibles y personalizables.")])],1)]),e("div",{staticClass:"row bg15 align-items-center mb-5"},[e("div",{staticClass:"px-lg-5 px-4"},[e("div",{staticClass:"bgw brad p-5 my-5"},[e("SlyderA",{attrs:{tipo:"b"}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("p",[e("b",[e("i",[a._v("Software")]),a._v(" comercial")]),a._v(". El "),e("i",[a._v("software")]),a._v(" comercial para transformación de datos ha evolucionado significativamente en las últimas décadas, ofreciendo soluciones integrales que combinan potencia, facilidad de uso y soporte profesional. Estas herramientas suelen destacar por su interfaz gráfica intuitiva, capacidades avanzadas de procesamiento y robustas características de seguridad y cumplimiento normativo. ")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("fe27"),alt:""}})])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("p",[e("b",[a._v("Alteryx")]),a._v(". Representa uno de los líderes en el espacio de preparación y análisis de datos empresariales. Esta plataforma se distingue por su enfoque en la automatización de flujos de trabajo y su capacidad para manejar datos de múltiples fuentes. Su interfaz visual para el diseño de procesos de transformación permite a los usuarios desarrollar flujos de trabajo complejos sin necesidad de programación extensiva. La herramienta sobresale en escenarios empresariales donde la velocidad de implementación y la facilidad de uso son prioritarias. ")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("23dc"),alt:""}})])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("p",[e("b",[a._v("Informatica "),e("i",[a._v("PowerCenter")])]),a._v(". Se posiciona como una solución empresarial robusta para la integración y transformación de datos. Su arquitectura escalable y sus capacidades avanzadas de procesamiento la hacen particularmente adecuada para entornos empresariales de gran escala. La plataforma ofrece funcionalidades comprensivas para el mapeo de datos, la gestión de calidad y la documentación de transformaciones, aunque su complejidad puede requerir una inversión significativa en capacitación y recursos especializados. ")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("15ca"),alt:""}})])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("p",[e("i",[e("b",[a._v("Talend Data Integration")])]),a._v(". Aunque ofrece una versión de código abierto, se destaca en su edición comercial por sus capacidades empresariales avanzadas. La plataforma combina una interfaz gráfica intuitiva con la posibilidad de desarrollo de código personalizado, permitiendo a las organizaciones implementar transformaciones complejas mientras mantienen la facilidad de mantenimiento. Sus capacidades de integración con diversas fuentes de datos y sistemas empresariales la hacen particularmente valiosa en entornos heterogéneos. ")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("d8e2"),alt:""}})])])])],1)])]),e("h5",[a._v("Soluciones de código abierto. ")]),e("p",{staticClass:"mb-5"},[a._v("El ecosistema de código abierto ha producido herramientas poderosas y flexibles para la transformación de datos, ofreciendo alternativas viables a las soluciones comerciales. Estas herramientas se caracterizan por su transparencia, flexibilidad y capacidad de personalización, aunque pueden requerir mayor experiencia técnica para su implementación efectiva. ")]),a._m(3),a._m(4),a._m(5),e("Separador"),a._m(6),e("p",{staticClass:"mb-5"},[a._v("El ecosistema de bibliotecas para transformación de datos en R y Python ha evolucionado significativamente, proporcionando herramientas poderosas y flexibles que facilitan el procesamiento eficiente de datos. Estas bibliotecas constituyen el núcleo de muchas soluciones modernas de transformación de datos, ofreciendo tanto flexibilidad como rendimiento.")]),a._m(7),a._m(8),a._m(9),e("Separador"),a._m(10),e("p",{staticClass:"mb-5"},[a._v("La automatización de procesos de transformación es una tendencia evidente en la modernización de los flujos de trabajo de datos. Esta automatización no solo mejora la eficiencia operativa, sino que también reduce errores y garantiza la consistencia en el procesamiento de datos.")]),a._m(11),a._m(12)],1)],1)},i=[function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-principal color-acento-contenido"},[e("div",{staticClass:"titulo-principal__numero"},[e("span",[a._v("4")])]),e("h1",[a._v("Mejores prácticas y casos de aplicación")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"row justify-content-center align-items-center bg2 text-white p-4 brad"},[e("div",{staticClass:"col-lg-auto"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("385b"),alt:""}})]),e("div",{staticClass:"col pt-lg-0 pt-md-4"},[e("p",{staticClass:"mb-0"},[a._v("En el ecosistema actual de la ciencia de datos, la selección y utilización efectiva de herramientas y tecnologías apropiadas impulsan la transformación de datos. Este capítulo explora las diversas soluciones disponibles, desde software especializado hasta plataformas integradas, proporcionando una comprensión importante de sus capacidades y aplicaciones. ")])])])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_4_1"}},[e("h2",[a._v("4.1 Herramientas especializadas ")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("div",{staticClass:"bgi brad1 p-4 h-100"},[e("img",{staticClass:"img-t mb-2",attrs:{src:t("d55a"),alt:""}}),e("h5",{staticClass:"text-center fst-italic"},[a._v("Apache NiFi")]),e("p",{staticClass:"mb-0"},[a._v("Se ha establecido como una plataforma robusta para la automatización y gestión de flujos de datos. Su arquitectura distribuida y su modelo de procesamiento basado en flujos lo hacen particularmente adecuado para escenarios que requieren procesamiento en tiempo real y alta disponibilidad. La plataforma ofrece una interfaz web intuitiva para el diseño de flujos de datos, mientras mantiene capacidades avanzadas de monitoreo y control de versiones.")])])]),e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("div",{staticClass:"bg12 brad1 p-4 h-100"},[e("img",{staticClass:"img-t mb-2",attrs:{src:t("d55a"),alt:""}}),e("h5",{staticClass:"text-center fst-italic"},[a._v("OpenRefine")]),e("p",{staticClass:"mb-0"},[a._v("Anteriormente conocido como "),e("b",[e("i",[a._v("Google Refine")])]),a._v(", proporciona una herramienta específicamente diseñada para la limpieza y transformación de datos desordenados. Su interfaz similar a una hoja de cálculo, combinada con capacidades avanzadas de clustering y normalización, lo hace especialmente útil para tareas de limpieza de datos y normalización de valores. La herramienta destaca en escenarios que requieren exploración interactiva y refinamiento iterativo de datos.")])])]),e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("div",{staticClass:"bgi brad1 p-4 h-100"},[e("img",{staticClass:"img-t mb-2",attrs:{src:t("d55a"),alt:""}}),e("h5",{staticClass:"text-center fst-italic"},[a._v("Pentaho Data Integration (PDI)")]),e("p",{staticClass:"mb-0"},[a._v("También conocido como "),e("b",[e("i",[a._v("Kettle")])]),a._v(", ofrece una suite completa de herramientas para la integración y transformación de datos. Su interfaz gráfica para el diseño de transformaciones, combinada con un amplio conjunto de componentes predefinidos, facilita el desarrollo de procesos de transformación complejos. La plataforma se destaca por su capacidad para manejar diversos formatos de datos y su extensibilidad mediante plugins personalizados. ")])])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center align-items-center mb-4"},[e("div",{staticClass:"col-lg-auto"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("7706"),alt:""}})]),e("div",{staticClass:"col pt-lg-0 pt-md-4"},[e("p",{staticClass:"mb-0"},[a._v("La selección entre soluciones comerciales y de código abierto debe considerar múltiples factores, incluyendo los requisitos específicos del proyecto, las restricciones presupuestarias, la experiencia técnica disponible y las consideraciones de soporte y mantenimiento a largo plazo. Las organizaciones frecuentemente optan por un enfoque híbrido, combinando herramientas comerciales y de código abierto según las necesidades específicas de cada caso de uso. ")])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"bg10 brad1 p-4"},[e("p",{staticClass:"mb-0"},[a._v("La evolución continua tanto de las soluciones comerciales como de código abierto refleja la creciente importancia de la transformación de datos en el panorama analítico actual. La tendencia hacia la automatización, la integración de capacidades de machine learning y la mejora en la usabilidad continúa impulsando innovaciones en ambos segmentos del mercado. ")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_4_2"}},[e("h2",[a._v("4.2 Bibliotecas principales en R y "),e("i",[a._v("Python")])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"titulo-sexto color-acento-botones"},[e("h5",[a._v("Figura 3.")]),e("span",[a._v("Proceso general de la analítica de datos")])]),e("div",{staticClass:"bgfig p-5 brad mb-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("327c"),alt:"La Figura 2 se denomina «Ecosistema de bibliotecas para transformación de datos» y presenta un diagrama comparativo de las principales bibliotecas de transformación de datos en Python y en R."}})]),e("figcaption",[a._v("Fuente: OIT, 2024. ")])])])},function(){var a=this,e=a._self._c;return e("p",{staticClass:"mb-5"},[a._v("En el entorno "),e("i",[a._v("Python")]),a._v(", pandas se ha establecido como la biblioteca fundamental para la manipulación y transformación de datos. Su estructura principal, el DataFrame, proporciona una interfaz intuitiva y eficiente para operaciones complejas de transformación. La biblioteca ofrece funcionalidades avanzadas para limpieza, reestructuración y agregación de datos, mientras mantiene un rendimiento optimizado para grandes conjuntos de datos.")])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3 j"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("e59f"),alt:""}})]),e("div",{staticClass:"col-lg-8 my-lg-0 my-3"},[e("div",{staticClass:"bgi brad1 p-4 mb-4"},[e("p",{staticClass:"mb-0"},[e("i",[a._v("NumPy")]),a._v(" complementa a pandas proporcionando capacidades fundamentales para operaciones numéricas y manipulación de "),e("i",[a._v("arrays")]),a._v(". Su integración cercana con pandas permite operaciones vectorizadas eficientes y transformaciones matemáticas complejas.")])]),e("div",{staticClass:"row justify-content-center align-items-center mb-4"},[e("div",{staticClass:"col-lg-auto"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("2c02"),alt:""}})]),e("div",{staticClass:"col pt-lg-0 pt-md-4"},[e("p",{staticClass:"mb-0"},[a._v("En el ecosistema R, el conjunto de paquetes tidyverse, particularmente dplyr y tidyr, ha revolucionado la forma en que se realizan las transformaciones de datos. dplyr proporciona una gramática consistente y expresiva para manipulación de datos, mientras que tidyr se especializa en la restructuración y limpieza de datos desordenados. ")])])]),e("p",[a._v("La biblioteca "),e("i",[a._v("data.table ")]),a._v("en "),e("b",[a._v("R")]),a._v(" se destaca por su rendimiento excepcional en operaciones con grandes conjuntos de datos. Su sintaxis concisa y eficiente la hace particularmente valiosa en escenarios que requieren procesamiento de alto rendimiento. ")])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_4_3"}},[e("h2",[a._v("4.3 Automatización de procesos de transformación")])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row bg4 align-items-center"},[e("div",{staticClass:"px-lg-5 px-4"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"row justify-content-center bg13 brad1 p-4 mb-4 pb-0"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("21d9"),alt:""}})]),e("div",{staticClass:"col-lg-8 my-lg-0 my-3"},[e("div",{staticClass:"bg1 brad1 p-4"},[e("p",{staticClass:"mb-0"},[a._v("Los "),e("i",[a._v("pipelines")]),a._v(" de transformación automatizados constituyen la columna vertebral de muchos sistemas modernos de procesamiento de datos. Estos pipelines pueden implementarse utilizando diversas tecnologías, desde scripts simples hasta sistemas orquestados complejos. La selección de la estrategia de automatización depende de factores como la frecuencia de actualización de datos, los requisitos de rendimiento y la complejidad de las transformaciones. ")])])])])])]),e("div",{staticClass:"bgi brad1 p-4 mb-5"},[e("p",{staticClass:"mb-0"},[e("b",[e("i",[a._v("Apache Airflow")])]),a._v(" se ha convertido en una herramienta líder para la orquestación de flujos de trabajo de datos. Su modelo basado en DAG (Grafos Acíclicos Dirigidos) permite definir dependencias complejas entre tareas mientras mantiene la flexibilidad para manejar fallos y reintentos. La plataforma proporciona capacidades robustas de monitoreo y logging, facilitando la identificación y resolución de problemas en los procesos automatizados. ")])])])])},function(){var a=this,e=a._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("div",{staticClass:"bgi brad1 p-4 h-100"},[e("img",{staticClass:"img-t img-a mb-4",attrs:{src:t("d415"),alt:""}}),e("p",{staticClass:"mb-0"},[a._v("La implementación de pruebas automatizadas en los procesos de transformación es una cuestión primordial para mantener la calidad de los datos. Estas pruebas pueden incluir validaciones de esquema, verificaciones de integridad y pruebas de lógica de negocio. La automatización de estas pruebas ayuda a identificar problemas tempranamente en el proceso de transformación.")])])]),e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("div",{staticClass:"bg12 brad1 p-4 h-100"},[e("img",{staticClass:"img-t img-a mb-4",attrs:{src:t("265d"),alt:""}}),e("p",{staticClass:"mb-0"},[a._v("La documentación automatizada de los procesos de transformación, incluyendo el linaje de datos y los metadatos de transformación, facilita el mantenimiento y la auditoría de los sistemas de procesamiento de datos. Herramientas como Great Expectations permiten definir y validar automáticamente expectativas sobre los datos, proporcionando documentación viva que evoluciona con los datos.")])])]),e("div",{staticClass:"col-lg-4 my-lg-0 my-3 j1"},[e("img",{staticClass:"img-a img-t",attrs:{src:t("76ec"),alt:""}})])])}],n=function(){var a=this,e=a._self._c;return e("div",{staticClass:"slyder-a"},["a"===a.tipo?e("div",{staticClass:"slyder-a__tipo-a"},[a.navObj.next?e("div",{staticClass:"slyder-a__btn--sigt",on:{click:function(e){a.selected=a.navObj.next},mouseover:function(e){a.mostrarIndicador=!1}}},[a.mostrarIndicador?e("div",{staticClass:"indicador__container indicador--left"},[e("div",{staticClass:"indicador--click"})]):a._e()]):a._e(),a.navObj.back?e("div",{staticClass:"slyder-a__btn--atrs",on:{click:function(e){a.selected=a.navObj.back}}}):a._e(),e("div",{staticClass:"slyder-a__bullets"},a._l(a.elements,(function(t){return e("div",{key:"sl-blt-key-"+t.id,staticClass:"slyder-a__bullets__item",class:{"slyder-a__bullets__item--active":a.selected===t.id},on:{click:function(e){a.selected=t.id}}})})),0)]):a._e(),a.elements.length&&a.rendered?e("ScrollHorizontal",{attrs:{selectedId:"sl-"+a.selected,"item-full-width":""}},a._l(a.elements,(function(a){return e("div",{directives:[{name:"child",rawName:"v-child",value:a.elm,expression:"item.elm"}],key:"sl-key-"+a.id,staticClass:"slyder-a__item",attrs:{id:"sl-"+a.id}})})),0):a._e(),"b"===a.tipo?e("div",{staticClass:"slyder-a__tipo-b mt-3"},[e("div",{staticClass:"slyder-a__btn--atrs",class:{hide:!a.navObj.back},on:{click:function(e){a.selected=a.navObj.back}}}),e("div",{staticClass:"slyder-a__bullets"},a._l(a.elements,(function(t){return e("div",{key:"sl-blt-key-"+t.id,staticClass:"slyder-a__bullets__item",class:{"slyder-a__bullets__item--active":a.selected===t.id},on:{click:function(e){a.selected=t.id}}})})),0),e("div",{staticClass:"slyder-a__btn--sigt",class:{hide:!a.navObj.next},on:{click:function(e){a.selected=a.navObj.next},mouseover:function(e){a.mostrarIndicador=!1}}},[a.mostrarIndicador?e("div",{staticClass:"indicador__container indicador--left"},[e("div",{staticClass:"indicador--click"})]):a._e()])]):a._e(),e("div",{staticClass:"hidden-slot"},[a._t("default")],2)],1)},o=[],c=function(){var a=this,e=a._self._c;return e("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[e("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":a.itemFullWidth},{row:a.row}],style:[{transform:`translate(${a.scrollVal}px,0px)`}]},[a._t("default")],2)])},r=[],l={name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(a){a.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var a;const e=null===(a=this.ids.find(a=>a.id===this.selectedId))||void 0===a?void 0:a.id,t=document.getElementById(e);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===t)return;const s=this.$refs.hContainer,i=t.offsetWidth*this.ids.length;let n=t.offsetLeft;const o=s.offsetWidth/t.offsetWidth;o>1&&i-n<s.offsetWidth&&(n=i-s.offsetWidth),this.scrollVal=1===this.ids.length?0:-n},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(a=>({id:a.elm.id,key:a.key})))}}},d=l,m=(t("fff0"),t("2877")),p=Object(m["a"])(d,c,r,!1,null,"2a7d1721",null),u=p.exports,f=t("20a4"),v={name:"SlyderA",components:{ScrollHorizontal:u},mixins:[f["a"]],props:{tipo:{type:String,default:"a"}},data:()=>({mostrarIndicador:!0,secuencial:!0})},g=v,b=Object(m["a"])(g,n,o,!1,null,null,null),_=b.exports,h={name:"Tema4",components:{SlyderA:_},data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},y=h,C=Object(m["a"])(y,s,i,!1,null,null,null);e["default"]=C.exports},"76ec":function(a,e,t){a.exports=t.p+"img/53.29f42bd3.png"},7706:function(a,e,t){a.exports=t.p+"img/47.f8cfda86.png"},bec2:function(a,e,t){},d415:function(a,e,t){a.exports=t.p+"img/51.1a3f8887.png"},d55a:function(a,e,t){a.exports=t.p+"img/10.75716029.svg"},d8e2:function(a,e,t){a.exports=t.p+"img/46.0bbd9a6a.png"},e59f:function(a,e,t){a.exports=t.p+"img/49.b694a1ec.png"},fe27:function(a,e,t){a.exports=t.p+"img/43.d6c145b1.png"},fff0:function(a,e,t){"use strict";t("bec2")}}]);
//# sourceMappingURL=tema4.a8ce5647.js.map