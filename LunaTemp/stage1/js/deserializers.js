var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.JointSpring' )
  var i2199 = data
  i2198.spring = i2199[0]
  i2198.damper = i2199[1]
  i2198.targetPosition = i2199[2]
  return i2198
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.JointMotor' )
  var i2201 = data
  i2200.m_TargetVelocity = i2201[0]
  i2200.m_Force = i2201[1]
  i2200.m_FreeSpin = i2201[2]
  return i2200
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.JointLimits' )
  var i2203 = data
  i2202.m_Min = i2203[0]
  i2202.m_Max = i2203[1]
  i2202.m_Bounciness = i2203[2]
  i2202.m_BounceMinVelocity = i2203[3]
  i2202.m_ContactDistance = i2203[4]
  i2202.minBounce = i2203[5]
  i2202.maxBounce = i2203[6]
  return i2202
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.JointDrive' )
  var i2205 = data
  i2204.m_PositionSpring = i2205[0]
  i2204.m_PositionDamper = i2205[1]
  i2204.m_MaximumForce = i2205[2]
  i2204.m_UseAcceleration = i2205[3]
  return i2204
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2207 = data
  i2206.m_Spring = i2207[0]
  i2206.m_Damper = i2207[1]
  return i2206
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2209 = data
  i2208.m_Limit = i2209[0]
  i2208.m_Bounciness = i2209[1]
  i2208.m_ContactDistance = i2209[2]
  return i2208
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2211 = data
  i2210.m_ExtremumSlip = i2211[0]
  i2210.m_ExtremumValue = i2211[1]
  i2210.m_AsymptoteSlip = i2211[2]
  i2210.m_AsymptoteValue = i2211[3]
  i2210.m_Stiffness = i2211[4]
  return i2210
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2213 = data
  i2212.m_LowerAngle = i2213[0]
  i2212.m_UpperAngle = i2213[1]
  return i2212
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2215 = data
  i2214.m_MotorSpeed = i2215[0]
  i2214.m_MaximumMotorTorque = i2215[1]
  return i2214
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2217 = data
  i2216.m_DampingRatio = i2217[0]
  i2216.m_Frequency = i2217[1]
  i2216.m_Angle = i2217[2]
  return i2216
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2219 = data
  i2218.m_LowerTranslation = i2219[0]
  i2218.m_UpperTranslation = i2219[1]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2221 = data
  i2220.position = new pc.Vec3( i2221[0], i2221[1], i2221[2] )
  i2220.scale = new pc.Vec3( i2221[3], i2221[4], i2221[5] )
  i2220.rotation = new pc.Quat(i2221[6], i2221[7], i2221[8], i2221[9])
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'animatorController')
  request.r(i2223[2], i2223[3], 0, i2222, 'avatar')
  i2222.updateMode = i2223[4]
  i2222.hasTransformHierarchy = !!i2223[5]
  i2222.applyRootMotion = !!i2223[6]
  var i2225 = i2223[7]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 2, i2224, '')
  }
  i2222.humanBones = i2224
  i2222.enabled = !!i2223[8]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, 'clip')
  request.r(i2229[2], i2229[3], 0, i2228, 'outputAudioMixerGroup')
  i2228.playOnAwake = !!i2229[4]
  i2228.loop = !!i2229[5]
  i2228.time = i2229[6]
  i2228.volume = i2229[7]
  i2228.pitch = i2229[8]
  i2228.enabled = !!i2229[9]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'sharedMesh')
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'additionalVertexStreams')
  i2232.enabled = !!i2233[2]
  request.r(i2233[3], i2233[4], 0, i2232, 'sharedMaterial')
  var i2235 = i2233[5]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 2) {
  request.r(i2235[i + 0], i2235[i + 1], 2, i2234, '')
  }
  i2232.sharedMaterials = i2234
  i2232.receiveShadows = !!i2233[6]
  i2232.shadowCastingMode = i2233[7]
  i2232.sortingLayerID = i2233[8]
  i2232.sortingOrder = i2233[9]
  i2232.lightmapIndex = i2233[10]
  i2232.lightmapSceneIndex = i2233[11]
  i2232.lightmapScaleOffset = new pc.Vec4( i2233[12], i2233[13], i2233[14], i2233[15] )
  i2232.lightProbeUsage = i2233[16]
  i2232.reflectionProbeUsage = i2233[17]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2239 = data
  i2238.name = i2239[0]
  i2238.tagId = i2239[1]
  i2238.enabled = !!i2239[2]
  i2238.isStatic = !!i2239[3]
  i2238.layer = i2239[4]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2241 = data
  i2240.name = i2241[0]
  i2240.halfPrecision = !!i2241[1]
  i2240.useSimplification = !!i2241[2]
  i2240.useUInt32IndexFormat = !!i2241[3]
  i2240.vertexCount = i2241[4]
  i2240.aabb = i2241[5]
  var i2243 = i2241[6]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( !!i2243[i + 0] );
  }
  i2240.streams = i2242
  i2240.vertices = i2241[7]
  var i2245 = i2241[8]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2245[i + 0]) );
  }
  i2240.subMeshes = i2244
  var i2247 = i2241[9]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 16) {
    i2246.push( new pc.Mat4().setData(i2247[i + 0], i2247[i + 1], i2247[i + 2], i2247[i + 3],  i2247[i + 4], i2247[i + 5], i2247[i + 6], i2247[i + 7],  i2247[i + 8], i2247[i + 9], i2247[i + 10], i2247[i + 11],  i2247[i + 12], i2247[i + 13], i2247[i + 14], i2247[i + 15]) );
  }
  i2240.bindposes = i2246
  var i2249 = i2241[10]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2249[i + 0]) );
  }
  i2240.blendShapes = i2248
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2255 = data
  i2254.triangles = i2255[0]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2261 = data
  i2260.name = i2261[0]
  var i2263 = i2261[1]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2263[i + 0]) );
  }
  i2260.frames = i2262
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2264 = root || new pc.UnityMaterial()
  var i2265 = data
  i2264.name = i2265[0]
  request.r(i2265[1], i2265[2], 0, i2264, 'shader')
  i2264.renderQueue = i2265[3]
  i2264.enableInstancing = !!i2265[4]
  var i2267 = i2265[5]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2267[i + 0]) );
  }
  i2264.floatParameters = i2266
  var i2269 = i2265[6]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2269[i + 0]) );
  }
  i2264.colorParameters = i2268
  var i2271 = i2265[7]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2271[i + 0]) );
  }
  i2264.vectorParameters = i2270
  var i2273 = i2265[8]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2273[i + 0]) );
  }
  i2264.textureParameters = i2272
  var i2275 = i2265[9]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2275[i + 0]) );
  }
  i2264.materialFlags = i2274
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2279 = data
  i2278.name = i2279[0]
  i2278.value = i2279[1]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2283 = data
  i2282.name = i2283[0]
  i2282.value = new pc.Color(i2283[1], i2283[2], i2283[3], i2283[4])
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2287 = data
  i2286.name = i2287[0]
  i2286.value = new pc.Vec4( i2287[1], i2287[2], i2287[3], i2287[4] )
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2291 = data
  i2290.name = i2291[0]
  request.r(i2291[1], i2291[2], 0, i2290, 'value')
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.enabled = !!i2295[1]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'sharedMesh')
  var i2299 = i2297[2]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 2, i2298, '')
  }
  i2296.bones = i2298
  i2296.updateWhenOffscreen = !!i2297[3]
  i2296.localBounds = i2297[4]
  request.r(i2297[5], i2297[6], 0, i2296, 'rootBone')
  var i2301 = i2297[7]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2301[i + 0]) );
  }
  i2296.blendShapesWeights = i2300
  i2296.enabled = !!i2297[8]
  request.r(i2297[9], i2297[10], 0, i2296, 'sharedMaterial')
  var i2303 = i2297[11]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 2) {
  request.r(i2303[i + 0], i2303[i + 1], 2, i2302, '')
  }
  i2296.sharedMaterials = i2302
  i2296.receiveShadows = !!i2297[12]
  i2296.shadowCastingMode = i2297[13]
  i2296.sortingLayerID = i2297[14]
  i2296.sortingOrder = i2297[15]
  i2296.lightmapIndex = i2297[16]
  i2296.lightmapSceneIndex = i2297[17]
  i2296.lightmapScaleOffset = new pc.Vec4( i2297[18], i2297[19], i2297[20], i2297[21] )
  i2296.lightProbeUsage = i2297[22]
  i2296.reflectionProbeUsage = i2297[23]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2307 = data
  i2306.weight = i2307[0]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2309 = data
  i2308.name = i2309[0]
  i2308.width = i2309[1]
  i2308.height = i2309[2]
  i2308.mipmapCount = i2309[3]
  i2308.anisoLevel = i2309[4]
  i2308.filterMode = i2309[5]
  i2308.hdr = !!i2309[6]
  i2308.format = i2309[7]
  i2308.wrapMode = i2309[8]
  i2308.alphaIsTransparency = !!i2309[9]
  i2308.alphaSource = i2309[10]
  i2308.graphicsFormat = i2309[11]
  i2308.sRGBTexture = !!i2309[12]
  i2308.desiredColorSpace = i2309[13]
  i2308.wrapU = i2309[14]
  i2308.wrapV = i2309[15]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2311 = data
  i2310.name = i2311[0]
  i2310.atlasId = i2311[1]
  i2310.mipmapCount = i2311[2]
  i2310.hdr = !!i2311[3]
  i2310.size = i2311[4]
  i2310.anisoLevel = i2311[5]
  i2310.filterMode = i2311[6]
  var i2313 = i2311[7]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 4) {
    i2312.push( UnityEngine.Rect.MinMaxRect(i2313[i + 0], i2313[i + 1], i2313[i + 2], i2313[i + 3]) );
  }
  i2310.rects = i2312
  i2310.wrapU = i2311[8]
  i2310.wrapV = i2311[9]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2317 = data
  i2316.name = i2317[0]
  i2316.index = i2317[1]
  i2316.startup = !!i2317[2]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2319 = data
  i2318.aspect = i2319[0]
  i2318.orthographic = !!i2319[1]
  i2318.orthographicSize = i2319[2]
  i2318.backgroundColor = new pc.Color(i2319[3], i2319[4], i2319[5], i2319[6])
  i2318.nearClipPlane = i2319[7]
  i2318.farClipPlane = i2319[8]
  i2318.fieldOfView = i2319[9]
  i2318.depth = i2319[10]
  i2318.clearFlags = i2319[11]
  i2318.cullingMask = i2319[12]
  i2318.rect = i2319[13]
  request.r(i2319[14], i2319[15], 0, i2318, 'targetTexture')
  i2318.usePhysicalProperties = !!i2319[16]
  i2318.focalLength = i2319[17]
  i2318.sensorSize = new pc.Vec2( i2319[18], i2319[19] )
  i2318.lensShift = new pc.Vec2( i2319[20], i2319[21] )
  i2318.gateFit = i2319[22]
  i2318.commandBufferCount = i2319[23]
  i2318.cameraType = i2319[24]
  i2318.enabled = !!i2319[25]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2321 = data
  i2320.type = i2321[0]
  i2320.color = new pc.Color(i2321[1], i2321[2], i2321[3], i2321[4])
  i2320.cullingMask = i2321[5]
  i2320.intensity = i2321[6]
  i2320.range = i2321[7]
  i2320.spotAngle = i2321[8]
  i2320.shadows = i2321[9]
  i2320.shadowNormalBias = i2321[10]
  i2320.shadowBias = i2321[11]
  i2320.shadowStrength = i2321[12]
  i2320.shadowResolution = i2321[13]
  i2320.lightmapBakeType = i2321[14]
  i2320.renderMode = i2321[15]
  request.r(i2321[16], i2321[17], 0, i2320, 'cookie')
  i2320.cookieSize = i2321[18]
  i2320.shadowNearPlane = i2321[19]
  i2320.occlusionMaskChannel = i2321[20]
  i2320.isBaked = !!i2321[21]
  i2320.mixedLightingMode = i2321[22]
  i2320.enabled = !!i2321[23]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2323 = data
  i2322.ambientIntensity = i2323[0]
  i2322.reflectionIntensity = i2323[1]
  i2322.ambientMode = i2323[2]
  i2322.ambientLight = new pc.Color(i2323[3], i2323[4], i2323[5], i2323[6])
  i2322.ambientSkyColor = new pc.Color(i2323[7], i2323[8], i2323[9], i2323[10])
  i2322.ambientGroundColor = new pc.Color(i2323[11], i2323[12], i2323[13], i2323[14])
  i2322.ambientEquatorColor = new pc.Color(i2323[15], i2323[16], i2323[17], i2323[18])
  i2322.fogColor = new pc.Color(i2323[19], i2323[20], i2323[21], i2323[22])
  i2322.fogEndDistance = i2323[23]
  i2322.fogStartDistance = i2323[24]
  i2322.fogDensity = i2323[25]
  i2322.fog = !!i2323[26]
  request.r(i2323[27], i2323[28], 0, i2322, 'skybox')
  i2322.fogMode = i2323[29]
  var i2325 = i2323[30]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2325[i + 0]) );
  }
  i2322.lightmaps = i2324
  i2322.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2323[31], i2322.lightProbes)
  i2322.lightmapsMode = i2323[32]
  i2322.mixedBakeMode = i2323[33]
  i2322.environmentLightingMode = i2323[34]
  i2322.ambientProbe = new pc.SphericalHarmonicsL2(i2323[35])
  request.r(i2323[36], i2323[37], 0, i2322, 'customReflection')
  request.r(i2323[38], i2323[39], 0, i2322, 'defaultReflection')
  i2322.defaultReflectionMode = i2323[40]
  i2322.defaultReflectionResolution = i2323[41]
  i2322.sunLightObjectId = i2323[42]
  i2322.pixelLightCount = i2323[43]
  i2322.defaultReflectionHDR = !!i2323[44]
  i2322.hasLightDataAsset = !!i2323[45]
  i2322.hasManualGenerate = !!i2323[46]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'lightmapColor')
  request.r(i2329[2], i2329[3], 0, i2328, 'lightmapDirection')
  request.r(i2329[4], i2329[5], 0, i2328, 'shadowMask')
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2330 = root || new UnityEngine.LightProbes()
  var i2331 = data
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2339 = data
  var i2341 = i2339[0]
  var i2340 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2341[i + 0]));
  }
  i2338.ShaderCompilationErrors = i2340
  i2338.name = i2339[1]
  i2338.guid = i2339[2]
  var i2343 = i2339[3]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( i2343[i + 0] );
  }
  i2338.shaderDefinedKeywords = i2342
  var i2345 = i2339[4]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2345[i + 0]) );
  }
  i2338.passes = i2344
  var i2347 = i2339[5]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2347[i + 0]) );
  }
  i2338.usePasses = i2346
  var i2349 = i2339[6]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2349[i + 0]) );
  }
  i2338.defaultParameterValues = i2348
  request.r(i2339[7], i2339[8], 0, i2338, 'unityFallbackShader')
  i2338.readDepth = !!i2339[9]
  i2338.hasDepthOnlyPass = !!i2339[10]
  i2338.isCreatedByShaderGraph = !!i2339[11]
  i2338.disableBatching = !!i2339[12]
  i2338.compiled = !!i2339[13]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2353 = data
  i2352.shaderName = i2353[0]
  i2352.errorMessage = i2353[1]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2358 = root || new pc.UnityShaderPass()
  var i2359 = data
  i2358.id = i2359[0]
  i2358.subShaderIndex = i2359[1]
  i2358.name = i2359[2]
  i2358.passType = i2359[3]
  i2358.grabPassTextureName = i2359[4]
  i2358.usePass = !!i2359[5]
  i2358.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2359[6], i2358.zTest)
  i2358.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2359[7], i2358.zWrite)
  i2358.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2359[8], i2358.culling)
  i2358.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2359[9], i2358.blending)
  i2358.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2359[10], i2358.alphaBlending)
  i2358.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2359[11], i2358.colorWriteMask)
  i2358.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2359[12], i2358.offsetUnits)
  i2358.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2359[13], i2358.offsetFactor)
  i2358.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2359[14], i2358.stencilRef)
  i2358.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2359[15], i2358.stencilReadMask)
  i2358.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2359[16], i2358.stencilWriteMask)
  i2358.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2359[17], i2358.stencilOp)
  i2358.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2359[18], i2358.stencilOpFront)
  i2358.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2359[19], i2358.stencilOpBack)
  var i2361 = i2359[20]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2361[i + 0]) );
  }
  i2358.tags = i2360
  var i2363 = i2359[21]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( i2363[i + 0] );
  }
  i2358.passDefinedKeywords = i2362
  var i2365 = i2359[22]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2365[i + 0]) );
  }
  i2358.passDefinedKeywordGroups = i2364
  var i2367 = i2359[23]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2367[i + 0]) );
  }
  i2358.variants = i2366
  var i2369 = i2359[24]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2369[i + 0]) );
  }
  i2358.excludedVariants = i2368
  i2358.hasDepthReader = !!i2359[25]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2371 = data
  i2370.val = i2371[0]
  i2370.name = i2371[1]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2373 = data
  i2372.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2373[0], i2372.src)
  i2372.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2373[1], i2372.dst)
  i2372.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2373[2], i2372.op)
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2375 = data
  i2374.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[0], i2374.pass)
  i2374.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[1], i2374.fail)
  i2374.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[2], i2374.zFail)
  i2374.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[3], i2374.comp)
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2379 = data
  i2378.name = i2379[0]
  i2378.value = i2379[1]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2383 = data
  var i2385 = i2383[0]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( i2385[i + 0] );
  }
  i2382.keywords = i2384
  i2382.hasDiscard = !!i2383[1]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2389 = data
  i2388.passId = i2389[0]
  i2388.subShaderIndex = i2389[1]
  var i2391 = i2389[2]
  var i2390 = []
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.push( i2391[i + 0] );
  }
  i2388.keywords = i2390
  i2388.vertexProgram = i2389[3]
  i2388.fragmentProgram = i2389[4]
  i2388.exportedForWebGl2 = !!i2389[5]
  i2388.readDepth = !!i2389[6]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'shader')
  i2394.pass = i2395[2]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2399 = data
  i2398.name = i2399[0]
  i2398.type = i2399[1]
  i2398.value = new pc.Vec4( i2399[2], i2399[3], i2399[4], i2399[5] )
  i2398.textureValue = i2399[6]
  i2398.shaderPropertyFlag = i2399[7]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2401 = data
  i2400.name = i2401[0]
  i2400.wrapMode = i2401[1]
  i2400.isLooping = !!i2401[2]
  i2400.length = i2401[3]
  var i2403 = i2401[4]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2403[i + 0]) );
  }
  i2400.curves = i2402
  var i2405 = i2401[5]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2405[i + 0]) );
  }
  i2400.events = i2404
  i2400.halfPrecision = !!i2401[6]
  i2400._frameRate = i2401[7]
  i2400.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2401[8], i2400.localBounds)
  i2400.hasMuscleCurves = !!i2401[9]
  var i2407 = i2401[10]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( i2407[i + 0] );
  }
  i2400.clipMuscleConstant = i2406
  i2400.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2401[11], i2400.clipBindingConstant)
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2411 = data
  i2410.path = i2411[0]
  i2410.hash = i2411[1]
  i2410.componentType = i2411[2]
  i2410.property = i2411[3]
  i2410.keys = i2411[4]
  var i2413 = i2411[5]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2413[i + 0]) );
  }
  i2410.objectReferenceKeys = i2412
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2417 = data
  i2416.time = i2417[0]
  request.r(i2417[1], i2417[2], 0, i2416, 'value')
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2421 = data
  i2420.functionName = i2421[0]
  i2420.floatParameter = i2421[1]
  i2420.intParameter = i2421[2]
  i2420.stringParameter = i2421[3]
  request.r(i2421[4], i2421[5], 0, i2420, 'objectReferenceParameter')
  i2420.time = i2421[6]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2423 = data
  i2422.center = new pc.Vec3( i2423[0], i2423[1], i2423[2] )
  i2422.extends = new pc.Vec3( i2423[3], i2423[4], i2423[5] )
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2427 = data
  var i2429 = i2427[0]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( i2429[i + 0] );
  }
  i2426.genericBindings = i2428
  var i2431 = i2427[1]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( i2431[i + 0] );
  }
  i2426.pptrCurveMapping = i2430
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2433 = data
  i2432.name = i2433[0]
  i2432.blendParameter = i2433[1]
  i2432.blendParameterY = i2433[2]
  i2432.blendType = i2433[3]
  var i2435 = i2433[4]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2435[i + 0]) );
  }
  i2432.children = i2434
  i2432.useAutomaticThresholds = !!i2433[5]
  i2432.minThreshold = i2433[6]
  i2432.maxThreshold = i2433[7]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'motion')
  i2438.threshold = i2439[2]
  i2438.position = new pc.Vec2( i2439[3], i2439[4] )
  i2438.timeScale = i2439[5]
  i2438.cycleOffset = i2439[6]
  i2438.directBlendParameter = i2439[7]
  i2438.mirror = !!i2439[8]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2441 = data
  i2440.name = i2441[0]
  var i2443 = i2441[1]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2443[i + 0]) );
  }
  i2440.layers = i2442
  var i2445 = i2441[2]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2445[i + 0]) );
  }
  i2440.parameters = i2444
  i2440.animationClips = i2441[3]
  i2440.avatarUnsupported = i2441[4]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2449 = data
  i2448.name = i2449[0]
  i2448.defaultWeight = i2449[1]
  i2448.blendingMode = i2449[2]
  i2448.avatarMask = i2449[3]
  i2448.syncedLayerIndex = i2449[4]
  i2448.syncedLayerAffectsTiming = !!i2449[5]
  i2448.syncedLayers = i2449[6]
  i2448.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2449[7], i2448.stateMachine)
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2451 = data
  i2450.id = i2451[0]
  i2450.name = i2451[1]
  i2450.path = i2451[2]
  var i2453 = i2451[3]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2453[i + 0]) );
  }
  i2450.states = i2452
  var i2455 = i2451[4]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2455[i + 0]) );
  }
  i2450.machines = i2454
  var i2457 = i2451[5]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2457[i + 0]) );
  }
  i2450.entryStateTransitions = i2456
  var i2459 = i2451[6]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2459[i + 0]) );
  }
  i2450.exitStateTransitions = i2458
  var i2461 = i2451[7]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2461[i + 0]) );
  }
  i2450.anyStateTransitions = i2460
  i2450.defaultStateId = i2451[8]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2465 = data
  i2464.id = i2465[0]
  i2464.name = i2465[1]
  i2464.cycleOffset = i2465[2]
  i2464.cycleOffsetParameter = i2465[3]
  i2464.cycleOffsetParameterActive = !!i2465[4]
  i2464.mirror = !!i2465[5]
  i2464.mirrorParameter = i2465[6]
  i2464.mirrorParameterActive = !!i2465[7]
  i2464.motionId = i2465[8]
  i2464.nameHash = i2465[9]
  i2464.fullPathHash = i2465[10]
  i2464.speed = i2465[11]
  i2464.speedParameter = i2465[12]
  i2464.speedParameterActive = !!i2465[13]
  i2464.tag = i2465[14]
  i2464.tagHash = i2465[15]
  i2464.writeDefaultValues = !!i2465[16]
  var i2467 = i2465[17]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 2) {
  request.r(i2467[i + 0], i2467[i + 1], 2, i2466, '')
  }
  i2464.behaviours = i2466
  var i2469 = i2465[18]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2469[i + 0]) );
  }
  i2464.transitions = i2468
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2475 = data
  i2474.fullPath = i2475[0]
  i2474.canTransitionToSelf = !!i2475[1]
  i2474.duration = i2475[2]
  i2474.exitTime = i2475[3]
  i2474.hasExitTime = !!i2475[4]
  i2474.hasFixedDuration = !!i2475[5]
  i2474.interruptionSource = i2475[6]
  i2474.offset = i2475[7]
  i2474.orderedInterruption = !!i2475[8]
  i2474.destinationStateId = i2475[9]
  i2474.isExit = !!i2475[10]
  i2474.mute = !!i2475[11]
  i2474.solo = !!i2475[12]
  var i2477 = i2475[13]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2477[i + 0]) );
  }
  i2474.conditions = i2476
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2481 = data
  i2480.mode = i2481[0]
  i2480.parameter = i2481[1]
  i2480.threshold = i2481[2]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2487 = data
  i2486.destinationStateId = i2487[0]
  i2486.isExit = !!i2487[1]
  i2486.mute = !!i2487[2]
  i2486.solo = !!i2487[3]
  var i2489 = i2487[4]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2489[i + 0]) );
  }
  i2486.conditions = i2488
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2493 = data
  i2492.defaultBool = !!i2493[0]
  i2492.defaultFloat = i2493[1]
  i2492.defaultInt = i2493[2]
  i2492.name = i2493[3]
  i2492.nameHash = i2493[4]
  i2492.type = i2493[5]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2495 = data
  i2494.name = i2495[0]
  request.r(i2495[1], i2495[2], 0, i2494, '_runtimeAnimatorController')
  var i2497 = i2495[3]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 2) {
  request.r(i2497[i + 0], i2497[i + 1], 2, i2496, '')
  }
  i2494._originalAnimationClips = i2496
  var i2499 = i2495[4]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 2, i2498, '')
  }
  i2494._overrideAnimationClips = i2498
  var i2501 = i2495[5]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 2) {
  request.r(i2501[i + 0], i2501[i + 1], 2, i2500, '')
  }
  i2494._animationClips = i2500
  var i2503 = i2495[6]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('UnityEngine.AnimationClipPair', i2503[i + 0]) );
  }
  i2494._animationClipPairs = i2502
  return i2494
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2509 = data
  request.r(i2509[0], i2509[1], 0, i2508, 'originalClip')
  request.r(i2509[2], i2509[3], 0, i2508, 'overrideClip')
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2511 = data
  var i2513 = i2511[0]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2513[i + 0]) );
  }
  i2510.files = i2512
  i2510.componentToPrefabIds = i2511[1]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2517 = data
  i2516.path = i2517[0]
  request.r(i2517[1], i2517[2], 0, i2516, 'unityObject')
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2519 = data
  var i2521 = i2519[0]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2521[i + 0]) );
  }
  i2518.scriptsExecutionOrder = i2520
  var i2523 = i2519[1]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2523[i + 0]) );
  }
  i2518.sortingLayers = i2522
  var i2525 = i2519[2]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2525[i + 0]) );
  }
  i2518.cullingLayers = i2524
  i2518.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2519[3], i2518.timeSettings)
  i2518.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2519[4], i2518.physicsSettings)
  i2518.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2519[5], i2518.physics2DSettings)
  i2518.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2519[6], i2518.qualitySettings)
  i2518.enableRealtimeShadows = !!i2519[7]
  i2518.enableAutoInstancing = !!i2519[8]
  i2518.enableStaticBatching = !!i2519[9]
  i2518.enableDynamicBatching = !!i2519[10]
  i2518.usePreservativeDynamicBatching = !!i2519[11]
  i2518.lightmapEncodingQuality = i2519[12]
  i2518.desiredColorSpace = i2519[13]
  var i2527 = i2519[14]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( i2527[i + 0] );
  }
  i2518.allTags = i2526
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2531 = data
  i2530.name = i2531[0]
  i2530.value = i2531[1]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2535 = data
  i2534.id = i2535[0]
  i2534.name = i2535[1]
  i2534.value = i2535[2]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2539 = data
  i2538.id = i2539[0]
  i2538.name = i2539[1]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2541 = data
  i2540.fixedDeltaTime = i2541[0]
  i2540.maximumDeltaTime = i2541[1]
  i2540.timeScale = i2541[2]
  i2540.maximumParticleTimestep = i2541[3]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2543 = data
  i2542.gravity = new pc.Vec3( i2543[0], i2543[1], i2543[2] )
  i2542.defaultSolverIterations = i2543[3]
  i2542.bounceThreshold = i2543[4]
  i2542.autoSyncTransforms = !!i2543[5]
  i2542.autoSimulation = !!i2543[6]
  var i2545 = i2543[7]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2545[i + 0]) );
  }
  i2542.collisionMatrix = i2544
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2549 = data
  i2548.enabled = !!i2549[0]
  i2548.layerId = i2549[1]
  i2548.otherLayerId = i2549[2]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2551 = data
  request.r(i2551[0], i2551[1], 0, i2550, 'material')
  i2550.gravity = new pc.Vec2( i2551[2], i2551[3] )
  i2550.positionIterations = i2551[4]
  i2550.velocityIterations = i2551[5]
  i2550.velocityThreshold = i2551[6]
  i2550.maxLinearCorrection = i2551[7]
  i2550.maxAngularCorrection = i2551[8]
  i2550.maxTranslationSpeed = i2551[9]
  i2550.maxRotationSpeed = i2551[10]
  i2550.baumgarteScale = i2551[11]
  i2550.baumgarteTOIScale = i2551[12]
  i2550.timeToSleep = i2551[13]
  i2550.linearSleepTolerance = i2551[14]
  i2550.angularSleepTolerance = i2551[15]
  i2550.defaultContactOffset = i2551[16]
  i2550.autoSimulation = !!i2551[17]
  i2550.queriesHitTriggers = !!i2551[18]
  i2550.queriesStartInColliders = !!i2551[19]
  i2550.callbacksOnDisable = !!i2551[20]
  i2550.reuseCollisionCallbacks = !!i2551[21]
  i2550.autoSyncTransforms = !!i2551[22]
  var i2553 = i2551[23]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2553[i + 0]) );
  }
  i2550.collisionMatrix = i2552
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2557 = data
  i2556.enabled = !!i2557[0]
  i2556.layerId = i2557[1]
  i2556.otherLayerId = i2557[2]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2559 = data
  var i2561 = i2559[0]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2561[i + 0]) );
  }
  i2558.qualityLevels = i2560
  var i2563 = i2559[1]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( i2563[i + 0] );
  }
  i2558.names = i2562
  i2558.shadows = i2559[2]
  i2558.anisotropicFiltering = i2559[3]
  i2558.antiAliasing = i2559[4]
  i2558.lodBias = i2559[5]
  i2558.shadowCascades = i2559[6]
  i2558.shadowDistance = i2559[7]
  i2558.shadowmaskMode = i2559[8]
  i2558.shadowProjection = i2559[9]
  i2558.shadowResolution = i2559[10]
  i2558.softParticles = !!i2559[11]
  i2558.softVegetation = !!i2559[12]
  i2558.activeColorSpace = i2559[13]
  i2558.desiredColorSpace = i2559[14]
  i2558.masterTextureLimit = i2559[15]
  i2558.maxQueuedFrames = i2559[16]
  i2558.particleRaycastBudget = i2559[17]
  i2558.pixelLightCount = i2559[18]
  i2558.realtimeReflectionProbes = !!i2559[19]
  i2558.shadowCascade2Split = i2559[20]
  i2558.shadowCascade4Split = new pc.Vec3( i2559[21], i2559[22], i2559[23] )
  i2558.streamingMipmapsActive = !!i2559[24]
  i2558.vSyncCount = i2559[25]
  i2558.asyncUploadBufferSize = i2559[26]
  i2558.asyncUploadTimeSlice = i2559[27]
  i2558.billboardsFaceCameraPosition = !!i2559[28]
  i2558.shadowNearPlaneOffset = i2559[29]
  i2558.streamingMipmapsMemoryBudget = i2559[30]
  i2558.maximumLODLevel = i2559[31]
  i2558.streamingMipmapsAddAllCameras = !!i2559[32]
  i2558.streamingMipmapsMaxLevelReduction = i2559[33]
  i2558.streamingMipmapsRenderersPerFrame = i2559[34]
  i2558.resolutionScalingFixedDPIFactor = i2559[35]
  i2558.streamingMipmapsMaxFileIORequests = i2559[36]
  i2558.currentQualityLevel = i2559[37]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2567 = data
  i2566.name = i2567[0]
  var i2569 = i2567[1]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2569[i + 0]) );
  }
  i2566.tos = i2568
  var i2571 = i2567[2]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( i2571[i + 0] );
  }
  i2566.constant = i2570
  i2566.isValid = !!i2567[3]
  i2566.isHuman = !!i2567[4]
  i2566.hasRootMotion = !!i2567[5]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2575 = data
  i2574.hash = i2575[0]
  i2574.path = i2575[1]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2579 = data
  i2578.weight = i2579[0]
  i2578.vertices = i2579[1]
  i2578.normals = i2579[2]
  i2578.tangents = i2579[3]
  return i2578
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1}}

Deserializers.requiredComponents = {"19":[20],"21":[20],"22":[20],"23":[20],"24":[20],"25":[20],"26":[11],"27":[13],"28":[29],"30":[29],"31":[29],"32":[29],"33":[29],"34":[29],"35":[36],"37":[36],"38":[36],"39":[36],"40":[36],"41":[36],"42":[36],"43":[36],"44":[36],"45":[36],"46":[36],"47":[36],"48":[36],"49":[13],"50":[6],"51":[52],"53":[52],"54":[55],"56":[55],"57":[58,55],"59":[6],"60":[58,55],"61":[55],"62":[55],"63":[6,55],"64":[55,58],"65":[66],"67":[66],"68":[66],"69":[55],"70":[55],"71":[54],"72":[58,55],"73":[55],"74":[54],"75":[55],"76":[55],"77":[55],"78":[55],"79":[55],"80":[55],"81":[55],"82":[55],"83":[55],"84":[58,55],"85":[55],"86":[55],"87":[55],"88":[55],"89":[58,55],"90":[55],"91":[92],"93":[92],"94":[92],"95":[92],"96":[13],"97":[13]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Animator","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Cubemap","UnityEditor.Animations.BlendTree","UnityEngine.AnimationClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","UnityEngine.CanvasRenderer","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "07/27/2026 10:05:42";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "39964";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1816";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3341";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "b39d437e-421c-4b2e-8d2f-fbc900445f3e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

