/*!CK:2059187089!*//*1434123708,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["xMTrg"]); }

__d("ScrollColumn.react",["cx","invariant","throttle","tidyEvent","Arbiter","Event","React","Vector","ViewportBounds"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=m,q=p.PropTypes,r='ScrollColumn/adjust',s=m.createClass({displayName:"ScrollColumn",propTypes:{topOffset:q.number,zIndex:q.number},getDefaultProps:function(){return {topOffset:0,zIndex:0};},_scroll:0,_scrollDelta:0,getInitialState:function(){return {fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0};},render:function(){var t='auto',u=this.state.fixedLeft,v='auto';if(this.state.fixed==='bottom'){t=this.state.fixedBottom;}else if(this.state.fixed==='top'){v=this.state.fixedTop;}else{u='auto';v=this.state.top;}return (m.createElement("div",{className:"_5ss7",ref:"container"},m.createElement("div",{className:(("_5ss8")+(this.state.fixed?' '+"fixed_always":'')),ref:"column",style:{bottom:t,left:u,top:v,zIndex:this.props.zIndex}},this.props.children)));},componentDidMount:function(){this.setState({adjustEventListener:j(k.subscribe(r,function(){this._adjust();}.bind(this))),resizeListener:j(l.listen(window,'resize',i(this._adjust))),scrollListener:j(l.listen(window,'scroll',this._onScroll)),viewportBoundsUpdateListener:j(o.subscribe('change',this._adjust))});this._adjust();},componentDidUpdate:function(t,u){if(u.fixed!==this.state.fixed)k.inform('reflow');},componentWillUnmount:function(){this.state.adjustEventListener.unsubscribe();this.state.resizeListener.remove();this.state.scrollListener.remove();},_onScroll:function(event){var t=n.getScrollPosition().y;this._scrollDelta=t-this._scroll;this._scroll=t;this._adjust();},_adjust:function(){if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return;}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return;}if(this._scrollDelta>0)if(this._isBottomOfColumnVisible()){this._setFixedToBottom();return;}if(this._scrollDelta<0)if(this._isTopOfColumnVisible()){this._setFixedToTop();return;}var t=this._getTopPositionForRef('column'),u=this._getTopPositionForRef('container'),v=t-u;this._setNotFixed(v);},_getTopPositionForRef:function(t){var u=this.refs[t];h(u);var v=n.getElementPosition(m.findDOMNode(u),'viewport').y;if(this._scroll<0)v+=this._scroll;return v;},_getTopBoundWithOffset:function(){return o.getTop()+this.props.topOffset;},_isContainerBelowViewportTop:function(){var t=this._getTopPositionForRef('container');return t>=this._getTopBoundWithOffset();},_isColumnLargerThanViewport:function(){var t=n.getViewportDimensions().y-o.getBottom()-this._getTopBoundWithOffset();return m.findDOMNode(this.refs.column).offsetHeight>t;},_isBottomOfColumnVisible:function(){var t=this._getTopPositionForRef('column'),u=n.getElementDimensions(m.findDOMNode(this.refs.column),'viewport').y,v=t+u;return v<=n.getViewportDimensions().y-o.getBottom();},_isTopOfColumnVisible:function(){var t=this._getTopPositionForRef('column');return t>=this._getTopBoundWithOffset();},_getFixedLeft:function(){return (n.getElementPosition(m.findDOMNode(this.refs.container),'viewport').x);},_setFixedToBottom:function(){this.setState({fixed:'bottom',fixedBottom:o.getBottom(),fixedLeft:this._getFixedLeft()});},_setFixedToTop:function(){this.setState({fixed:'top',fixedLeft:this._getFixedLeft(),fixedTop:this._getTopBoundWithOffset()});},_setNotFixed:function(t){this.setState({fixed:false,top:t});},_updateContainerHeight:function(){m.findDOMNode(this.refs.container).style.height=m.findDOMNode(this.refs.column).offsetHeight+'px';},_updateColumnWidth:function(){m.findDOMNode(this.refs.column).style.width=m.findDOMNode(this.refs.container).offsetWidth+'px';}});s.EVENT_SHOULD_ADJUST=r;e.exports=s;},null);
__d("TabBarItem.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g.createClass({displayName:"TabBarItem",getDefaultProps:function(){return {wrapper:'li'};},render:function(){var k=(("_45hc")+(this.props.selected?' '+"_1hqh":'')),l=this.props.wrapper,m=this.props.href||'#',n=this.props.ajaxify,o=this.props.rel;if(l)return (g.createElement(l,g.__spread({},this.props,{className:i(this.props.className,k)}),g.createElement("a",{ajaxify:n,href:m,rel:o,target:this.props.target},this.props.children)));return (g.createElement("a",g.__spread({},this.props,{ajaxify:n,className:i(this.props.className,k),href:m,rel:o}),this.props.children));}});e.exports=j;},null);
__d("TabBarDropdownItem.react",["ContextualDialogArrow","ContextualLayerAutoFlip","InlineBlock.react","PopoverMenu.react","React","ReactXUIMenu","TabBarItem.react","cx","onlyChild","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q=k,r=q.PropTypes,s=k.createClass({displayName:"TabBarDropdownItem",propTypes:{tabComponent:r.func},getDefaultProps:function(){return {tabComponent:m};},_renderTab:function(){var t=this.props.tabComponent,u="_45hd _45hc";return (k.createElement(t,k.__spread({},this.props,{wrapper:false,className:p(this.props.className,u)}),k.createElement("span",{className:"_1b0"},this.props.label)));},render:function(){if(this.props.children){var t=this.props.selected?l.SelectableMenu:l,u=k.createElement(t,null,this.props.children.map(this.convertTabItemWrapperToMenuItem)),v=[h,g];return (k.createElement("li",{className:"_45hd"},k.createElement(j,{menu:u,layerBehaviors:v},this._renderTab())));}else return (k.createElement("li",{className:"_45hd"},k.createElement(i,null,this._renderTab())));},convertTabItemWrapperToMenuItem:function(t,u){var v=this.props.selected?l.SelectableItem:l.Item,w=o(t.type.getComponent(t.props));return (k.createElement(v,k.__spread({},w.props,{key:u,onclick:w.props.onClick}),w.props.children));}});e.exports=s;},null);
__d("TabBar.react",["React","ReactChildren","TabBarDropdownItem.react","TabBarItem.react","cx","fbt","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=g,o=n.PropTypes,p=l._("More"),q=g.createClass({displayName:"TabBarItemWrapper",statics:{getComponent:function(s){return s.component;}},render:function(){return this.props.component;}}),r=g.createClass({displayName:"TabBar",propTypes:{activeTabKey:o.string,alwaysShowActive:o.bool,defaultActiveTabKey:o.string,maxTabsVisible:o.number,moreLabel:o.string,onTabClick:o.func,dropdownTabComponent:o.func,onWidthCalculated:o.func,shouldCalculateVisibleTabs:o.bool},getDefaultProps:function(){return {alwaysShowActive:true,dropdownTabComponent:j,maxTabsVisible:Infinity,moreLabel:p,onTabClick:function(){return true;},shouldCalculateVisibleTabs:true};},getInitialState:function(){return {activeTabKey:this.props.defaultActiveTabKey,visibleTabs:0,shouldCalculateVisibleTabs:true};},setWidth:function(s){g.findDOMNode(this).style.width=s;this.setState({shouldCalculateVisibleTabs:true});},render:function(){var s=[];h.forEach(this.props.children,function(ba){if(ba)s.push(ba);});var t=s.length,u=this.getActiveTabIndex(),v=s[u];if(this.state.shouldCalculateVisibleTabs){s=s.map(function(ba,ca){ba=g.cloneElement(ba,{selected:ca===u});return (g.createElement(q,{key:ba.key,component:ba,ref:ca}));});if(t>2)s.push(g.createElement(i,{key:"_dropdown",ref:"more",label:this.props.moreLabel,tabComponent:this.props.dropdownTabComponent}));}else{s=s.map(function(ba,ca){ba=g.cloneElement(ba,{selected:v&&v.key===ba.key,onClick:this.onTabClick.bind(this,ba.key)});return (g.createElement(q,{key:ba.key,component:ba,ref:ca}));}.bind(this));var w=this.state.visibleTabs,x;if(w>0){var y;if(!this.props.alwaysShowActive||u<w){y=s.splice(w);if(u>=w)x=true;}else{v=s.splice(u,1)[0];y=s.splice(w-1);s.push(v);}if(y.length)s.push(g.createElement(i,{selected:x,key:"_dropdown",label:this.props.moreLabel,tabComponent:this.props.dropdownTabComponent},y));}else{var z=v;if(!v)z=q.getComponent(s[0].props);var aa=z.props.children;s=g.createElement(i,{label:aa,tabComponent:this.props.dropdownTabComponent,selected:this.getActiveTabIndex()!==-1},s);}}return (g.createElement("ul",g.__spread({},this.props,{className:m(this.props.className,"_43o4")}),s));},componentDidMount:function(){this.calculateVisibleTabs();this.calculateWidth();},componentWillReceiveProps:function(s){this.setState({shouldCalculateVisibleTabs:true});},componentDidUpdate:function(){if(this.state.shouldCalculateVisibleTabs)this.calculateVisibleTabs();this.calculateWidth();},calculateWidth:function(){if(this.props.onWidthCalculated)this.props.onWidthCalculated(g.findDOMNode(this).clientWidth);},calculateVisibleTabs:function(){var s=[];h.forEach(this.props.children,function(ca){if(ca)s.push(ca);});var t=s.length;if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabs:Math.min(t,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});return;}var u=[];for(var v=0;v<t;v++)u.push(g.findDOMNode(this.refs[v]).offsetWidth);var w=this.getActiveTabIndex();if(this.props.alwaysShowActive&&w!==-1){s.unshift(s.splice(w,1)[0]);u.unshift(u.splice(w,1)[0]);}var x=g.findDOMNode(this).offsetWidth,y=0,z=0;for(v=0;v<t;v++){var aa=u[v];if(z+aa>x){if(y>0&&t>2){var ba=g.findDOMNode(this.refs.more).offsetWidth;while(y>0&&(z+ba>x||t-y<2)){y--;z-=u[y];}}else y=0;break;}y++;z+=aa;}this.setState({visibleTabs:Math.min(y,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});},getActiveTabIndex:function(){var s=this.props.activeTabKey||this.state.activeTabKey,t=-1;if(s)h.forEach(this.props.children,function(u,v){if(u&&u.key===s)t=v;});return t;},onTabClick:function(s,event){var t=this.props.onTabClick(s,event);if(t!==false)this.setState({activeTabKey:s,shouldCalculateVisibleTabs:true});return t;}});r.Tab=j;r.DropdownItem=i;e.exports=r;},null);
__d("XUIPageNavigationItem.react",["React","TabBarItem.react","cx","fbt","merge","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=g,n=m.PropTypes,o=g.createClass({displayName:"XUIPageNavigationItem",statics:{propsForMenuItem:function(p){return k(p,{className:"_5vwz _5vw-"});}},propTypes:{selected:n.bool},getDefaultProps:function(){return {selected:false};},render:function(){var p=(("_5vwz")+(this.props.selected?' '+"_5vwy":'')),q=null;if(this.props.selected)q=g.createElement("span",{className:"accessible_elem"},j._("selected"));return (g.createElement(h,g.__spread({},this.props,{className:l(this.props.className,p)}),this.props.children,q,g.createElement("span",{className:"_13xf"})));}});e.exports=o;},null);
__d("XUIPageNavigationGroup.react",["React","TabBar.react","XUIPageNavigationItem.react"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=g,k=j.PropTypes,l=g.createClass({displayName:"XUIPageNavigationGroup",propTypes:{moreLabel:k.string,maxTabsVisible:function(m,n,o){var p=m[n];if(p!=null&&!(typeof p==='number'&&p>=0))return new Error(("Invalid `"+n+"` supplied to `"+o+"`, ")+("expected positive integer."));},width:k.string},getDefaultProps:function(){return {maxTabsVisible:Infinity};},componentDidUpdate:function(){this.refs.bar.setWidth(this.props.width);},componentDidMount:function(){this.refs.bar.setWidth(this.props.width);},render:function(){return g.createElement(h,g.__spread({},this.props,{ref:"bar"}),this.props.children);}});l.Item=i;e.exports=l;},null);
__d("XUIPageNavigation.react",["Arbiter","CSS","DOMQuery","Event","LeftRight.react","React","ReactChildren","ReactComponentWithPureRenderMixin","SubscriptionsHandler","TinyViewport","Vector","ViewportBounds","XUIPageNavigationGroup.react","cloneWithProps","csx","cx","invariant","joinClasses","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b.__markCompiled&&b.__markCompiled();var z=l,aa=z.PropTypes,ba=15,ca='bluebar',da='caret',ea=l.createClass({displayName:"XUIPageNavigation",mixins:[n],propTypes:{selectedIndicator:aa.oneOf([da,ca]),caretColor:aa.oneOf(['bg-blue','fbui-desktop-wash','fbui-desktop-background-light','fbui-red','fbui-green','fbui-desktop-divider-dark','white']),size:aa.oneOf(['small','medium']),scrollThreshold:aa.number},getDefaultProps:function(){return {selectedIndicator:ca,caretColor:'fbui-desktop-wash',size:'medium',scrollThreshold:0};},getInitialState:function(){return {activeTabKey:undefined,leftWidth:null};},componentDidMount:function(){this._subscriptions=new o();this.resizeNavbarGroups();this._listenForNavbarResize();var fa="^.fixed_elem._5vx1";this.wrapper=i.scry(l.findDOMNode(this),fa)[0];if(this.wrapper){this._setViewportBounds();this._subscriptions.addSubscriptions(p.subscribe('change',function(){if(p.isTiny()){this._bound.remove();}else this._setViewportBounds();}.bind(this)));}if(this.wrapper||i.scry(l.findDOMNode(this),"^._k").length)this._showDropshadowOnScroll();},componentWillUnmount:function(){this._subscriptions.release();},onTabClick:function(fa,event){if(this.props.onTabClick){var ga=this.props.onTabClick(fa,event);if(!ga)return ga;}if(!j.$E(event).isDefaultRequested())this.setState({activeTabKey:fa});},onWidthCalculated:function(fa,ga){this[fa?'_rightWidth':'_leftWidth']=ga;},render:function(){var fa=this.props.selectedIndicator,ga=this.props.size,ha=(("_5vx2")+(ga==='small'?' '+"_5vx3":'')+(ga==='medium'?' '+"_5vx4":'')+(fa===da?' '+"_5vx5":'')+(fa===ca?' '+"_5vx6":'')),ia=null;if(fa===da){var ja=this.props.caretColor;ia=((ja==='bg-blue'?"_2d2c":'')+(ja==='fbui-desktop-wash'?' '+"_4_np":'')+(ja==='fbui-desktop-background-light'?' '+"_4_nr":'')+(ja==='fbui-red'?' '+"_4_ns":'')+(ja==='fbui-green'?' '+"_4_nv":'')+(ja==='fbui-desktop-divider-dark'?' '+"_4_nz":'')+(ja==='white'?' '+"_5-f":''));}var ka=x(ha,ia,this.props.className),la=[],ma=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;m.forEach(this.props.children,function(na,oa){var pa={onTabClick:this.onTabClick,activeTabKey:ma,onWidthCalculated:this.onWidthCalculated.bind(this,oa),ref:oa?'right':'left',key:oa};if(oa===0)pa.width=this.state.leftWidth;la.push(t(na,pa));}.bind(this));w(la.length===1||la.length===2);return (l.createElement("div",{className:ka},l.createElement(k,{className:"_5vx7"},la)));},_setViewportBounds:function(){var fa=this.wrapper.offsetHeight,ga=r.getTop();this._bound=r.addTop(ga+fa);g.subscribe('page_transition',function(){this._bound.remove();});},_listenForNavbarResize:function(){this._subscriptions.addSubscriptions(j.listen(window,'resize',y(this.resizeNavbarGroups,30)));},_showDropshadowOnScroll:function(){this._subscriptions.addSubscriptions(j.listen(window,'scroll',function(){var fa=q.getScrollPosition().y>this.props.scrollThreshold;if(this._hasDropshadow===fa)return;this._hasDropshadow=fa;h.conditionClass(l.findDOMNode(this),"_51j8",fa);}.bind(this)));},resizeNavbarGroups:function(){if(!this.refs.left)return;var fa=l.findDOMNode(this).clientWidth,ga;if(this.refs.right){ga=fa-this._rightWidth-ba;if(ga<this._rightWidth)ga=this._rightWidth+ba;}else ga=fa;this.setState({leftWidth:ga+'px'});}});ea.Group=s;ea.Item=s.Item;ea.Indicator={BlueBar:ca,Caret:da};e.exports=ea;},null);
__d("XComposerActorChangeController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/composer\/actor\/change\/",{composer_id:{type:"String",required:true},entry_point:{type:"Enum",required:true,enumType:1},from_actor_id:{type:"Int",required:true},target_id:{type:"Int",required:true}});},null);
__d("ComposerXActorSelector.react",["ActorSelector.react","ActorSelectorNuxTypes","ActorURI","Arbiter","AsyncRequest","React","emptyFunction","XActorSelectorNuxSeenWriteController","XComposerActorChangeController","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();var q=l,r=q.PropTypes,s=l.createClass({displayName:"ComposerXActorSelector",propTypes:{actorIDs:r.array.isRequired,composerID:r.string.isRequired,coverEnabled:r.bool.isRequired,entryPoint:r.string.isRequired,nuxEnabledCovered:r.bool,nuxEnabledUncovered:r.bool,nuxHoverContext:r.object,onChange:r.func,pagePermissions:r.object.isRequired,selectedActorID:r.string.isRequired,settingsURI:r.string,targetID:r.string.isRequired},getInitialState:function(){return {loading:false};},componentWillMount:function(){j.subscribe('ComposerXPages/composePostWithActor',function(t,u){if(u.actorID)this._updateCurrentActor(u.actorID,function(){if(u.callback)u.callback();});}.bind(this));},render:function(){return (l.createElement(g,{actorIDs:this.props.actorIDs,actorPermissions:this.props.pagePermissions,coverEnabled:this.props.coverEnabled,loading:this.state.loading,nuxBody:this._getNUXBody(),nuxEnabledCovered:this.props.nuxEnabledCovered,nuxEnabledUncovered:this.props.nuxEnabledUncovered,nuxHoverContext:this.props.nuxHoverContext,onChange:this._onChange,onCompleteNux:this._onCompleteNux,ref:"selector",selectedActorID:this.props.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this._getTooltipForActorName,tooltipConstructorCovered:this._getCoveredTooltip}));},_getNUXBody:function(){return (p._("Choose whether to post as yourself or as one of the Pages you manage."));},_getTooltipForActorName:function(t){return (p._("Posting as {actorName}",[p.param("actorName",t)]));},_getCoveredTooltip:function(){return (p._("Post as one of the Pages you manage."));},_onChange:function(t){if(this.props.onChange){this.props.onChange(t.value);}else this._updateCurrentActor(t.value);},_updateCurrentActor:function(t,u){u=u||m;if(this.props.selectedActorID===t){u();return;}this.setState({loading:true});var v=i.create(o.getURIBuilder().setString('composer_id',this.props.composerID).setEnum('entry_point',this.props.entryPoint).setInt('from_actor_id',this.props.selectedActorID).setInt('target_id',this.props.targetID).getURI(),t),w=function(){this.setState({loading:false});}.bind(this);new k().setURI(v).setErrorHandler(w).setServerDialogCancelHandler(w).setFinallyHandler(u).send();},_onCompleteNux:function(t){var u=t.isCovered,v=u?h.COMPOSER_COVERED:h.COMPOSER,w=n.getURIBuilder().setEnum('nux_type',v).getURI();new k().setURI(w).send();}});e.exports=s;},null);
__d("SwapButtonDEPRECATED",["Event","Arbiter","copyProperties","CSS","Focus"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m,n,o){this._swapperButton=m;this._swappeeButton=n;g.listen(m,'click',this.swap.bind(this));if(o)g.listen(n,'click',this.unswap.bind(this));h.subscribe('SwapButtonDEPRECATED/focusOnJoinButton',this.setFocusOnSwapper.bind(this),h.SUBSCRIBE_ALL);}i(l.prototype,{_swapperButton:null,_swappeeButton:null,swap:function(m){j.hide(this._swapperButton);j.show(this._swappeeButton);m!==false&&k.setWithoutOutline(this._swappeeButton);},unswap:function(m){j.show(this._swapperButton);j.hide(this._swappeeButton);m!==false&&k.setWithoutOutline(this._swapperButton);},toggle:function(){j.toggle(this._swapperButton);j.toggle(this._swappeeButton);},setFocusOnSwapper:function(){this._swapperButton.focus();}});e.exports=l;},null);
__d("HubbleContext",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={},h={get:function(i){return g[i];},getPageID:function(){return g.page&&g.page.id;},setContext:function(i){g=i;},setKey:function(i,j){g[i]=j;},reset:function(){g={};}};e.exports=h;},null);
__d("HubbleLogger",["BanzaiLogger","ErrorUtils","HubbleContext","HubbleSurfaces","arrayContains"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=null,m=null,n=null,o=null,p=Object.keys(j).map(function(r){return j[r];}),q={getStatefulFields:function(){return {pageid:i.getPageID(),platform:n,prev_section:o,section:l,surface:m};},logAction:function(r){g.log('HubbleLoggerConfig',Object.assign({},this.getStatefulFields(),{action:r}));},reset:function(){l=null;m=null;n=null;o=null;},setActiveSection:function(r){o=l;l=r;},setActiveSurface:function(r){if(!k(p,r)){h.reportError('Hubble: Invalid surface value: '+r);return;}m=r;},setPlatform:function(r){n=r;}};e.exports=q;},null);
__d("XPageTabsReorderingController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/pages\/tabs\/reorder\/",{page_id:{type:"Int",required:true},__asyncDialog:{type:"Int"}});},null);
__d("PagesNavTabs",["AsyncRequest","React","XPageTabsReorderingController","XUIPageNavigation.react","XUIPageNavigationGroup.react","XUIPageNavigationItem.react","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o='manage_tabs',p={renderPagesNavTabs:function(q,r,s,t,u,v){var w=r.map(function(y){return (h.createElement(l,{href:y.href,key:y.key},y.label));});if(u){var x=i.getURIBuilder().setInt('page_id',v).getURI();w.push(h.createElement(l,{className:"_3ew_",key:o},n._("Manage Tabs")));}if(w.length===t+1)t++;h.render(h.createElement(j,{defaultActiveTabKey:s,onTabClick:function(y){if(y===o){new g(x).setData({rel:'dialog'}).send();return false;}return true;}},h.createElement(k,{maxTabsVisible:t},w)),q);}};e.exports=p;},null);
__d("PagesTimelineController",["Arbiter"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={LOAD_SECTION:'PagesTimelineController/loadSection',SECTION_FULLY_LOADED:'PagesTimelineController/sectionFullyLoaded',ACTIVATE_SCRUBBER_ITEM:'PagesTimelineController/activateScrubberItem',FIRST_POSTS_LOADED:'PagesTimelineController/firstPostsLoaded',REMOVE_SECTION:'PagesTimelineController/removeSection',RECENT_SECTION_KEY:'recent',NAV_BAR_LOADED:'PagesTimelineController/navBarLoaded',ADJUST_ADS:'PagesTimelineController/adjustAds',BOTTOM_OFFSET:100,loadSection:function(i){g.inform(this.LOAD_SECTION,{section_key:i},g.BEHAVIOR_STATE);},sectionFullyLoaded:function(i){g.inform(this.SECTION_FULLY_LOADED,{section_index:i},g.BEHAVIOR_PERSISTENT);},activateScrubberItem:function(i){g.inform(this.ACTIVATE_SCRUBBER_ITEM,{section_key:i},g.BEHAVIOR_STATE);},firstPostsLoaded:function(i){g.inform(this.FIRST_POSTS_LOADED,{section_key:i},g.BEHAVIOR_STATE);},removeSection:function(i){g.inform(this.REMOVE_SECTION,{section_key:i},g.BEHAVIOR_STATE);},navBarLoaded:function(){g.inform(this.NAV_BAR_LOADED,{},g.BEHAVIOR_STATE);},adjustAds:function(){g.inform(this.ADJUST_ADS,{},g.BEHAVIOR_STATE);}};e.exports=h;},null);
__d("PagesPageletScrollColumn.react",["Arbiter","DOMContainer.react","PagesTimelineController","React","ScrollColumn.react"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=j,m=l.PropTypes,n=5,o=j.createClass({displayName:"PagesPageletScrollColumn",propTypes:{pagelets:m.object.isRequired},render:function(){var p=j.createElement(k,{ref:"scrollColumn",zIndex:n},j.createElement(h,null,this.props.pagelets));return p;},componentDidMount:function(){g.subscribe(i.NAV_BAR_LOADED,function(){g.inform(k.EVENT_SHOULD_ADJUST);}.bind(this));}});e.exports=o;},null);