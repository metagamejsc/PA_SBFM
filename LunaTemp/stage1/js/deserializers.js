var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.JointSpring' )
  var i2179 = data
  i2178.spring = i2179[0]
  i2178.damper = i2179[1]
  i2178.targetPosition = i2179[2]
  return i2178
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.JointMotor' )
  var i2181 = data
  i2180.m_TargetVelocity = i2181[0]
  i2180.m_Force = i2181[1]
  i2180.m_FreeSpin = i2181[2]
  return i2180
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.JointLimits' )
  var i2183 = data
  i2182.m_Min = i2183[0]
  i2182.m_Max = i2183[1]
  i2182.m_Bounciness = i2183[2]
  i2182.m_BounceMinVelocity = i2183[3]
  i2182.m_ContactDistance = i2183[4]
  i2182.minBounce = i2183[5]
  i2182.maxBounce = i2183[6]
  return i2182
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.JointDrive' )
  var i2185 = data
  i2184.m_PositionSpring = i2185[0]
  i2184.m_PositionDamper = i2185[1]
  i2184.m_MaximumForce = i2185[2]
  i2184.m_UseAcceleration = i2185[3]
  return i2184
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2187 = data
  i2186.m_Spring = i2187[0]
  i2186.m_Damper = i2187[1]
  return i2186
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2189 = data
  i2188.m_Limit = i2189[0]
  i2188.m_Bounciness = i2189[1]
  i2188.m_ContactDistance = i2189[2]
  return i2188
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2191 = data
  i2190.m_ExtremumSlip = i2191[0]
  i2190.m_ExtremumValue = i2191[1]
  i2190.m_AsymptoteSlip = i2191[2]
  i2190.m_AsymptoteValue = i2191[3]
  i2190.m_Stiffness = i2191[4]
  return i2190
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2193 = data
  i2192.m_LowerAngle = i2193[0]
  i2192.m_UpperAngle = i2193[1]
  return i2192
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2195 = data
  i2194.m_MotorSpeed = i2195[0]
  i2194.m_MaximumMotorTorque = i2195[1]
  return i2194
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2197 = data
  i2196.m_DampingRatio = i2197[0]
  i2196.m_Frequency = i2197[1]
  i2196.m_Angle = i2197[2]
  return i2196
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2199 = data
  i2198.m_LowerTranslation = i2199[0]
  i2198.m_UpperTranslation = i2199[1]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2201 = data
  i2200.name = i2201[0]
  i2200.width = i2201[1]
  i2200.height = i2201[2]
  i2200.mipmapCount = i2201[3]
  i2200.anisoLevel = i2201[4]
  i2200.filterMode = i2201[5]
  i2200.hdr = !!i2201[6]
  i2200.format = i2201[7]
  i2200.wrapMode = i2201[8]
  i2200.alphaIsTransparency = !!i2201[9]
  i2200.alphaSource = i2201[10]
  i2200.graphicsFormat = i2201[11]
  i2200.sRGBTexture = !!i2201[12]
  i2200.desiredColorSpace = i2201[13]
  i2200.wrapU = i2201[14]
  i2200.wrapV = i2201[15]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2202 = root || new pc.UnityMaterial()
  var i2203 = data
  i2202.name = i2203[0]
  request.r(i2203[1], i2203[2], 0, i2202, 'shader')
  i2202.renderQueue = i2203[3]
  i2202.enableInstancing = !!i2203[4]
  var i2205 = i2203[5]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2205[i + 0]) );
  }
  i2202.floatParameters = i2204
  var i2207 = i2203[6]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2207[i + 0]) );
  }
  i2202.colorParameters = i2206
  var i2209 = i2203[7]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2209[i + 0]) );
  }
  i2202.vectorParameters = i2208
  var i2211 = i2203[8]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2211[i + 0]) );
  }
  i2202.textureParameters = i2210
  var i2213 = i2203[9]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2213[i + 0]) );
  }
  i2202.materialFlags = i2212
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2217 = data
  i2216.name = i2217[0]
  i2216.value = i2217[1]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2221 = data
  i2220.name = i2221[0]
  i2220.value = new pc.Color(i2221[1], i2221[2], i2221[3], i2221[4])
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2225 = data
  i2224.name = i2225[0]
  i2224.value = new pc.Vec4( i2225[1], i2225[2], i2225[3], i2225[4] )
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2229 = data
  i2228.name = i2229[0]
  request.r(i2229[1], i2229[2], 0, i2228, 'value')
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2233 = data
  i2232.name = i2233[0]
  i2232.enabled = !!i2233[1]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2235 = data
  i2234.name = i2235[0]
  i2234.halfPrecision = !!i2235[1]
  i2234.useSimplification = !!i2235[2]
  i2234.useUInt32IndexFormat = !!i2235[3]
  i2234.vertexCount = i2235[4]
  i2234.aabb = i2235[5]
  var i2237 = i2235[6]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( !!i2237[i + 0] );
  }
  i2234.streams = i2236
  i2234.vertices = i2235[7]
  var i2239 = i2235[8]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2239[i + 0]) );
  }
  i2234.subMeshes = i2238
  var i2241 = i2235[9]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 16) {
    i2240.push( new pc.Mat4().setData(i2241[i + 0], i2241[i + 1], i2241[i + 2], i2241[i + 3],  i2241[i + 4], i2241[i + 5], i2241[i + 6], i2241[i + 7],  i2241[i + 8], i2241[i + 9], i2241[i + 10], i2241[i + 11],  i2241[i + 12], i2241[i + 13], i2241[i + 14], i2241[i + 15]) );
  }
  i2234.bindposes = i2240
  var i2243 = i2235[10]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2243[i + 0]) );
  }
  i2234.blendShapes = i2242
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2249 = data
  i2248.triangles = i2249[0]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2255 = data
  i2254.name = i2255[0]
  var i2257 = i2255[1]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2257[i + 0]) );
  }
  i2254.frames = i2256
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2259 = data
  i2258.name = i2259[0]
  i2258.atlasId = i2259[1]
  i2258.mipmapCount = i2259[2]
  i2258.hdr = !!i2259[3]
  i2258.size = i2259[4]
  i2258.anisoLevel = i2259[5]
  i2258.filterMode = i2259[6]
  var i2261 = i2259[7]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 4) {
    i2260.push( UnityEngine.Rect.MinMaxRect(i2261[i + 0], i2261[i + 1], i2261[i + 2], i2261[i + 3]) );
  }
  i2258.rects = i2260
  i2258.wrapU = i2259[8]
  i2258.wrapV = i2259[9]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.index = i2265[1]
  i2264.startup = !!i2265[2]
  return i2264
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2267 = data
  request.r(i2267[0], i2267[1], 0, i2266, 'm_FirstSelected')
  i2266.m_sendNavigationEvents = !!i2267[2]
  i2266.m_DragThreshold = i2267[3]
  return i2266
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2269 = data
  i2268.m_HorizontalAxis = i2269[0]
  i2268.m_VerticalAxis = i2269[1]
  i2268.m_SubmitButton = i2269[2]
  i2268.m_CancelButton = i2269[3]
  i2268.m_InputActionsPerSecond = i2269[4]
  i2268.m_RepeatDelay = i2269[5]
  i2268.m_ForceModuleActive = !!i2269[6]
  i2268.m_SendPointerHoverToParent = !!i2269[7]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2271 = data
  i2270.name = i2271[0]
  i2270.tagId = i2271[1]
  i2270.enabled = !!i2271[2]
  i2270.isStatic = !!i2271[3]
  i2270.layer = i2271[4]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2273 = data
  i2272.type = i2273[0]
  i2272.color = new pc.Color(i2273[1], i2273[2], i2273[3], i2273[4])
  i2272.cullingMask = i2273[5]
  i2272.intensity = i2273[6]
  i2272.range = i2273[7]
  i2272.spotAngle = i2273[8]
  i2272.shadows = i2273[9]
  i2272.shadowNormalBias = i2273[10]
  i2272.shadowBias = i2273[11]
  i2272.shadowStrength = i2273[12]
  i2272.shadowResolution = i2273[13]
  i2272.lightmapBakeType = i2273[14]
  i2272.renderMode = i2273[15]
  request.r(i2273[16], i2273[17], 0, i2272, 'cookie')
  i2272.cookieSize = i2273[18]
  i2272.shadowNearPlane = i2273[19]
  i2272.occlusionMaskChannel = i2273[20]
  i2272.isBaked = !!i2273[21]
  i2272.mixedLightingMode = i2273[22]
  i2272.enabled = !!i2273[23]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2275 = data
  i2274.pivot = new pc.Vec2( i2275[0], i2275[1] )
  i2274.anchorMin = new pc.Vec2( i2275[2], i2275[3] )
  i2274.anchorMax = new pc.Vec2( i2275[4], i2275[5] )
  i2274.sizeDelta = new pc.Vec2( i2275[6], i2275[7] )
  i2274.anchoredPosition3D = new pc.Vec3( i2275[8], i2275[9], i2275[10] )
  i2274.rotation = new pc.Quat(i2275[11], i2275[12], i2275[13], i2275[14])
  i2274.scale = new pc.Vec3( i2275[15], i2275[16], i2275[17] )
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2277 = data
  i2276.planeDistance = i2277[0]
  i2276.referencePixelsPerUnit = i2277[1]
  i2276.isFallbackOverlay = !!i2277[2]
  i2276.renderMode = i2277[3]
  i2276.renderOrder = i2277[4]
  i2276.sortingLayerName = i2277[5]
  i2276.sortingOrder = i2277[6]
  i2276.scaleFactor = i2277[7]
  request.r(i2277[8], i2277[9], 0, i2276, 'worldCamera')
  i2276.overrideSorting = !!i2277[10]
  i2276.pixelPerfect = !!i2277[11]
  i2276.targetDisplay = i2277[12]
  i2276.overridePixelPerfect = !!i2277[13]
  i2276.enabled = !!i2277[14]
  return i2276
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2279 = data
  i2278.m_UiScaleMode = i2279[0]
  i2278.m_ReferencePixelsPerUnit = i2279[1]
  i2278.m_ScaleFactor = i2279[2]
  i2278.m_ReferenceResolution = new pc.Vec2( i2279[3], i2279[4] )
  i2278.m_ScreenMatchMode = i2279[5]
  i2278.m_MatchWidthOrHeight = i2279[6]
  i2278.m_PhysicalUnit = i2279[7]
  i2278.m_FallbackScreenDPI = i2279[8]
  i2278.m_DefaultSpriteDPI = i2279[9]
  i2278.m_DynamicPixelsPerUnit = i2279[10]
  i2278.m_PresetInfoIsWorld = !!i2279[11]
  return i2278
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2281 = data
  i2280.m_IgnoreReversedGraphics = !!i2281[0]
  i2280.m_BlockingObjects = i2281[1]
  i2280.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2281[2] )
  return i2280
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2282 = root || request.c( 'Joystick' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'background')
  request.r(i2283[2], i2283[3], 0, i2282, 'joy')
  i2282.deadZone = i2283[4]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2285 = data
  i2284.cullTransparentMesh = !!i2285[0]
  return i2284
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.UI.Image' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'm_Sprite')
  i2286.m_Type = i2287[2]
  i2286.m_PreserveAspect = !!i2287[3]
  i2286.m_FillCenter = !!i2287[4]
  i2286.m_FillMethod = i2287[5]
  i2286.m_FillAmount = i2287[6]
  i2286.m_FillClockwise = !!i2287[7]
  i2286.m_FillOrigin = i2287[8]
  i2286.m_UseSpriteMesh = !!i2287[9]
  i2286.m_PixelsPerUnitMultiplier = i2287[10]
  request.r(i2287[11], i2287[12], 0, i2286, 'm_Material')
  i2286.m_Maskable = !!i2287[13]
  i2286.m_Color = new pc.Color(i2287[14], i2287[15], i2287[16], i2287[17])
  i2286.m_RaycastTarget = !!i2287[18]
  i2286.m_RaycastPadding = new pc.Vec4( i2287[19], i2287[20], i2287[21], i2287[22] )
  return i2286
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2288 = root || request.c( 'JumpButton' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'button')
  return i2288
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.UI.Button' )
  var i2291 = data
  i2290.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2291[0], i2290.m_OnClick)
  i2290.m_Navigation = request.d('UnityEngine.UI.Navigation', i2291[1], i2290.m_Navigation)
  i2290.m_Transition = i2291[2]
  i2290.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2291[3], i2290.m_Colors)
  i2290.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2291[4], i2290.m_SpriteState)
  i2290.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2291[5], i2290.m_AnimationTriggers)
  i2290.m_Interactable = !!i2291[6]
  request.r(i2291[7], i2291[8], 0, i2290, 'm_TargetGraphic')
  return i2290
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2293 = data
  i2292.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2293[0], i2292.m_PersistentCalls)
  return i2292
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2295 = data
  var i2297 = i2295[0]
  var i2296 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.add(request.d('UnityEngine.Events.PersistentCall', i2297[i + 0]));
  }
  i2294.m_Calls = i2296
  return i2294
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2301 = data
  request.r(i2301[0], i2301[1], 0, i2300, 'm_Target')
  i2300.m_TargetAssemblyTypeName = i2301[2]
  i2300.m_MethodName = i2301[3]
  i2300.m_Mode = i2301[4]
  i2300.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2301[5], i2300.m_Arguments)
  i2300.m_CallState = i2301[6]
  return i2300
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2303 = data
  i2302.m_Mode = i2303[0]
  i2302.m_WrapAround = !!i2303[1]
  request.r(i2303[2], i2303[3], 0, i2302, 'm_SelectOnUp')
  request.r(i2303[4], i2303[5], 0, i2302, 'm_SelectOnDown')
  request.r(i2303[6], i2303[7], 0, i2302, 'm_SelectOnLeft')
  request.r(i2303[8], i2303[9], 0, i2302, 'm_SelectOnRight')
  return i2302
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2305 = data
  i2304.m_NormalColor = new pc.Color(i2305[0], i2305[1], i2305[2], i2305[3])
  i2304.m_HighlightedColor = new pc.Color(i2305[4], i2305[5], i2305[6], i2305[7])
  i2304.m_PressedColor = new pc.Color(i2305[8], i2305[9], i2305[10], i2305[11])
  i2304.m_SelectedColor = new pc.Color(i2305[12], i2305[13], i2305[14], i2305[15])
  i2304.m_DisabledColor = new pc.Color(i2305[16], i2305[17], i2305[18], i2305[19])
  i2304.m_ColorMultiplier = i2305[20]
  i2304.m_FadeDuration = i2305[21]
  return i2304
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'm_HighlightedSprite')
  request.r(i2307[2], i2307[3], 0, i2306, 'm_PressedSprite')
  request.r(i2307[4], i2307[5], 0, i2306, 'm_SelectedSprite')
  request.r(i2307[6], i2307[7], 0, i2306, 'm_DisabledSprite')
  return i2306
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2309 = data
  i2308.m_NormalTrigger = i2309[0]
  i2308.m_HighlightedTrigger = i2309[1]
  i2308.m_PressedTrigger = i2309[2]
  i2308.m_SelectedTrigger = i2309[3]
  i2308.m_DisabledTrigger = i2309[4]
  return i2308
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2311 = data
  i2310.m_ShowMaskGraphic = !!i2311[0]
  return i2310
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2312 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2313 = data
  i2312.m_hasFontAssetChanged = !!i2313[0]
  request.r(i2313[1], i2313[2], 0, i2312, 'm_baseMaterial')
  i2312.m_maskOffset = new pc.Vec4( i2313[3], i2313[4], i2313[5], i2313[6] )
  i2312.m_text = i2313[7]
  i2312.m_isRightToLeft = !!i2313[8]
  request.r(i2313[9], i2313[10], 0, i2312, 'm_fontAsset')
  request.r(i2313[11], i2313[12], 0, i2312, 'm_sharedMaterial')
  var i2315 = i2313[13]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 2) {
  request.r(i2315[i + 0], i2315[i + 1], 2, i2314, '')
  }
  i2312.m_fontSharedMaterials = i2314
  request.r(i2313[14], i2313[15], 0, i2312, 'm_fontMaterial')
  var i2317 = i2313[16]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2312.m_fontMaterials = i2316
  i2312.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2313[17], i2313[18], i2313[19], i2313[20])
  i2312.m_fontColor = new pc.Color(i2313[21], i2313[22], i2313[23], i2313[24])
  i2312.m_enableVertexGradient = !!i2313[25]
  i2312.m_colorMode = i2313[26]
  i2312.m_fontColorGradient = request.d('TMPro.VertexGradient', i2313[27], i2312.m_fontColorGradient)
  request.r(i2313[28], i2313[29], 0, i2312, 'm_fontColorGradientPreset')
  request.r(i2313[30], i2313[31], 0, i2312, 'm_spriteAsset')
  i2312.m_tintAllSprites = !!i2313[32]
  request.r(i2313[33], i2313[34], 0, i2312, 'm_StyleSheet')
  i2312.m_TextStyleHashCode = i2313[35]
  i2312.m_overrideHtmlColors = !!i2313[36]
  i2312.m_faceColor = UnityEngine.Color32.ConstructColor(i2313[37], i2313[38], i2313[39], i2313[40])
  i2312.m_fontSize = i2313[41]
  i2312.m_fontSizeBase = i2313[42]
  i2312.m_fontWeight = i2313[43]
  i2312.m_enableAutoSizing = !!i2313[44]
  i2312.m_fontSizeMin = i2313[45]
  i2312.m_fontSizeMax = i2313[46]
  i2312.m_fontStyle = i2313[47]
  i2312.m_HorizontalAlignment = i2313[48]
  i2312.m_VerticalAlignment = i2313[49]
  i2312.m_textAlignment = i2313[50]
  i2312.m_characterSpacing = i2313[51]
  i2312.m_characterHorizontalScale = i2313[52]
  i2312.m_wordSpacing = i2313[53]
  i2312.m_lineSpacing = i2313[54]
  i2312.m_lineSpacingMax = i2313[55]
  i2312.m_paragraphSpacing = i2313[56]
  i2312.m_charWidthMaxAdj = i2313[57]
  i2312.m_TextWrappingMode = i2313[58]
  i2312.m_wordWrappingRatios = i2313[59]
  i2312.m_overflowMode = i2313[60]
  request.r(i2313[61], i2313[62], 0, i2312, 'm_linkedTextComponent')
  request.r(i2313[63], i2313[64], 0, i2312, 'parentLinkedComponent')
  i2312.m_enableKerning = !!i2313[65]
  var i2319 = i2313[66]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(i2319[i + 0]);
  }
  i2312.m_ActiveFontFeatures = i2318
  i2312.m_enableExtraPadding = !!i2313[67]
  i2312.checkPaddingRequired = !!i2313[68]
  i2312.m_isRichText = !!i2313[69]
  i2312.m_parseCtrlCharacters = !!i2313[70]
  i2312.m_isOrthographic = !!i2313[71]
  i2312.m_isCullingEnabled = !!i2313[72]
  i2312.m_horizontalMapping = i2313[73]
  i2312.m_verticalMapping = i2313[74]
  i2312.m_uvLineOffset = i2313[75]
  i2312.m_geometrySortingOrder = i2313[76]
  i2312.m_IsTextObjectScaleStatic = !!i2313[77]
  i2312.m_VertexBufferAutoSizeReduction = !!i2313[78]
  i2312.m_useMaxVisibleDescender = !!i2313[79]
  i2312.m_pageToDisplay = i2313[80]
  i2312.m_margin = new pc.Vec4( i2313[81], i2313[82], i2313[83], i2313[84] )
  i2312.m_isUsingLegacyAnimationComponent = !!i2313[85]
  i2312.m_isVolumetricText = !!i2313[86]
  request.r(i2313[87], i2313[88], 0, i2312, 'm_Material')
  i2312.m_EmojiFallbackSupport = !!i2313[89]
  i2312.m_Maskable = !!i2313[90]
  i2312.m_Color = new pc.Color(i2313[91], i2313[92], i2313[93], i2313[94])
  i2312.m_RaycastTarget = !!i2313[95]
  i2312.m_RaycastPadding = new pc.Vec4( i2313[96], i2313[97], i2313[98], i2313[99] )
  return i2312
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2322 = root || request.c( 'TMPro.VertexGradient' )
  var i2323 = data
  i2322.topLeft = new pc.Color(i2323[0], i2323[1], i2323[2], i2323[3])
  i2322.topRight = new pc.Color(i2323[4], i2323[5], i2323[6], i2323[7])
  i2322.bottomLeft = new pc.Color(i2323[8], i2323[9], i2323[10], i2323[11])
  i2322.bottomRight = new pc.Color(i2323[12], i2323[13], i2323[14], i2323[15])
  return i2322
}

Deserializers["TutController"] = function (request, data, root) {
  var i2326 = root || request.c( 'TutController' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'tutScene')
  request.r(i2327[2], i2327[3], 0, i2326, 'startTut')
  request.r(i2327[4], i2327[5], 0, i2326, 'playTut')
  request.r(i2327[6], i2327[7], 0, i2326, 'farTut')
  request.r(i2327[8], i2327[9], 0, i2326, 'failTut')
  return i2326
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2328 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2329 = data
  i2328.targetIsSelf = !!i2329[0]
  request.r(i2329[1], i2329[2], 0, i2328, 'targetGO')
  i2328.tweenTargetIsTargetGO = !!i2329[3]
  i2328.delay = i2329[4]
  i2328.duration = i2329[5]
  i2328.easeType = i2329[6]
  i2328.easeCurve = new pc.AnimationCurve( { keys_flow: i2329[7] } )
  i2328.loopType = i2329[8]
  i2328.loops = i2329[9]
  i2328.id = i2329[10]
  i2328.isRelative = !!i2329[11]
  i2328.isFrom = !!i2329[12]
  i2328.isIndependentUpdate = !!i2329[13]
  i2328.autoKill = !!i2329[14]
  i2328.autoGenerate = !!i2329[15]
  i2328.isActive = !!i2329[16]
  i2328.isValid = !!i2329[17]
  request.r(i2329[18], i2329[19], 0, i2328, 'target')
  i2328.animationType = i2329[20]
  i2328.targetType = i2329[21]
  i2328.forcedTargetType = i2329[22]
  i2328.autoPlay = !!i2329[23]
  i2328.useTargetAsV3 = !!i2329[24]
  i2328.endValueFloat = i2329[25]
  i2328.endValueV3 = new pc.Vec3( i2329[26], i2329[27], i2329[28] )
  i2328.endValueV2 = new pc.Vec2( i2329[29], i2329[30] )
  i2328.endValueColor = new pc.Color(i2329[31], i2329[32], i2329[33], i2329[34])
  i2328.endValueString = i2329[35]
  i2328.endValueRect = UnityEngine.Rect.MinMaxRect(i2329[36], i2329[37], i2329[38], i2329[39])
  request.r(i2329[40], i2329[41], 0, i2328, 'endValueTransform')
  i2328.optionalBool0 = !!i2329[42]
  i2328.optionalBool1 = !!i2329[43]
  i2328.optionalFloat0 = i2329[44]
  i2328.optionalInt0 = i2329[45]
  i2328.optionalRotationMode = i2329[46]
  i2328.optionalScrambleMode = i2329[47]
  i2328.optionalShakeRandomnessMode = i2329[48]
  i2328.optionalString = i2329[49]
  i2328.updateType = i2329[50]
  i2328.isSpeedBased = !!i2329[51]
  i2328.hasOnStart = !!i2329[52]
  i2328.hasOnPlay = !!i2329[53]
  i2328.hasOnUpdate = !!i2329[54]
  i2328.hasOnStepComplete = !!i2329[55]
  i2328.hasOnComplete = !!i2329[56]
  i2328.hasOnTweenCreated = !!i2329[57]
  i2328.hasOnRewind = !!i2329[58]
  i2328.onStart = request.d('UnityEngine.Events.UnityEvent', i2329[59], i2328.onStart)
  i2328.onPlay = request.d('UnityEngine.Events.UnityEvent', i2329[60], i2328.onPlay)
  i2328.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2329[61], i2328.onUpdate)
  i2328.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2329[62], i2328.onStepComplete)
  i2328.onComplete = request.d('UnityEngine.Events.UnityEvent', i2329[63], i2328.onComplete)
  i2328.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2329[64], i2328.onTweenCreated)
  i2328.onRewind = request.d('UnityEngine.Events.UnityEvent', i2329[65], i2328.onRewind)
  return i2328
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2331 = data
  i2330.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2331[0], i2330.m_PersistentCalls)
  return i2330
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2332 = root || request.c( 'HideOnPointer' )
  var i2333 = data
  i2332.OnPointerDownEvent = request.d('System.Action', i2333[0], i2332.OnPointerDownEvent)
  return i2332
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2334 = root || request.c( 'System.Action' )
  var i2335 = data
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'additionalVertexStreams')
  i2336.enabled = !!i2337[2]
  request.r(i2337[3], i2337[4], 0, i2336, 'sharedMaterial')
  var i2339 = i2337[5]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 2) {
  request.r(i2339[i + 0], i2339[i + 1], 2, i2338, '')
  }
  i2336.sharedMaterials = i2338
  i2336.receiveShadows = !!i2337[6]
  i2336.shadowCastingMode = i2337[7]
  i2336.sortingLayerID = i2337[8]
  i2336.sortingOrder = i2337[9]
  i2336.lightmapIndex = i2337[10]
  i2336.lightmapSceneIndex = i2337[11]
  i2336.lightmapScaleOffset = new pc.Vec4( i2337[12], i2337[13], i2337[14], i2337[15] )
  i2336.lightProbeUsage = i2337[16]
  i2336.reflectionProbeUsage = i2337[17]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'sharedMesh')
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2343 = data
  i2342.center = new pc.Vec3( i2343[0], i2343[1], i2343[2] )
  i2342.size = new pc.Vec3( i2343[3], i2343[4], i2343[5] )
  i2342.enabled = !!i2343[6]
  i2342.isTrigger = !!i2343[7]
  request.r(i2343[8], i2343[9], 0, i2342, 'material')
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'sharedMesh')
  i2344.convex = !!i2345[2]
  i2344.enabled = !!i2345[3]
  i2344.isTrigger = !!i2345[4]
  request.r(i2345[5], i2345[6], 0, i2344, 'material')
  return i2344
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2346 = root || request.c( 'CharacterMotor' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'characterInput')
  request.r(i2347[2], i2347[3], 0, i2346, 'cameraYawTransform')
  i2346.moveSpeed = i2347[4]
  i2346.jumpHeight = i2347[5]
  request.r(i2347[6], i2347[7], 0, i2346, 'groundChecker')
  i2346.gravity = i2347[8]
  request.r(i2347[9], i2347[10], 0, i2346, 'controller')
  i2346.autoRun = !!i2347[11]
  return i2346
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2348 = root || request.c( 'CharacterRotation' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'motor')
  i2348.rotationSpeed = i2349[2]
  return i2348
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2350 = root || request.c( 'CharacterAnimation' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'animator')
  request.r(i2351[2], i2351[3], 0, i2350, 'motor')
  return i2350
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2352 = root || request.c( 'CharacterCollect' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'motor')
  request.r(i2353[2], i2353[3], 0, i2352, 'avatar')
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2355 = data
  i2354.mass = i2355[0]
  i2354.drag = i2355[1]
  i2354.angularDrag = i2355[2]
  i2354.useGravity = !!i2355[3]
  i2354.isKinematic = !!i2355[4]
  i2354.constraints = i2355[5]
  i2354.maxAngularVelocity = i2355[6]
  i2354.collisionDetectionMode = i2355[7]
  i2354.interpolation = i2355[8]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2357 = data
  i2356.center = new pc.Vec3( i2357[0], i2357[1], i2357[2] )
  i2356.radius = i2357[3]
  i2356.height = i2357[4]
  i2356.direction = i2357[5]
  i2356.enabled = !!i2357[6]
  i2356.isTrigger = !!i2357[7]
  request.r(i2357[8], i2357[9], 0, i2356, 'material')
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'animatorController')
  request.r(i2359[2], i2359[3], 0, i2358, 'avatar')
  i2358.updateMode = i2359[4]
  i2358.hasTransformHierarchy = !!i2359[5]
  i2358.applyRootMotion = !!i2359[6]
  var i2361 = i2359[7]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 2, i2360, '')
  }
  i2358.humanBones = i2360
  i2358.enabled = !!i2359[8]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'clip')
  request.r(i2365[2], i2365[3], 0, i2364, 'outputAudioMixerGroup')
  i2364.playOnAwake = !!i2365[4]
  i2364.loop = !!i2365[5]
  i2364.time = i2365[6]
  i2364.volume = i2365[7]
  i2364.pitch = i2365[8]
  i2364.enabled = !!i2365[9]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2367 = data
  i2366.color = new pc.Color(i2367[0], i2367[1], i2367[2], i2367[3])
  request.r(i2367[4], i2367[5], 0, i2366, 'sprite')
  i2366.flipX = !!i2367[6]
  i2366.flipY = !!i2367[7]
  i2366.drawMode = i2367[8]
  i2366.size = new pc.Vec2( i2367[9], i2367[10] )
  i2366.tileMode = i2367[11]
  i2366.adaptiveModeThreshold = i2367[12]
  i2366.maskInteraction = i2367[13]
  i2366.spriteSortPoint = i2367[14]
  i2366.enabled = !!i2367[15]
  request.r(i2367[16], i2367[17], 0, i2366, 'sharedMaterial')
  var i2369 = i2367[18]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 2) {
  request.r(i2369[i + 0], i2369[i + 1], 2, i2368, '')
  }
  i2366.sharedMaterials = i2368
  i2366.receiveShadows = !!i2367[19]
  i2366.shadowCastingMode = i2367[20]
  i2366.sortingLayerID = i2367[21]
  i2366.sortingOrder = i2367[22]
  i2366.lightmapIndex = i2367[23]
  i2366.lightmapSceneIndex = i2367[24]
  i2366.lightmapScaleOffset = new pc.Vec4( i2367[25], i2367[26], i2367[27], i2367[28] )
  i2366.lightProbeUsage = i2367[29]
  i2366.reflectionProbeUsage = i2367[30]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'sharedMesh')
  var i2373 = i2371[2]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 2, i2372, '')
  }
  i2370.bones = i2372
  i2370.updateWhenOffscreen = !!i2371[3]
  i2370.localBounds = i2371[4]
  request.r(i2371[5], i2371[6], 0, i2370, 'rootBone')
  var i2375 = i2371[7]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2375[i + 0]) );
  }
  i2370.blendShapesWeights = i2374
  i2370.enabled = !!i2371[8]
  request.r(i2371[9], i2371[10], 0, i2370, 'sharedMaterial')
  var i2377 = i2371[11]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 2) {
  request.r(i2377[i + 0], i2377[i + 1], 2, i2376, '')
  }
  i2370.sharedMaterials = i2376
  i2370.receiveShadows = !!i2371[12]
  i2370.shadowCastingMode = i2371[13]
  i2370.sortingLayerID = i2371[14]
  i2370.sortingOrder = i2371[15]
  i2370.lightmapIndex = i2371[16]
  i2370.lightmapSceneIndex = i2371[17]
  i2370.lightmapScaleOffset = new pc.Vec4( i2371[18], i2371[19], i2371[20], i2371[21] )
  i2370.lightProbeUsage = i2371[22]
  i2370.reflectionProbeUsage = i2371[23]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2381 = data
  i2380.weight = i2381[0]
  return i2380
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2382 = root || request.c( 'GroundChecker' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'groundPoint')
  i2382.checkRadius = i2383[2]
  i2382.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2383[3] )
  return i2382
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2384 = root || request.c( 'CameraFollow' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'target')
  i2384.smoothTime = i2385[2]
  return i2384
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2386 = root || request.c( 'CameraLook' )
  var i2387 = data
  request.r(i2387[0], i2387[1], 0, i2386, 'input')
  request.r(i2387[2], i2387[3], 0, i2386, 'yawPivot')
  request.r(i2387[4], i2387[5], 0, i2386, 'pitchPivot')
  i2386.minPitch = i2387[6]
  i2386.maxPitch = i2387[7]
  i2386.yaw = i2387[8]
  i2386.pitch = i2387[9]
  i2386.defaltYaw = i2387[10]
  i2386.defaltPitch = i2387[11]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2389 = data
  i2388.aspect = i2389[0]
  i2388.orthographic = !!i2389[1]
  i2388.orthographicSize = i2389[2]
  i2388.backgroundColor = new pc.Color(i2389[3], i2389[4], i2389[5], i2389[6])
  i2388.nearClipPlane = i2389[7]
  i2388.farClipPlane = i2389[8]
  i2388.fieldOfView = i2389[9]
  i2388.depth = i2389[10]
  i2388.clearFlags = i2389[11]
  i2388.cullingMask = i2389[12]
  i2388.rect = i2389[13]
  request.r(i2389[14], i2389[15], 0, i2388, 'targetTexture')
  i2388.usePhysicalProperties = !!i2389[16]
  i2388.focalLength = i2389[17]
  i2388.sensorSize = new pc.Vec2( i2389[18], i2389[19] )
  i2388.lensShift = new pc.Vec2( i2389[20], i2389[21] )
  i2388.gateFit = i2389[22]
  i2388.commandBufferCount = i2389[23]
  i2388.cameraType = i2389[24]
  i2388.enabled = !!i2389[25]
  return i2388
}

Deserializers["Box"] = function (request, data, root) {
  var i2390 = root || request.c( 'Box' )
  var i2391 = data
  i2390.lifeTime = i2391[0]
  request.r(i2391[1], i2391[2], 0, i2390, 'effect')
  request.r(i2391[3], i2391[4], 0, i2390, 'avatar')
  request.r(i2391[5], i2391[6], 0, i2390, 'interactSound')
  request.r(i2391[7], i2391[8], 0, i2390, 'openSound')
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2393 = data
  i2392.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2393[0], i2392.main)
  i2392.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2393[1], i2392.colorBySpeed)
  i2392.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2393[2], i2392.colorOverLifetime)
  i2392.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2393[3], i2392.emission)
  i2392.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2393[4], i2392.rotationBySpeed)
  i2392.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2393[5], i2392.rotationOverLifetime)
  i2392.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2393[6], i2392.shape)
  i2392.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2393[7], i2392.sizeBySpeed)
  i2392.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2393[8], i2392.sizeOverLifetime)
  i2392.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2393[9], i2392.textureSheetAnimation)
  i2392.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2393[10], i2392.velocityOverLifetime)
  i2392.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2393[11], i2392.noise)
  i2392.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2393[12], i2392.inheritVelocity)
  i2392.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2393[13], i2392.forceOverLifetime)
  i2392.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2393[14], i2392.limitVelocityOverLifetime)
  i2392.useAutoRandomSeed = !!i2393[15]
  i2392.randomSeed = i2393[16]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2394 = root || new pc.ParticleSystemMain()
  var i2395 = data
  i2394.duration = i2395[0]
  i2394.loop = !!i2395[1]
  i2394.prewarm = !!i2395[2]
  i2394.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[3], i2394.startDelay)
  i2394.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[4], i2394.startLifetime)
  i2394.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[5], i2394.startSpeed)
  i2394.startSize3D = !!i2395[6]
  i2394.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[7], i2394.startSizeX)
  i2394.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[8], i2394.startSizeY)
  i2394.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[9], i2394.startSizeZ)
  i2394.startRotation3D = !!i2395[10]
  i2394.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[11], i2394.startRotationX)
  i2394.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[12], i2394.startRotationY)
  i2394.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[13], i2394.startRotationZ)
  i2394.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2395[14], i2394.startColor)
  i2394.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[15], i2394.gravityModifier)
  i2394.simulationSpace = i2395[16]
  request.r(i2395[17], i2395[18], 0, i2394, 'customSimulationSpace')
  i2394.simulationSpeed = i2395[19]
  i2394.useUnscaledTime = !!i2395[20]
  i2394.scalingMode = i2395[21]
  i2394.playOnAwake = !!i2395[22]
  i2394.maxParticles = i2395[23]
  i2394.emitterVelocityMode = i2395[24]
  i2394.stopAction = i2395[25]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2396 = root || new pc.MinMaxCurve()
  var i2397 = data
  i2396.mode = i2397[0]
  i2396.curveMin = new pc.AnimationCurve( { keys_flow: i2397[1] } )
  i2396.curveMax = new pc.AnimationCurve( { keys_flow: i2397[2] } )
  i2396.curveMultiplier = i2397[3]
  i2396.constantMin = i2397[4]
  i2396.constantMax = i2397[5]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2398 = root || new pc.MinMaxGradient()
  var i2399 = data
  i2398.mode = i2399[0]
  i2398.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2399[1], i2398.gradientMin)
  i2398.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2399[2], i2398.gradientMax)
  i2398.colorMin = new pc.Color(i2399[3], i2399[4], i2399[5], i2399[6])
  i2398.colorMax = new pc.Color(i2399[7], i2399[8], i2399[9], i2399[10])
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2401 = data
  i2400.mode = i2401[0]
  var i2403 = i2401[1]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2403[i + 0]) );
  }
  i2400.colorKeys = i2402
  var i2405 = i2401[2]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2405[i + 0]) );
  }
  i2400.alphaKeys = i2404
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2406 = root || new pc.ParticleSystemColorBySpeed()
  var i2407 = data
  i2406.enabled = !!i2407[0]
  i2406.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2407[1], i2406.color)
  i2406.range = new pc.Vec2( i2407[2], i2407[3] )
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2411 = data
  i2410.color = new pc.Color(i2411[0], i2411[1], i2411[2], i2411[3])
  i2410.time = i2411[4]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2415 = data
  i2414.alpha = i2415[0]
  i2414.time = i2415[1]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2416 = root || new pc.ParticleSystemColorOverLifetime()
  var i2417 = data
  i2416.enabled = !!i2417[0]
  i2416.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2417[1], i2416.color)
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2418 = root || new pc.ParticleSystemEmitter()
  var i2419 = data
  i2418.enabled = !!i2419[0]
  i2418.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[1], i2418.rateOverTime)
  i2418.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[2], i2418.rateOverDistance)
  var i2421 = i2419[3]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2421[i + 0]) );
  }
  i2418.bursts = i2420
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2424 = root || new pc.ParticleSystemBurst()
  var i2425 = data
  i2424.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[0], i2424.count)
  i2424.cycleCount = i2425[1]
  i2424.minCount = i2425[2]
  i2424.maxCount = i2425[3]
  i2424.repeatInterval = i2425[4]
  i2424.time = i2425[5]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2426 = root || new pc.ParticleSystemRotationBySpeed()
  var i2427 = data
  i2426.enabled = !!i2427[0]
  i2426.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[1], i2426.x)
  i2426.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[2], i2426.y)
  i2426.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[3], i2426.z)
  i2426.separateAxes = !!i2427[4]
  i2426.range = new pc.Vec2( i2427[5], i2427[6] )
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2428 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2429 = data
  i2428.enabled = !!i2429[0]
  i2428.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[1], i2428.x)
  i2428.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[2], i2428.y)
  i2428.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2429[3], i2428.z)
  i2428.separateAxes = !!i2429[4]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2430 = root || new pc.ParticleSystemShape()
  var i2431 = data
  i2430.enabled = !!i2431[0]
  i2430.shapeType = i2431[1]
  i2430.randomDirectionAmount = i2431[2]
  i2430.sphericalDirectionAmount = i2431[3]
  i2430.randomPositionAmount = i2431[4]
  i2430.alignToDirection = !!i2431[5]
  i2430.radius = i2431[6]
  i2430.radiusMode = i2431[7]
  i2430.radiusSpread = i2431[8]
  i2430.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[9], i2430.radiusSpeed)
  i2430.radiusThickness = i2431[10]
  i2430.angle = i2431[11]
  i2430.length = i2431[12]
  i2430.boxThickness = new pc.Vec3( i2431[13], i2431[14], i2431[15] )
  i2430.meshShapeType = i2431[16]
  request.r(i2431[17], i2431[18], 0, i2430, 'mesh')
  request.r(i2431[19], i2431[20], 0, i2430, 'meshRenderer')
  request.r(i2431[21], i2431[22], 0, i2430, 'skinnedMeshRenderer')
  i2430.useMeshMaterialIndex = !!i2431[23]
  i2430.meshMaterialIndex = i2431[24]
  i2430.useMeshColors = !!i2431[25]
  i2430.normalOffset = i2431[26]
  i2430.arc = i2431[27]
  i2430.arcMode = i2431[28]
  i2430.arcSpread = i2431[29]
  i2430.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2431[30], i2430.arcSpeed)
  i2430.donutRadius = i2431[31]
  i2430.position = new pc.Vec3( i2431[32], i2431[33], i2431[34] )
  i2430.rotation = new pc.Vec3( i2431[35], i2431[36], i2431[37] )
  i2430.scale = new pc.Vec3( i2431[38], i2431[39], i2431[40] )
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2432 = root || new pc.ParticleSystemSizeBySpeed()
  var i2433 = data
  i2432.enabled = !!i2433[0]
  i2432.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[1], i2432.x)
  i2432.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[2], i2432.y)
  i2432.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2433[3], i2432.z)
  i2432.separateAxes = !!i2433[4]
  i2432.range = new pc.Vec2( i2433[5], i2433[6] )
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2434 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2435 = data
  i2434.enabled = !!i2435[0]
  i2434.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[1], i2434.x)
  i2434.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[2], i2434.y)
  i2434.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2435[3], i2434.z)
  i2434.separateAxes = !!i2435[4]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2436 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2437 = data
  i2436.enabled = !!i2437[0]
  i2436.mode = i2437[1]
  i2436.animation = i2437[2]
  i2436.numTilesX = i2437[3]
  i2436.numTilesY = i2437[4]
  i2436.useRandomRow = !!i2437[5]
  i2436.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[6], i2436.frameOverTime)
  i2436.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2437[7], i2436.startFrame)
  i2436.cycleCount = i2437[8]
  i2436.rowIndex = i2437[9]
  i2436.flipU = i2437[10]
  i2436.flipV = i2437[11]
  i2436.spriteCount = i2437[12]
  var i2439 = i2437[13]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 2) {
  request.r(i2439[i + 0], i2439[i + 1], 2, i2438, '')
  }
  i2436.sprites = i2438
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2442 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2443 = data
  i2442.enabled = !!i2443[0]
  i2442.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[1], i2442.x)
  i2442.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[2], i2442.y)
  i2442.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[3], i2442.z)
  i2442.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[4], i2442.radial)
  i2442.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[5], i2442.speedModifier)
  i2442.space = i2443[6]
  i2442.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[7], i2442.orbitalX)
  i2442.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[8], i2442.orbitalY)
  i2442.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[9], i2442.orbitalZ)
  i2442.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[10], i2442.orbitalOffsetX)
  i2442.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[11], i2442.orbitalOffsetY)
  i2442.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2443[12], i2442.orbitalOffsetZ)
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2444 = root || new pc.ParticleSystemNoise()
  var i2445 = data
  i2444.enabled = !!i2445[0]
  i2444.separateAxes = !!i2445[1]
  i2444.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[2], i2444.strengthX)
  i2444.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[3], i2444.strengthY)
  i2444.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[4], i2444.strengthZ)
  i2444.frequency = i2445[5]
  i2444.damping = !!i2445[6]
  i2444.octaveCount = i2445[7]
  i2444.octaveMultiplier = i2445[8]
  i2444.octaveScale = i2445[9]
  i2444.quality = i2445[10]
  i2444.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[11], i2444.scrollSpeed)
  i2444.scrollSpeedMultiplier = i2445[12]
  i2444.remapEnabled = !!i2445[13]
  i2444.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[14], i2444.remapX)
  i2444.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[15], i2444.remapY)
  i2444.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[16], i2444.remapZ)
  i2444.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[17], i2444.positionAmount)
  i2444.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[18], i2444.rotationAmount)
  i2444.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2445[19], i2444.sizeAmount)
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2446 = root || new pc.ParticleSystemInheritVelocity()
  var i2447 = data
  i2446.enabled = !!i2447[0]
  i2446.mode = i2447[1]
  i2446.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2447[2], i2446.curve)
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2448 = root || new pc.ParticleSystemForceOverLifetime()
  var i2449 = data
  i2448.enabled = !!i2449[0]
  i2448.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[1], i2448.x)
  i2448.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[2], i2448.y)
  i2448.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[3], i2448.z)
  i2448.space = i2449[4]
  i2448.randomized = !!i2449[5]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2450 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2451 = data
  i2450.enabled = !!i2451[0]
  i2450.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[1], i2450.limit)
  i2450.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[2], i2450.limitX)
  i2450.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[3], i2450.limitY)
  i2450.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[4], i2450.limitZ)
  i2450.dampen = i2451[5]
  i2450.separateAxes = !!i2451[6]
  i2450.space = i2451[7]
  i2450.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2451[8], i2450.drag)
  i2450.multiplyDragByParticleSize = !!i2451[9]
  i2450.multiplyDragByParticleVelocity = !!i2451[10]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'mesh')
  i2452.meshCount = i2453[2]
  i2452.activeVertexStreamsCount = i2453[3]
  i2452.alignment = i2453[4]
  i2452.renderMode = i2453[5]
  i2452.sortMode = i2453[6]
  i2452.lengthScale = i2453[7]
  i2452.velocityScale = i2453[8]
  i2452.cameraVelocityScale = i2453[9]
  i2452.normalDirection = i2453[10]
  i2452.sortingFudge = i2453[11]
  i2452.minParticleSize = i2453[12]
  i2452.maxParticleSize = i2453[13]
  i2452.pivot = new pc.Vec3( i2453[14], i2453[15], i2453[16] )
  request.r(i2453[17], i2453[18], 0, i2452, 'trailMaterial')
  i2452.applyActiveColorSpace = !!i2453[19]
  i2452.enabled = !!i2453[20]
  request.r(i2453[21], i2453[22], 0, i2452, 'sharedMaterial')
  var i2455 = i2453[23]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 2) {
  request.r(i2455[i + 0], i2455[i + 1], 2, i2454, '')
  }
  i2452.sharedMaterials = i2454
  i2452.receiveShadows = !!i2453[24]
  i2452.shadowCastingMode = i2453[25]
  i2452.sortingLayerID = i2453[26]
  i2452.sortingOrder = i2453[27]
  i2452.lightmapIndex = i2453[28]
  i2452.lightmapSceneIndex = i2453[29]
  i2452.lightmapScaleOffset = new pc.Vec4( i2453[30], i2453[31], i2453[32], i2453[33] )
  i2452.lightProbeUsage = i2453[34]
  i2452.reflectionProbeUsage = i2453[35]
  return i2452
}

Deserializers["Gift"] = function (request, data, root) {
  var i2456 = root || request.c( 'Gift' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'avatar')
  i2456.collectDone = !!i2457[2]
  var i2459 = i2457[3]
  var i2458 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i2459.length; i += 2) {
  request.r(i2459[i + 0], i2459[i + 1], 1, i2458, '')
  }
  i2456.hints = i2458
  request.r(i2457[4], i2457[5], 0, i2456, 'collectSound')
  request.r(i2457[6], i2457[7], 0, i2456, 'collectEffect')
  request.r(i2457[8], i2457[9], 0, i2456, 'action')
  i2456.unLocked = !!i2457[10]
  return i2456
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2462 = root || request.c( 'SoundHint' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'Sound')
  request.r(i2463[2], i2463[3], 0, i2462, 'Source')
  return i2462
}

Deserializers["JumpHint"] = function (request, data, root) {
  var i2464 = root || request.c( 'JumpHint' )
  var i2465 = data
  i2464.JumpForce = new pc.Vec3( i2465[0], i2465[1], i2465[2] )
  request.r(i2465[3], i2465[4], 0, i2464, 'Rigidbody')
  return i2464
}

Deserializers["RunEffect"] = function (request, data, root) {
  var i2466 = root || request.c( 'RunEffect' )
  var i2467 = data
  request.r(i2467[0], i2467[1], 0, i2466, 'controller')
  request.r(i2467[2], i2467[3], 0, i2466, 'targetPos')
  request.r(i2467[4], i2467[5], 0, i2466, 'look')
  i2466.moveSpeed = i2467[6]
  i2466.rotateSpeed = i2467[7]
  i2466.stopDistance = i2467[8]
  return i2466
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2468 = root || request.c( 'CharacterInput' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'joystick')
  request.r(i2469[2], i2469[3], 0, i2468, 'jumpButton')
  return i2468
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2470 = root || request.c( 'InputManager' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'worldCamera')
  i2470.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2471[2] )
  i2470.touchSensitivity = i2471[3]
  i2470.mouseSensitivity = i2471[4]
  i2470.dragThreshold = i2471[5]
  return i2470
}

Deserializers["GameController"] = function (request, data, root) {
  var i2472 = root || request.c( 'GameController' )
  var i2473 = data
  i2472.timeToShowComplete = i2473[0]
  i2472.timeToShowHint = i2473[1]
  i2472.currentProgress = i2473[2]
  i2472.target = i2473[3]
  request.r(i2473[4], i2473[5], 0, i2472, 'progressText')
  request.r(i2473[6], i2473[7], 0, i2472, 'completeScene')
  var i2475 = i2473[8]
  var i2474 = new (System.Collections.Generic.List$1(Bridge.ns('BoxGift')))
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.add(request.d('BoxGift', i2475[i + 0]));
  }
  i2472.boxGifts = i2474
  request.r(i2473[9], i2473[10], 0, i2472, 'collect')
  request.r(i2473[11], i2473[12], 0, i2472, 'tut')
  return i2472
}

Deserializers["BoxGift"] = function (request, data, root) {
  var i2478 = root || request.c( 'BoxGift' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'Box')
  request.r(i2479[2], i2479[3], 0, i2478, 'SecretGift')
  return i2478
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2480 = root || request.c( 'AudioController' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'musicSource')
  request.r(i2481[2], i2481[3], 0, i2480, 'poolParent')
  i2480.startSize = i2481[4]
  return i2480
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2482 = root || request.c( 'LunaController' )
  var i2483 = data
  i2482.LimitTimePlay = !!i2483[0]
  i2482.TimePlay = i2483[1]
  i2482.TypeMonster = i2483[2]
  var i2485 = i2483[3]
  var i2484 = new (System.Collections.Generic.List$1(Bridge.ns('BoxGift')))
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.add(request.d('BoxGift', i2485[i + 0]));
  }
  i2482.monsters = i2484
  var i2487 = i2483[4]
  var i2486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 1, i2486, '')
  }
  i2482.images = i2486
  var i2489 = i2483[5]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2489.length; i += 2) {
  request.r(i2489[i + 0], i2489[i + 1], 1, i2488, '')
  }
  i2482.CTA = i2488
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2495 = data
  i2494.ambientIntensity = i2495[0]
  i2494.reflectionIntensity = i2495[1]
  i2494.ambientMode = i2495[2]
  i2494.ambientLight = new pc.Color(i2495[3], i2495[4], i2495[5], i2495[6])
  i2494.ambientSkyColor = new pc.Color(i2495[7], i2495[8], i2495[9], i2495[10])
  i2494.ambientGroundColor = new pc.Color(i2495[11], i2495[12], i2495[13], i2495[14])
  i2494.ambientEquatorColor = new pc.Color(i2495[15], i2495[16], i2495[17], i2495[18])
  i2494.fogColor = new pc.Color(i2495[19], i2495[20], i2495[21], i2495[22])
  i2494.fogEndDistance = i2495[23]
  i2494.fogStartDistance = i2495[24]
  i2494.fogDensity = i2495[25]
  i2494.fog = !!i2495[26]
  request.r(i2495[27], i2495[28], 0, i2494, 'skybox')
  i2494.fogMode = i2495[29]
  var i2497 = i2495[30]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2497[i + 0]) );
  }
  i2494.lightmaps = i2496
  i2494.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2495[31], i2494.lightProbes)
  i2494.lightmapsMode = i2495[32]
  i2494.mixedBakeMode = i2495[33]
  i2494.environmentLightingMode = i2495[34]
  i2494.ambientProbe = new pc.SphericalHarmonicsL2(i2495[35])
  request.r(i2495[36], i2495[37], 0, i2494, 'customReflection')
  request.r(i2495[38], i2495[39], 0, i2494, 'defaultReflection')
  i2494.defaultReflectionMode = i2495[40]
  i2494.defaultReflectionResolution = i2495[41]
  i2494.sunLightObjectId = i2495[42]
  i2494.pixelLightCount = i2495[43]
  i2494.defaultReflectionHDR = !!i2495[44]
  i2494.hasLightDataAsset = !!i2495[45]
  i2494.hasManualGenerate = !!i2495[46]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'lightmapColor')
  request.r(i2501[2], i2501[3], 0, i2500, 'lightmapDirection')
  request.r(i2501[4], i2501[5], 0, i2500, 'shadowMask')
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2502 = root || new UnityEngine.LightProbes()
  var i2503 = data
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2511 = data
  var i2513 = i2511[0]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2513[i + 0]));
  }
  i2510.ShaderCompilationErrors = i2512
  i2510.name = i2511[1]
  i2510.guid = i2511[2]
  var i2515 = i2511[3]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( i2515[i + 0] );
  }
  i2510.shaderDefinedKeywords = i2514
  var i2517 = i2511[4]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2517[i + 0]) );
  }
  i2510.passes = i2516
  var i2519 = i2511[5]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2519[i + 0]) );
  }
  i2510.usePasses = i2518
  var i2521 = i2511[6]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2521[i + 0]) );
  }
  i2510.defaultParameterValues = i2520
  request.r(i2511[7], i2511[8], 0, i2510, 'unityFallbackShader')
  i2510.readDepth = !!i2511[9]
  i2510.hasDepthOnlyPass = !!i2511[10]
  i2510.isCreatedByShaderGraph = !!i2511[11]
  i2510.disableBatching = !!i2511[12]
  i2510.compiled = !!i2511[13]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2525 = data
  i2524.shaderName = i2525[0]
  i2524.errorMessage = i2525[1]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2530 = root || new pc.UnityShaderPass()
  var i2531 = data
  i2530.id = i2531[0]
  i2530.subShaderIndex = i2531[1]
  i2530.name = i2531[2]
  i2530.passType = i2531[3]
  i2530.grabPassTextureName = i2531[4]
  i2530.usePass = !!i2531[5]
  i2530.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[6], i2530.zTest)
  i2530.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[7], i2530.zWrite)
  i2530.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[8], i2530.culling)
  i2530.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2531[9], i2530.blending)
  i2530.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2531[10], i2530.alphaBlending)
  i2530.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[11], i2530.colorWriteMask)
  i2530.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[12], i2530.offsetUnits)
  i2530.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[13], i2530.offsetFactor)
  i2530.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[14], i2530.stencilRef)
  i2530.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[15], i2530.stencilReadMask)
  i2530.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2531[16], i2530.stencilWriteMask)
  i2530.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2531[17], i2530.stencilOp)
  i2530.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2531[18], i2530.stencilOpFront)
  i2530.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2531[19], i2530.stencilOpBack)
  var i2533 = i2531[20]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2533[i + 0]) );
  }
  i2530.tags = i2532
  var i2535 = i2531[21]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( i2535[i + 0] );
  }
  i2530.passDefinedKeywords = i2534
  var i2537 = i2531[22]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2537[i + 0]) );
  }
  i2530.passDefinedKeywordGroups = i2536
  var i2539 = i2531[23]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2539[i + 0]) );
  }
  i2530.variants = i2538
  var i2541 = i2531[24]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2541[i + 0]) );
  }
  i2530.excludedVariants = i2540
  i2530.hasDepthReader = !!i2531[25]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2543 = data
  i2542.val = i2543[0]
  i2542.name = i2543[1]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2545 = data
  i2544.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2545[0], i2544.src)
  i2544.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2545[1], i2544.dst)
  i2544.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2545[2], i2544.op)
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2547 = data
  i2546.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[0], i2546.pass)
  i2546.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[1], i2546.fail)
  i2546.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[2], i2546.zFail)
  i2546.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[3], i2546.comp)
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2551 = data
  i2550.name = i2551[0]
  i2550.value = i2551[1]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2555 = data
  var i2557 = i2555[0]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( i2557[i + 0] );
  }
  i2554.keywords = i2556
  i2554.hasDiscard = !!i2555[1]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2561 = data
  i2560.passId = i2561[0]
  i2560.subShaderIndex = i2561[1]
  var i2563 = i2561[2]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( i2563[i + 0] );
  }
  i2560.keywords = i2562
  i2560.vertexProgram = i2561[3]
  i2560.fragmentProgram = i2561[4]
  i2560.exportedForWebGl2 = !!i2561[5]
  i2560.readDepth = !!i2561[6]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'shader')
  i2566.pass = i2567[2]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2571 = data
  i2570.name = i2571[0]
  i2570.type = i2571[1]
  i2570.value = new pc.Vec4( i2571[2], i2571[3], i2571[4], i2571[5] )
  i2570.textureValue = i2571[6]
  i2570.shaderPropertyFlag = i2571[7]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2573 = data
  i2572.name = i2573[0]
  request.r(i2573[1], i2573[2], 0, i2572, 'texture')
  i2572.aabb = i2573[3]
  i2572.vertices = i2573[4]
  i2572.triangles = i2573[5]
  i2572.textureRect = UnityEngine.Rect.MinMaxRect(i2573[6], i2573[7], i2573[8], i2573[9])
  i2572.packedRect = UnityEngine.Rect.MinMaxRect(i2573[10], i2573[11], i2573[12], i2573[13])
  i2572.border = new pc.Vec4( i2573[14], i2573[15], i2573[16], i2573[17] )
  i2572.transparency = i2573[18]
  i2572.bounds = i2573[19]
  i2572.pixelsPerUnit = i2573[20]
  i2572.textureWidth = i2573[21]
  i2572.textureHeight = i2573[22]
  i2572.nativeSize = new pc.Vec2( i2573[23], i2573[24] )
  i2572.pivot = new pc.Vec2( i2573[25], i2573[26] )
  i2572.textureRectOffset = new pc.Vec2( i2573[27], i2573[28] )
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2575 = data
  i2574.name = i2575[0]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2577 = data
  i2576.name = i2577[0]
  i2576.wrapMode = i2577[1]
  i2576.isLooping = !!i2577[2]
  i2576.length = i2577[3]
  var i2579 = i2577[4]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2579[i + 0]) );
  }
  i2576.curves = i2578
  var i2581 = i2577[5]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2581[i + 0]) );
  }
  i2576.events = i2580
  i2576.halfPrecision = !!i2577[6]
  i2576._frameRate = i2577[7]
  i2576.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2577[8], i2576.localBounds)
  i2576.hasMuscleCurves = !!i2577[9]
  var i2583 = i2577[10]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( i2583[i + 0] );
  }
  i2576.clipMuscleConstant = i2582
  i2576.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2577[11], i2576.clipBindingConstant)
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2587 = data
  i2586.path = i2587[0]
  i2586.hash = i2587[1]
  i2586.componentType = i2587[2]
  i2586.property = i2587[3]
  i2586.keys = i2587[4]
  var i2589 = i2587[5]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2589[i + 0]) );
  }
  i2586.objectReferenceKeys = i2588
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2593 = data
  i2592.time = i2593[0]
  request.r(i2593[1], i2593[2], 0, i2592, 'value')
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2597 = data
  i2596.functionName = i2597[0]
  i2596.floatParameter = i2597[1]
  i2596.intParameter = i2597[2]
  i2596.stringParameter = i2597[3]
  request.r(i2597[4], i2597[5], 0, i2596, 'objectReferenceParameter')
  i2596.time = i2597[6]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2599 = data
  i2598.center = new pc.Vec3( i2599[0], i2599[1], i2599[2] )
  i2598.extends = new pc.Vec3( i2599[3], i2599[4], i2599[5] )
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2603 = data
  var i2605 = i2603[0]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( i2605[i + 0] );
  }
  i2602.genericBindings = i2604
  var i2607 = i2603[1]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( i2607[i + 0] );
  }
  i2602.pptrCurveMapping = i2606
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2609 = data
  i2608.name = i2609[0]
  var i2611 = i2609[1]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2611[i + 0]) );
  }
  i2608.layers = i2610
  var i2613 = i2609[2]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2613[i + 0]) );
  }
  i2608.parameters = i2612
  i2608.animationClips = i2609[3]
  i2608.avatarUnsupported = i2609[4]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2617 = data
  i2616.name = i2617[0]
  i2616.defaultWeight = i2617[1]
  i2616.blendingMode = i2617[2]
  i2616.avatarMask = i2617[3]
  i2616.syncedLayerIndex = i2617[4]
  i2616.syncedLayerAffectsTiming = !!i2617[5]
  i2616.syncedLayers = i2617[6]
  i2616.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2617[7], i2616.stateMachine)
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2619 = data
  i2618.id = i2619[0]
  i2618.name = i2619[1]
  i2618.path = i2619[2]
  var i2621 = i2619[3]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2621[i + 0]) );
  }
  i2618.states = i2620
  var i2623 = i2619[4]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2623[i + 0]) );
  }
  i2618.machines = i2622
  var i2625 = i2619[5]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2625[i + 0]) );
  }
  i2618.entryStateTransitions = i2624
  var i2627 = i2619[6]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2627[i + 0]) );
  }
  i2618.exitStateTransitions = i2626
  var i2629 = i2619[7]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2629[i + 0]) );
  }
  i2618.anyStateTransitions = i2628
  i2618.defaultStateId = i2619[8]
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2633 = data
  i2632.id = i2633[0]
  i2632.name = i2633[1]
  i2632.cycleOffset = i2633[2]
  i2632.cycleOffsetParameter = i2633[3]
  i2632.cycleOffsetParameterActive = !!i2633[4]
  i2632.mirror = !!i2633[5]
  i2632.mirrorParameter = i2633[6]
  i2632.mirrorParameterActive = !!i2633[7]
  i2632.motionId = i2633[8]
  i2632.nameHash = i2633[9]
  i2632.fullPathHash = i2633[10]
  i2632.speed = i2633[11]
  i2632.speedParameter = i2633[12]
  i2632.speedParameterActive = !!i2633[13]
  i2632.tag = i2633[14]
  i2632.tagHash = i2633[15]
  i2632.writeDefaultValues = !!i2633[16]
  var i2635 = i2633[17]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 2) {
  request.r(i2635[i + 0], i2635[i + 1], 2, i2634, '')
  }
  i2632.behaviours = i2634
  var i2637 = i2633[18]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2637[i + 0]) );
  }
  i2632.transitions = i2636
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2643 = data
  i2642.fullPath = i2643[0]
  i2642.canTransitionToSelf = !!i2643[1]
  i2642.duration = i2643[2]
  i2642.exitTime = i2643[3]
  i2642.hasExitTime = !!i2643[4]
  i2642.hasFixedDuration = !!i2643[5]
  i2642.interruptionSource = i2643[6]
  i2642.offset = i2643[7]
  i2642.orderedInterruption = !!i2643[8]
  i2642.destinationStateId = i2643[9]
  i2642.isExit = !!i2643[10]
  i2642.mute = !!i2643[11]
  i2642.solo = !!i2643[12]
  var i2645 = i2643[13]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2645[i + 0]) );
  }
  i2642.conditions = i2644
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2649 = data
  i2648.mode = i2649[0]
  i2648.parameter = i2649[1]
  i2648.threshold = i2649[2]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2655 = data
  i2654.destinationStateId = i2655[0]
  i2654.isExit = !!i2655[1]
  i2654.mute = !!i2655[2]
  i2654.solo = !!i2655[3]
  var i2657 = i2655[4]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2657[i + 0]) );
  }
  i2654.conditions = i2656
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2661 = data
  i2660.defaultBool = !!i2661[0]
  i2660.defaultFloat = i2661[1]
  i2660.defaultInt = i2661[2]
  i2660.name = i2661[3]
  i2660.nameHash = i2661[4]
  i2660.type = i2661[5]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2663 = data
  i2662.name = i2663[0]
  request.r(i2663[1], i2663[2], 0, i2662, '_runtimeAnimatorController')
  var i2665 = i2663[3]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 2) {
  request.r(i2665[i + 0], i2665[i + 1], 2, i2664, '')
  }
  i2662._originalAnimationClips = i2664
  var i2667 = i2663[4]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 2) {
  request.r(i2667[i + 0], i2667[i + 1], 2, i2666, '')
  }
  i2662._overrideAnimationClips = i2666
  var i2669 = i2663[5]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 2) {
  request.r(i2669[i + 0], i2669[i + 1], 2, i2668, '')
  }
  i2662._animationClips = i2668
  var i2671 = i2663[6]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('UnityEngine.AnimationClipPair', i2671[i + 0]) );
  }
  i2662._animationClipPairs = i2670
  return i2662
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2677 = data
  request.r(i2677[0], i2677[1], 0, i2676, 'originalClip')
  request.r(i2677[2], i2677[3], 0, i2676, 'overrideClip')
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2679 = data
  i2678.name = i2679[0]
  i2678.bytes64 = i2679[1]
  i2678.data = i2679[2]
  return i2678
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2680 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2681 = data
  i2680.normalStyle = i2681[0]
  i2680.normalSpacingOffset = i2681[1]
  i2680.boldStyle = i2681[2]
  i2680.boldSpacing = i2681[3]
  i2680.italicStyle = i2681[4]
  i2680.tabSize = i2681[5]
  request.r(i2681[6], i2681[7], 0, i2680, 'atlas')
  i2680.m_SourceFontFileGUID = i2681[8]
  i2680.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2681[9], i2680.m_CreationSettings)
  request.r(i2681[10], i2681[11], 0, i2680, 'm_SourceFontFile')
  i2680.m_SourceFontFilePath = i2681[12]
  i2680.m_AtlasPopulationMode = i2681[13]
  i2680.InternalDynamicOS = !!i2681[14]
  var i2683 = i2681[15]
  var i2682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.add(request.d('UnityEngine.TextCore.Glyph', i2683[i + 0]));
  }
  i2680.m_GlyphTable = i2682
  var i2685 = i2681[16]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.add(request.d('TMPro.TMP_Character', i2685[i + 0]));
  }
  i2680.m_CharacterTable = i2684
  var i2687 = i2681[17]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 2) {
  request.r(i2687[i + 0], i2687[i + 1], 2, i2686, '')
  }
  i2680.m_AtlasTextures = i2686
  i2680.m_AtlasTextureIndex = i2681[18]
  i2680.m_IsMultiAtlasTexturesEnabled = !!i2681[19]
  i2680.m_GetFontFeatures = !!i2681[20]
  i2680.m_ClearDynamicDataOnBuild = !!i2681[21]
  i2680.m_AtlasWidth = i2681[22]
  i2680.m_AtlasHeight = i2681[23]
  i2680.m_AtlasPadding = i2681[24]
  i2680.m_AtlasRenderMode = i2681[25]
  var i2689 = i2681[26]
  var i2688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.add(request.d('UnityEngine.TextCore.GlyphRect', i2689[i + 0]));
  }
  i2680.m_UsedGlyphRects = i2688
  var i2691 = i2681[27]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('UnityEngine.TextCore.GlyphRect', i2691[i + 0]));
  }
  i2680.m_FreeGlyphRects = i2690
  i2680.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2681[28], i2680.m_FontFeatureTable)
  i2680.m_ShouldReimportFontFeatures = !!i2681[29]
  var i2693 = i2681[30]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 1, i2692, '')
  }
  i2680.m_FallbackFontAssetTable = i2692
  var i2695 = i2681[31]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('TMPro.TMP_FontWeightPair', i2695[i + 0]) );
  }
  i2680.m_FontWeightTable = i2694
  var i2697 = i2681[32]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('TMPro.TMP_FontWeightPair', i2697[i + 0]) );
  }
  i2680.fontWeights = i2696
  i2680.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2681[33], i2680.m_fontInfo)
  var i2699 = i2681[34]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.add(request.d('TMPro.TMP_Glyph', i2699[i + 0]));
  }
  i2680.m_glyphInfoList = i2698
  i2680.m_KerningTable = request.d('TMPro.KerningTable', i2681[35], i2680.m_KerningTable)
  var i2701 = i2681[36]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2701.length; i += 2) {
  request.r(i2701[i + 0], i2701[i + 1], 1, i2700, '')
  }
  i2680.fallbackFontAssets = i2700
  i2680.m_Version = i2681[37]
  i2680.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2681[38], i2680.m_FaceInfo)
  request.r(i2681[39], i2681[40], 0, i2680, 'm_Material')
  return i2680
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2703 = data
  i2702.sourceFontFileName = i2703[0]
  i2702.sourceFontFileGUID = i2703[1]
  i2702.faceIndex = i2703[2]
  i2702.pointSizeSamplingMode = i2703[3]
  i2702.pointSize = i2703[4]
  i2702.padding = i2703[5]
  i2702.paddingMode = i2703[6]
  i2702.packingMode = i2703[7]
  i2702.atlasWidth = i2703[8]
  i2702.atlasHeight = i2703[9]
  i2702.characterSetSelectionMode = i2703[10]
  i2702.characterSequence = i2703[11]
  i2702.referencedFontAssetGUID = i2703[12]
  i2702.referencedTextAssetGUID = i2703[13]
  i2702.fontStyle = i2703[14]
  i2702.fontStyleModifier = i2703[15]
  i2702.renderMode = i2703[16]
  i2702.includeFontFeatures = !!i2703[17]
  return i2702
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2706 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2707 = data
  i2706.m_Index = i2707[0]
  i2706.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2707[1], i2706.m_Metrics)
  i2706.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2707[2], i2706.m_GlyphRect)
  i2706.m_Scale = i2707[3]
  i2706.m_AtlasIndex = i2707[4]
  i2706.m_ClassDefinitionType = i2707[5]
  return i2706
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2708 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2709 = data
  i2708.m_Width = i2709[0]
  i2708.m_Height = i2709[1]
  i2708.m_HorizontalBearingX = i2709[2]
  i2708.m_HorizontalBearingY = i2709[3]
  i2708.m_HorizontalAdvance = i2709[4]
  return i2708
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2711 = data
  i2710.m_X = i2711[0]
  i2710.m_Y = i2711[1]
  i2710.m_Width = i2711[2]
  i2710.m_Height = i2711[3]
  return i2710
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.TMP_Character' )
  var i2715 = data
  i2714.m_ElementType = i2715[0]
  i2714.m_Unicode = i2715[1]
  i2714.m_GlyphIndex = i2715[2]
  i2714.m_Scale = i2715[3]
  return i2714
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2720 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2721 = data
  var i2723 = i2721[0]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.add(request.d('TMPro.MultipleSubstitutionRecord', i2723[i + 0]));
  }
  i2720.m_MultipleSubstitutionRecords = i2722
  var i2725 = i2721[1]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.add(request.d('TMPro.LigatureSubstitutionRecord', i2725[i + 0]));
  }
  i2720.m_LigatureSubstitutionRecords = i2724
  var i2727 = i2721[2]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2727[i + 0]));
  }
  i2720.m_GlyphPairAdjustmentRecords = i2726
  var i2729 = i2721[3]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2729[i + 0]));
  }
  i2720.m_MarkToBaseAdjustmentRecords = i2728
  var i2731 = i2721[4]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2731[i + 0]));
  }
  i2720.m_MarkToMarkAdjustmentRecords = i2730
  return i2720
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2734 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2735 = data
  i2734.m_TargetGlyphID = i2735[0]
  i2734.m_SubstituteGlyphIDs = i2735[1]
  return i2734
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2739 = data
  i2738.m_ComponentGlyphIDs = i2739[0]
  i2738.m_LigatureGlyphID = i2739[1]
  return i2738
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2742 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2743 = data
  i2742.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2743[0], i2742.m_FirstAdjustmentRecord)
  i2742.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2743[1], i2742.m_SecondAdjustmentRecord)
  i2742.m_FeatureLookupFlags = i2743[2]
  return i2742
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2747 = data
  i2746.m_BaseGlyphID = i2747[0]
  i2746.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2747[1], i2746.m_BaseGlyphAnchorPoint)
  i2746.m_MarkGlyphID = i2747[2]
  i2746.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2747[3], i2746.m_MarkPositionAdjustment)
  return i2746
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2751 = data
  i2750.m_BaseMarkGlyphID = i2751[0]
  i2750.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2751[1], i2750.m_BaseMarkGlyphAnchorPoint)
  i2750.m_CombiningMarkGlyphID = i2751[2]
  i2750.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2751[3], i2750.m_CombiningMarkPositionAdjustment)
  return i2750
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'regularTypeface')
  request.r(i2757[2], i2757[3], 0, i2756, 'italicTypeface')
  return i2756
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2759 = data
  i2758.Name = i2759[0]
  i2758.PointSize = i2759[1]
  i2758.Scale = i2759[2]
  i2758.CharacterCount = i2759[3]
  i2758.LineHeight = i2759[4]
  i2758.Baseline = i2759[5]
  i2758.Ascender = i2759[6]
  i2758.CapHeight = i2759[7]
  i2758.Descender = i2759[8]
  i2758.CenterLine = i2759[9]
  i2758.SuperscriptOffset = i2759[10]
  i2758.SubscriptOffset = i2759[11]
  i2758.SubSize = i2759[12]
  i2758.Underline = i2759[13]
  i2758.UnderlineThickness = i2759[14]
  i2758.strikethrough = i2759[15]
  i2758.strikethroughThickness = i2759[16]
  i2758.TabWidth = i2759[17]
  i2758.Padding = i2759[18]
  i2758.AtlasWidth = i2759[19]
  i2758.AtlasHeight = i2759[20]
  return i2758
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2763 = data
  i2762.id = i2763[0]
  i2762.x = i2763[1]
  i2762.y = i2763[2]
  i2762.width = i2763[3]
  i2762.height = i2763[4]
  i2762.xOffset = i2763[5]
  i2762.yOffset = i2763[6]
  i2762.xAdvance = i2763[7]
  i2762.scale = i2763[8]
  return i2762
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.KerningTable' )
  var i2765 = data
  var i2767 = i2765[0]
  var i2766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.add(request.d('TMPro.KerningPair', i2767[i + 0]));
  }
  i2764.kerningPairs = i2766
  return i2764
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2770 = root || request.c( 'TMPro.KerningPair' )
  var i2771 = data
  i2770.xOffset = i2771[0]
  i2770.m_FirstGlyph = i2771[1]
  i2770.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2771[2], i2770.m_FirstGlyphAdjustments)
  i2770.m_SecondGlyph = i2771[3]
  i2770.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2771[4], i2770.m_SecondGlyphAdjustments)
  i2770.m_IgnoreSpacingAdjustments = !!i2771[5]
  return i2770
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2772 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2773 = data
  i2772.m_FaceIndex = i2773[0]
  i2772.m_FamilyName = i2773[1]
  i2772.m_StyleName = i2773[2]
  i2772.m_PointSize = i2773[3]
  i2772.m_Scale = i2773[4]
  i2772.m_UnitsPerEM = i2773[5]
  i2772.m_LineHeight = i2773[6]
  i2772.m_AscentLine = i2773[7]
  i2772.m_CapLine = i2773[8]
  i2772.m_MeanLine = i2773[9]
  i2772.m_Baseline = i2773[10]
  i2772.m_DescentLine = i2773[11]
  i2772.m_SuperscriptOffset = i2773[12]
  i2772.m_SuperscriptSize = i2773[13]
  i2772.m_SubscriptOffset = i2773[14]
  i2772.m_SubscriptSize = i2773[15]
  i2772.m_UnderlineOffset = i2773[16]
  i2772.m_UnderlineThickness = i2773[17]
  i2772.m_StrikethroughOffset = i2773[18]
  i2772.m_StrikethroughThickness = i2773[19]
  i2772.m_TabWidth = i2773[20]
  return i2772
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2774 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2775 = data
  i2774.useSafeMode = !!i2775[0]
  i2774.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2775[1], i2774.safeModeOptions)
  i2774.timeScale = i2775[2]
  i2774.unscaledTimeScale = i2775[3]
  i2774.useSmoothDeltaTime = !!i2775[4]
  i2774.maxSmoothUnscaledTime = i2775[5]
  i2774.rewindCallbackMode = i2775[6]
  i2774.showUnityEditorReport = !!i2775[7]
  i2774.logBehaviour = i2775[8]
  i2774.drawGizmos = !!i2775[9]
  i2774.defaultRecyclable = !!i2775[10]
  i2774.defaultAutoPlay = i2775[11]
  i2774.defaultUpdateType = i2775[12]
  i2774.defaultTimeScaleIndependent = !!i2775[13]
  i2774.defaultEaseType = i2775[14]
  i2774.defaultEaseOvershootOrAmplitude = i2775[15]
  i2774.defaultEasePeriod = i2775[16]
  i2774.defaultAutoKill = !!i2775[17]
  i2774.defaultLoopType = i2775[18]
  i2774.debugMode = !!i2775[19]
  i2774.debugStoreTargetId = !!i2775[20]
  i2774.showPreviewPanel = !!i2775[21]
  i2774.storeSettingsLocation = i2775[22]
  i2774.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2775[23], i2774.modules)
  i2774.createASMDEF = !!i2775[24]
  i2774.showPlayingTweens = !!i2775[25]
  i2774.showPausedTweens = !!i2775[26]
  return i2774
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2776 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2777 = data
  i2776.logBehaviour = i2777[0]
  i2776.nestedTweenFailureBehaviour = i2777[1]
  return i2776
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2778 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2779 = data
  i2778.showPanel = !!i2779[0]
  i2778.audioEnabled = !!i2779[1]
  i2778.physicsEnabled = !!i2779[2]
  i2778.physics2DEnabled = !!i2779[3]
  i2778.spriteEnabled = !!i2779[4]
  i2778.uiEnabled = !!i2779[5]
  i2778.textMeshProEnabled = !!i2779[6]
  i2778.tk2DEnabled = !!i2779[7]
  i2778.deAudioEnabled = !!i2779[8]
  i2778.deUnityExtendedEnabled = !!i2779[9]
  i2778.epoOutlineEnabled = !!i2779[10]
  return i2778
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2780 = root || request.c( 'TMPro.TMP_Settings' )
  var i2781 = data
  i2780.assetVersion = i2781[0]
  i2780.m_TextWrappingMode = i2781[1]
  i2780.m_enableKerning = !!i2781[2]
  var i2783 = i2781[3]
  var i2782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.add(i2783[i + 0]);
  }
  i2780.m_ActiveFontFeatures = i2782
  i2780.m_enableExtraPadding = !!i2781[4]
  i2780.m_enableTintAllSprites = !!i2781[5]
  i2780.m_enableParseEscapeCharacters = !!i2781[6]
  i2780.m_EnableRaycastTarget = !!i2781[7]
  i2780.m_GetFontFeaturesAtRuntime = !!i2781[8]
  i2780.m_missingGlyphCharacter = i2781[9]
  i2780.m_ClearDynamicDataOnBuild = !!i2781[10]
  i2780.m_warningsDisabled = !!i2781[11]
  request.r(i2781[12], i2781[13], 0, i2780, 'm_defaultFontAsset')
  i2780.m_defaultFontAssetPath = i2781[14]
  i2780.m_defaultFontSize = i2781[15]
  i2780.m_defaultAutoSizeMinRatio = i2781[16]
  i2780.m_defaultAutoSizeMaxRatio = i2781[17]
  i2780.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2781[18], i2781[19] )
  i2780.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2781[20], i2781[21] )
  i2780.m_autoSizeTextContainer = !!i2781[22]
  i2780.m_IsTextObjectScaleStatic = !!i2781[23]
  var i2785 = i2781[24]
  var i2784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2785.length; i += 2) {
  request.r(i2785[i + 0], i2785[i + 1], 1, i2784, '')
  }
  i2780.m_fallbackFontAssets = i2784
  i2780.m_matchMaterialPreset = !!i2781[25]
  i2780.m_HideSubTextObjects = !!i2781[26]
  request.r(i2781[27], i2781[28], 0, i2780, 'm_defaultSpriteAsset')
  i2780.m_defaultSpriteAssetPath = i2781[29]
  i2780.m_enableEmojiSupport = !!i2781[30]
  i2780.m_MissingCharacterSpriteUnicode = i2781[31]
  var i2787 = i2781[32]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 1, i2786, '')
  }
  i2780.m_EmojiFallbackTextAssets = i2786
  i2780.m_defaultColorGradientPresetsPath = i2781[33]
  request.r(i2781[34], i2781[35], 0, i2780, 'm_defaultStyleSheet')
  i2780.m_StyleSheetsResourcePath = i2781[36]
  request.r(i2781[37], i2781[38], 0, i2780, 'm_leadingCharacters')
  request.r(i2781[39], i2781[40], 0, i2780, 'm_followingCharacters')
  i2780.m_UseModernHangulLineBreakingRules = !!i2781[41]
  return i2780
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2790 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2791 = data
  request.r(i2791[0], i2791[1], 0, i2790, 'spriteSheet')
  var i2793 = i2791[2]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('TMPro.TMP_Sprite', i2793[i + 0]));
  }
  i2790.spriteInfoList = i2792
  var i2795 = i2791[3]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2795.length; i += 2) {
  request.r(i2795[i + 0], i2795[i + 1], 1, i2794, '')
  }
  i2790.fallbackSpriteAssets = i2794
  var i2797 = i2791[4]
  var i2796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.add(request.d('TMPro.TMP_SpriteCharacter', i2797[i + 0]));
  }
  i2790.m_SpriteCharacterTable = i2796
  var i2799 = i2791[5]
  var i2798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.add(request.d('TMPro.TMP_SpriteGlyph', i2799[i + 0]));
  }
  i2790.m_GlyphTable = i2798
  i2790.m_Version = i2791[6]
  i2790.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2791[7], i2790.m_FaceInfo)
  request.r(i2791[8], i2791[9], 0, i2790, 'm_Material')
  return i2790
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2802 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2803 = data
  i2802.name = i2803[0]
  i2802.hashCode = i2803[1]
  i2802.unicode = i2803[2]
  i2802.pivot = new pc.Vec2( i2803[3], i2803[4] )
  request.r(i2803[5], i2803[6], 0, i2802, 'sprite')
  i2802.id = i2803[7]
  i2802.x = i2803[8]
  i2802.y = i2803[9]
  i2802.width = i2803[10]
  i2802.height = i2803[11]
  i2802.xOffset = i2803[12]
  i2802.yOffset = i2803[13]
  i2802.xAdvance = i2803[14]
  i2802.scale = i2803[15]
  return i2802
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2808 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2809 = data
  i2808.m_Name = i2809[0]
  i2808.m_ElementType = i2809[1]
  i2808.m_Unicode = i2809[2]
  i2808.m_GlyphIndex = i2809[3]
  i2808.m_Scale = i2809[4]
  return i2808
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2812 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2813 = data
  request.r(i2813[0], i2813[1], 0, i2812, 'sprite')
  i2812.m_Index = i2813[2]
  i2812.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2813[3], i2812.m_Metrics)
  i2812.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2813[4], i2812.m_GlyphRect)
  i2812.m_Scale = i2813[5]
  i2812.m_AtlasIndex = i2813[6]
  i2812.m_ClassDefinitionType = i2813[7]
  return i2812
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2815 = data
  var i2817 = i2815[0]
  var i2816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.add(request.d('TMPro.TMP_Style', i2817[i + 0]));
  }
  i2814.m_StyleList = i2816
  return i2814
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2820 = root || request.c( 'TMPro.TMP_Style' )
  var i2821 = data
  i2820.m_Name = i2821[0]
  i2820.m_HashCode = i2821[1]
  i2820.m_OpeningDefinition = i2821[2]
  i2820.m_ClosingDefinition = i2821[3]
  i2820.m_OpeningTagArray = i2821[4]
  i2820.m_ClosingTagArray = i2821[5]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2823 = data
  var i2825 = i2823[0]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2825[i + 0]) );
  }
  i2822.files = i2824
  i2822.componentToPrefabIds = i2823[1]
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2829 = data
  i2828.path = i2829[0]
  request.r(i2829[1], i2829[2], 0, i2828, 'unityObject')
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2831 = data
  var i2833 = i2831[0]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2833[i + 0]) );
  }
  i2830.scriptsExecutionOrder = i2832
  var i2835 = i2831[1]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2835[i + 0]) );
  }
  i2830.sortingLayers = i2834
  var i2837 = i2831[2]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2837[i + 0]) );
  }
  i2830.cullingLayers = i2836
  i2830.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2831[3], i2830.timeSettings)
  i2830.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2831[4], i2830.physicsSettings)
  i2830.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2831[5], i2830.physics2DSettings)
  i2830.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2831[6], i2830.qualitySettings)
  i2830.enableRealtimeShadows = !!i2831[7]
  i2830.enableAutoInstancing = !!i2831[8]
  i2830.enableStaticBatching = !!i2831[9]
  i2830.enableDynamicBatching = !!i2831[10]
  i2830.usePreservativeDynamicBatching = !!i2831[11]
  i2830.lightmapEncodingQuality = i2831[12]
  i2830.desiredColorSpace = i2831[13]
  var i2839 = i2831[14]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( i2839[i + 0] );
  }
  i2830.allTags = i2838
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2843 = data
  i2842.name = i2843[0]
  i2842.value = i2843[1]
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2847 = data
  i2846.id = i2847[0]
  i2846.name = i2847[1]
  i2846.value = i2847[2]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2851 = data
  i2850.id = i2851[0]
  i2850.name = i2851[1]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2853 = data
  i2852.fixedDeltaTime = i2853[0]
  i2852.maximumDeltaTime = i2853[1]
  i2852.timeScale = i2853[2]
  i2852.maximumParticleTimestep = i2853[3]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2855 = data
  i2854.gravity = new pc.Vec3( i2855[0], i2855[1], i2855[2] )
  i2854.defaultSolverIterations = i2855[3]
  i2854.bounceThreshold = i2855[4]
  i2854.autoSyncTransforms = !!i2855[5]
  i2854.autoSimulation = !!i2855[6]
  var i2857 = i2855[7]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2857[i + 0]) );
  }
  i2854.collisionMatrix = i2856
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2861 = data
  i2860.enabled = !!i2861[0]
  i2860.layerId = i2861[1]
  i2860.otherLayerId = i2861[2]
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2863 = data
  request.r(i2863[0], i2863[1], 0, i2862, 'material')
  i2862.gravity = new pc.Vec2( i2863[2], i2863[3] )
  i2862.positionIterations = i2863[4]
  i2862.velocityIterations = i2863[5]
  i2862.velocityThreshold = i2863[6]
  i2862.maxLinearCorrection = i2863[7]
  i2862.maxAngularCorrection = i2863[8]
  i2862.maxTranslationSpeed = i2863[9]
  i2862.maxRotationSpeed = i2863[10]
  i2862.baumgarteScale = i2863[11]
  i2862.baumgarteTOIScale = i2863[12]
  i2862.timeToSleep = i2863[13]
  i2862.linearSleepTolerance = i2863[14]
  i2862.angularSleepTolerance = i2863[15]
  i2862.defaultContactOffset = i2863[16]
  i2862.autoSimulation = !!i2863[17]
  i2862.queriesHitTriggers = !!i2863[18]
  i2862.queriesStartInColliders = !!i2863[19]
  i2862.callbacksOnDisable = !!i2863[20]
  i2862.reuseCollisionCallbacks = !!i2863[21]
  i2862.autoSyncTransforms = !!i2863[22]
  var i2865 = i2863[23]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2865[i + 0]) );
  }
  i2862.collisionMatrix = i2864
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2869 = data
  i2868.enabled = !!i2869[0]
  i2868.layerId = i2869[1]
  i2868.otherLayerId = i2869[2]
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2871 = data
  var i2873 = i2871[0]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2873[i + 0]) );
  }
  i2870.qualityLevels = i2872
  var i2875 = i2871[1]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( i2875[i + 0] );
  }
  i2870.names = i2874
  i2870.shadows = i2871[2]
  i2870.anisotropicFiltering = i2871[3]
  i2870.antiAliasing = i2871[4]
  i2870.lodBias = i2871[5]
  i2870.shadowCascades = i2871[6]
  i2870.shadowDistance = i2871[7]
  i2870.shadowmaskMode = i2871[8]
  i2870.shadowProjection = i2871[9]
  i2870.shadowResolution = i2871[10]
  i2870.softParticles = !!i2871[11]
  i2870.softVegetation = !!i2871[12]
  i2870.activeColorSpace = i2871[13]
  i2870.desiredColorSpace = i2871[14]
  i2870.masterTextureLimit = i2871[15]
  i2870.maxQueuedFrames = i2871[16]
  i2870.particleRaycastBudget = i2871[17]
  i2870.pixelLightCount = i2871[18]
  i2870.realtimeReflectionProbes = !!i2871[19]
  i2870.shadowCascade2Split = i2871[20]
  i2870.shadowCascade4Split = new pc.Vec3( i2871[21], i2871[22], i2871[23] )
  i2870.streamingMipmapsActive = !!i2871[24]
  i2870.vSyncCount = i2871[25]
  i2870.asyncUploadBufferSize = i2871[26]
  i2870.asyncUploadTimeSlice = i2871[27]
  i2870.billboardsFaceCameraPosition = !!i2871[28]
  i2870.shadowNearPlaneOffset = i2871[29]
  i2870.streamingMipmapsMemoryBudget = i2871[30]
  i2870.maximumLODLevel = i2871[31]
  i2870.streamingMipmapsAddAllCameras = !!i2871[32]
  i2870.streamingMipmapsMaxLevelReduction = i2871[33]
  i2870.streamingMipmapsRenderersPerFrame = i2871[34]
  i2870.resolutionScalingFixedDPIFactor = i2871[35]
  i2870.streamingMipmapsMaxFileIORequests = i2871[36]
  i2870.currentQualityLevel = i2871[37]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2879 = data
  i2878.name = i2879[0]
  var i2881 = i2879[1]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2881[i + 0]) );
  }
  i2878.tos = i2880
  var i2883 = i2879[2]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( i2883[i + 0] );
  }
  i2878.constant = i2882
  i2878.isValid = !!i2879[3]
  i2878.isHuman = !!i2879[4]
  i2878.hasRootMotion = !!i2879[5]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2887 = data
  i2886.hash = i2887[0]
  i2886.path = i2887[1]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2891 = data
  i2890.weight = i2891[0]
  i2890.vertices = i2891[1]
  i2890.normals = i2891[2]
  i2890.tangents = i2891[3]
  return i2890
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2892 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2893 = data
  request.r(i2893[0], i2893[1], 0, i2892, 'm_ObjectArgument')
  i2892.m_ObjectArgumentAssemblyTypeName = i2893[2]
  i2892.m_IntArgument = i2893[3]
  i2892.m_FloatArgument = i2893[4]
  i2892.m_StringArgument = i2893[5]
  i2892.m_BoolArgument = !!i2893[6]
  return i2892
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2894 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2895 = data
  i2894.m_GlyphIndex = i2895[0]
  i2894.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2895[1], i2894.m_GlyphValueRecord)
  return i2894
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2896 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2897 = data
  i2896.m_XCoordinate = i2897[0]
  i2896.m_YCoordinate = i2897[1]
  return i2896
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2898 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2899 = data
  i2898.m_XPositionAdjustment = i2899[0]
  i2898.m_YPositionAdjustment = i2899[1]
  return i2898
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2900 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2901 = data
  i2900.xPlacement = i2901[0]
  i2900.yPlacement = i2901[1]
  i2900.xAdvance = i2901[2]
  i2900.yAdvance = i2901[3]
  return i2900
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2902 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2903 = data
  i2902.m_XPlacement = i2903[0]
  i2902.m_YPlacement = i2903[1]
  i2902.m_XAdvance = i2903[2]
  i2902.m_YAdvance = i2903[3]
  return i2902
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[44],"77":[48],"78":[33],"79":[33],"80":[33],"81":[33],"82":[33],"83":[33],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[48],"99":[24],"100":[101],"102":[101],"7":[6],"103":[6],"104":[12,6],"105":[24],"106":[12,6],"107":[6],"108":[6],"109":[24,6],"18":[6,12],"110":[111],"112":[111],"113":[111],"114":[6],"115":[6],"9":[7],"13":[12,6],"116":[6],"8":[7],"117":[6],"118":[6],"119":[6],"120":[6],"121":[6],"122":[6],"123":[6],"17":[6],"124":[6],"125":[12,6],"126":[6],"127":[6],"128":[6],"129":[6],"130":[12,6],"131":[6],"132":[3],"133":[3],"4":[3],"134":[3],"135":[48],"136":[48]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.BoxCollider","UnityEngine.MeshCollider","CharacterMotor","CharacterInput","UnityEngine.Transform","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.CapsuleCollider","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEngine.SpriteRenderer","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","Box","UnityEngine.ParticleSystem","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.ParticleSystemRenderer","Gift","SoundHint","JumpHint","RunEffect","GameController","AudioController","LunaController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "07/31/2026 02:14:44";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SBFM_V02_HoaiTT_TamNTM";

Deserializers.lunaAppID = "41535";

Deserializers.projectId = "1cbfda1e906e7db4a9fd3c53e24fceff";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1680";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4700";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SBFM_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "67f2d04f-b278-4b4a-a8b9-51f03df50fef";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

