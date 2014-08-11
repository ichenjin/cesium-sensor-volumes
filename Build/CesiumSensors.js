/**
 * Cesium Sensors - https://github.com/AnalyticalGraphicsInc/cesium-sensors
 *
 * Copyright 2011-2014 Analytical Graphics Inc. and Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium-sensors/blob/master/LICENSE.md for full licensing details.
 */

/**
 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

!function(){var e,i,t;!function(r){function o(e,i){return S.call(e,i)}function n(e,i){var t,r,o,n,s,a,l,u,c,h,d,m=i&&i.split("/"),C=g.map,f=C&&C["*"]||{};if(e&&"."===e.charAt(0))if(i){for(m=m.slice(0,m.length-1),e=e.split("/"),s=e.length-1,g.nodeIdCompat&&w.test(e[s])&&(e[s]=e[s].replace(w,"")),e=m.concat(e),c=0;c<e.length;c+=1)if(d=e[c],"."===d)e.splice(c,1),c-=1;else if(".."===d){if(1===c&&(".."===e[2]||".."===e[0]))break;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((m||f)&&C){for(t=e.split("/"),c=t.length;c>0;c-=1){if(r=t.slice(0,c).join("/"),m)for(h=m.length;h>0;h-=1)if(o=C[m.slice(0,h).join("/")],o&&(o=o[r])){n=o,a=c;break}if(n)break;!l&&f&&f[r]&&(l=f[r],u=c)}!n&&l&&(n=l,a=u),n&&(t.splice(0,a,n),e=t.join("/"))}return e}function s(e,i){return function(){return m.apply(r,y.call(arguments,0).concat([e,i]))}}function a(e){return function(i){return n(i,e)}}function l(e){return function(i){p[e]=i}}function u(e){if(o(_,e)){var i=_[e];delete _[e],v[e]=!0,d.apply(r,i)}if(!o(p,e)&&!o(v,e))throw new Error("No "+e);return p[e]}function c(e){var i,t=e?e.indexOf("!"):-1;return t>-1&&(i=e.substring(0,t),e=e.substring(t+1,e.length)),[i,e]}function h(e){return function(){return g&&g.config&&g.config[e]||{}}}var d,m,C,f,p={},_={},g={},v={},S=Object.prototype.hasOwnProperty,y=[].slice,w=/\.js$/;C=function(e,i){var t,r=c(e),o=r[0];return e=r[1],o&&(o=n(o,i),t=u(o)),o?e=t&&t.normalize?t.normalize(e,a(i)):n(e,i):(e=n(e,i),r=c(e),o=r[0],e=r[1],o&&(t=u(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:t}},f={require:function(e){return s(e)},exports:function(e){var i=p[e];return"undefined"!=typeof i?i:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:h(e)}}},d=function(e,i,t,n){var a,c,h,d,m,g,S=[],y=typeof t;if(n=n||e,"undefined"===y||"function"===y){for(i=!i.length&&t.length?["require","exports","module"]:i,m=0;m<i.length;m+=1)if(d=C(i[m],n),c=d.f,"require"===c)S[m]=f.require(e);else if("exports"===c)S[m]=f.exports(e),g=!0;else if("module"===c)a=S[m]=f.module(e);else if(o(p,c)||o(_,c)||o(v,c))S[m]=u(c);else{if(!d.p)throw new Error(e+" missing "+c);d.p.load(d.n,s(n,!0),l(c),{}),S[m]=p[c]}h=t?t.apply(p[e],S):void 0,e&&(a&&a.exports!==r&&a.exports!==p[e]?p[e]=a.exports:h===r&&g||(p[e]=h))}else e&&(p[e]=t)},e=i=m=function(e,i,t,o,n){if("string"==typeof e)return f[e]?f[e](i):u(C(e,i).f);if(!e.splice){if(g=e,g.deps&&m(g.deps,g.callback),!i)return;i.splice?(e=i,i=t,t=null):e=r}return i=i||function(){},"function"==typeof t&&(t=o,o=n),o?d(r,e,i,t):setTimeout(function(){d(r,e,i,t)},4),m},m.config=function(e){return m(e)},e._defined=p,t=function(e,i,t){i.splice||(t=i,i=[]),o(p,e)||o(_,e)||(_[e]=[e,i,t])},t.amd={jQuery:!0}}(),t("ConicSensorGraphics",["Cesium/Core/defaultValue","Cesium/Core/defined","Cesium/Core/defineProperties","Cesium/Core/DeveloperError","Cesium/Core/Event","Cesium/DataSources/createPropertyDescriptor"],function(e,i,t,r,o,n){"use strict";var s=function(){this._minimumClockAngle=void 0,this._minimumClockAngleSubscription=void 0,this._maximumClockAngle=void 0,this._maximumClockAngleSubscription=void 0,this._innerHalfAngle=void 0,this._innerHalfAngleSubscription=void 0,this._outerHalfAngle=void 0,this._outerHalfAngleSubscription=void 0,this._lateralSurfaceMaterial=void 0,this._lateralSurfaceMaterialSubscription=void 0,this._intersectionColor=void 0,this._intersectionColorSubscription=void 0,this._intersectionWidth=void 0,this._intersectionWidthSubscription=void 0,this._showIntersection=void 0,this._showIntersectionSubscription=void 0,this._radius=void 0,this._radiusSubscription=void 0,this._show=void 0,this._showSubscription=void 0,this._definitionChanged=new o};return t(s.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},minimumClockAngle:n("minimumClockAngle"),maximumClockAngle:n("maximumClockAngle"),innerHalfAngle:n("innerHalfAngle"),outerHalfAngle:n("outerHalfAngle"),lateralSurfaceMaterial:n("lateralSurfaceMaterial"),intersectionColor:n("intersectionColor"),intersectionWidth:n("intersectionWidth"),showIntersection:n("showIntersection"),radius:n("radius"),show:n("show")}),s.prototype.clone=function(e){return i(e)||(e=new s),e.show=this.show,e.innerHalfAngle=this.innerHalfAngle,e.outerHalfAngle=this.outerHalfAngle,e.minimumClockAngle=this.minimumClockAngle,e.maximumClockAngle=this.maximumClockAngle,e.radius=this.radius,e.showIntersection=this.showIntersection,e.intersectionColor=this.intersectionColor,e.intersectionWidth=this.intersectionWidth,e.lateralSurfaceMaterial=this.lateralSurfaceMaterial,e},s.prototype.merge=function(i){this.show=e(this.show,i.show),this.innerHalfAngle=e(this.innerHalfAngle,i.innerHalfAngle),this.outerHalfAngle=e(this.outerHalfAngle,i.outerHalfAngle),this.minimumClockAngle=e(this.minimumClockAngle,i.minimumClockAngle),this.maximumClockAngle=e(this.maximumClockAngle,i.maximumClockAngle),this.radius=e(this.radius,i.radius),this.showIntersection=e(this.showIntersection,i.showIntersection),this.intersectionColor=e(this.intersectionColor,i.intersectionColor),this.intersectionWidth=e(this.intersectionWidth,i.intersectionWidth),this.lateralSurfaceMaterial=e(this.lateralSurfaceMaterial,i.lateralSurfaceMaterial)},s}),t("text",{load:function(e){throw new Error("Dynamic load not allowed: "+e)}}),t("text!CustomSensorVolumeFS.glsl",[],function(){return"#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives : enable\n#endif\nuniform bool u_showIntersection;\nuniform bool u_showThroughEllipsoid;\nuniform float u_sensorRadius;\nuniform float u_normalDirection;\nvarying vec3 v_positionWC;\nvarying vec3 v_positionEC;\nvarying vec3 v_normalEC;\nvec4 getColor(float sensorRadius, vec3 pointEC)\n{\nczm_materialInput materialInput;\nvec3 pointMC = (czm_inverseModelView * vec4(pointEC, 1.0)).xyz;\nmaterialInput.st = sensor2dTextureCoordinates(sensorRadius, pointMC);\nmaterialInput.str = pointMC / sensorRadius;\nvec3 positionToEyeEC = -v_positionEC;\nmaterialInput.positionToEyeEC = positionToEyeEC;\nvec3 normalEC = normalize(v_normalEC);\nmaterialInput.normalEC = u_normalDirection * normalEC;\nczm_material material = czm_getMaterial(materialInput);\nreturn mix(czm_phong(normalize(positionToEyeEC), material), vec4(material.diffuse, material.alpha), 0.4);\n}\nbool isOnBoundary(float value, float epsilon)\n{\nfloat width = getIntersectionWidth();\nfloat tolerance = width * epsilon;\n#ifdef GL_OES_standard_derivatives\nfloat delta = max(abs(dFdx(value)), abs(dFdy(value)));\nfloat pixels = width * delta;\nfloat temp = abs(value);\nreturn temp < tolerance && temp < pixels || (delta < 10.0 * tolerance && temp - delta < tolerance && temp < pixels);\n#else\nreturn abs(value) < tolerance;\n#endif\n}\nvec4 shade(bool isOnBoundary)\n{\nif (u_showIntersection && isOnBoundary)\n{\nreturn getIntersectionColor();\n}\nreturn getColor(u_sensorRadius, v_positionEC);\n}\nfloat ellipsoidSurfaceFunction(czm_ellipsoid ellipsoid, vec3 point)\n{\nvec3 scaled = ellipsoid.inverseRadii * point;\nreturn dot(scaled, scaled) - 1.0;\n}\nvoid main()\n{\nvec3 sensorVertexWC = czm_model[3].xyz;\nvec3 sensorVertexEC = czm_modelView[3].xyz;\nczm_ellipsoid ellipsoid = czm_getWgs84EllipsoidEC();\nfloat ellipsoidValue = ellipsoidSurfaceFunction(ellipsoid, v_positionWC);\nif (!u_showThroughEllipsoid)\n{\nif (ellipsoidValue < 0.0)\n{\ndiscard;\n}\nif (inSensorShadow(sensorVertexWC, ellipsoid, v_positionWC))\n{\ndiscard;\n}\n}\nif (distance(v_positionEC, sensorVertexEC) > u_sensorRadius)\n{\ndiscard;\n}\nbool isOnEllipsoid = isOnBoundary(ellipsoidValue, czm_epsilon3);\ngl_FragColor = shade(isOnEllipsoid);\n}"}),t("text!CustomSensorVolumeVS.glsl",[],function(){return"attribute vec4 position;\nattribute vec3 normal;\nvarying vec3 v_positionWC;\nvarying vec3 v_positionEC;\nvarying vec3 v_normalEC;\nvoid main()\n{\ngl_Position = czm_modelViewProjection * position;\nv_positionWC = (czm_model * position).xyz;\nv_positionEC = (czm_modelView * position).xyz;\nv_normalEC = czm_normal * normal;\n}"}),t("text!SensorVolume.glsl",[],function(){return"uniform vec4 u_intersectionColor;\nuniform float u_intersectionWidth;\nbool inSensorShadow(vec3 coneVertexWC, czm_ellipsoid ellipsoidEC, vec3 pointWC)\n{\nvec3 D = ellipsoidEC.inverseRadii;\nvec3 q = D * coneVertexWC;\nfloat qMagnitudeSquared = dot(q, q);\nfloat test = qMagnitudeSquared - 1.0;\nvec3 temp = D * pointWC - q;\nfloat d = dot(temp, q);\nreturn (d < -test) && (d / length(temp) < -sqrt(test));\n}\nvec4 getIntersectionColor()\n{\nreturn u_intersectionColor;\n}\nfloat getIntersectionWidth()\n{\nreturn u_intersectionWidth;\n}\nvec2 sensor2dTextureCoordinates(float sensorRadius, vec3 pointMC)\n{\nfloat t = pointMC.z / sensorRadius;\nfloat s = 1.0 + (atan(pointMC.y, pointMC.x) / czm_twoPi);\ns = s - floor(s);\nreturn vec2(s, t);\n}"}),t("CustomSensorVolume",["Cesium/Core/BoundingSphere","Cesium/Core/Cartesian3","Cesium/Core/Color","Cesium/Core/combine","Cesium/Core/ComponentDatatype","Cesium/Core/defaultValue","Cesium/Core/defined","Cesium/Core/defineProperties","Cesium/Core/destroyObject","Cesium/Core/DeveloperError","Cesium/Core/Matrix4","Cesium/Core/PrimitiveType","Cesium/Renderer/BufferUsage","Cesium/Renderer/createShaderSource","Cesium/Renderer/DrawCommand","text!./CustomSensorVolumeFS.glsl","text!./CustomSensorVolumeVS.glsl","text!./SensorVolume.glsl","Cesium/Scene/BlendingState","Cesium/Scene/CullFace","Cesium/Scene/Material","Cesium/Scene/Pass","Cesium/Scene/SceneMode"],function(e,i,t,r,o,n,s,a,l,u,c,h,d,m,C,f,p,_,g,v,S,y,w){"use strict";function A(t){for(var r=t._directions,o=r.length,n=new Float32Array(3*o),s=isFinite(t.radius)?t.radius:E,a=[i.ZERO],l=o-2,u=o-1,c=0;o>c;l=u++,u=c++){var h=i.fromSpherical(r[l],V),d=i.fromSpherical(r[u],b),m=i.fromSpherical(r[c],P),C=Math.max(i.angleBetween(h,d),i.angleBetween(d,m)),f=s/Math.cos(.5*C),p=i.multiplyByScalar(d,f,new i);n[3*u]=p.x,n[3*u+1]=p.y,n[3*u+2]=p.z,a.push(p)}return e.fromPoints(a,t._boundingSphere),n}function M(e,t){for(var r=A(e),n=e._directions.length,s=new Float32Array(18*n),a=0,l=n-1,u=0;n>u;l=u++){var c=new i(r[3*l],r[3*l+1],r[3*l+2]),h=new i(r[3*u],r[3*u+1],r[3*u+2]),m=i.normalize(i.cross(h,c,T),T);s[a++]=0,s[a++]=0,s[a++]=0,s[a++]=m.x,s[a++]=m.y,s[a++]=m.z,s[a++]=h.x,s[a++]=h.y,s[a++]=h.z,s[a++]=m.x,s[a++]=m.y,s[a++]=m.z,s[a++]=c.x,s[a++]=c.y,s[a++]=c.z,s[a++]=m.x,s[a++]=m.y,s[a++]=m.z}var C=t.createVertexBuffer(new Float32Array(s),d.STATIC_DRAW),f=6*Float32Array.BYTES_PER_ELEMENT,p=[{index:x.position,vertexBuffer:C,componentsPerAttribute:3,componentDatatype:o.FLOAT,offsetInBytes:0,strideInBytes:f},{index:x.normal,vertexBuffer:C,componentsPerAttribute:3,componentDatatype:o.FLOAT,offsetInBytes:3*Float32Array.BYTES_PER_ELEMENT,strideInBytes:f}];return t.createVertexArray(p)}var x={position:0,normal:1},E=5906376272e3,I=function(i){i=n(i,n.EMPTY_OBJECT),this._pickId=void 0,this._pickPrimitive=n(i._pickPrimitive,this),this._frontFaceColorCommand=new C,this._backFaceColorCommand=new C,this._pickCommand=new C,this._boundingSphere=new e,this._boundingSphereWC=new e,this._frontFaceColorCommand.primitiveType=h.TRIANGLES,this._frontFaceColorCommand.boundingVolume=this._boundingSphereWC,this._frontFaceColorCommand.owner=this,this._backFaceColorCommand.primitiveType=this._frontFaceColorCommand.primitiveType,this._backFaceColorCommand.boundingVolume=this._frontFaceColorCommand.boundingVolume,this._backFaceColorCommand.owner=this,this._pickCommand.primitiveType=this._frontFaceColorCommand.primitiveType,this._pickCommand.boundingVolume=this._frontFaceColorCommand.boundingVolume,this._pickCommand.owner=this,this.show=n(i.show,!0),this.showIntersection=n(i.showIntersection,!0),this.showThroughEllipsoid=n(i.showThroughEllipsoid,!1),this._showThroughEllipsoid=this.showThroughEllipsoid,this.modelMatrix=c.clone(n(i.modelMatrix,c.IDENTITY)),this._modelMatrix=new c,this.radius=n(i.radius,Number.POSITIVE_INFINITY),this._directions=void 0,this._directionsDirty=!1,this.directions=s(i.directions)?i.directions:[],this.lateralSurfaceMaterial=s(i.lateralSurfaceMaterial)?i.lateralSurfaceMaterial:S.fromType(S.ColorType),this._lateralSurfaceMaterial=void 0,this._translucent=void 0,this.intersectionColor=t.clone(n(i.intersectionColor,t.WHITE)),this.intersectionWidth=n(i.intersectionWidth,5),this.id=i.id,this._id=void 0;var r=this;this._uniforms={u_showThroughEllipsoid:function(){return r.showThroughEllipsoid},u_showIntersection:function(){return r.showIntersection},u_sensorRadius:function(){return isFinite(r.radius)?r.radius:E},u_intersectionColor:function(){return r.intersectionColor},u_intersectionWidth:function(){return r.intersectionWidth},u_normalDirection:function(){return 1}},this._mode=w.SCENE3D};a(I.prototype,{directions:{get:function(){return this._directions},set:function(e){this._directions=e,this._directionsDirty=!0}}});var V=new i,b=new i,P=new i,T=new i;return I.prototype.update=function(i,t,o){if(this._mode=t.mode,this.show&&this._mode===w.SCENE3D){var n=this.lateralSurfaceMaterial.isTranslucent();if(this._showThroughEllipsoid!==this.showThroughEllipsoid||!s(this._frontFaceColorCommand.renderState)||this._translucent!==n){this._showThroughEllipsoid=this.showThroughEllipsoid,this._translucent=n;var a;n?(a=i.createRenderState({depthTest:{enabled:!this.showThroughEllipsoid},depthMask:!1,blending:g.ALPHA_BLEND,cull:{enabled:!0,face:v.BACK}}),this._frontFaceColorCommand.renderState=a,this._frontFaceColorCommand.pass=y.TRANSLUCENT,a=i.createRenderState({depthTest:{enabled:!this.showThroughEllipsoid},depthMask:!1,blending:g.ALPHA_BLEND,cull:{enabled:!0,face:v.FRONT}}),this._backFaceColorCommand.renderState=a,this._backFaceColorCommand.pass=y.TRANSLUCENT,a=i.createRenderState({depthTest:{enabled:!this.showThroughEllipsoid},depthMask:!1,blending:g.ALPHA_BLEND}),this._pickCommand.renderState=a):(a=i.createRenderState({depthTest:{enabled:!0},depthMask:!0}),this._frontFaceColorCommand.renderState=a,this._frontFaceColorCommand.pass=y.OPAQUE,a=i.createRenderState({depthTest:{enabled:!0},depthMask:!0}),this._pickCommand.renderState=a)}var l=this._directionsDirty;if(l){this._directionsDirty=!1,this._va=this._va&&this._va.destroy();var u=this._directions;u&&u.length>=3&&(this._frontFaceColorCommand.vertexArray=M(this,i),this._backFaceColorCommand.vertexArray=this._frontFaceColorCommand.vertexArray,this._pickCommand.vertexArray=this._frontFaceColorCommand.vertexArray)}if(s(this._frontFaceColorCommand.vertexArray)){var h=t.passes,d=!c.equals(this.modelMatrix,this._modelMatrix);d&&c.clone(this.modelMatrix,this._modelMatrix),(l||d)&&e.transform(this._boundingSphere,this.modelMatrix,this._boundingSphereWC),this._frontFaceColorCommand.modelMatrix=this.modelMatrix,this._backFaceColorCommand.modelMatrix=this._frontFaceColorCommand.modelMatrix,this._pickCommand.modelMatrix=this._frontFaceColorCommand.modelMatrix;var C=this._lateralSurfaceMaterial!==this.lateralSurfaceMaterial;if(this._lateralSurfaceMaterial=this.lateralSurfaceMaterial,this._lateralSurfaceMaterial.update(i),h.render){var S=this._frontFaceColorCommand,A=this._backFaceColorCommand;if(C||!s(S.shaderProgram)){var E=m({sources:[_,this._lateralSurfaceMaterial.shaderSource,f]});S.shaderProgram=i.replaceShaderProgram(S.shaderProgram,p,E,x),S.uniformMap=r(this._uniforms,this._lateralSurfaceMaterial._uniforms),A.shaderProgram=S.shaderProgram,A.uniformMap=r(this._uniforms,this._lateralSurfaceMaterial._uniforms),A.uniformMap.u_normalDirection=function(){return-1}}n?o.push(this._backFaceColorCommand,this._frontFaceColorCommand):o.push(this._frontFaceColorCommand)}if(h.pick){var I=this._pickCommand;if(s(this._pickId)&&this._id===this.id||(this._id=this.id,this._pickId=this._pickId&&this._pickId.destroy(),this._pickId=i.createPickId({primitive:this._pickPrimitive,id:this.id})),C||!s(I.shaderProgram)){var V=m({sources:[_,this._lateralSurfaceMaterial.shaderSource,f],pickColorQualifier:"uniform"});I.shaderProgram=i.replaceShaderProgram(I.shaderProgram,p,V,x);var b=this,P={czm_pickColor:function(){return b._pickId.color}};I.uniformMap=r(r(this._uniforms,this._lateralSurfaceMaterial._uniforms),P)}I.pass=n?y.TRANSLUCENT:y.OPAQUE,o.push(I)}}}},I.prototype.isDestroyed=function(){return!1},I.prototype.destroy=function(){return this._frontFaceColorCommand.vertexArray=this._frontFaceColorCommand.vertexArray&&this._frontFaceColorCommand.vertexArray.destroy(),this._frontFaceColorCommand.shaderProgram=this._frontFaceColorCommand.shaderProgram&&this._frontFaceColorCommand.shaderProgram.destroy(),this._pickCommand.shaderProgram=this._pickCommand.shaderProgram&&this._pickCommand.shaderProgram.destroy(),this._pickId=this._pickId&&this._pickId.destroy(),l(this)},I}),t("ConicSensorVisualizer",["Cesium/Core/AssociativeArray","Cesium/Core/Cartesian3","Cesium/Core/Color","Cesium/Core/defined","Cesium/Core/destroyObject","Cesium/Core/DeveloperError","Cesium/Core/Math","Cesium/Core/Matrix3","Cesium/Core/Matrix4","Cesium/Core/Quaternion","Cesium/Core/Spherical","./CustomSensorVolume","Cesium/DataSources/MaterialProperty","Cesium/DataSources/Property"],function(e,i,t,r,o,n,s,a,l,u,c,h,d,m){"use strict";function C(e,i,t,o){var n=i[e];r(n)||(i[e]=n=new c),n.clock=t,n.cone=o,n.magnitude=1}function f(e,i,t,r,o){var n,a=e.directions,l=0,u=s.toRadians(2);if(0===i&&t===s.TWO_PI)for(n=0;n<s.TWO_PI;n+=u)C(l++,a,n,o);else{for(n=i;t>n;n+=u)C(l++,a,n,o);if(C(l++,a,t,o),r){for(n=t;n>i;n-=u)C(l++,a,n,r);C(l++,a,i,r)}else C(l++,a,t,0)}a.length=l,e.directions=a}function p(e,i,t){var o=i[e.id];if(r(o)){var n=o.primitive;t.remove(n),n.isDestroyed()||n.destroy(),delete i[e.id]}}var _=t.WHITE,g=1,v=Number.POSITIVE_INFINITY,S=new a,y=new i,w=new u,A=function(i,t){t.collectionChanged.addEventListener(A.prototype._onCollectionChanged,this),this._scene=i,this._primitives=i.primitives,this._entityCollection=t,this._hash={},this._entitiesToVisualize=new e,this._onCollectionChanged(t,t.entities,[],[])};return A.prototype.update=function(e){for(var t=this._entitiesToVisualize.values,o=this._hash,n=this._primitives,c=0,C=t.length;C>c;c++){var p,A,M=t[c],x=M._conicSensor,E=o[M.id],I=M.isAvailable(e)&&m.getValueOrDefault(x._show,e,!0);if(I&&(p=m.getValueOrUndefined(M._position,e,y),A=m.getValueOrUndefined(M._orientation,e,w),I=r(p)&&r(A)),I){var V=r(E)?E.primitive:void 0;r(V)||(V=new h,V.id=M,n.add(V),E={primitive:V,position:void 0,orientation:void 0,minimumClockAngle:void 0,maximumClockAngle:void 0,innerHalfAngle:void 0,outerHalfAngle:void 0},o[M.id]=E),i.equals(p,E.position)&&u.equals(A,E.orientation)||(l.fromRotationTranslation(a.fromQuaternion(A,S),p,V.modelMatrix),E.position=i.clone(p,E.position),E.orientation=u.clone(A,E.orientation)),V.show=!0;var b=m.getValueOrDefault(x._minimumClockAngle,e,0),P=m.getValueOrDefault(x._maximumClockAngle,e,s.TWO_PI),T=m.getValueOrDefault(x._innerHalfAngle,e,0),D=m.getValueOrDefault(x._outerHalfAngle,e,Math.PI);(b!==E.minimumClockAngle||P!==E.maximumClockAngle||T!==E.innerHalfAngle||D!==E.outerHalfAngle)&&(f(V,b,P,T,D),E.innerHalfAngle=T,E.maximumClockAngle=P,E.outerHalfAngle=D,E.minimumClockAngle=b),V.radius=m.getValueOrDefault(x._radius,e,v),V.lateralSurfaceMaterial=d.getValue(e,x._lateralSurfaceMaterial,V.lateralSurfaceMaterial),V.intersectionColor=m.getValueOrClonedDefault(x._intersectionColor,e,_,V.intersectionColor),V.intersectionWidth=m.getValueOrDefault(x._intersectionWidth,e,g)}else r(E)&&(E.primitive.show=!1)}return!0},A.prototype.isDestroyed=function(){return!1},A.prototype.destroy=function(){for(var e=this._entitiesToVisualize.values,i=this._hash,t=this._primitives,r=e.length-1;r>-1;r--)p(e[r],i,t);return o(this)},A.prototype._onCollectionChanged=function(e,i,t,o){var n,s,a=this._entitiesToVisualize,l=this._hash,u=this._primitives;for(n=i.length-1;n>-1;n--)s=i[n],r(s._conicSensor)&&r(s._position)&&r(s._orientation)&&a.set(s.id,s);for(n=o.length-1;n>-1;n--)s=o[n],r(s._conicSensor)&&r(s._position)&&r(s._orientation)?a.set(s.id,s):(p(s,l,u),a.remove(s.id));for(n=t.length-1;n>-1;n--)s=t[n],p(s,l,u),a.remove(s.id)},A}),t("CustomPatternSensorGraphics",["Cesium/Core/defaultValue","Cesium/Core/defined","Cesium/Core/defineProperties","Cesium/Core/DeveloperError","Cesium/Core/Event","Cesium/DataSources/createPropertyDescriptor"],function(e,i,t,r,o,n){"use strict";var s=function(){this._directions=void 0,this._directionsSubscription=void 0,this._lateralSurfaceMaterial=void 0,this._lateralSurfaceMaterialSubscription=void 0,this._intersectionColor=void 0,this._intersectionColorSubscription=void 0,this._intersectionWidth=void 0,this._intersectionWidthSubscription=void 0,this._showIntersection=void 0,this._showIntersectionSubscription=void 0,this._radius=void 0,this._radiusSubscription=void 0,this._show=void 0,this._showSubscription=void 0,this._definitionChanged=new o};return t(s.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},directions:n("directions"),lateralSurfaceMaterial:n("lateralSurfaceMaterial"),intersectionColor:n("intersectionColor"),intersectionWidth:n("intersectionWidth"),showIntersection:n("showIntersection"),radius:n("radius"),show:n("show")}),s.prototype.clone=function(e){return i(e)||(e=new s),e.directions=this.directions,e.radius=this.radius,e.show=this.show,e.showIntersection=this.showIntersection,e.intersectionColor=this.intersectionColor,e.intersectionWidth=this.intersectionWidth,e.lateralSurfaceMaterial=this.lateralSurfaceMaterial,e},s.prototype.merge=function(i){this.directions=e(this.directions,i.directions),this.radius=e(this.radius,i.radius),this.show=e(this.show,i.show),this.showIntersection=e(this.showIntersection,i.showIntersection),this.intersectionColor=e(this.intersectionColor,i.intersectionColor),this.intersectionWidth=e(this.intersectionWidth,i.intersectionWidth),this.lateralSurfaceMaterial=e(this.lateralSurfaceMaterial,i.lateralSurfaceMaterial)},s}),t("CustomPatternSensorVisualizer",["Cesium/Core/AssociativeArray","Cesium/Core/Cartesian3","Cesium/Core/Color","Cesium/Core/defined","Cesium/Core/destroyObject","Cesium/Core/DeveloperError","Cesium/Core/Matrix3","Cesium/Core/Matrix4","Cesium/Core/Quaternion","./CustomSensorVolume","Cesium/DataSources/MaterialProperty","Cesium/DataSources/Property"],function(e,i,t,r,o,n,s,a,l,u,c,h){"use strict";function d(e,i,t){var o=i[e.id];if(r(o)){var n=o.primitive;t.remove(n),n.isDestroyed()||n.destroy(),delete i[e.id]}}var m=t.WHITE,C=1,f=Number.POSITIVE_INFINITY,p=new s,_=new i,g=new l,v=function(i,t){t.collectionChanged.addEventListener(v.prototype._onCollectionChanged,this),this._scene=i,this._primitives=i.primitives,this._entityCollection=t,this._hash={},this._entitiesToVisualize=new e,this._onCollectionChanged(t,t.entities,[],[])};return v.prototype.update=function(e){for(var t=this._entitiesToVisualize.values,o=this._hash,n=this._primitives,d=0,v=t.length;v>d;d++){var S,y,w,A=t[d],M=A._customPatternSensor,x=o[A.id],E=A.isAvailable(e)&&h.getValueOrDefault(M._show,e,!0);if(E&&(S=h.getValueOrUndefined(A._position,e,_),y=h.getValueOrUndefined(A._orientation,e,g),w=h.getValueOrUndefined(M._directions,e),E=r(S)&&r(y)&&r(w)),E){var I=r(x)?x.primitive:void 0;r(I)||(I=new u,I.id=A,n.add(I),x={primitive:I,position:void 0,orientation:void 0},o[A.id]=x),i.equals(S,x.position)&&l.equals(y,x.orientation)||(a.fromRotationTranslation(s.fromQuaternion(y,p),S,I.modelMatrix),x.position=i.clone(S,x.position),x.orientation=l.clone(y,x.orientation)),I.show=!0,I.directions=w,I.radius=h.getValueOrDefault(M._radius,e,f),I.lateralSurfaceMaterial=c.getValue(e,M._lateralSurfaceMaterial,I.lateralSurfaceMaterial),I.intersectionColor=h.getValueOrClonedDefault(M._intersectionColor,e,m,I.intersectionColor),I.intersectionWidth=h.getValueOrDefault(M._intersectionWidth,e,C)}else r(x)&&(x.primitive.show=!1)}return!0},v.prototype.isDestroyed=function(){return!1},v.prototype.destroy=function(){for(var e=this._entitiesToVisualize.values,i=this._hash,t=this._primitives,r=e.length-1;r>-1;r--)d(e[r],i,t);return o(this)},v.prototype._onCollectionChanged=function(e,i,t,o){var n,s,a=this._entitiesToVisualize,l=this._hash,u=this._primitives;for(n=i.length-1;n>-1;n--)s=i[n],r(s._customPatternSensor)&&r(s._position)&&r(s._orientation)&&a.set(s.id,s);for(n=o.length-1;n>-1;n--)s=o[n],r(s._customPatternSensor)&&r(s._position)&&r(s._orientation)?a.set(s.id,s):(d(s,l,u),a.remove(s.id));for(n=t.length-1;n>-1;n--)s=t[n],d(s,l,u),a.remove(s.id)},v}),t("RectangularSensorGraphics",["Cesium/Core/defaultValue","Cesium/Core/defined","Cesium/Core/defineProperties","Cesium/Core/DeveloperError","Cesium/Core/Event","Cesium/DataSources/createPropertyDescriptor"],function(e,i,t,r,o,n){"use strict";var s=function(){this._xHalfAngle=void 0,this._xHalfAngleSubscription=void 0,this._yHalfAngle=void 0,this._yHalfAngleSubscription=void 0,this._lateralSurfaceMaterial=void 0,this._lateralSurfaceMaterialSubscription=void 0,this._intersectionColor=void 0,this._intersectionColorSubscription=void 0,this._intersectionWidth=void 0,this._intersectionWidthSubscription=void 0,this._showIntersection=void 0,this._showIntersectionSubscription=void 0,this._radius=void 0,this._radiusSubscription=void 0,this._show=void 0,this._showSubscription=void 0,this._definitionChanged=new o};return t(s.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},xHalfAngle:n("xHalfAngle"),yHalfAngle:n("yHalfAngle"),lateralSurfaceMaterial:n("lateralSurfaceMaterial"),intersectionColor:n("intersectionColor"),intersectionWidth:n("intersectionWidth"),showIntersection:n("showIntersection"),radius:n("radius"),show:n("show")}),s.prototype.clone=function(e){return i(e)||(e=new s),e.xHalfAngle=this.xHalfAngle,e.yHalfAngle=this.yHalfAngle,e.radius=this.radius,e.show=this.show,e.showIntersection=this.showIntersection,e.intersectionColor=this.intersectionColor,e.intersectionWidth=this.intersectionWidth,e.lateralSurfaceMaterial=this.lateralSurfaceMaterial,e},s.prototype.merge=function(i){this.xHalfAngle=e(this.xHalfAngle,i.xHalfAngle),this.yHalfAngle=e(this.yHalfAngle,i.yHalfAngle),this.radius=e(this.radius,i.radius),this.show=e(this.show,i.show),this.showIntersection=e(this.showIntersection,i.showIntersection),this.intersectionColor=e(this.intersectionColor,i.intersectionColor),this.intersectionWidth=e(this.intersectionWidth,i.intersectionWidth),this.lateralSurfaceMaterial=e(this.lateralSurfaceMaterial,i.lateralSurfaceMaterial)},s}),t("RectangularPyramidSensorVolume",["Cesium/Core/clone","Cesium/Core/defaultValue","Cesium/Core/defined","Cesium/Core/defineProperties","Cesium/Core/destroyObject","Cesium/Core/DeveloperError","Cesium/Core/Math","Cesium/Core/Spherical","./CustomSensorVolume"],function(e,i,t,r,o,n,s,a,l){"use strict";function u(e,i,r,o){var n=i[e];t(n)||(i[e]=n=new a),n.clock=r,n.cone=o,n.magnitude=1}function c(e){var i=e._customSensor.directions,t=Math.tan(Math.min(e._xHalfAngle,s.toRadians(89))),r=Math.tan(Math.min(e._yHalfAngle,s.toRadians(89))),o=Math.atan(t/r),n=Math.atan(Math.sqrt(t*t+r*r));u(0,i,o,n),u(1,i,s.toRadians(180)-o,n),u(2,i,s.toRadians(180)+o,n),u(3,i,-o,n),i.length=4,e._customSensor.directions=i}var h=function(t){t=i(t,i.EMPTY_OBJECT);var r=e(t);r._pickPrimitive=i(t._pickPrimitive,this),r.directions=void 0,this._customSensor=new l(r),this._xHalfAngle=i(t.xHalfAngle,s.PI_OVER_TWO),this._yHalfAngle=i(t.yHalfAngle,s.PI_OVER_TWO),c(this)};return r(h.prototype,{xHalfAngle:{get:function(){return this._xHalfAngle},set:function(e){this._xHalfAngle!==e&&(this._xHalfAngle=e,c(this))}},yHalfAngle:{get:function(){return this._yHalfAngle},set:function(e){this._yHalfAngle!==e&&(this._yHalfAngle=e,c(this))}},show:{get:function(){return this._customSensor.show},set:function(e){this._customSensor.show=e}},showIntersection:{get:function(){return this._customSensor.showIntersection},set:function(e){this._customSensor.showIntersection=e}},showThroughEllipsoid:{get:function(){return this._customSensor.showThroughEllipsoid},set:function(e){this._customSensor.showThroughEllipsoid=e}},modelMatrix:{get:function(){return this._customSensor.modelMatrix},set:function(e){this._customSensor.modelMatrix=e}},radius:{get:function(){return this._customSensor.radius},set:function(e){this._customSensor.radius=e}},lateralSurfaceMaterial:{get:function(){return this._customSensor.lateralSurfaceMaterial},set:function(e){this._customSensor.lateralSurfaceMaterial=e}},intersectionColor:{get:function(){return this._customSensor.intersectionColor},set:function(e){this._customSensor.intersectionColor=e}},intersectionWidth:{get:function(){return this._customSensor.intersectionWidth},set:function(e){this._customSensor.intersectionWidth=e}},id:{get:function(){return this._customSensor.id},set:function(e){this._customSensor.id=e}}}),h.prototype.update=function(e,i,t){this._customSensor.update(e,i,t)},h.prototype.isDestroyed=function(){return!1},h.prototype.destroy=function(){return this._customSensor=this._customSensor&&this._customSensor.destroy(),o(this)},h}),t("RectangularSensorVisualizer",["Cesium/Core/AssociativeArray","Cesium/Core/Cartesian3","Cesium/Core/Color","Cesium/Core/defined","Cesium/Core/destroyObject","Cesium/Core/DeveloperError","Cesium/Core/Math","Cesium/Core/Matrix3","Cesium/Core/Matrix4","Cesium/Core/Quaternion","./RectangularPyramidSensorVolume","Cesium/DataSources/MaterialProperty","Cesium/DataSources/Property"],function(e,i,t,r,o,n,s,a,l,u,c,h,d){"use strict";function m(e,i,t){var o=i[e.id];if(r(o)){var n=o.primitive;t.remove(n),n.isDestroyed()||n.destroy(),delete i[e.id]}}var C=t.WHITE,f=1,p=Number.POSITIVE_INFINITY,_=new a,g=new i,v=new u,S=function(i,t){t.collectionChanged.addEventListener(S.prototype._onCollectionChanged,this),this._scene=i,this._primitives=i.primitives,this._entityCollection=t,this._hash={},this._entitiesToVisualize=new e,this._onCollectionChanged(t,t.entities,[],[])};return S.prototype.update=function(e){for(var t=this._entitiesToVisualize.values,o=this._hash,n=this._primitives,m=0,S=t.length;S>m;m++){var y,w,A=t[m],M=A._rectangularSensor,x=o[A.id],E=A.isAvailable(e)&&d.getValueOrDefault(M._show,e,!0);if(E&&(y=d.getValueOrUndefined(A._position,e,g),w=d.getValueOrUndefined(A._orientation,e,v),E=r(y)&&r(w)),E){var I=r(x)?x.primitive:void 0;r(I)||(I=new c,I.id=A,n.add(I),x={primitive:I,position:void 0,orientation:void 0},o[A.id]=x),i.equals(y,x.position)&&u.equals(w,x.orientation)||(l.fromRotationTranslation(a.fromQuaternion(w,_),y,I.modelMatrix),x.position=i.clone(y,x.position),x.orientation=u.clone(w,x.orientation)),I.show=!0,I.xHalfAngle=d.getValueOrDefault(M._xHalfAngle,e,s.PI_OVER_TWO),I.yHalfAngle=d.getValueOrDefault(M._yHalfAngle,e,s.PI_OVER_TWO),I.radius=d.getValueOrDefault(M._radius,e,p),I.lateralSurfaceMaterial=h.getValue(e,M._lateralSurfaceMaterial,I.lateralSurfaceMaterial),I.intersectionColor=d.getValueOrClonedDefault(M._intersectionColor,e,C,I.intersectionColor),I.intersectionWidth=d.getValueOrDefault(M._intersectionWidth,e,f)}else r(x)&&(x.primitive.show=!1)}return!0},S.prototype.isDestroyed=function(){return!1},S.prototype.destroy=function(){for(var e=this._entitiesToVisualize.values,i=this._hash,t=this._primitives,r=e.length-1;r>-1;r--)m(e[r],i,t);return o(this)},S.prototype._onCollectionChanged=function(e,i,t,o){var n,s,a=this._entitiesToVisualize,l=this._hash,u=this._primitives;for(n=i.length-1;n>-1;n--)s=i[n],r(s._rectangularSensor)&&r(s._position)&&r(s._orientation)&&a.set(s.id,s);for(n=o.length-1;n>-1;n--)s=o[n],r(s._rectangularSensor)&&r(s._position)&&r(s._orientation)?a.set(s.id,s):(m(s,l,u),a.remove(s.id));for(n=t.length-1;n>-1;n--)s=t[n],m(s,l,u),a.remove(s.id)},S}),t("initialize",["Cesium/Core/Cartesian3","Cesium/Core/Color","Cesium/Core/defined","Cesium/Core/Spherical","Cesium/Core/TimeInterval","Cesium/DataSources/CzmlDataSource","Cesium/DataSources/DataSourceDisplay","./ConicSensorGraphics","./ConicSensorVisualizer","./CustomPatternSensorGraphics","./CustomPatternSensorVisualizer","./RectangularSensorGraphics","./RectangularSensorVisualizer"],function(e,i,t,r,o,n,s,a,l,u,c,h,d){"use strict";function m(i,o,n,s,a){var l,u,c=[],h=o.unitSpherical,d=o.spherical,m=o.unitCartesian,C=o.cartesian;if(t(h)){for(l=0,u=h.length;u>l;l+=2)c.push(new r(h[l],h[l+1]));
o.array=c}else if(t(d)){for(l=0,u=d.length;u>l;l+=3)c.push(new r(d[l],d[l+1],d[l+2]));o.array=c}else if(t(m)){for(l=0,u=m.length;u>l;l+=3){var f=r.fromCartesian3(new e(m[l],m[l+1],m[l+2]));r.normalize(f,f),c.push(f)}o.array=c}else if(t(C)){for(l=0,u=C.length;u>l;l+=3)c.push(r.fromCartesian3(new e(C[l],C[l+1],C[l+2])));o.array=c}g(Array,i,"directions",o,n,s,a)}function C(e,t,r,o,n){g(Boolean,e,"show",t.show,r,o,n),g(Number,e,"radius",t.radius,r,o,n),g(Boolean,e,"showIntersection",t.showIntersection,r,o,n),g(i,e,"intersectionColor",t.intersectionColor,r,o,n),g(Number,e,"intersectionWidth",t.intersectionWidth,r,o,n),v(e,"lateralSurfaceMaterial",t.lateralSurfaceMaterial,r,o,n)}function f(e,i,r,n){var s=i.agi_conicSensor;if(t(s)){var l,u=s.interval;t(u)&&(S.iso8601=u,l=o.fromIso8601(S));var c=e.conicSensor;t(c)||(e.addProperty("conicSensor"),e.conicSensor=c=new a),C(c,s,l,n,r),g(Number,c,"innerHalfAngle",s.innerHalfAngle,l,n,r),g(Number,c,"outerHalfAngle",s.outerHalfAngle,l,n,r),g(Number,c,"minimumClockAngle",s.minimumClockAngle,l,n,r),g(Number,c,"maximumClockAngle",s.maximumClockAngle,l,n,r)}}function p(e,i,r,n){var s=i.agi_customPatternSensor;if(t(s)){var a,l=s.interval;t(l)&&(S.iso8601=l,a=o.fromIso8601(S));var c=e.customPatternSensor;t(c)||(e.addProperty("customPatternSensor"),e.customPatternSensor=c=new u),C(c,s,a,n,r);var h=s.directions;if(t(h))if(Array.isArray(h))for(var d=h.length,f=0;d>f;f++)m(c,h[f],a,n,r);else m(c,h,a,n,r)}}function _(e,i,r,n){var s=i.agi_rectangularSensor;if(t(s)){var a,l=s.interval;t(l)&&(S.iso8601=l,a=o.fromIso8601(S));var u=e.rectangularSensor;t(u)||(e.addProperty("rectangularSensor"),e.rectangularSensor=u=new h),C(u,s,a,n,r),g(Number,u,"xHalfAngle",s.xHalfAngle,a,n,r),g(Number,u,"yHalfAngle",s.yHalfAngle,a,n,r)}}var g=n.processPacketData,v=n.processMaterialPacketData,S={iso8601:void 0},y=!1,w=function(){if(!y){n.updaters.push(f,p,_);var e=s.defaultVisualizersCallback;s.defaultVisualizersCallback=function(i,t){var r=t.entities,o=e(i,t);return o.concat([new l(i,r),new c(i,r),new d(i,r)])},y=!0}};return w}),t("CesiumSensors",["./initialize","./ConicSensorGraphics","./ConicSensorVisualizer","./CustomPatternSensorGraphics","./CustomPatternSensorVisualizer","./CustomSensorVolume","./RectangularPyramidSensorVolume","./RectangularSensorGraphics","./RectangularSensorVisualizer"],function(e,i,t,r,o,n,s,a,l){"use strict";return e(),{ConicSensorGraphics:i,ConicSensorVisualizer:t,CustomPatternSensorGraphics:r,CustomPatternSensorVisualizer:o,CustomSensorVolume:n,RectangularPyramidSensorVolume:s,RectangularSensorGraphics:a,RectangularSensorVisualizer:l}}),function(){"use strict";t("Cesium/Core/defaultValue",function(){return Cesium.defaultValue}),t("Cesium/Core/defined",function(){return Cesium.defined}),t("Cesium/Core/defineProperties",function(){return Cesium.defineProperties}),t("Cesium/Core/DeveloperError",function(){return Cesium.DeveloperError}),t("Cesium/Core/Event",function(){return Cesium.Event}),t("Cesium/DataSources/createPropertyDescriptor",function(){return Cesium.createPropertyDescriptor}),t("Cesium/Core/AssociativeArray",function(){return Cesium.AssociativeArray}),t("Cesium/Core/Cartesian3",function(){return Cesium.Cartesian3}),t("Cesium/Core/Color",function(){return Cesium.Color}),t("Cesium/Core/destroyObject",function(){return Cesium.destroyObject}),t("Cesium/Core/Math",function(){return Cesium.Math}),t("Cesium/Core/Matrix3",function(){return Cesium.Matrix3}),t("Cesium/Core/Matrix4",function(){return Cesium.Matrix4}),t("Cesium/Core/Quaternion",function(){return Cesium.Quaternion}),t("Cesium/Core/Spherical",function(){return Cesium.Spherical}),t("Cesium/DataSources/MaterialProperty",function(){return Cesium.MaterialProperty}),t("Cesium/DataSources/Property",function(){return Cesium.Property}),t("Cesium/Core/BoundingSphere",function(){return Cesium.BoundingSphere}),t("Cesium/Core/combine",function(){return Cesium.combine}),t("Cesium/Core/ComponentDatatype",function(){return Cesium.ComponentDatatype}),t("Cesium/Core/PrimitiveType",function(){return Cesium.PrimitiveType}),t("Cesium/Renderer/BufferUsage",function(){return Cesium.BufferUsage}),t("Cesium/Renderer/createShaderSource",function(){return Cesium.createShaderSource}),t("Cesium/Renderer/DrawCommand",function(){return Cesium.DrawCommand}),t("Cesium/Scene/BlendingState",function(){return Cesium.BlendingState}),t("Cesium/Scene/CullFace",function(){return Cesium.CullFace}),t("Cesium/Scene/Material",function(){return Cesium.Material}),t("Cesium/Scene/Pass",function(){return Cesium.Pass}),t("Cesium/Scene/SceneMode",function(){return Cesium.SceneMode}),t("Cesium/Core/TimeInterval",function(){return Cesium.TimeInterval}),t("Cesium/DataSources/CzmlDataSource",function(){return Cesium.CzmlDataSource}),t("Cesium/DataSources/DataSourceDisplay",function(){return Cesium.DataSourceDisplay}),t("Cesium/Core/clone",function(){return Cesium.clone}),i(["CesiumSensors"],function(e){var i="undefined"!=typeof window?window:"undefined"!=typeof self?self:{};i.CesiumSensors=e},void 0,!0)}()}();