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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2259 = data
  i2258.position = new pc.Vec3( i2259[0], i2259[1], i2259[2] )
  i2258.scale = new pc.Vec3( i2259[3], i2259[4], i2259[5] )
  i2258.rotation = new pc.Quat(i2259[6], i2259[7], i2259[8], i2259[9])
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'sharedMesh')
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'additionalVertexStreams')
  i2262.enabled = !!i2263[2]
  request.r(i2263[3], i2263[4], 0, i2262, 'sharedMaterial')
  var i2265 = i2263[5]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 2) {
  request.r(i2265[i + 0], i2265[i + 1], 2, i2264, '')
  }
  i2262.sharedMaterials = i2264
  i2262.receiveShadows = !!i2263[6]
  i2262.shadowCastingMode = i2263[7]
  i2262.sortingLayerID = i2263[8]
  i2262.sortingOrder = i2263[9]
  i2262.lightmapIndex = i2263[10]
  i2262.lightmapSceneIndex = i2263[11]
  i2262.lightmapScaleOffset = new pc.Vec4( i2263[12], i2263[13], i2263[14], i2263[15] )
  i2262.lightProbeUsage = i2263[16]
  i2262.reflectionProbeUsage = i2263[17]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'sharedMesh')
  i2268.convex = !!i2269[2]
  i2268.enabled = !!i2269[3]
  i2268.isTrigger = !!i2269[4]
  request.r(i2269[5], i2269[6], 0, i2268, 'material')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2273 = data
  i2272.center = new pc.Vec3( i2273[0], i2273[1], i2273[2] )
  i2272.radius = i2273[3]
  i2272.height = i2273[4]
  i2272.direction = i2273[5]
  i2272.enabled = !!i2273[6]
  i2272.isTrigger = !!i2273[7]
  request.r(i2273[8], i2273[9], 0, i2272, 'material')
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2275 = data
  i2274.center = new pc.Vec3( i2275[0], i2275[1], i2275[2] )
  i2274.size = new pc.Vec3( i2275[3], i2275[4], i2275[5] )
  i2274.enabled = !!i2275[6]
  i2274.isTrigger = !!i2275[7]
  request.r(i2275[8], i2275[9], 0, i2274, 'material')
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'animatorController')
  request.r(i2277[2], i2277[3], 0, i2276, 'avatar')
  i2276.updateMode = i2277[4]
  i2276.hasTransformHierarchy = !!i2277[5]
  i2276.applyRootMotion = !!i2277[6]
  var i2279 = i2277[7]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 2) {
  request.r(i2279[i + 0], i2279[i + 1], 2, i2278, '')
  }
  i2276.humanBones = i2278
  i2276.enabled = !!i2277[8]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2283 = data
  i2282.name = i2283[0]
  i2282.atlasId = i2283[1]
  i2282.mipmapCount = i2283[2]
  i2282.hdr = !!i2283[3]
  i2282.size = i2283[4]
  i2282.anisoLevel = i2283[5]
  i2282.filterMode = i2283[6]
  var i2285 = i2283[7]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 4) {
    i2284.push( UnityEngine.Rect.MinMaxRect(i2285[i + 0], i2285[i + 1], i2285[i + 2], i2285[i + 3]) );
  }
  i2282.rects = i2284
  i2282.wrapU = i2283[8]
  i2282.wrapV = i2283[9]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2289 = data
  i2288.name = i2289[0]
  i2288.index = i2289[1]
  i2288.startup = !!i2289[2]
  return i2288
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'm_FirstSelected')
  i2290.m_sendNavigationEvents = !!i2291[2]
  i2290.m_DragThreshold = i2291[3]
  return i2290
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2293 = data
  i2292.m_HorizontalAxis = i2293[0]
  i2292.m_VerticalAxis = i2293[1]
  i2292.m_SubmitButton = i2293[2]
  i2292.m_CancelButton = i2293[3]
  i2292.m_InputActionsPerSecond = i2293[4]
  i2292.m_RepeatDelay = i2293[5]
  i2292.m_ForceModuleActive = !!i2293[6]
  i2292.m_SendPointerHoverToParent = !!i2293[7]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2295 = data
  i2294.type = i2295[0]
  i2294.color = new pc.Color(i2295[1], i2295[2], i2295[3], i2295[4])
  i2294.cullingMask = i2295[5]
  i2294.intensity = i2295[6]
  i2294.range = i2295[7]
  i2294.spotAngle = i2295[8]
  i2294.shadows = i2295[9]
  i2294.shadowNormalBias = i2295[10]
  i2294.shadowBias = i2295[11]
  i2294.shadowStrength = i2295[12]
  i2294.shadowResolution = i2295[13]
  i2294.lightmapBakeType = i2295[14]
  i2294.renderMode = i2295[15]
  request.r(i2295[16], i2295[17], 0, i2294, 'cookie')
  i2294.cookieSize = i2295[18]
  i2294.shadowNearPlane = i2295[19]
  i2294.occlusionMaskChannel = i2295[20]
  i2294.isBaked = !!i2295[21]
  i2294.mixedLightingMode = i2295[22]
  i2294.enabled = !!i2295[23]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2297 = data
  i2296.pivot = new pc.Vec2( i2297[0], i2297[1] )
  i2296.anchorMin = new pc.Vec2( i2297[2], i2297[3] )
  i2296.anchorMax = new pc.Vec2( i2297[4], i2297[5] )
  i2296.sizeDelta = new pc.Vec2( i2297[6], i2297[7] )
  i2296.anchoredPosition3D = new pc.Vec3( i2297[8], i2297[9], i2297[10] )
  i2296.rotation = new pc.Quat(i2297[11], i2297[12], i2297[13], i2297[14])
  i2296.scale = new pc.Vec3( i2297[15], i2297[16], i2297[17] )
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2299 = data
  i2298.planeDistance = i2299[0]
  i2298.referencePixelsPerUnit = i2299[1]
  i2298.isFallbackOverlay = !!i2299[2]
  i2298.renderMode = i2299[3]
  i2298.renderOrder = i2299[4]
  i2298.sortingLayerName = i2299[5]
  i2298.sortingOrder = i2299[6]
  i2298.scaleFactor = i2299[7]
  request.r(i2299[8], i2299[9], 0, i2298, 'worldCamera')
  i2298.overrideSorting = !!i2299[10]
  i2298.pixelPerfect = !!i2299[11]
  i2298.targetDisplay = i2299[12]
  i2298.overridePixelPerfect = !!i2299[13]
  i2298.enabled = !!i2299[14]
  return i2298
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2301 = data
  i2300.m_UiScaleMode = i2301[0]
  i2300.m_ReferencePixelsPerUnit = i2301[1]
  i2300.m_ScaleFactor = i2301[2]
  i2300.m_ReferenceResolution = new pc.Vec2( i2301[3], i2301[4] )
  i2300.m_ScreenMatchMode = i2301[5]
  i2300.m_MatchWidthOrHeight = i2301[6]
  i2300.m_PhysicalUnit = i2301[7]
  i2300.m_FallbackScreenDPI = i2301[8]
  i2300.m_DefaultSpriteDPI = i2301[9]
  i2300.m_DynamicPixelsPerUnit = i2301[10]
  i2300.m_PresetInfoIsWorld = !!i2301[11]
  return i2300
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2303 = data
  i2302.m_IgnoreReversedGraphics = !!i2303[0]
  i2302.m_BlockingObjects = i2303[1]
  i2302.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2303[2] )
  return i2302
}

Deserializers["Joystick"] = function (request, data, root) {
  var i2304 = root || request.c( 'Joystick' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'background')
  request.r(i2305[2], i2305[3], 0, i2304, 'joy')
  i2304.deadZone = i2305[4]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2307 = data
  i2306.cullTransparentMesh = !!i2307[0]
  return i2306
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.UI.Image' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'm_Sprite')
  i2308.m_Type = i2309[2]
  i2308.m_PreserveAspect = !!i2309[3]
  i2308.m_FillCenter = !!i2309[4]
  i2308.m_FillMethod = i2309[5]
  i2308.m_FillAmount = i2309[6]
  i2308.m_FillClockwise = !!i2309[7]
  i2308.m_FillOrigin = i2309[8]
  i2308.m_UseSpriteMesh = !!i2309[9]
  i2308.m_PixelsPerUnitMultiplier = i2309[10]
  request.r(i2309[11], i2309[12], 0, i2308, 'm_Material')
  i2308.m_Maskable = !!i2309[13]
  i2308.m_Color = new pc.Color(i2309[14], i2309[15], i2309[16], i2309[17])
  i2308.m_RaycastTarget = !!i2309[18]
  i2308.m_RaycastPadding = new pc.Vec4( i2309[19], i2309[20], i2309[21], i2309[22] )
  return i2308
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i2310 = root || request.c( 'JumpButton' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'button')
  return i2310
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.UI.Button' )
  var i2313 = data
  i2312.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2313[0], i2312.m_OnClick)
  i2312.m_Navigation = request.d('UnityEngine.UI.Navigation', i2313[1], i2312.m_Navigation)
  i2312.m_Transition = i2313[2]
  i2312.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2313[3], i2312.m_Colors)
  i2312.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2313[4], i2312.m_SpriteState)
  i2312.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2313[5], i2312.m_AnimationTriggers)
  i2312.m_Interactable = !!i2313[6]
  request.r(i2313[7], i2313[8], 0, i2312, 'm_TargetGraphic')
  return i2312
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2315 = data
  i2314.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2315[0], i2314.m_PersistentCalls)
  return i2314
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2317 = data
  var i2319 = i2317[0]
  var i2318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.add(request.d('UnityEngine.Events.PersistentCall', i2319[i + 0]));
  }
  i2316.m_Calls = i2318
  return i2316
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'm_Target')
  i2322.m_TargetAssemblyTypeName = i2323[2]
  i2322.m_MethodName = i2323[3]
  i2322.m_Mode = i2323[4]
  i2322.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2323[5], i2322.m_Arguments)
  i2322.m_CallState = i2323[6]
  return i2322
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2325 = data
  i2324.m_Mode = i2325[0]
  i2324.m_WrapAround = !!i2325[1]
  request.r(i2325[2], i2325[3], 0, i2324, 'm_SelectOnUp')
  request.r(i2325[4], i2325[5], 0, i2324, 'm_SelectOnDown')
  request.r(i2325[6], i2325[7], 0, i2324, 'm_SelectOnLeft')
  request.r(i2325[8], i2325[9], 0, i2324, 'm_SelectOnRight')
  return i2324
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2327 = data
  i2326.m_NormalColor = new pc.Color(i2327[0], i2327[1], i2327[2], i2327[3])
  i2326.m_HighlightedColor = new pc.Color(i2327[4], i2327[5], i2327[6], i2327[7])
  i2326.m_PressedColor = new pc.Color(i2327[8], i2327[9], i2327[10], i2327[11])
  i2326.m_SelectedColor = new pc.Color(i2327[12], i2327[13], i2327[14], i2327[15])
  i2326.m_DisabledColor = new pc.Color(i2327[16], i2327[17], i2327[18], i2327[19])
  i2326.m_ColorMultiplier = i2327[20]
  i2326.m_FadeDuration = i2327[21]
  return i2326
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'm_HighlightedSprite')
  request.r(i2329[2], i2329[3], 0, i2328, 'm_PressedSprite')
  request.r(i2329[4], i2329[5], 0, i2328, 'm_SelectedSprite')
  request.r(i2329[6], i2329[7], 0, i2328, 'm_DisabledSprite')
  return i2328
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2331 = data
  i2330.m_NormalTrigger = i2331[0]
  i2330.m_HighlightedTrigger = i2331[1]
  i2330.m_PressedTrigger = i2331[2]
  i2330.m_SelectedTrigger = i2331[3]
  i2330.m_DisabledTrigger = i2331[4]
  return i2330
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2333 = data
  i2332.m_ShowMaskGraphic = !!i2333[0]
  return i2332
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2334 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2335 = data
  i2334.m_hasFontAssetChanged = !!i2335[0]
  request.r(i2335[1], i2335[2], 0, i2334, 'm_baseMaterial')
  i2334.m_maskOffset = new pc.Vec4( i2335[3], i2335[4], i2335[5], i2335[6] )
  i2334.m_text = i2335[7]
  i2334.m_isRightToLeft = !!i2335[8]
  request.r(i2335[9], i2335[10], 0, i2334, 'm_fontAsset')
  request.r(i2335[11], i2335[12], 0, i2334, 'm_sharedMaterial')
  var i2337 = i2335[13]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 2) {
  request.r(i2337[i + 0], i2337[i + 1], 2, i2336, '')
  }
  i2334.m_fontSharedMaterials = i2336
  request.r(i2335[14], i2335[15], 0, i2334, 'm_fontMaterial')
  var i2339 = i2335[16]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 2) {
  request.r(i2339[i + 0], i2339[i + 1], 2, i2338, '')
  }
  i2334.m_fontMaterials = i2338
  i2334.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2335[17], i2335[18], i2335[19], i2335[20])
  i2334.m_fontColor = new pc.Color(i2335[21], i2335[22], i2335[23], i2335[24])
  i2334.m_enableVertexGradient = !!i2335[25]
  i2334.m_colorMode = i2335[26]
  i2334.m_fontColorGradient = request.d('TMPro.VertexGradient', i2335[27], i2334.m_fontColorGradient)
  request.r(i2335[28], i2335[29], 0, i2334, 'm_fontColorGradientPreset')
  request.r(i2335[30], i2335[31], 0, i2334, 'm_spriteAsset')
  i2334.m_tintAllSprites = !!i2335[32]
  request.r(i2335[33], i2335[34], 0, i2334, 'm_StyleSheet')
  i2334.m_TextStyleHashCode = i2335[35]
  i2334.m_overrideHtmlColors = !!i2335[36]
  i2334.m_faceColor = UnityEngine.Color32.ConstructColor(i2335[37], i2335[38], i2335[39], i2335[40])
  i2334.m_fontSize = i2335[41]
  i2334.m_fontSizeBase = i2335[42]
  i2334.m_fontWeight = i2335[43]
  i2334.m_enableAutoSizing = !!i2335[44]
  i2334.m_fontSizeMin = i2335[45]
  i2334.m_fontSizeMax = i2335[46]
  i2334.m_fontStyle = i2335[47]
  i2334.m_HorizontalAlignment = i2335[48]
  i2334.m_VerticalAlignment = i2335[49]
  i2334.m_textAlignment = i2335[50]
  i2334.m_characterSpacing = i2335[51]
  i2334.m_characterHorizontalScale = i2335[52]
  i2334.m_wordSpacing = i2335[53]
  i2334.m_lineSpacing = i2335[54]
  i2334.m_lineSpacingMax = i2335[55]
  i2334.m_paragraphSpacing = i2335[56]
  i2334.m_charWidthMaxAdj = i2335[57]
  i2334.m_TextWrappingMode = i2335[58]
  i2334.m_wordWrappingRatios = i2335[59]
  i2334.m_overflowMode = i2335[60]
  request.r(i2335[61], i2335[62], 0, i2334, 'm_linkedTextComponent')
  request.r(i2335[63], i2335[64], 0, i2334, 'parentLinkedComponent')
  i2334.m_enableKerning = !!i2335[65]
  var i2341 = i2335[66]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.add(i2341[i + 0]);
  }
  i2334.m_ActiveFontFeatures = i2340
  i2334.m_enableExtraPadding = !!i2335[67]
  i2334.checkPaddingRequired = !!i2335[68]
  i2334.m_isRichText = !!i2335[69]
  i2334.m_parseCtrlCharacters = !!i2335[70]
  i2334.m_isOrthographic = !!i2335[71]
  i2334.m_isCullingEnabled = !!i2335[72]
  i2334.m_horizontalMapping = i2335[73]
  i2334.m_verticalMapping = i2335[74]
  i2334.m_uvLineOffset = i2335[75]
  i2334.m_geometrySortingOrder = i2335[76]
  i2334.m_IsTextObjectScaleStatic = !!i2335[77]
  i2334.m_VertexBufferAutoSizeReduction = !!i2335[78]
  i2334.m_useMaxVisibleDescender = !!i2335[79]
  i2334.m_pageToDisplay = i2335[80]
  i2334.m_margin = new pc.Vec4( i2335[81], i2335[82], i2335[83], i2335[84] )
  i2334.m_isUsingLegacyAnimationComponent = !!i2335[85]
  i2334.m_isVolumetricText = !!i2335[86]
  request.r(i2335[87], i2335[88], 0, i2334, 'm_Material')
  i2334.m_EmojiFallbackSupport = !!i2335[89]
  i2334.m_Maskable = !!i2335[90]
  i2334.m_Color = new pc.Color(i2335[91], i2335[92], i2335[93], i2335[94])
  i2334.m_RaycastTarget = !!i2335[95]
  i2334.m_RaycastPadding = new pc.Vec4( i2335[96], i2335[97], i2335[98], i2335[99] )
  return i2334
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2342 = root || request.c( 'TMPro.VertexGradient' )
  var i2343 = data
  i2342.topLeft = new pc.Color(i2343[0], i2343[1], i2343[2], i2343[3])
  i2342.topRight = new pc.Color(i2343[4], i2343[5], i2343[6], i2343[7])
  i2342.bottomLeft = new pc.Color(i2343[8], i2343[9], i2343[10], i2343[11])
  i2342.bottomRight = new pc.Color(i2343[12], i2343[13], i2343[14], i2343[15])
  return i2342
}

Deserializers["TutController"] = function (request, data, root) {
  var i2346 = root || request.c( 'TutController' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'tutScene')
  request.r(i2347[2], i2347[3], 0, i2346, 'startTut')
  request.r(i2347[4], i2347[5], 0, i2346, 'playTut')
  request.r(i2347[6], i2347[7], 0, i2346, 'farTut')
  request.r(i2347[8], i2347[9], 0, i2346, 'failTut')
  return i2346
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2348 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2349 = data
  i2348.targetIsSelf = !!i2349[0]
  request.r(i2349[1], i2349[2], 0, i2348, 'targetGO')
  i2348.tweenTargetIsTargetGO = !!i2349[3]
  i2348.delay = i2349[4]
  i2348.duration = i2349[5]
  i2348.easeType = i2349[6]
  i2348.easeCurve = new pc.AnimationCurve( { keys_flow: i2349[7] } )
  i2348.loopType = i2349[8]
  i2348.loops = i2349[9]
  i2348.id = i2349[10]
  i2348.isRelative = !!i2349[11]
  i2348.isFrom = !!i2349[12]
  i2348.isIndependentUpdate = !!i2349[13]
  i2348.autoKill = !!i2349[14]
  i2348.autoGenerate = !!i2349[15]
  i2348.isActive = !!i2349[16]
  i2348.isValid = !!i2349[17]
  request.r(i2349[18], i2349[19], 0, i2348, 'target')
  i2348.animationType = i2349[20]
  i2348.targetType = i2349[21]
  i2348.forcedTargetType = i2349[22]
  i2348.autoPlay = !!i2349[23]
  i2348.useTargetAsV3 = !!i2349[24]
  i2348.endValueFloat = i2349[25]
  i2348.endValueV3 = new pc.Vec3( i2349[26], i2349[27], i2349[28] )
  i2348.endValueV2 = new pc.Vec2( i2349[29], i2349[30] )
  i2348.endValueColor = new pc.Color(i2349[31], i2349[32], i2349[33], i2349[34])
  i2348.endValueString = i2349[35]
  i2348.endValueRect = UnityEngine.Rect.MinMaxRect(i2349[36], i2349[37], i2349[38], i2349[39])
  request.r(i2349[40], i2349[41], 0, i2348, 'endValueTransform')
  i2348.optionalBool0 = !!i2349[42]
  i2348.optionalBool1 = !!i2349[43]
  i2348.optionalFloat0 = i2349[44]
  i2348.optionalInt0 = i2349[45]
  i2348.optionalRotationMode = i2349[46]
  i2348.optionalScrambleMode = i2349[47]
  i2348.optionalShakeRandomnessMode = i2349[48]
  i2348.optionalString = i2349[49]
  i2348.updateType = i2349[50]
  i2348.isSpeedBased = !!i2349[51]
  i2348.hasOnStart = !!i2349[52]
  i2348.hasOnPlay = !!i2349[53]
  i2348.hasOnUpdate = !!i2349[54]
  i2348.hasOnStepComplete = !!i2349[55]
  i2348.hasOnComplete = !!i2349[56]
  i2348.hasOnTweenCreated = !!i2349[57]
  i2348.hasOnRewind = !!i2349[58]
  i2348.onStart = request.d('UnityEngine.Events.UnityEvent', i2349[59], i2348.onStart)
  i2348.onPlay = request.d('UnityEngine.Events.UnityEvent', i2349[60], i2348.onPlay)
  i2348.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2349[61], i2348.onUpdate)
  i2348.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2349[62], i2348.onStepComplete)
  i2348.onComplete = request.d('UnityEngine.Events.UnityEvent', i2349[63], i2348.onComplete)
  i2348.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2349[64], i2348.onTweenCreated)
  i2348.onRewind = request.d('UnityEngine.Events.UnityEvent', i2349[65], i2348.onRewind)
  return i2348
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2351 = data
  i2350.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2351[0], i2350.m_PersistentCalls)
  return i2350
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i2352 = root || request.c( 'HideOnPointer' )
  var i2353 = data
  i2352.OnPointerDownEvent = request.d('System.Action', i2353[0], i2352.OnPointerDownEvent)
  return i2352
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2354 = root || request.c( 'System.Action' )
  var i2355 = data
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2357 = data
  i2356.center = new pc.Vec3( i2357[0], i2357[1], i2357[2] )
  i2356.radius = i2357[3]
  i2356.enabled = !!i2357[4]
  i2356.isTrigger = !!i2357[5]
  request.r(i2357[6], i2357[7], 0, i2356, 'material')
  return i2356
}

Deserializers["Box"] = function (request, data, root) {
  var i2358 = root || request.c( 'Box' )
  var i2359 = data
  i2358.lifeTime = i2359[0]
  request.r(i2359[1], i2359[2], 0, i2358, 'effect')
  request.r(i2359[3], i2359[4], 0, i2358, 'avatar')
  request.r(i2359[5], i2359[6], 0, i2358, 'interactSound')
  request.r(i2359[7], i2359[8], 0, i2358, 'openSound')
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2361 = data
  i2360.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2361[0], i2360.main)
  i2360.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2361[1], i2360.colorBySpeed)
  i2360.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2361[2], i2360.colorOverLifetime)
  i2360.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2361[3], i2360.emission)
  i2360.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2361[4], i2360.rotationBySpeed)
  i2360.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2361[5], i2360.rotationOverLifetime)
  i2360.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2361[6], i2360.shape)
  i2360.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2361[7], i2360.sizeBySpeed)
  i2360.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2361[8], i2360.sizeOverLifetime)
  i2360.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2361[9], i2360.textureSheetAnimation)
  i2360.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2361[10], i2360.velocityOverLifetime)
  i2360.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2361[11], i2360.noise)
  i2360.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2361[12], i2360.inheritVelocity)
  i2360.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2361[13], i2360.forceOverLifetime)
  i2360.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2361[14], i2360.limitVelocityOverLifetime)
  i2360.useAutoRandomSeed = !!i2361[15]
  i2360.randomSeed = i2361[16]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2362 = root || new pc.ParticleSystemMain()
  var i2363 = data
  i2362.duration = i2363[0]
  i2362.loop = !!i2363[1]
  i2362.prewarm = !!i2363[2]
  i2362.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[3], i2362.startDelay)
  i2362.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[4], i2362.startLifetime)
  i2362.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[5], i2362.startSpeed)
  i2362.startSize3D = !!i2363[6]
  i2362.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[7], i2362.startSizeX)
  i2362.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[8], i2362.startSizeY)
  i2362.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[9], i2362.startSizeZ)
  i2362.startRotation3D = !!i2363[10]
  i2362.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[11], i2362.startRotationX)
  i2362.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[12], i2362.startRotationY)
  i2362.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[13], i2362.startRotationZ)
  i2362.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2363[14], i2362.startColor)
  i2362.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2363[15], i2362.gravityModifier)
  i2362.simulationSpace = i2363[16]
  request.r(i2363[17], i2363[18], 0, i2362, 'customSimulationSpace')
  i2362.simulationSpeed = i2363[19]
  i2362.useUnscaledTime = !!i2363[20]
  i2362.scalingMode = i2363[21]
  i2362.playOnAwake = !!i2363[22]
  i2362.maxParticles = i2363[23]
  i2362.emitterVelocityMode = i2363[24]
  i2362.stopAction = i2363[25]
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2364 = root || new pc.MinMaxCurve()
  var i2365 = data
  i2364.mode = i2365[0]
  i2364.curveMin = new pc.AnimationCurve( { keys_flow: i2365[1] } )
  i2364.curveMax = new pc.AnimationCurve( { keys_flow: i2365[2] } )
  i2364.curveMultiplier = i2365[3]
  i2364.constantMin = i2365[4]
  i2364.constantMax = i2365[5]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2366 = root || new pc.MinMaxGradient()
  var i2367 = data
  i2366.mode = i2367[0]
  i2366.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2367[1], i2366.gradientMin)
  i2366.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2367[2], i2366.gradientMax)
  i2366.colorMin = new pc.Color(i2367[3], i2367[4], i2367[5], i2367[6])
  i2366.colorMax = new pc.Color(i2367[7], i2367[8], i2367[9], i2367[10])
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2369 = data
  i2368.mode = i2369[0]
  var i2371 = i2369[1]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2371[i + 0]) );
  }
  i2368.colorKeys = i2370
  var i2373 = i2369[2]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2373[i + 0]) );
  }
  i2368.alphaKeys = i2372
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2374 = root || new pc.ParticleSystemColorBySpeed()
  var i2375 = data
  i2374.enabled = !!i2375[0]
  i2374.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2375[1], i2374.color)
  i2374.range = new pc.Vec2( i2375[2], i2375[3] )
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2379 = data
  i2378.color = new pc.Color(i2379[0], i2379[1], i2379[2], i2379[3])
  i2378.time = i2379[4]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2383 = data
  i2382.alpha = i2383[0]
  i2382.time = i2383[1]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2384 = root || new pc.ParticleSystemColorOverLifetime()
  var i2385 = data
  i2384.enabled = !!i2385[0]
  i2384.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2385[1], i2384.color)
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2386 = root || new pc.ParticleSystemEmitter()
  var i2387 = data
  i2386.enabled = !!i2387[0]
  i2386.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[1], i2386.rateOverTime)
  i2386.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[2], i2386.rateOverDistance)
  var i2389 = i2387[3]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2389[i + 0]) );
  }
  i2386.bursts = i2388
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2392 = root || new pc.ParticleSystemBurst()
  var i2393 = data
  i2392.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[0], i2392.count)
  i2392.cycleCount = i2393[1]
  i2392.minCount = i2393[2]
  i2392.maxCount = i2393[3]
  i2392.repeatInterval = i2393[4]
  i2392.time = i2393[5]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2394 = root || new pc.ParticleSystemRotationBySpeed()
  var i2395 = data
  i2394.enabled = !!i2395[0]
  i2394.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[1], i2394.x)
  i2394.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[2], i2394.y)
  i2394.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[3], i2394.z)
  i2394.separateAxes = !!i2395[4]
  i2394.range = new pc.Vec2( i2395[5], i2395[6] )
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[1], i2396.x)
  i2396.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[2], i2396.y)
  i2396.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[3], i2396.z)
  i2396.separateAxes = !!i2397[4]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2398 = root || new pc.ParticleSystemShape()
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.shapeType = i2399[1]
  i2398.randomDirectionAmount = i2399[2]
  i2398.sphericalDirectionAmount = i2399[3]
  i2398.randomPositionAmount = i2399[4]
  i2398.alignToDirection = !!i2399[5]
  i2398.radius = i2399[6]
  i2398.radiusMode = i2399[7]
  i2398.radiusSpread = i2399[8]
  i2398.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[9], i2398.radiusSpeed)
  i2398.radiusThickness = i2399[10]
  i2398.angle = i2399[11]
  i2398.length = i2399[12]
  i2398.boxThickness = new pc.Vec3( i2399[13], i2399[14], i2399[15] )
  i2398.meshShapeType = i2399[16]
  request.r(i2399[17], i2399[18], 0, i2398, 'mesh')
  request.r(i2399[19], i2399[20], 0, i2398, 'meshRenderer')
  request.r(i2399[21], i2399[22], 0, i2398, 'skinnedMeshRenderer')
  i2398.useMeshMaterialIndex = !!i2399[23]
  i2398.meshMaterialIndex = i2399[24]
  i2398.useMeshColors = !!i2399[25]
  i2398.normalOffset = i2399[26]
  i2398.arc = i2399[27]
  i2398.arcMode = i2399[28]
  i2398.arcSpread = i2399[29]
  i2398.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[30], i2398.arcSpeed)
  i2398.donutRadius = i2399[31]
  i2398.position = new pc.Vec3( i2399[32], i2399[33], i2399[34] )
  i2398.rotation = new pc.Vec3( i2399[35], i2399[36], i2399[37] )
  i2398.scale = new pc.Vec3( i2399[38], i2399[39], i2399[40] )
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2400 = root || new pc.ParticleSystemSizeBySpeed()
  var i2401 = data
  i2400.enabled = !!i2401[0]
  i2400.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[1], i2400.x)
  i2400.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[2], i2400.y)
  i2400.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[3], i2400.z)
  i2400.separateAxes = !!i2401[4]
  i2400.range = new pc.Vec2( i2401[5], i2401[6] )
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2402 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2403 = data
  i2402.enabled = !!i2403[0]
  i2402.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[1], i2402.x)
  i2402.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[2], i2402.y)
  i2402.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[3], i2402.z)
  i2402.separateAxes = !!i2403[4]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2404 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2405 = data
  i2404.enabled = !!i2405[0]
  i2404.mode = i2405[1]
  i2404.animation = i2405[2]
  i2404.numTilesX = i2405[3]
  i2404.numTilesY = i2405[4]
  i2404.useRandomRow = !!i2405[5]
  i2404.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[6], i2404.frameOverTime)
  i2404.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[7], i2404.startFrame)
  i2404.cycleCount = i2405[8]
  i2404.rowIndex = i2405[9]
  i2404.flipU = i2405[10]
  i2404.flipV = i2405[11]
  i2404.spriteCount = i2405[12]
  var i2407 = i2405[13]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 2) {
  request.r(i2407[i + 0], i2407[i + 1], 2, i2406, '')
  }
  i2404.sprites = i2406
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2410 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[1], i2410.x)
  i2410.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[2], i2410.y)
  i2410.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[3], i2410.z)
  i2410.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[4], i2410.radial)
  i2410.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[5], i2410.speedModifier)
  i2410.space = i2411[6]
  i2410.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[7], i2410.orbitalX)
  i2410.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[8], i2410.orbitalY)
  i2410.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[9], i2410.orbitalZ)
  i2410.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[10], i2410.orbitalOffsetX)
  i2410.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[11], i2410.orbitalOffsetY)
  i2410.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[12], i2410.orbitalOffsetZ)
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2412 = root || new pc.ParticleSystemNoise()
  var i2413 = data
  i2412.enabled = !!i2413[0]
  i2412.separateAxes = !!i2413[1]
  i2412.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[2], i2412.strengthX)
  i2412.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[3], i2412.strengthY)
  i2412.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[4], i2412.strengthZ)
  i2412.frequency = i2413[5]
  i2412.damping = !!i2413[6]
  i2412.octaveCount = i2413[7]
  i2412.octaveMultiplier = i2413[8]
  i2412.octaveScale = i2413[9]
  i2412.quality = i2413[10]
  i2412.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[11], i2412.scrollSpeed)
  i2412.scrollSpeedMultiplier = i2413[12]
  i2412.remapEnabled = !!i2413[13]
  i2412.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[14], i2412.remapX)
  i2412.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[15], i2412.remapY)
  i2412.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[16], i2412.remapZ)
  i2412.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[17], i2412.positionAmount)
  i2412.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[18], i2412.rotationAmount)
  i2412.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[19], i2412.sizeAmount)
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2414 = root || new pc.ParticleSystemInheritVelocity()
  var i2415 = data
  i2414.enabled = !!i2415[0]
  i2414.mode = i2415[1]
  i2414.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2415[2], i2414.curve)
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2416 = root || new pc.ParticleSystemForceOverLifetime()
  var i2417 = data
  i2416.enabled = !!i2417[0]
  i2416.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2417[1], i2416.x)
  i2416.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2417[2], i2416.y)
  i2416.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2417[3], i2416.z)
  i2416.space = i2417[4]
  i2416.randomized = !!i2417[5]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2418 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2419 = data
  i2418.enabled = !!i2419[0]
  i2418.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[1], i2418.limit)
  i2418.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[2], i2418.limitX)
  i2418.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[3], i2418.limitY)
  i2418.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[4], i2418.limitZ)
  i2418.dampen = i2419[5]
  i2418.separateAxes = !!i2419[6]
  i2418.space = i2419[7]
  i2418.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[8], i2418.drag)
  i2418.multiplyDragByParticleSize = !!i2419[9]
  i2418.multiplyDragByParticleVelocity = !!i2419[10]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'mesh')
  i2420.meshCount = i2421[2]
  i2420.activeVertexStreamsCount = i2421[3]
  i2420.alignment = i2421[4]
  i2420.renderMode = i2421[5]
  i2420.sortMode = i2421[6]
  i2420.lengthScale = i2421[7]
  i2420.velocityScale = i2421[8]
  i2420.cameraVelocityScale = i2421[9]
  i2420.normalDirection = i2421[10]
  i2420.sortingFudge = i2421[11]
  i2420.minParticleSize = i2421[12]
  i2420.maxParticleSize = i2421[13]
  i2420.pivot = new pc.Vec3( i2421[14], i2421[15], i2421[16] )
  request.r(i2421[17], i2421[18], 0, i2420, 'trailMaterial')
  i2420.applyActiveColorSpace = !!i2421[19]
  i2420.enabled = !!i2421[20]
  request.r(i2421[21], i2421[22], 0, i2420, 'sharedMaterial')
  var i2423 = i2421[23]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 2) {
  request.r(i2423[i + 0], i2423[i + 1], 2, i2422, '')
  }
  i2420.sharedMaterials = i2422
  i2420.receiveShadows = !!i2421[24]
  i2420.shadowCastingMode = i2421[25]
  i2420.sortingLayerID = i2421[26]
  i2420.sortingOrder = i2421[27]
  i2420.lightmapIndex = i2421[28]
  i2420.lightmapSceneIndex = i2421[29]
  i2420.lightmapScaleOffset = new pc.Vec4( i2421[30], i2421[31], i2421[32], i2421[33] )
  i2420.lightProbeUsage = i2421[34]
  i2420.reflectionProbeUsage = i2421[35]
  return i2420
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2424 = root || request.c( 'CharacterMotor' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'characterInput')
  request.r(i2425[2], i2425[3], 0, i2424, 'cameraYawTransform')
  i2424.moveSpeed = i2425[4]
  i2424.jumpHeight = i2425[5]
  request.r(i2425[6], i2425[7], 0, i2424, 'groundChecker')
  i2424.gravity = i2425[8]
  request.r(i2425[9], i2425[10], 0, i2424, 'controller')
  i2424.autoRun = !!i2425[11]
  return i2424
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2426 = root || request.c( 'CharacterRotation' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'motor')
  i2426.rotationSpeed = i2427[2]
  return i2426
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2428 = root || request.c( 'CharacterAnimation' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'animator')
  request.r(i2429[2], i2429[3], 0, i2428, 'motor')
  return i2428
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2430 = root || request.c( 'CharacterCollect' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'motor')
  request.r(i2431[2], i2431[3], 0, i2430, 'avatar')
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2433 = data
  i2432.mass = i2433[0]
  i2432.drag = i2433[1]
  i2432.angularDrag = i2433[2]
  i2432.useGravity = !!i2433[3]
  i2432.isKinematic = !!i2433[4]
  i2432.constraints = i2433[5]
  i2432.maxAngularVelocity = i2433[6]
  i2432.collisionDetectionMode = i2433[7]
  i2432.interpolation = i2433[8]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'clip')
  request.r(i2435[2], i2435[3], 0, i2434, 'outputAudioMixerGroup')
  i2434.playOnAwake = !!i2435[4]
  i2434.loop = !!i2435[5]
  i2434.time = i2435[6]
  i2434.volume = i2435[7]
  i2434.pitch = i2435[8]
  i2434.enabled = !!i2435[9]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'sharedMesh')
  var i2439 = i2437[2]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 2) {
  request.r(i2439[i + 0], i2439[i + 1], 2, i2438, '')
  }
  i2436.bones = i2438
  i2436.updateWhenOffscreen = !!i2437[3]
  i2436.localBounds = i2437[4]
  request.r(i2437[5], i2437[6], 0, i2436, 'rootBone')
  var i2441 = i2437[7]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2441[i + 0]) );
  }
  i2436.blendShapesWeights = i2440
  i2436.enabled = !!i2437[8]
  request.r(i2437[9], i2437[10], 0, i2436, 'sharedMaterial')
  var i2443 = i2437[11]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 2) {
  request.r(i2443[i + 0], i2443[i + 1], 2, i2442, '')
  }
  i2436.sharedMaterials = i2442
  i2436.receiveShadows = !!i2437[12]
  i2436.shadowCastingMode = i2437[13]
  i2436.sortingLayerID = i2437[14]
  i2436.sortingOrder = i2437[15]
  i2436.lightmapIndex = i2437[16]
  i2436.lightmapSceneIndex = i2437[17]
  i2436.lightmapScaleOffset = new pc.Vec4( i2437[18], i2437[19], i2437[20], i2437[21] )
  i2436.lightProbeUsage = i2437[22]
  i2436.reflectionProbeUsage = i2437[23]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2447 = data
  i2446.weight = i2447[0]
  return i2446
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2448 = root || request.c( 'GroundChecker' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'groundPoint')
  i2448.checkRadius = i2449[2]
  i2448.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2449[3] )
  return i2448
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2450 = root || request.c( 'CameraFollow' )
  var i2451 = data
  request.r(i2451[0], i2451[1], 0, i2450, 'target')
  i2450.smoothTime = i2451[2]
  return i2450
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2452 = root || request.c( 'CameraLook' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'input')
  request.r(i2453[2], i2453[3], 0, i2452, 'yawPivot')
  request.r(i2453[4], i2453[5], 0, i2452, 'pitchPivot')
  i2452.minPitch = i2453[6]
  i2452.maxPitch = i2453[7]
  i2452.yaw = i2453[8]
  i2452.pitch = i2453[9]
  i2452.defaltYaw = i2453[10]
  i2452.defaltPitch = i2453[11]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2455 = data
  i2454.aspect = i2455[0]
  i2454.orthographic = !!i2455[1]
  i2454.orthographicSize = i2455[2]
  i2454.backgroundColor = new pc.Color(i2455[3], i2455[4], i2455[5], i2455[6])
  i2454.nearClipPlane = i2455[7]
  i2454.farClipPlane = i2455[8]
  i2454.fieldOfView = i2455[9]
  i2454.depth = i2455[10]
  i2454.clearFlags = i2455[11]
  i2454.cullingMask = i2455[12]
  i2454.rect = i2455[13]
  request.r(i2455[14], i2455[15], 0, i2454, 'targetTexture')
  i2454.usePhysicalProperties = !!i2455[16]
  i2454.focalLength = i2455[17]
  i2454.sensorSize = new pc.Vec2( i2455[18], i2455[19] )
  i2454.lensShift = new pc.Vec2( i2455[20], i2455[21] )
  i2454.gateFit = i2455[22]
  i2454.commandBufferCount = i2455[23]
  i2454.cameraType = i2455[24]
  i2454.enabled = !!i2455[25]
  return i2454
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[49],"77":[53],"78":[41],"79":[41],"80":[41],"81":[41],"82":[41],"83":[41],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[53],"99":[5],"100":[101],"102":[101],"16":[15],"103":[15],"104":[21,15],"105":[5],"106":[21,15],"107":[15],"108":[15],"109":[5,15],"27":[15,21],"110":[111],"112":[111],"113":[111],"114":[15],"115":[15],"18":[16],"22":[21,15],"116":[15],"17":[16],"117":[15],"118":[15],"119":[15],"120":[15],"121":[15],"122":[15],"123":[15],"26":[15],"124":[15],"125":[21,15],"126":[15],"127":[15],"128":[15],"129":[15],"130":[21,15],"131":[15],"132":[12],"133":[12],"13":[12],"134":[12],"135":[53],"136":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","UnityEngine.Animator","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","UnityEngine.SphereCollider","Box","UnityEngine.ParticleSystem","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.ParticleSystemRenderer","CharacterMotor","CharacterInput","GroundChecker","UnityEngine.Rigidbody","CharacterRotation","CharacterAnimation","CharacterCollect","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","Gift","SoundHint","JumpHint","RunEffect","GameController","AudioController","LunaController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "07/27/2026 10:05:42";

Deserializers.lunaDaysRunning = "3.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SBFM_V01_HoaiTT_TamNTM";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4705";

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

Deserializers.buildID = "5ef81419-ad1d-4f01-9eec-67c8f0c5e861";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

