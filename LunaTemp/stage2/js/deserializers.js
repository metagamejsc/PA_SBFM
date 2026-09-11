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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2269 = data
  i2268.name = i2269[0]
  i2268.tagId = i2269[1]
  i2268.enabled = !!i2269[2]
  i2268.isStatic = !!i2269[3]
  i2268.layer = i2269[4]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'sharedMesh')
  i2270.convex = !!i2271[2]
  i2270.enabled = !!i2271[3]
  i2270.isTrigger = !!i2271[4]
  request.r(i2271[5], i2271[6], 0, i2270, 'material')
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2273 = data
  i2272.center = new pc.Vec3( i2273[0], i2273[1], i2273[2] )
  i2272.size = new pc.Vec3( i2273[3], i2273[4], i2273[5] )
  i2272.enabled = !!i2273[6]
  i2272.isTrigger = !!i2273[7]
  request.r(i2273[8], i2273[9], 0, i2272, 'material')
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2275 = data
  i2274.center = new pc.Vec3( i2275[0], i2275[1], i2275[2] )
  i2274.radius = i2275[3]
  i2274.height = i2275[4]
  i2274.direction = i2275[5]
  i2274.enabled = !!i2275[6]
  i2274.isTrigger = !!i2275[7]
  request.r(i2275[8], i2275[9], 0, i2274, 'material')
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2277 = data
  i2276.center = new pc.Vec3( i2277[0], i2277[1], i2277[2] )
  i2276.radius = i2277[3]
  i2276.enabled = !!i2277[4]
  i2276.isTrigger = !!i2277[5]
  request.r(i2277[6], i2277[7], 0, i2276, 'material')
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2279 = data
  i2278.mass = i2279[0]
  i2278.drag = i2279[1]
  i2278.angularDrag = i2279[2]
  i2278.useGravity = !!i2279[3]
  i2278.isKinematic = !!i2279[4]
  i2278.constraints = i2279[5]
  i2278.maxAngularVelocity = i2279[6]
  i2278.collisionDetectionMode = i2279[7]
  i2278.interpolation = i2279[8]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2281 = data
  i2280.name = i2281[0]
  i2280.atlasId = i2281[1]
  i2280.mipmapCount = i2281[2]
  i2280.hdr = !!i2281[3]
  i2280.size = i2281[4]
  i2280.anisoLevel = i2281[5]
  i2280.filterMode = i2281[6]
  var i2283 = i2281[7]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 4) {
    i2282.push( UnityEngine.Rect.MinMaxRect(i2283[i + 0], i2283[i + 1], i2283[i + 2], i2283[i + 3]) );
  }
  i2280.rects = i2282
  i2280.wrapU = i2281[8]
  i2280.wrapV = i2281[9]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2287 = data
  i2286.name = i2287[0]
  i2286.index = i2287[1]
  i2286.startup = !!i2287[2]
  return i2286
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'm_FirstSelected')
  i2288.m_sendNavigationEvents = !!i2289[2]
  i2288.m_DragThreshold = i2289[3]
  return i2288
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2291 = data
  i2290.m_HorizontalAxis = i2291[0]
  i2290.m_VerticalAxis = i2291[1]
  i2290.m_SubmitButton = i2291[2]
  i2290.m_CancelButton = i2291[3]
  i2290.m_InputActionsPerSecond = i2291[4]
  i2290.m_RepeatDelay = i2291[5]
  i2290.m_ForceModuleActive = !!i2291[6]
  i2290.m_SendPointerHoverToParent = !!i2291[7]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2293 = data
  i2292.type = i2293[0]
  i2292.color = new pc.Color(i2293[1], i2293[2], i2293[3], i2293[4])
  i2292.cullingMask = i2293[5]
  i2292.intensity = i2293[6]
  i2292.range = i2293[7]
  i2292.spotAngle = i2293[8]
  i2292.shadows = i2293[9]
  i2292.shadowNormalBias = i2293[10]
  i2292.shadowBias = i2293[11]
  i2292.shadowStrength = i2293[12]
  i2292.shadowResolution = i2293[13]
  i2292.lightmapBakeType = i2293[14]
  i2292.renderMode = i2293[15]
  request.r(i2293[16], i2293[17], 0, i2292, 'cookie')
  i2292.cookieSize = i2293[18]
  i2292.shadowNearPlane = i2293[19]
  i2292.occlusionMaskChannel = i2293[20]
  i2292.isBaked = !!i2293[21]
  i2292.mixedLightingMode = i2293[22]
  i2292.enabled = !!i2293[23]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2295 = data
  i2294.pivot = new pc.Vec2( i2295[0], i2295[1] )
  i2294.anchorMin = new pc.Vec2( i2295[2], i2295[3] )
  i2294.anchorMax = new pc.Vec2( i2295[4], i2295[5] )
  i2294.sizeDelta = new pc.Vec2( i2295[6], i2295[7] )
  i2294.anchoredPosition3D = new pc.Vec3( i2295[8], i2295[9], i2295[10] )
  i2294.rotation = new pc.Quat(i2295[11], i2295[12], i2295[13], i2295[14])
  i2294.scale = new pc.Vec3( i2295[15], i2295[16], i2295[17] )
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2297 = data
  i2296.planeDistance = i2297[0]
  i2296.referencePixelsPerUnit = i2297[1]
  i2296.isFallbackOverlay = !!i2297[2]
  i2296.renderMode = i2297[3]
  i2296.renderOrder = i2297[4]
  i2296.sortingLayerName = i2297[5]
  i2296.sortingOrder = i2297[6]
  i2296.scaleFactor = i2297[7]
  request.r(i2297[8], i2297[9], 0, i2296, 'worldCamera')
  i2296.overrideSorting = !!i2297[10]
  i2296.pixelPerfect = !!i2297[11]
  i2296.targetDisplay = i2297[12]
  i2296.overridePixelPerfect = !!i2297[13]
  i2296.enabled = !!i2297[14]
  return i2296
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2299 = data
  i2298.m_UiScaleMode = i2299[0]
  i2298.m_ReferencePixelsPerUnit = i2299[1]
  i2298.m_ScaleFactor = i2299[2]
  i2298.m_ReferenceResolution = new pc.Vec2( i2299[3], i2299[4] )
  i2298.m_ScreenMatchMode = i2299[5]
  i2298.m_MatchWidthOrHeight = i2299[6]
  i2298.m_PhysicalUnit = i2299[7]
  i2298.m_FallbackScreenDPI = i2299[8]
  i2298.m_DefaultSpriteDPI = i2299[9]
  i2298.m_DynamicPixelsPerUnit = i2299[10]
  i2298.m_PresetInfoIsWorld = !!i2299[11]
  return i2298
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2301 = data
  i2300.m_IgnoreReversedGraphics = !!i2301[0]
  i2300.m_BlockingObjects = i2301[1]
  i2300.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2301[2] )
  return i2300
}

Deserializers["Playable.ResponsiveCanvasScaler"] = function (request, data, root) {
  var i2302 = root || request.c( 'Playable.ResponsiveCanvasScaler' )
  var i2303 = data
  i2302._referenceResolution = new pc.Vec2( i2303[0], i2303[1] )
  i2302._portraitMatch = i2303[2]
  i2302._landscapeMatch = i2303[3]
  i2302._squareMatch = i2303[4]
  i2302._portraitAspectThreshold = i2303[5]
  i2302._landscapeAspectThreshold = i2303[6]
  i2302._aspectEpsilon = i2303[7]
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
  i2334.m_wordSpacing = i2335[52]
  i2334.m_lineSpacing = i2335[53]
  i2334.m_lineSpacingMax = i2335[54]
  i2334.m_paragraphSpacing = i2335[55]
  i2334.m_charWidthMaxAdj = i2335[56]
  i2334.m_TextWrappingMode = i2335[57]
  i2334.m_wordWrappingRatios = i2335[58]
  i2334.m_overflowMode = i2335[59]
  request.r(i2335[60], i2335[61], 0, i2334, 'm_linkedTextComponent')
  request.r(i2335[62], i2335[63], 0, i2334, 'parentLinkedComponent')
  i2334.m_enableKerning = !!i2335[64]
  var i2341 = i2335[65]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.add(i2341[i + 0]);
  }
  i2334.m_ActiveFontFeatures = i2340
  i2334.m_enableExtraPadding = !!i2335[66]
  i2334.checkPaddingRequired = !!i2335[67]
  i2334.m_isRichText = !!i2335[68]
  i2334.m_parseCtrlCharacters = !!i2335[69]
  i2334.m_isOrthographic = !!i2335[70]
  i2334.m_isCullingEnabled = !!i2335[71]
  i2334.m_horizontalMapping = i2335[72]
  i2334.m_verticalMapping = i2335[73]
  i2334.m_uvLineOffset = i2335[74]
  i2334.m_geometrySortingOrder = i2335[75]
  i2334.m_IsTextObjectScaleStatic = !!i2335[76]
  i2334.m_VertexBufferAutoSizeReduction = !!i2335[77]
  i2334.m_useMaxVisibleDescender = !!i2335[78]
  i2334.m_pageToDisplay = i2335[79]
  i2334.m_margin = new pc.Vec4( i2335[80], i2335[81], i2335[82], i2335[83] )
  i2334.m_isUsingLegacyAnimationComponent = !!i2335[84]
  i2334.m_isVolumetricText = !!i2335[85]
  request.r(i2335[86], i2335[87], 0, i2334, 'm_Material')
  i2334.m_EmojiFallbackSupport = !!i2335[88]
  i2334.m_Maskable = !!i2335[89]
  i2334.m_Color = new pc.Color(i2335[90], i2335[91], i2335[92], i2335[93])
  i2334.m_RaycastTarget = !!i2335[94]
  i2334.m_RaycastPadding = new pc.Vec4( i2335[95], i2335[96], i2335[97], i2335[98] )
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

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i2356 = root || request.c( 'CharacterMotor' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'characterInput')
  request.r(i2357[2], i2357[3], 0, i2356, 'cameraYawTransform')
  request.r(i2357[4], i2357[5], 0, i2356, '_arrow')
  i2356.moveSpeed = i2357[6]
  i2356.jumpHeight = i2357[7]
  request.r(i2357[8], i2357[9], 0, i2356, 'groundChecker')
  i2356.gravity = i2357[10]
  i2356.enableStepClimb = !!i2357[11]
  i2356.stepLayers = UnityEngine.LayerMask.FromIntegerValue( i2357[12] )
  i2356.maxStepHeight = i2357[13]
  i2356.stepCheckDistance = i2357[14]
  i2356.stepUpSpeed = i2357[15]
  i2356.stepUpAcceleration = i2357[16]
  i2356.minimumStepFacing = i2357[17]
  request.r(i2357[18], i2357[19], 0, i2356, 'controller')
  i2356.autoRun = !!i2357[20]
  return i2356
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i2358 = root || request.c( 'CharacterRotation' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'motor')
  i2358.rotationSpeed = i2359[2]
  return i2358
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i2360 = root || request.c( 'CharacterAnimation' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'animator')
  request.r(i2361[2], i2361[3], 0, i2360, 'motor')
  i2360.speedChangeRate = i2361[4]
  i2360.groundedGraceTime = i2361[5]
  return i2360
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i2362 = root || request.c( 'CharacterCollect' )
  var i2363 = data
  request.r(i2363[0], i2363[1], 0, i2362, 'motor')
  request.r(i2363[2], i2363[3], 0, i2362, 'avatar')
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'animatorController')
  request.r(i2365[2], i2365[3], 0, i2364, 'avatar')
  i2364.updateMode = i2365[4]
  i2364.hasTransformHierarchy = !!i2365[5]
  i2364.applyRootMotion = !!i2365[6]
  var i2367 = i2365[7]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 2, i2366, '')
  }
  i2364.humanBones = i2366
  i2364.enabled = !!i2365[8]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'clip')
  request.r(i2371[2], i2371[3], 0, i2370, 'outputAudioMixerGroup')
  i2370.playOnAwake = !!i2371[4]
  i2370.loop = !!i2371[5]
  i2370.time = i2371[6]
  i2370.volume = i2371[7]
  i2370.pitch = i2371[8]
  i2370.enabled = !!i2371[9]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'sharedMesh')
  var i2375 = i2373[2]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 2) {
  request.r(i2375[i + 0], i2375[i + 1], 2, i2374, '')
  }
  i2372.bones = i2374
  i2372.updateWhenOffscreen = !!i2373[3]
  i2372.localBounds = i2373[4]
  request.r(i2373[5], i2373[6], 0, i2372, 'rootBone')
  var i2377 = i2373[7]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2377[i + 0]) );
  }
  i2372.blendShapesWeights = i2376
  i2372.enabled = !!i2373[8]
  request.r(i2373[9], i2373[10], 0, i2372, 'sharedMaterial')
  var i2379 = i2373[11]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 2) {
  request.r(i2379[i + 0], i2379[i + 1], 2, i2378, '')
  }
  i2372.sharedMaterials = i2378
  i2372.receiveShadows = !!i2373[12]
  i2372.shadowCastingMode = i2373[13]
  i2372.sortingLayerID = i2373[14]
  i2372.sortingOrder = i2373[15]
  i2372.lightmapIndex = i2373[16]
  i2372.lightmapSceneIndex = i2373[17]
  i2372.lightmapScaleOffset = new pc.Vec4( i2373[18], i2373[19], i2373[20], i2373[21] )
  i2372.lightProbeUsage = i2373[22]
  i2372.reflectionProbeUsage = i2373[23]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2383 = data
  i2382.weight = i2383[0]
  return i2382
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i2384 = root || request.c( 'GroundChecker' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'groundPoint')
  i2384.checkRadius = i2385[2]
  i2384.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2385[3] )
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2387 = data
  i2386.color = new pc.Color(i2387[0], i2387[1], i2387[2], i2387[3])
  request.r(i2387[4], i2387[5], 0, i2386, 'sprite')
  i2386.flipX = !!i2387[6]
  i2386.flipY = !!i2387[7]
  i2386.drawMode = i2387[8]
  i2386.size = new pc.Vec2( i2387[9], i2387[10] )
  i2386.tileMode = i2387[11]
  i2386.adaptiveModeThreshold = i2387[12]
  i2386.maskInteraction = i2387[13]
  i2386.spriteSortPoint = i2387[14]
  i2386.enabled = !!i2387[15]
  request.r(i2387[16], i2387[17], 0, i2386, 'sharedMaterial')
  var i2389 = i2387[18]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 2, i2388, '')
  }
  i2386.sharedMaterials = i2388
  i2386.receiveShadows = !!i2387[19]
  i2386.shadowCastingMode = i2387[20]
  i2386.sortingLayerID = i2387[21]
  i2386.sortingOrder = i2387[22]
  i2386.lightmapIndex = i2387[23]
  i2386.lightmapSceneIndex = i2387[24]
  i2386.lightmapScaleOffset = new pc.Vec4( i2387[25], i2387[26], i2387[27], i2387[28] )
  i2386.lightProbeUsage = i2387[29]
  i2386.reflectionProbeUsage = i2387[30]
  return i2386
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2390 = root || request.c( 'CameraFollow' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'target')
  i2390.smoothTime = i2391[2]
  return i2390
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i2392 = root || request.c( 'CameraLook' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'input')
  request.r(i2393[2], i2393[3], 0, i2392, 'yawPivot')
  request.r(i2393[4], i2393[5], 0, i2392, 'pitchPivot')
  i2392.minPitch = i2393[6]
  i2392.maxPitch = i2393[7]
  i2392.yaw = i2393[8]
  i2392.pitch = i2393[9]
  i2392.defaltYaw = i2393[10]
  i2392.defaltPitch = i2393[11]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2395 = data
  i2394.aspect = i2395[0]
  i2394.orthographic = !!i2395[1]
  i2394.orthographicSize = i2395[2]
  i2394.backgroundColor = new pc.Color(i2395[3], i2395[4], i2395[5], i2395[6])
  i2394.nearClipPlane = i2395[7]
  i2394.farClipPlane = i2395[8]
  i2394.fieldOfView = i2395[9]
  i2394.depth = i2395[10]
  i2394.clearFlags = i2395[11]
  i2394.cullingMask = i2395[12]
  i2394.rect = i2395[13]
  request.r(i2395[14], i2395[15], 0, i2394, 'targetTexture')
  i2394.usePhysicalProperties = !!i2395[16]
  i2394.focalLength = i2395[17]
  i2394.sensorSize = new pc.Vec2( i2395[18], i2395[19] )
  i2394.lensShift = new pc.Vec2( i2395[20], i2395[21] )
  i2394.gateFit = i2395[22]
  i2394.commandBufferCount = i2395[23]
  i2394.cameraType = i2395[24]
  i2394.enabled = !!i2395[25]
  return i2394
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i2396 = root || request.c( 'CharacterInput' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'joystick')
  request.r(i2397[2], i2397[3], 0, i2396, 'jumpButton')
  return i2396
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2398 = root || request.c( 'InputManager' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'worldCamera')
  i2398.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i2399[2] )
  i2398.touchSensitivity = i2399[3]
  i2398.mouseSensitivity = i2399[4]
  i2398.dragThreshold = i2399[5]
  return i2398
}

Deserializers["GameController"] = function (request, data, root) {
  var i2400 = root || request.c( 'GameController' )
  var i2401 = data
  i2400.timeToShowComplete = i2401[0]
  i2400.timeToShowHint = i2401[1]
  i2400.currentProgress = i2401[2]
  i2400.target = i2401[3]
  request.r(i2401[4], i2401[5], 0, i2400, 'progressText')
  request.r(i2401[6], i2401[7], 0, i2400, 'collectText')
  request.r(i2401[8], i2401[9], 0, i2400, 'completeScene')
  var i2403 = i2401[10]
  var i2402 = new (System.Collections.Generic.List$1(Bridge.ns('Gift')))
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 1, i2402, '')
  }
  i2400.gifts = i2402
  request.r(i2401[11], i2401[12], 0, i2400, 'collect')
  request.r(i2401[13], i2401[14], 0, i2400, 'tut')
  request.r(i2401[15], i2401[16], 0, i2400, 'posWar')
  return i2400
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2406 = root || request.c( 'AudioController' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'musicSource')
  request.r(i2407[2], i2407[3], 0, i2406, 'poolParent')
  i2406.startSize = i2407[4]
  return i2406
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2408 = root || request.c( 'LunaController' )
  var i2409 = data
  i2408.LimitTimePlay = !!i2409[0]
  i2408.TimePlay = i2409[1]
  var i2411 = i2409[2]
  var i2410 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i2411.length; i += 2) {
  request.r(i2411[i + 0], i2411[i + 1], 1, i2410, '')
  }
  i2408.images = i2410
  request.r(i2409[3], i2409[4], 0, i2408, 'CTA')
  return i2408
}

Deserializers["Gift"] = function (request, data, root) {
  var i2414 = root || request.c( 'Gift' )
  var i2415 = data
  i2414.collectDone = !!i2415[0]
  var i2417 = i2415[1]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i2417.length; i += 2) {
  request.r(i2417[i + 0], i2417[i + 1], 1, i2416, '')
  }
  i2414.hints = i2416
  request.r(i2415[2], i2415[3], 0, i2414, 'collectSound')
  request.r(i2415[4], i2415[5], 0, i2414, 'collectEffect')
  request.r(i2415[6], i2415[7], 0, i2414, 'arrow')
  return i2414
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i2420 = root || request.c( 'SoundHint' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'Sound')
  request.r(i2421[2], i2421[3], 0, i2420, 'Source')
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2423 = data
  i2422.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2423[0], i2422.main)
  i2422.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2423[1], i2422.colorBySpeed)
  i2422.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2423[2], i2422.colorOverLifetime)
  i2422.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2423[3], i2422.emission)
  i2422.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2423[4], i2422.rotationBySpeed)
  i2422.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2423[5], i2422.rotationOverLifetime)
  i2422.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2423[6], i2422.shape)
  i2422.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2423[7], i2422.sizeBySpeed)
  i2422.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2423[8], i2422.sizeOverLifetime)
  i2422.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2423[9], i2422.textureSheetAnimation)
  i2422.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2423[10], i2422.velocityOverLifetime)
  i2422.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2423[11], i2422.noise)
  i2422.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2423[12], i2422.inheritVelocity)
  i2422.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2423[13], i2422.forceOverLifetime)
  i2422.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2423[14], i2422.limitVelocityOverLifetime)
  i2422.useAutoRandomSeed = !!i2423[15]
  i2422.randomSeed = i2423[16]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2424 = root || new pc.ParticleSystemMain()
  var i2425 = data
  i2424.duration = i2425[0]
  i2424.loop = !!i2425[1]
  i2424.prewarm = !!i2425[2]
  i2424.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[3], i2424.startDelay)
  i2424.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[4], i2424.startLifetime)
  i2424.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[5], i2424.startSpeed)
  i2424.startSize3D = !!i2425[6]
  i2424.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[7], i2424.startSizeX)
  i2424.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[8], i2424.startSizeY)
  i2424.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[9], i2424.startSizeZ)
  i2424.startRotation3D = !!i2425[10]
  i2424.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[11], i2424.startRotationX)
  i2424.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[12], i2424.startRotationY)
  i2424.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[13], i2424.startRotationZ)
  i2424.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2425[14], i2424.startColor)
  i2424.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[15], i2424.gravityModifier)
  i2424.simulationSpace = i2425[16]
  request.r(i2425[17], i2425[18], 0, i2424, 'customSimulationSpace')
  i2424.simulationSpeed = i2425[19]
  i2424.useUnscaledTime = !!i2425[20]
  i2424.scalingMode = i2425[21]
  i2424.playOnAwake = !!i2425[22]
  i2424.maxParticles = i2425[23]
  i2424.emitterVelocityMode = i2425[24]
  i2424.stopAction = i2425[25]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2426 = root || new pc.MinMaxCurve()
  var i2427 = data
  i2426.mode = i2427[0]
  i2426.curveMin = new pc.AnimationCurve( { keys_flow: i2427[1] } )
  i2426.curveMax = new pc.AnimationCurve( { keys_flow: i2427[2] } )
  i2426.curveMultiplier = i2427[3]
  i2426.constantMin = i2427[4]
  i2426.constantMax = i2427[5]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2428 = root || new pc.MinMaxGradient()
  var i2429 = data
  i2428.mode = i2429[0]
  i2428.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2429[1], i2428.gradientMin)
  i2428.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2429[2], i2428.gradientMax)
  i2428.colorMin = new pc.Color(i2429[3], i2429[4], i2429[5], i2429[6])
  i2428.colorMax = new pc.Color(i2429[7], i2429[8], i2429[9], i2429[10])
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2431 = data
  i2430.mode = i2431[0]
  var i2433 = i2431[1]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2433[i + 0]) );
  }
  i2430.colorKeys = i2432
  var i2435 = i2431[2]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2435[i + 0]) );
  }
  i2430.alphaKeys = i2434
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2439 = data
  i2438.color = new pc.Color(i2439[0], i2439[1], i2439[2], i2439[3])
  i2438.time = i2439[4]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2443 = data
  i2442.alpha = i2443[0]
  i2442.time = i2443[1]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2444 = root || new pc.ParticleSystemColorBySpeed()
  var i2445 = data
  i2444.enabled = !!i2445[0]
  i2444.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2445[1], i2444.color)
  i2444.range = new pc.Vec2( i2445[2], i2445[3] )
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2446 = root || new pc.ParticleSystemColorOverLifetime()
  var i2447 = data
  i2446.enabled = !!i2447[0]
  i2446.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2447[1], i2446.color)
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2448 = root || new pc.ParticleSystemEmitter()
  var i2449 = data
  i2448.enabled = !!i2449[0]
  i2448.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[1], i2448.rateOverTime)
  i2448.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2449[2], i2448.rateOverDistance)
  var i2451 = i2449[3]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2451[i + 0]) );
  }
  i2448.bursts = i2450
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2454 = root || new pc.ParticleSystemBurst()
  var i2455 = data
  i2454.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2455[0], i2454.count)
  i2454.cycleCount = i2455[1]
  i2454.minCount = i2455[2]
  i2454.maxCount = i2455[3]
  i2454.repeatInterval = i2455[4]
  i2454.time = i2455[5]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2456 = root || new pc.ParticleSystemRotationBySpeed()
  var i2457 = data
  i2456.enabled = !!i2457[0]
  i2456.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[1], i2456.x)
  i2456.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[2], i2456.y)
  i2456.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2457[3], i2456.z)
  i2456.separateAxes = !!i2457[4]
  i2456.range = new pc.Vec2( i2457[5], i2457[6] )
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2458 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2459 = data
  i2458.enabled = !!i2459[0]
  i2458.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2459[1], i2458.x)
  i2458.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2459[2], i2458.y)
  i2458.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2459[3], i2458.z)
  i2458.separateAxes = !!i2459[4]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2460 = root || new pc.ParticleSystemShape()
  var i2461 = data
  i2460.enabled = !!i2461[0]
  i2460.shapeType = i2461[1]
  i2460.randomDirectionAmount = i2461[2]
  i2460.sphericalDirectionAmount = i2461[3]
  i2460.randomPositionAmount = i2461[4]
  i2460.alignToDirection = !!i2461[5]
  i2460.radius = i2461[6]
  i2460.radiusMode = i2461[7]
  i2460.radiusSpread = i2461[8]
  i2460.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2461[9], i2460.radiusSpeed)
  i2460.radiusThickness = i2461[10]
  i2460.angle = i2461[11]
  i2460.length = i2461[12]
  i2460.boxThickness = new pc.Vec3( i2461[13], i2461[14], i2461[15] )
  i2460.meshShapeType = i2461[16]
  request.r(i2461[17], i2461[18], 0, i2460, 'mesh')
  request.r(i2461[19], i2461[20], 0, i2460, 'meshRenderer')
  request.r(i2461[21], i2461[22], 0, i2460, 'skinnedMeshRenderer')
  i2460.useMeshMaterialIndex = !!i2461[23]
  i2460.meshMaterialIndex = i2461[24]
  i2460.useMeshColors = !!i2461[25]
  i2460.normalOffset = i2461[26]
  i2460.arc = i2461[27]
  i2460.arcMode = i2461[28]
  i2460.arcSpread = i2461[29]
  i2460.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2461[30], i2460.arcSpeed)
  i2460.donutRadius = i2461[31]
  i2460.position = new pc.Vec3( i2461[32], i2461[33], i2461[34] )
  i2460.rotation = new pc.Vec3( i2461[35], i2461[36], i2461[37] )
  i2460.scale = new pc.Vec3( i2461[38], i2461[39], i2461[40] )
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2462 = root || new pc.ParticleSystemSizeBySpeed()
  var i2463 = data
  i2462.enabled = !!i2463[0]
  i2462.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2463[1], i2462.x)
  i2462.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2463[2], i2462.y)
  i2462.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2463[3], i2462.z)
  i2462.separateAxes = !!i2463[4]
  i2462.range = new pc.Vec2( i2463[5], i2463[6] )
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2464 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2465 = data
  i2464.enabled = !!i2465[0]
  i2464.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2465[1], i2464.x)
  i2464.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2465[2], i2464.y)
  i2464.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2465[3], i2464.z)
  i2464.separateAxes = !!i2465[4]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2466 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2467 = data
  i2466.enabled = !!i2467[0]
  i2466.mode = i2467[1]
  i2466.animation = i2467[2]
  i2466.numTilesX = i2467[3]
  i2466.numTilesY = i2467[4]
  i2466.useRandomRow = !!i2467[5]
  i2466.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[6], i2466.frameOverTime)
  i2466.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2467[7], i2466.startFrame)
  i2466.cycleCount = i2467[8]
  i2466.rowIndex = i2467[9]
  i2466.flipU = i2467[10]
  i2466.flipV = i2467[11]
  i2466.spriteCount = i2467[12]
  var i2469 = i2467[13]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 2) {
  request.r(i2469[i + 0], i2469[i + 1], 2, i2468, '')
  }
  i2466.sprites = i2468
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2472 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2473 = data
  i2472.enabled = !!i2473[0]
  i2472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[1], i2472.x)
  i2472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[2], i2472.y)
  i2472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[3], i2472.z)
  i2472.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[4], i2472.radial)
  i2472.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[5], i2472.speedModifier)
  i2472.space = i2473[6]
  i2472.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[7], i2472.orbitalX)
  i2472.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[8], i2472.orbitalY)
  i2472.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[9], i2472.orbitalZ)
  i2472.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[10], i2472.orbitalOffsetX)
  i2472.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[11], i2472.orbitalOffsetY)
  i2472.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2473[12], i2472.orbitalOffsetZ)
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2474 = root || new pc.ParticleSystemNoise()
  var i2475 = data
  i2474.enabled = !!i2475[0]
  i2474.separateAxes = !!i2475[1]
  i2474.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[2], i2474.strengthX)
  i2474.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[3], i2474.strengthY)
  i2474.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[4], i2474.strengthZ)
  i2474.frequency = i2475[5]
  i2474.damping = !!i2475[6]
  i2474.octaveCount = i2475[7]
  i2474.octaveMultiplier = i2475[8]
  i2474.octaveScale = i2475[9]
  i2474.quality = i2475[10]
  i2474.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[11], i2474.scrollSpeed)
  i2474.scrollSpeedMultiplier = i2475[12]
  i2474.remapEnabled = !!i2475[13]
  i2474.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[14], i2474.remapX)
  i2474.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[15], i2474.remapY)
  i2474.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[16], i2474.remapZ)
  i2474.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[17], i2474.positionAmount)
  i2474.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[18], i2474.rotationAmount)
  i2474.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2475[19], i2474.sizeAmount)
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2476 = root || new pc.ParticleSystemInheritVelocity()
  var i2477 = data
  i2476.enabled = !!i2477[0]
  i2476.mode = i2477[1]
  i2476.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2477[2], i2476.curve)
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2478 = root || new pc.ParticleSystemForceOverLifetime()
  var i2479 = data
  i2478.enabled = !!i2479[0]
  i2478.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2479[1], i2478.x)
  i2478.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2479[2], i2478.y)
  i2478.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2479[3], i2478.z)
  i2478.space = i2479[4]
  i2478.randomized = !!i2479[5]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2480 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2481 = data
  i2480.enabled = !!i2481[0]
  i2480.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2481[1], i2480.limit)
  i2480.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2481[2], i2480.limitX)
  i2480.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2481[3], i2480.limitY)
  i2480.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2481[4], i2480.limitZ)
  i2480.dampen = i2481[5]
  i2480.separateAxes = !!i2481[6]
  i2480.space = i2481[7]
  i2480.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2481[8], i2480.drag)
  i2480.multiplyDragByParticleSize = !!i2481[9]
  i2480.multiplyDragByParticleVelocity = !!i2481[10]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'mesh')
  i2482.meshCount = i2483[2]
  i2482.activeVertexStreamsCount = i2483[3]
  i2482.alignment = i2483[4]
  i2482.renderMode = i2483[5]
  i2482.sortMode = i2483[6]
  i2482.lengthScale = i2483[7]
  i2482.velocityScale = i2483[8]
  i2482.cameraVelocityScale = i2483[9]
  i2482.normalDirection = i2483[10]
  i2482.sortingFudge = i2483[11]
  i2482.minParticleSize = i2483[12]
  i2482.maxParticleSize = i2483[13]
  i2482.pivot = new pc.Vec3( i2483[14], i2483[15], i2483[16] )
  request.r(i2483[17], i2483[18], 0, i2482, 'trailMaterial')
  i2482.applyActiveColorSpace = !!i2483[19]
  i2482.enabled = !!i2483[20]
  request.r(i2483[21], i2483[22], 0, i2482, 'sharedMaterial')
  var i2485 = i2483[23]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 2) {
  request.r(i2485[i + 0], i2485[i + 1], 2, i2484, '')
  }
  i2482.sharedMaterials = i2484
  i2482.receiveShadows = !!i2483[24]
  i2482.shadowCastingMode = i2483[25]
  i2482.sortingLayerID = i2483[26]
  i2482.sortingOrder = i2483[27]
  i2482.lightmapIndex = i2483[28]
  i2482.lightmapSceneIndex = i2483[29]
  i2482.lightmapScaleOffset = new pc.Vec4( i2483[30], i2483[31], i2483[32], i2483[33] )
  i2482.lightProbeUsage = i2483[34]
  i2482.reflectionProbeUsage = i2483[35]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2487 = data
  i2486.ambientIntensity = i2487[0]
  i2486.reflectionIntensity = i2487[1]
  i2486.ambientMode = i2487[2]
  i2486.ambientLight = new pc.Color(i2487[3], i2487[4], i2487[5], i2487[6])
  i2486.ambientSkyColor = new pc.Color(i2487[7], i2487[8], i2487[9], i2487[10])
  i2486.ambientGroundColor = new pc.Color(i2487[11], i2487[12], i2487[13], i2487[14])
  i2486.ambientEquatorColor = new pc.Color(i2487[15], i2487[16], i2487[17], i2487[18])
  i2486.fogColor = new pc.Color(i2487[19], i2487[20], i2487[21], i2487[22])
  i2486.fogEndDistance = i2487[23]
  i2486.fogStartDistance = i2487[24]
  i2486.fogDensity = i2487[25]
  i2486.fog = !!i2487[26]
  request.r(i2487[27], i2487[28], 0, i2486, 'skybox')
  i2486.fogMode = i2487[29]
  var i2489 = i2487[30]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2489[i + 0]) );
  }
  i2486.lightmaps = i2488
  i2486.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2487[31], i2486.lightProbes)
  i2486.lightmapsMode = i2487[32]
  i2486.mixedBakeMode = i2487[33]
  i2486.environmentLightingMode = i2487[34]
  i2486.ambientProbe = new pc.SphericalHarmonicsL2(i2487[35])
  request.r(i2487[36], i2487[37], 0, i2486, 'customReflection')
  request.r(i2487[38], i2487[39], 0, i2486, 'defaultReflection')
  i2486.defaultReflectionMode = i2487[40]
  i2486.defaultReflectionResolution = i2487[41]
  i2486.sunLightObjectId = i2487[42]
  i2486.pixelLightCount = i2487[43]
  i2486.defaultReflectionHDR = !!i2487[44]
  i2486.hasLightDataAsset = !!i2487[45]
  i2486.hasManualGenerate = !!i2487[46]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'lightmapColor')
  request.r(i2493[2], i2493[3], 0, i2492, 'lightmapDirection')
  request.r(i2493[4], i2493[5], 0, i2492, 'shadowMask')
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2494 = root || new UnityEngine.LightProbes()
  var i2495 = data
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2503 = data
  var i2505 = i2503[0]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2505[i + 0]));
  }
  i2502.ShaderCompilationErrors = i2504
  i2502.name = i2503[1]
  i2502.guid = i2503[2]
  var i2507 = i2503[3]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( i2507[i + 0] );
  }
  i2502.shaderDefinedKeywords = i2506
  var i2509 = i2503[4]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2509[i + 0]) );
  }
  i2502.passes = i2508
  var i2511 = i2503[5]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2511[i + 0]) );
  }
  i2502.usePasses = i2510
  var i2513 = i2503[6]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2513[i + 0]) );
  }
  i2502.defaultParameterValues = i2512
  request.r(i2503[7], i2503[8], 0, i2502, 'unityFallbackShader')
  i2502.readDepth = !!i2503[9]
  i2502.hasDepthOnlyPass = !!i2503[10]
  i2502.isCreatedByShaderGraph = !!i2503[11]
  i2502.disableBatching = !!i2503[12]
  i2502.compiled = !!i2503[13]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2517 = data
  i2516.shaderName = i2517[0]
  i2516.errorMessage = i2517[1]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2522 = root || new pc.UnityShaderPass()
  var i2523 = data
  i2522.id = i2523[0]
  i2522.subShaderIndex = i2523[1]
  i2522.name = i2523[2]
  i2522.passType = i2523[3]
  i2522.grabPassTextureName = i2523[4]
  i2522.usePass = !!i2523[5]
  i2522.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[6], i2522.zTest)
  i2522.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[7], i2522.zWrite)
  i2522.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[8], i2522.culling)
  i2522.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2523[9], i2522.blending)
  i2522.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2523[10], i2522.alphaBlending)
  i2522.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[11], i2522.colorWriteMask)
  i2522.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[12], i2522.offsetUnits)
  i2522.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[13], i2522.offsetFactor)
  i2522.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[14], i2522.stencilRef)
  i2522.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[15], i2522.stencilReadMask)
  i2522.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2523[16], i2522.stencilWriteMask)
  i2522.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2523[17], i2522.stencilOp)
  i2522.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2523[18], i2522.stencilOpFront)
  i2522.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2523[19], i2522.stencilOpBack)
  var i2525 = i2523[20]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2525[i + 0]) );
  }
  i2522.tags = i2524
  var i2527 = i2523[21]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( i2527[i + 0] );
  }
  i2522.passDefinedKeywords = i2526
  var i2529 = i2523[22]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2529[i + 0]) );
  }
  i2522.passDefinedKeywordGroups = i2528
  var i2531 = i2523[23]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2531[i + 0]) );
  }
  i2522.variants = i2530
  var i2533 = i2523[24]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2533[i + 0]) );
  }
  i2522.excludedVariants = i2532
  i2522.hasDepthReader = !!i2523[25]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2535 = data
  i2534.val = i2535[0]
  i2534.name = i2535[1]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2537 = data
  i2536.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[0], i2536.src)
  i2536.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[1], i2536.dst)
  i2536.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[2], i2536.op)
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2539 = data
  i2538.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[0], i2538.pass)
  i2538.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[1], i2538.fail)
  i2538.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[2], i2538.zFail)
  i2538.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2539[3], i2538.comp)
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2543 = data
  i2542.name = i2543[0]
  i2542.value = i2543[1]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2547 = data
  var i2549 = i2547[0]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( i2549[i + 0] );
  }
  i2546.keywords = i2548
  i2546.hasDiscard = !!i2547[1]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2553 = data
  i2552.passId = i2553[0]
  i2552.subShaderIndex = i2553[1]
  var i2555 = i2553[2]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( i2555[i + 0] );
  }
  i2552.keywords = i2554
  i2552.vertexProgram = i2553[3]
  i2552.fragmentProgram = i2553[4]
  i2552.exportedForWebGl2 = !!i2553[5]
  i2552.readDepth = !!i2553[6]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'shader')
  i2558.pass = i2559[2]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2563 = data
  i2562.name = i2563[0]
  i2562.type = i2563[1]
  i2562.value = new pc.Vec4( i2563[2], i2563[3], i2563[4], i2563[5] )
  i2562.textureValue = i2563[6]
  i2562.shaderPropertyFlag = i2563[7]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2565 = data
  i2564.name = i2565[0]
  request.r(i2565[1], i2565[2], 0, i2564, 'texture')
  i2564.aabb = i2565[3]
  i2564.vertices = i2565[4]
  i2564.triangles = i2565[5]
  i2564.textureRect = UnityEngine.Rect.MinMaxRect(i2565[6], i2565[7], i2565[8], i2565[9])
  i2564.packedRect = UnityEngine.Rect.MinMaxRect(i2565[10], i2565[11], i2565[12], i2565[13])
  i2564.border = new pc.Vec4( i2565[14], i2565[15], i2565[16], i2565[17] )
  i2564.transparency = i2565[18]
  i2564.bounds = i2565[19]
  i2564.pixelsPerUnit = i2565[20]
  i2564.textureWidth = i2565[21]
  i2564.textureHeight = i2565[22]
  i2564.nativeSize = new pc.Vec2( i2565[23], i2565[24] )
  i2564.pivot = new pc.Vec2( i2565[25], i2565[26] )
  i2564.textureRectOffset = new pc.Vec2( i2565[27], i2565[28] )
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2567 = data
  i2566.name = i2567[0]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2569 = data
  i2568.name = i2569[0]
  i2568.wrapMode = i2569[1]
  i2568.isLooping = !!i2569[2]
  i2568.length = i2569[3]
  var i2571 = i2569[4]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2571[i + 0]) );
  }
  i2568.curves = i2570
  var i2573 = i2569[5]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2573[i + 0]) );
  }
  i2568.events = i2572
  i2568.halfPrecision = !!i2569[6]
  i2568._frameRate = i2569[7]
  i2568.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2569[8], i2568.localBounds)
  i2568.hasMuscleCurves = !!i2569[9]
  var i2575 = i2569[10]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( i2575[i + 0] );
  }
  i2568.clipMuscleConstant = i2574
  i2568.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2569[11], i2568.clipBindingConstant)
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2579 = data
  i2578.path = i2579[0]
  i2578.hash = i2579[1]
  i2578.componentType = i2579[2]
  i2578.property = i2579[3]
  i2578.keys = i2579[4]
  var i2581 = i2579[5]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2581[i + 0]) );
  }
  i2578.objectReferenceKeys = i2580
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2585 = data
  i2584.time = i2585[0]
  request.r(i2585[1], i2585[2], 0, i2584, 'value')
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2589 = data
  i2588.functionName = i2589[0]
  i2588.floatParameter = i2589[1]
  i2588.intParameter = i2589[2]
  i2588.stringParameter = i2589[3]
  request.r(i2589[4], i2589[5], 0, i2588, 'objectReferenceParameter')
  i2588.time = i2589[6]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2591 = data
  i2590.center = new pc.Vec3( i2591[0], i2591[1], i2591[2] )
  i2590.extends = new pc.Vec3( i2591[3], i2591[4], i2591[5] )
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2595 = data
  var i2597 = i2595[0]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( i2597[i + 0] );
  }
  i2594.genericBindings = i2596
  var i2599 = i2595[1]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( i2599[i + 0] );
  }
  i2594.pptrCurveMapping = i2598
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2601 = data
  i2600.name = i2601[0]
  i2600.blendParameter = i2601[1]
  i2600.blendParameterY = i2601[2]
  i2600.blendType = i2601[3]
  var i2603 = i2601[4]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2603[i + 0]) );
  }
  i2600.children = i2602
  i2600.useAutomaticThresholds = !!i2601[5]
  i2600.minThreshold = i2601[6]
  i2600.maxThreshold = i2601[7]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'motion')
  i2606.threshold = i2607[2]
  i2606.position = new pc.Vec2( i2607[3], i2607[4] )
  i2606.timeScale = i2607[5]
  i2606.cycleOffset = i2607[6]
  i2606.directBlendParameter = i2607[7]
  i2606.mirror = !!i2607[8]
  return i2606
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[46],"76":[51],"77":[11],"78":[11],"79":[11],"80":[11],"81":[11],"82":[11],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[51],"98":[5],"99":[100],"101":[100],"18":[17],"22":[19],"102":[17],"103":[5,17],"30":[17,24],"104":[17],"105":[24,17],"106":[5],"107":[24,17],"108":[17],"109":[110],"111":[110],"112":[110],"113":[17],"114":[17],"20":[18],"25":[24,17],"115":[17],"19":[18],"116":[17],"117":[17],"118":[17],"119":[17],"120":[17],"121":[17],"122":[17],"29":[17],"123":[17],"124":[24,17],"125":[17],"126":[17],"127":[17],"128":[17],"129":[24,17],"130":[17],"131":[14],"132":[14],"15":[14],"133":[14],"134":[51],"135":[51]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","UnityEngine.SphereCollider","UnityEngine.Rigidbody","UnityEngine.Cubemap","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Playable.ResponsiveCanvasScaler","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","TutController","HideOnPointer","DG.Tweening.DOTweenAnimation","CharacterMotor","CharacterInput","GroundChecker","CharacterRotation","CharacterAnimation","UnityEngine.Animator","CharacterCollect","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.SpriteRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","GameController","Gift","AudioController","UnityEngine.AudioClip","LunaController","SoundHint","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEditor.Animations.BlendTree","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "09/08/2026 04:34:02";

Deserializers.lunaDaysRunning = "3.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "FSAHM_V02_HoaiTT_HuyNQ";

Deserializers.lunaAppID = "42700";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1675";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4755";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "657e1263-c32c-4d0a-8a22-f21a361fd3d6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

