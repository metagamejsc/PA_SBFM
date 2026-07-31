var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointSpring' )
  var i727 = data
  i726.spring = i727[0]
  i726.damper = i727[1]
  i726.targetPosition = i727[2]
  return i726
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointMotor' )
  var i729 = data
  i728.m_TargetVelocity = i729[0]
  i728.m_Force = i729[1]
  i728.m_FreeSpin = i729[2]
  return i728
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointLimits' )
  var i731 = data
  i730.m_Min = i731[0]
  i730.m_Max = i731[1]
  i730.m_Bounciness = i731[2]
  i730.m_BounceMinVelocity = i731[3]
  i730.m_ContactDistance = i731[4]
  i730.minBounce = i731[5]
  i730.maxBounce = i731[6]
  return i730
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointDrive' )
  var i733 = data
  i732.m_PositionSpring = i733[0]
  i732.m_PositionDamper = i733[1]
  i732.m_MaximumForce = i733[2]
  i732.m_UseAcceleration = i733[3]
  return i732
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i735 = data
  i734.m_Spring = i735[0]
  i734.m_Damper = i735[1]
  return i734
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i737 = data
  i736.m_Limit = i737[0]
  i736.m_Bounciness = i737[1]
  i736.m_ContactDistance = i737[2]
  return i736
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i739 = data
  i738.m_ExtremumSlip = i739[0]
  i738.m_ExtremumValue = i739[1]
  i738.m_AsymptoteSlip = i739[2]
  i738.m_AsymptoteValue = i739[3]
  i738.m_Stiffness = i739[4]
  return i738
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i741 = data
  i740.m_LowerAngle = i741[0]
  i740.m_UpperAngle = i741[1]
  return i740
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i743 = data
  i742.m_MotorSpeed = i743[0]
  i742.m_MaximumMotorTorque = i743[1]
  return i742
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i745 = data
  i744.m_DampingRatio = i745[0]
  i744.m_Frequency = i745[1]
  i744.m_Angle = i745[2]
  return i744
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i747 = data
  i746.m_LowerTranslation = i747[0]
  i746.m_UpperTranslation = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i749 = data
  i748.name = i749[0]
  i748.width = i749[1]
  i748.height = i749[2]
  i748.mipmapCount = i749[3]
  i748.anisoLevel = i749[4]
  i748.filterMode = i749[5]
  i748.hdr = !!i749[6]
  i748.format = i749[7]
  i748.wrapMode = i749[8]
  i748.alphaIsTransparency = !!i749[9]
  i748.alphaSource = i749[10]
  i748.graphicsFormat = i749[11]
  i748.sRGBTexture = !!i749[12]
  i748.desiredColorSpace = i749[13]
  i748.wrapU = i749[14]
  i748.wrapV = i749[15]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i750 = root || new pc.UnityMaterial()
  var i751 = data
  i750.name = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'shader')
  i750.renderQueue = i751[3]
  i750.enableInstancing = !!i751[4]
  var i753 = i751[5]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i753[i + 0]) );
  }
  i750.floatParameters = i752
  var i755 = i751[6]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i755[i + 0]) );
  }
  i750.colorParameters = i754
  var i757 = i751[7]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i757[i + 0]) );
  }
  i750.vectorParameters = i756
  var i759 = i751[8]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i759[i + 0]) );
  }
  i750.textureParameters = i758
  var i761 = i751[9]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i761[i + 0]) );
  }
  i750.materialFlags = i760
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i765 = data
  i764.name = i765[0]
  i764.value = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i769 = data
  i768.name = i769[0]
  i768.value = new pc.Color(i769[1], i769[2], i769[3], i769[4])
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i773 = data
  i772.name = i773[0]
  i772.value = new pc.Vec4( i773[1], i773[2], i773[3], i773[4] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i777 = data
  i776.name = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'value')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i781 = data
  i780.name = i781[0]
  i780.enabled = !!i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i783 = data
  i782.name = i783[0]
  i782.halfPrecision = !!i783[1]
  i782.useSimplification = !!i783[2]
  i782.useUInt32IndexFormat = !!i783[3]
  i782.vertexCount = i783[4]
  i782.aabb = i783[5]
  var i785 = i783[6]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( !!i785[i + 0] );
  }
  i782.streams = i784
  i782.vertices = i783[7]
  var i787 = i783[8]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i787[i + 0]) );
  }
  i782.subMeshes = i786
  var i789 = i783[9]
  var i788 = []
  for(var i = 0; i < i789.length; i += 16) {
    i788.push( new pc.Mat4().setData(i789[i + 0], i789[i + 1], i789[i + 2], i789[i + 3],  i789[i + 4], i789[i + 5], i789[i + 6], i789[i + 7],  i789[i + 8], i789[i + 9], i789[i + 10], i789[i + 11],  i789[i + 12], i789[i + 13], i789[i + 14], i789[i + 15]) );
  }
  i782.bindposes = i788
  var i791 = i783[10]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i791[i + 0]) );
  }
  i782.blendShapes = i790
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i797 = data
  i796.triangles = i797[0]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i803 = data
  i802.name = i803[0]
  var i805 = i803[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i805[i + 0]) );
  }
  i802.frames = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i807 = data
  i806.position = new pc.Vec3( i807[0], i807[1], i807[2] )
  i806.scale = new pc.Vec3( i807[3], i807[4], i807[5] )
  i806.rotation = new pc.Quat(i807[6], i807[7], i807[8], i807[9])
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'sharedMesh')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'additionalVertexStreams')
  i810.enabled = !!i811[2]
  request.r(i811[3], i811[4], 0, i810, 'sharedMaterial')
  var i813 = i811[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.sharedMaterials = i812
  i810.receiveShadows = !!i811[6]
  i810.shadowCastingMode = i811[7]
  i810.sortingLayerID = i811[8]
  i810.sortingOrder = i811[9]
  i810.lightmapIndex = i811[10]
  i810.lightmapSceneIndex = i811[11]
  i810.lightmapScaleOffset = new pc.Vec4( i811[12], i811[13], i811[14], i811[15] )
  i810.lightProbeUsage = i811[16]
  i810.reflectionProbeUsage = i811[17]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'sharedMesh')
  i816.convex = !!i817[2]
  i816.enabled = !!i817[3]
  i816.isTrigger = !!i817[4]
  request.r(i817[5], i817[6], 0, i816, 'material')
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i819 = data
  i818.name = i819[0]
  i818.tagId = i819[1]
  i818.enabled = !!i819[2]
  i818.isStatic = !!i819[3]
  i818.layer = i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i821 = data
  i820.center = new pc.Vec3( i821[0], i821[1], i821[2] )
  i820.radius = i821[3]
  i820.height = i821[4]
  i820.direction = i821[5]
  i820.enabled = !!i821[6]
  i820.isTrigger = !!i821[7]
  request.r(i821[8], i821[9], 0, i820, 'material')
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i823 = data
  i822.center = new pc.Vec3( i823[0], i823[1], i823[2] )
  i822.size = new pc.Vec3( i823[3], i823[4], i823[5] )
  i822.enabled = !!i823[6]
  i822.isTrigger = !!i823[7]
  request.r(i823[8], i823[9], 0, i822, 'material')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'animatorController')
  request.r(i825[2], i825[3], 0, i824, 'avatar')
  i824.updateMode = i825[4]
  i824.hasTransformHierarchy = !!i825[5]
  i824.applyRootMotion = !!i825[6]
  var i827 = i825[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.humanBones = i826
  i824.enabled = !!i825[8]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i831 = data
  i830.name = i831[0]
  i830.atlasId = i831[1]
  i830.mipmapCount = i831[2]
  i830.hdr = !!i831[3]
  i830.size = i831[4]
  i830.anisoLevel = i831[5]
  i830.filterMode = i831[6]
  var i833 = i831[7]
  var i832 = []
  for(var i = 0; i < i833.length; i += 4) {
    i832.push( UnityEngine.Rect.MinMaxRect(i833[i + 0], i833[i + 1], i833[i + 2], i833[i + 3]) );
  }
  i830.rects = i832
  i830.wrapU = i831[8]
  i830.wrapV = i831[9]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i837 = data
  i836.name = i837[0]
  i836.index = i837[1]
  i836.startup = !!i837[2]
  return i836
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_FirstSelected')
  i838.m_sendNavigationEvents = !!i839[2]
  i838.m_DragThreshold = i839[3]
  return i838
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i841 = data
  i840.m_HorizontalAxis = i841[0]
  i840.m_VerticalAxis = i841[1]
  i840.m_SubmitButton = i841[2]
  i840.m_CancelButton = i841[3]
  i840.m_InputActionsPerSecond = i841[4]
  i840.m_RepeatDelay = i841[5]
  i840.m_ForceModuleActive = !!i841[6]
  i840.m_SendPointerHoverToParent = !!i841[7]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i843 = data
  i842.type = i843[0]
  i842.color = new pc.Color(i843[1], i843[2], i843[3], i843[4])
  i842.cullingMask = i843[5]
  i842.intensity = i843[6]
  i842.range = i843[7]
  i842.spotAngle = i843[8]
  i842.shadows = i843[9]
  i842.shadowNormalBias = i843[10]
  i842.shadowBias = i843[11]
  i842.shadowStrength = i843[12]
  i842.shadowResolution = i843[13]
  i842.lightmapBakeType = i843[14]
  i842.renderMode = i843[15]
  request.r(i843[16], i843[17], 0, i842, 'cookie')
  i842.cookieSize = i843[18]
  i842.shadowNearPlane = i843[19]
  i842.occlusionMaskChannel = i843[20]
  i842.isBaked = !!i843[21]
  i842.mixedLightingMode = i843[22]
  i842.enabled = !!i843[23]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i845 = data
  i844.pivot = new pc.Vec2( i845[0], i845[1] )
  i844.anchorMin = new pc.Vec2( i845[2], i845[3] )
  i844.anchorMax = new pc.Vec2( i845[4], i845[5] )
  i844.sizeDelta = new pc.Vec2( i845[6], i845[7] )
  i844.anchoredPosition3D = new pc.Vec3( i845[8], i845[9], i845[10] )
  i844.rotation = new pc.Quat(i845[11], i845[12], i845[13], i845[14])
  i844.scale = new pc.Vec3( i845[15], i845[16], i845[17] )
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i847 = data
  i846.planeDistance = i847[0]
  i846.referencePixelsPerUnit = i847[1]
  i846.isFallbackOverlay = !!i847[2]
  i846.renderMode = i847[3]
  i846.renderOrder = i847[4]
  i846.sortingLayerName = i847[5]
  i846.sortingOrder = i847[6]
  i846.scaleFactor = i847[7]
  request.r(i847[8], i847[9], 0, i846, 'worldCamera')
  i846.overrideSorting = !!i847[10]
  i846.pixelPerfect = !!i847[11]
  i846.targetDisplay = i847[12]
  i846.overridePixelPerfect = !!i847[13]
  i846.enabled = !!i847[14]
  return i846
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i849 = data
  i848.m_UiScaleMode = i849[0]
  i848.m_ReferencePixelsPerUnit = i849[1]
  i848.m_ScaleFactor = i849[2]
  i848.m_ReferenceResolution = new pc.Vec2( i849[3], i849[4] )
  i848.m_ScreenMatchMode = i849[5]
  i848.m_MatchWidthOrHeight = i849[6]
  i848.m_PhysicalUnit = i849[7]
  i848.m_FallbackScreenDPI = i849[8]
  i848.m_DefaultSpriteDPI = i849[9]
  i848.m_DynamicPixelsPerUnit = i849[10]
  i848.m_PresetInfoIsWorld = !!i849[11]
  return i848
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i851 = data
  i850.m_IgnoreReversedGraphics = !!i851[0]
  i850.m_BlockingObjects = i851[1]
  i850.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i851[2] )
  return i850
}

Deserializers["Joystick"] = function (request, data, root) {
  var i852 = root || request.c( 'Joystick' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'background')
  request.r(i853[2], i853[3], 0, i852, 'joy')
  i852.deadZone = i853[4]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i855 = data
  i854.cullTransparentMesh = !!i855[0]
  return i854
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.Image' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'm_Sprite')
  i856.m_Type = i857[2]
  i856.m_PreserveAspect = !!i857[3]
  i856.m_FillCenter = !!i857[4]
  i856.m_FillMethod = i857[5]
  i856.m_FillAmount = i857[6]
  i856.m_FillClockwise = !!i857[7]
  i856.m_FillOrigin = i857[8]
  i856.m_UseSpriteMesh = !!i857[9]
  i856.m_PixelsPerUnitMultiplier = i857[10]
  request.r(i857[11], i857[12], 0, i856, 'm_Material')
  i856.m_Maskable = !!i857[13]
  i856.m_Color = new pc.Color(i857[14], i857[15], i857[16], i857[17])
  i856.m_RaycastTarget = !!i857[18]
  i856.m_RaycastPadding = new pc.Vec4( i857[19], i857[20], i857[21], i857[22] )
  return i856
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i858 = root || request.c( 'JumpButton' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'button')
  return i858
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.Button' )
  var i861 = data
  i860.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i861[0], i860.m_OnClick)
  i860.m_Navigation = request.d('UnityEngine.UI.Navigation', i861[1], i860.m_Navigation)
  i860.m_Transition = i861[2]
  i860.m_Colors = request.d('UnityEngine.UI.ColorBlock', i861[3], i860.m_Colors)
  i860.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i861[4], i860.m_SpriteState)
  i860.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i861[5], i860.m_AnimationTriggers)
  i860.m_Interactable = !!i861[6]
  request.r(i861[7], i861[8], 0, i860, 'm_TargetGraphic')
  return i860
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i863 = data
  i862.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i863[0], i862.m_PersistentCalls)
  return i862
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i865 = data
  var i867 = i865[0]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('UnityEngine.Events.PersistentCall', i867[i + 0]));
  }
  i864.m_Calls = i866
  return i864
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'm_Target')
  i870.m_TargetAssemblyTypeName = i871[2]
  i870.m_MethodName = i871[3]
  i870.m_Mode = i871[4]
  i870.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i871[5], i870.m_Arguments)
  i870.m_CallState = i871[6]
  return i870
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i873 = data
  i872.m_Mode = i873[0]
  i872.m_WrapAround = !!i873[1]
  request.r(i873[2], i873[3], 0, i872, 'm_SelectOnUp')
  request.r(i873[4], i873[5], 0, i872, 'm_SelectOnDown')
  request.r(i873[6], i873[7], 0, i872, 'm_SelectOnLeft')
  request.r(i873[8], i873[9], 0, i872, 'm_SelectOnRight')
  return i872
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i875 = data
  i874.m_NormalColor = new pc.Color(i875[0], i875[1], i875[2], i875[3])
  i874.m_HighlightedColor = new pc.Color(i875[4], i875[5], i875[6], i875[7])
  i874.m_PressedColor = new pc.Color(i875[8], i875[9], i875[10], i875[11])
  i874.m_SelectedColor = new pc.Color(i875[12], i875[13], i875[14], i875[15])
  i874.m_DisabledColor = new pc.Color(i875[16], i875[17], i875[18], i875[19])
  i874.m_ColorMultiplier = i875[20]
  i874.m_FadeDuration = i875[21]
  return i874
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_HighlightedSprite')
  request.r(i877[2], i877[3], 0, i876, 'm_PressedSprite')
  request.r(i877[4], i877[5], 0, i876, 'm_SelectedSprite')
  request.r(i877[6], i877[7], 0, i876, 'm_DisabledSprite')
  return i876
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i879 = data
  i878.m_NormalTrigger = i879[0]
  i878.m_HighlightedTrigger = i879[1]
  i878.m_PressedTrigger = i879[2]
  i878.m_SelectedTrigger = i879[3]
  i878.m_DisabledTrigger = i879[4]
  return i878
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.Mask' )
  var i881 = data
  i880.m_ShowMaskGraphic = !!i881[0]
  return i880
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i883 = data
  i882.m_hasFontAssetChanged = !!i883[0]
  request.r(i883[1], i883[2], 0, i882, 'm_baseMaterial')
  i882.m_maskOffset = new pc.Vec4( i883[3], i883[4], i883[5], i883[6] )
  i882.m_text = i883[7]
  i882.m_isRightToLeft = !!i883[8]
  request.r(i883[9], i883[10], 0, i882, 'm_fontAsset')
  request.r(i883[11], i883[12], 0, i882, 'm_sharedMaterial')
  var i885 = i883[13]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.m_fontSharedMaterials = i884
  request.r(i883[14], i883[15], 0, i882, 'm_fontMaterial')
  var i887 = i883[16]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i882.m_fontMaterials = i886
  i882.m_fontColor32 = UnityEngine.Color32.ConstructColor(i883[17], i883[18], i883[19], i883[20])
  i882.m_fontColor = new pc.Color(i883[21], i883[22], i883[23], i883[24])
  i882.m_enableVertexGradient = !!i883[25]
  i882.m_colorMode = i883[26]
  i882.m_fontColorGradient = request.d('TMPro.VertexGradient', i883[27], i882.m_fontColorGradient)
  request.r(i883[28], i883[29], 0, i882, 'm_fontColorGradientPreset')
  request.r(i883[30], i883[31], 0, i882, 'm_spriteAsset')
  i882.m_tintAllSprites = !!i883[32]
  request.r(i883[33], i883[34], 0, i882, 'm_StyleSheet')
  i882.m_TextStyleHashCode = i883[35]
  i882.m_overrideHtmlColors = !!i883[36]
  i882.m_faceColor = UnityEngine.Color32.ConstructColor(i883[37], i883[38], i883[39], i883[40])
  i882.m_fontSize = i883[41]
  i882.m_fontSizeBase = i883[42]
  i882.m_fontWeight = i883[43]
  i882.m_enableAutoSizing = !!i883[44]
  i882.m_fontSizeMin = i883[45]
  i882.m_fontSizeMax = i883[46]
  i882.m_fontStyle = i883[47]
  i882.m_HorizontalAlignment = i883[48]
  i882.m_VerticalAlignment = i883[49]
  i882.m_textAlignment = i883[50]
  i882.m_characterSpacing = i883[51]
  i882.m_characterHorizontalScale = i883[52]
  i882.m_wordSpacing = i883[53]
  i882.m_lineSpacing = i883[54]
  i882.m_lineSpacingMax = i883[55]
  i882.m_paragraphSpacing = i883[56]
  i882.m_charWidthMaxAdj = i883[57]
  i882.m_TextWrappingMode = i883[58]
  i882.m_wordWrappingRatios = i883[59]
  i882.m_overflowMode = i883[60]
  request.r(i883[61], i883[62], 0, i882, 'm_linkedTextComponent')
  request.r(i883[63], i883[64], 0, i882, 'parentLinkedComponent')
  i882.m_enableKerning = !!i883[65]
  var i889 = i883[66]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(i889[i + 0]);
  }
  i882.m_ActiveFontFeatures = i888
  i882.m_enableExtraPadding = !!i883[67]
  i882.checkPaddingRequired = !!i883[68]
  i882.m_isRichText = !!i883[69]
  i882.m_parseCtrlCharacters = !!i883[70]
  i882.m_isOrthographic = !!i883[71]
  i882.m_isCullingEnabled = !!i883[72]
  i882.m_horizontalMapping = i883[73]
  i882.m_verticalMapping = i883[74]
  i882.m_uvLineOffset = i883[75]
  i882.m_geometrySortingOrder = i883[76]
  i882.m_IsTextObjectScaleStatic = !!i883[77]
  i882.m_VertexBufferAutoSizeReduction = !!i883[78]
  i882.m_useMaxVisibleDescender = !!i883[79]
  i882.m_pageToDisplay = i883[80]
  i882.m_margin = new pc.Vec4( i883[81], i883[82], i883[83], i883[84] )
  i882.m_isUsingLegacyAnimationComponent = !!i883[85]
  i882.m_isVolumetricText = !!i883[86]
  request.r(i883[87], i883[88], 0, i882, 'm_Material')
  i882.m_EmojiFallbackSupport = !!i883[89]
  i882.m_Maskable = !!i883[90]
  i882.m_Color = new pc.Color(i883[91], i883[92], i883[93], i883[94])
  i882.m_RaycastTarget = !!i883[95]
  i882.m_RaycastPadding = new pc.Vec4( i883[96], i883[97], i883[98], i883[99] )
  return i882
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.VertexGradient' )
  var i891 = data
  i890.topLeft = new pc.Color(i891[0], i891[1], i891[2], i891[3])
  i890.topRight = new pc.Color(i891[4], i891[5], i891[6], i891[7])
  i890.bottomLeft = new pc.Color(i891[8], i891[9], i891[10], i891[11])
  i890.bottomRight = new pc.Color(i891[12], i891[13], i891[14], i891[15])
  return i890
}

Deserializers["TutController"] = function (request, data, root) {
  var i894 = root || request.c( 'TutController' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'tutScene')
  request.r(i895[2], i895[3], 0, i894, 'startTut')
  request.r(i895[4], i895[5], 0, i894, 'playTut')
  request.r(i895[6], i895[7], 0, i894, 'farTut')
  request.r(i895[8], i895[9], 0, i894, 'failTut')
  return i894
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i896 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i897 = data
  i896.targetIsSelf = !!i897[0]
  request.r(i897[1], i897[2], 0, i896, 'targetGO')
  i896.tweenTargetIsTargetGO = !!i897[3]
  i896.delay = i897[4]
  i896.duration = i897[5]
  i896.easeType = i897[6]
  i896.easeCurve = new pc.AnimationCurve( { keys_flow: i897[7] } )
  i896.loopType = i897[8]
  i896.loops = i897[9]
  i896.id = i897[10]
  i896.isRelative = !!i897[11]
  i896.isFrom = !!i897[12]
  i896.isIndependentUpdate = !!i897[13]
  i896.autoKill = !!i897[14]
  i896.autoGenerate = !!i897[15]
  i896.isActive = !!i897[16]
  i896.isValid = !!i897[17]
  request.r(i897[18], i897[19], 0, i896, 'target')
  i896.animationType = i897[20]
  i896.targetType = i897[21]
  i896.forcedTargetType = i897[22]
  i896.autoPlay = !!i897[23]
  i896.useTargetAsV3 = !!i897[24]
  i896.endValueFloat = i897[25]
  i896.endValueV3 = new pc.Vec3( i897[26], i897[27], i897[28] )
  i896.endValueV2 = new pc.Vec2( i897[29], i897[30] )
  i896.endValueColor = new pc.Color(i897[31], i897[32], i897[33], i897[34])
  i896.endValueString = i897[35]
  i896.endValueRect = UnityEngine.Rect.MinMaxRect(i897[36], i897[37], i897[38], i897[39])
  request.r(i897[40], i897[41], 0, i896, 'endValueTransform')
  i896.optionalBool0 = !!i897[42]
  i896.optionalBool1 = !!i897[43]
  i896.optionalFloat0 = i897[44]
  i896.optionalInt0 = i897[45]
  i896.optionalRotationMode = i897[46]
  i896.optionalScrambleMode = i897[47]
  i896.optionalShakeRandomnessMode = i897[48]
  i896.optionalString = i897[49]
  i896.updateType = i897[50]
  i896.isSpeedBased = !!i897[51]
  i896.hasOnStart = !!i897[52]
  i896.hasOnPlay = !!i897[53]
  i896.hasOnUpdate = !!i897[54]
  i896.hasOnStepComplete = !!i897[55]
  i896.hasOnComplete = !!i897[56]
  i896.hasOnTweenCreated = !!i897[57]
  i896.hasOnRewind = !!i897[58]
  i896.onStart = request.d('UnityEngine.Events.UnityEvent', i897[59], i896.onStart)
  i896.onPlay = request.d('UnityEngine.Events.UnityEvent', i897[60], i896.onPlay)
  i896.onUpdate = request.d('UnityEngine.Events.UnityEvent', i897[61], i896.onUpdate)
  i896.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i897[62], i896.onStepComplete)
  i896.onComplete = request.d('UnityEngine.Events.UnityEvent', i897[63], i896.onComplete)
  i896.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i897[64], i896.onTweenCreated)
  i896.onRewind = request.d('UnityEngine.Events.UnityEvent', i897[65], i896.onRewind)
  return i896
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i899 = data
  i898.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i899[0], i898.m_PersistentCalls)
  return i898
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i900 = root || request.c( 'HideOnPointer' )
  var i901 = data
  i900.OnPointerDownEvent = request.d('System.Action', i901[0], i900.OnPointerDownEvent)
  return i900
}

Deserializers["System.Action"] = function (request, data, root) {
  var i902 = root || request.c( 'System.Action' )
  var i903 = data
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i905 = data
  i904.center = new pc.Vec3( i905[0], i905[1], i905[2] )
  i904.radius = i905[3]
  i904.enabled = !!i905[4]
  i904.isTrigger = !!i905[5]
  request.r(i905[6], i905[7], 0, i904, 'material')
  return i904
}

Deserializers["Box"] = function (request, data, root) {
  var i906 = root || request.c( 'Box' )
  var i907 = data
  i906.lifeTime = i907[0]
  request.r(i907[1], i907[2], 0, i906, 'effect')
  request.r(i907[3], i907[4], 0, i906, 'avatar')
  request.r(i907[5], i907[6], 0, i906, 'interactSound')
  request.r(i907[7], i907[8], 0, i906, 'openSound')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i909 = data
  i908.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i909[0], i908.main)
  i908.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i909[1], i908.colorBySpeed)
  i908.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i909[2], i908.colorOverLifetime)
  i908.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i909[3], i908.emission)
  i908.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i909[4], i908.rotationBySpeed)
  i908.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i909[5], i908.rotationOverLifetime)
  i908.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i909[6], i908.shape)
  i908.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i909[7], i908.sizeBySpeed)
  i908.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i909[8], i908.sizeOverLifetime)
  i908.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i909[9], i908.textureSheetAnimation)
  i908.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i909[10], i908.velocityOverLifetime)
  i908.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i909[11], i908.noise)
  i908.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i909[12], i908.inheritVelocity)
  i908.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i909[13], i908.forceOverLifetime)
  i908.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i909[14], i908.limitVelocityOverLifetime)
  i908.useAutoRandomSeed = !!i909[15]
  i908.randomSeed = i909[16]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemMain()
  var i911 = data
  i910.duration = i911[0]
  i910.loop = !!i911[1]
  i910.prewarm = !!i911[2]
  i910.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.startDelay)
  i910.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[4], i910.startLifetime)
  i910.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[5], i910.startSpeed)
  i910.startSize3D = !!i911[6]
  i910.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[7], i910.startSizeX)
  i910.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[8], i910.startSizeY)
  i910.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[9], i910.startSizeZ)
  i910.startRotation3D = !!i911[10]
  i910.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[11], i910.startRotationX)
  i910.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[12], i910.startRotationY)
  i910.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[13], i910.startRotationZ)
  i910.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i911[14], i910.startColor)
  i910.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[15], i910.gravityModifier)
  i910.simulationSpace = i911[16]
  request.r(i911[17], i911[18], 0, i910, 'customSimulationSpace')
  i910.simulationSpeed = i911[19]
  i910.useUnscaledTime = !!i911[20]
  i910.scalingMode = i911[21]
  i910.playOnAwake = !!i911[22]
  i910.maxParticles = i911[23]
  i910.emitterVelocityMode = i911[24]
  i910.stopAction = i911[25]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i912 = root || new pc.MinMaxCurve()
  var i913 = data
  i912.mode = i913[0]
  i912.curveMin = new pc.AnimationCurve( { keys_flow: i913[1] } )
  i912.curveMax = new pc.AnimationCurve( { keys_flow: i913[2] } )
  i912.curveMultiplier = i913[3]
  i912.constantMin = i913[4]
  i912.constantMax = i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i914 = root || new pc.MinMaxGradient()
  var i915 = data
  i914.mode = i915[0]
  i914.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i915[1], i914.gradientMin)
  i914.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i915[2], i914.gradientMax)
  i914.colorMin = new pc.Color(i915[3], i915[4], i915[5], i915[6])
  i914.colorMax = new pc.Color(i915[7], i915[8], i915[9], i915[10])
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i917 = data
  i916.mode = i917[0]
  var i919 = i917[1]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i919[i + 0]) );
  }
  i916.colorKeys = i918
  var i921 = i917[2]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i921[i + 0]) );
  }
  i916.alphaKeys = i920
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemColorBySpeed()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i923[1], i922.color)
  i922.range = new pc.Vec2( i923[2], i923[3] )
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i927 = data
  i926.color = new pc.Color(i927[0], i927[1], i927[2], i927[3])
  i926.time = i927[4]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i931 = data
  i930.alpha = i931[0]
  i930.time = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i932 = root || new pc.ParticleSystemColorOverLifetime()
  var i933 = data
  i932.enabled = !!i933[0]
  i932.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i933[1], i932.color)
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemEmitter()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[1], i934.rateOverTime)
  i934.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[2], i934.rateOverDistance)
  var i937 = i935[3]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i937[i + 0]) );
  }
  i934.bursts = i936
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemBurst()
  var i941 = data
  i940.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[0], i940.count)
  i940.cycleCount = i941[1]
  i940.minCount = i941[2]
  i940.maxCount = i941[3]
  i940.repeatInterval = i941[4]
  i940.time = i941[5]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i942 = root || new pc.ParticleSystemRotationBySpeed()
  var i943 = data
  i942.enabled = !!i943[0]
  i942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[1], i942.x)
  i942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[2], i942.y)
  i942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[3], i942.z)
  i942.separateAxes = !!i943[4]
  i942.range = new pc.Vec2( i943[5], i943[6] )
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemRotationOverLifetime()
  var i945 = data
  i944.enabled = !!i945[0]
  i944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[1], i944.x)
  i944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[2], i944.y)
  i944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[3], i944.z)
  i944.separateAxes = !!i945[4]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemShape()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.shapeType = i947[1]
  i946.randomDirectionAmount = i947[2]
  i946.sphericalDirectionAmount = i947[3]
  i946.randomPositionAmount = i947[4]
  i946.alignToDirection = !!i947[5]
  i946.radius = i947[6]
  i946.radiusMode = i947[7]
  i946.radiusSpread = i947[8]
  i946.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[9], i946.radiusSpeed)
  i946.radiusThickness = i947[10]
  i946.angle = i947[11]
  i946.length = i947[12]
  i946.boxThickness = new pc.Vec3( i947[13], i947[14], i947[15] )
  i946.meshShapeType = i947[16]
  request.r(i947[17], i947[18], 0, i946, 'mesh')
  request.r(i947[19], i947[20], 0, i946, 'meshRenderer')
  request.r(i947[21], i947[22], 0, i946, 'skinnedMeshRenderer')
  i946.useMeshMaterialIndex = !!i947[23]
  i946.meshMaterialIndex = i947[24]
  i946.useMeshColors = !!i947[25]
  i946.normalOffset = i947[26]
  i946.arc = i947[27]
  i946.arcMode = i947[28]
  i946.arcSpread = i947[29]
  i946.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[30], i946.arcSpeed)
  i946.donutRadius = i947[31]
  i946.position = new pc.Vec3( i947[32], i947[33], i947[34] )
  i946.rotation = new pc.Vec3( i947[35], i947[36], i947[37] )
  i946.scale = new pc.Vec3( i947[38], i947[39], i947[40] )
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemSizeBySpeed()
  var i949 = data
  i948.enabled = !!i949[0]
  i948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[1], i948.x)
  i948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[2], i948.y)
  i948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[3], i948.z)
  i948.separateAxes = !!i949[4]
  i948.range = new pc.Vec2( i949[5], i949[6] )
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemSizeOverLifetime()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[1], i950.x)
  i950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[2], i950.y)
  i950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[3], i950.z)
  i950.separateAxes = !!i951[4]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.mode = i953[1]
  i952.animation = i953[2]
  i952.numTilesX = i953[3]
  i952.numTilesY = i953[4]
  i952.useRandomRow = !!i953[5]
  i952.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[6], i952.frameOverTime)
  i952.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[7], i952.startFrame)
  i952.cycleCount = i953[8]
  i952.rowIndex = i953[9]
  i952.flipU = i953[10]
  i952.flipV = i953[11]
  i952.spriteCount = i953[12]
  var i955 = i953[13]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i952.sprites = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[1], i958.x)
  i958.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[2], i958.y)
  i958.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[3], i958.z)
  i958.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[4], i958.radial)
  i958.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[5], i958.speedModifier)
  i958.space = i959[6]
  i958.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[7], i958.orbitalX)
  i958.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[8], i958.orbitalY)
  i958.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[9], i958.orbitalZ)
  i958.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[10], i958.orbitalOffsetX)
  i958.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[11], i958.orbitalOffsetY)
  i958.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[12], i958.orbitalOffsetZ)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemNoise()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.separateAxes = !!i961[1]
  i960.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[2], i960.strengthX)
  i960.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[3], i960.strengthY)
  i960.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[4], i960.strengthZ)
  i960.frequency = i961[5]
  i960.damping = !!i961[6]
  i960.octaveCount = i961[7]
  i960.octaveMultiplier = i961[8]
  i960.octaveScale = i961[9]
  i960.quality = i961[10]
  i960.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[11], i960.scrollSpeed)
  i960.scrollSpeedMultiplier = i961[12]
  i960.remapEnabled = !!i961[13]
  i960.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[14], i960.remapX)
  i960.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[15], i960.remapY)
  i960.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[16], i960.remapZ)
  i960.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[17], i960.positionAmount)
  i960.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[18], i960.rotationAmount)
  i960.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[19], i960.sizeAmount)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemInheritVelocity()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.mode = i963[1]
  i962.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.curve)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemForceOverLifetime()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[1], i964.x)
  i964.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[2], i964.y)
  i964.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[3], i964.z)
  i964.space = i965[4]
  i964.randomized = !!i965[5]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[1], i966.limit)
  i966.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.limitX)
  i966.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[3], i966.limitY)
  i966.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[4], i966.limitZ)
  i966.dampen = i967[5]
  i966.separateAxes = !!i967[6]
  i966.space = i967[7]
  i966.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[8], i966.drag)
  i966.multiplyDragByParticleSize = !!i967[9]
  i966.multiplyDragByParticleVelocity = !!i967[10]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'mesh')
  i968.meshCount = i969[2]
  i968.activeVertexStreamsCount = i969[3]
  i968.alignment = i969[4]
  i968.renderMode = i969[5]
  i968.sortMode = i969[6]
  i968.lengthScale = i969[7]
  i968.velocityScale = i969[8]
  i968.cameraVelocityScale = i969[9]
  i968.normalDirection = i969[10]
  i968.sortingFudge = i969[11]
  i968.minParticleSize = i969[12]
  i968.maxParticleSize = i969[13]
  i968.pivot = new pc.Vec3( i969[14], i969[15], i969[16] )
  request.r(i969[17], i969[18], 0, i968, 'trailMaterial')
  i968.applyActiveColorSpace = !!i969[19]
  i968.enabled = !!i969[20]
  request.r(i969[21], i969[22], 0, i968, 'sharedMaterial')
  var i971 = i969[23]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 2, i970, '')
  }
  i968.sharedMaterials = i970
  i968.receiveShadows = !!i969[24]
  i968.shadowCastingMode = i969[25]
  i968.sortingLayerID = i969[26]
  i968.sortingOrder = i969[27]
  i968.lightmapIndex = i969[28]
  i968.lightmapSceneIndex = i969[29]
  i968.lightmapScaleOffset = new pc.Vec4( i969[30], i969[31], i969[32], i969[33] )
  i968.lightProbeUsage = i969[34]
  i968.reflectionProbeUsage = i969[35]
  return i968
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i972 = root || request.c( 'CharacterMotor' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'characterInput')
  request.r(i973[2], i973[3], 0, i972, 'cameraYawTransform')
  i972.moveSpeed = i973[4]
  i972.jumpHeight = i973[5]
  request.r(i973[6], i973[7], 0, i972, 'groundChecker')
  i972.gravity = i973[8]
  request.r(i973[9], i973[10], 0, i972, 'controller')
  i972.autoRun = !!i973[11]
  return i972
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i974 = root || request.c( 'CharacterRotation' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'motor')
  i974.rotationSpeed = i975[2]
  return i974
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i976 = root || request.c( 'CharacterAnimation' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'animator')
  request.r(i977[2], i977[3], 0, i976, 'motor')
  return i976
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i978 = root || request.c( 'CharacterCollect' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'motor')
  request.r(i979[2], i979[3], 0, i978, 'avatar')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i981 = data
  i980.mass = i981[0]
  i980.drag = i981[1]
  i980.angularDrag = i981[2]
  i980.useGravity = !!i981[3]
  i980.isKinematic = !!i981[4]
  i980.constraints = i981[5]
  i980.maxAngularVelocity = i981[6]
  i980.collisionDetectionMode = i981[7]
  i980.interpolation = i981[8]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'clip')
  request.r(i983[2], i983[3], 0, i982, 'outputAudioMixerGroup')
  i982.playOnAwake = !!i983[4]
  i982.loop = !!i983[5]
  i982.time = i983[6]
  i982.volume = i983[7]
  i982.pitch = i983[8]
  i982.enabled = !!i983[9]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'sharedMesh')
  var i987 = i985[2]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i984.bones = i986
  i984.updateWhenOffscreen = !!i985[3]
  i984.localBounds = i985[4]
  request.r(i985[5], i985[6], 0, i984, 'rootBone')
  var i989 = i985[7]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i989[i + 0]) );
  }
  i984.blendShapesWeights = i988
  i984.enabled = !!i985[8]
  request.r(i985[9], i985[10], 0, i984, 'sharedMaterial')
  var i991 = i985[11]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i984.sharedMaterials = i990
  i984.receiveShadows = !!i985[12]
  i984.shadowCastingMode = i985[13]
  i984.sortingLayerID = i985[14]
  i984.sortingOrder = i985[15]
  i984.lightmapIndex = i985[16]
  i984.lightmapSceneIndex = i985[17]
  i984.lightmapScaleOffset = new pc.Vec4( i985[18], i985[19], i985[20], i985[21] )
  i984.lightProbeUsage = i985[22]
  i984.reflectionProbeUsage = i985[23]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i995 = data
  i994.weight = i995[0]
  return i994
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i996 = root || request.c( 'GroundChecker' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'groundPoint')
  i996.checkRadius = i997[2]
  i996.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i997[3] )
  return i996
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i998 = root || request.c( 'CameraFollow' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'target')
  i998.smoothTime = i999[2]
  return i998
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i1000 = root || request.c( 'CameraLook' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'input')
  request.r(i1001[2], i1001[3], 0, i1000, 'yawPivot')
  request.r(i1001[4], i1001[5], 0, i1000, 'pitchPivot')
  i1000.minPitch = i1001[6]
  i1000.maxPitch = i1001[7]
  i1000.yaw = i1001[8]
  i1000.pitch = i1001[9]
  i1000.defaltYaw = i1001[10]
  i1000.defaltPitch = i1001[11]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1003 = data
  i1002.aspect = i1003[0]
  i1002.orthographic = !!i1003[1]
  i1002.orthographicSize = i1003[2]
  i1002.backgroundColor = new pc.Color(i1003[3], i1003[4], i1003[5], i1003[6])
  i1002.nearClipPlane = i1003[7]
  i1002.farClipPlane = i1003[8]
  i1002.fieldOfView = i1003[9]
  i1002.depth = i1003[10]
  i1002.clearFlags = i1003[11]
  i1002.cullingMask = i1003[12]
  i1002.rect = i1003[13]
  request.r(i1003[14], i1003[15], 0, i1002, 'targetTexture')
  i1002.usePhysicalProperties = !!i1003[16]
  i1002.focalLength = i1003[17]
  i1002.sensorSize = new pc.Vec2( i1003[18], i1003[19] )
  i1002.lensShift = new pc.Vec2( i1003[20], i1003[21] )
  i1002.gateFit = i1003[22]
  i1002.commandBufferCount = i1003[23]
  i1002.cameraType = i1003[24]
  i1002.enabled = !!i1003[25]
  return i1002
}

Deserializers["Gift"] = function (request, data, root) {
  var i1004 = root || request.c( 'Gift' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'avatar')
  i1004.collectDone = !!i1005[2]
  var i1007 = i1005[3]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('Hint')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1004.hints = i1006
  request.r(i1005[4], i1005[5], 0, i1004, 'collectSound')
  request.r(i1005[6], i1005[7], 0, i1004, 'collectEffect')
  request.r(i1005[8], i1005[9], 0, i1004, 'action')
  i1004.unLocked = !!i1005[10]
  return i1004
}

Deserializers["SoundHint"] = function (request, data, root) {
  var i1010 = root || request.c( 'SoundHint' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'Sound')
  request.r(i1011[2], i1011[3], 0, i1010, 'Source')
  return i1010
}

Deserializers["JumpHint"] = function (request, data, root) {
  var i1012 = root || request.c( 'JumpHint' )
  var i1013 = data
  i1012.JumpForce = new pc.Vec3( i1013[0], i1013[1], i1013[2] )
  request.r(i1013[3], i1013[4], 0, i1012, 'Rigidbody')
  return i1012
}

Deserializers["RunEffect"] = function (request, data, root) {
  var i1014 = root || request.c( 'RunEffect' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'controller')
  request.r(i1015[2], i1015[3], 0, i1014, 'targetPos')
  request.r(i1015[4], i1015[5], 0, i1014, 'look')
  i1014.moveSpeed = i1015[6]
  i1014.rotateSpeed = i1015[7]
  i1014.stopDistance = i1015[8]
  return i1014
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i1016 = root || request.c( 'CharacterInput' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'joystick')
  request.r(i1017[2], i1017[3], 0, i1016, 'jumpButton')
  return i1016
}

Deserializers["InputManager"] = function (request, data, root) {
  var i1018 = root || request.c( 'InputManager' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'worldCamera')
  i1018.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i1019[2] )
  i1018.touchSensitivity = i1019[3]
  i1018.mouseSensitivity = i1019[4]
  i1018.dragThreshold = i1019[5]
  return i1018
}

Deserializers["GameController"] = function (request, data, root) {
  var i1020 = root || request.c( 'GameController' )
  var i1021 = data
  i1020.timeToShowComplete = i1021[0]
  i1020.timeToShowHint = i1021[1]
  i1020.currentProgress = i1021[2]
  i1020.target = i1021[3]
  request.r(i1021[4], i1021[5], 0, i1020, 'progressText')
  request.r(i1021[6], i1021[7], 0, i1020, 'completeScene')
  var i1023 = i1021[8]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('BoxGift')))
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.add(request.d('BoxGift', i1023[i + 0]));
  }
  i1020.boxGifts = i1022
  request.r(i1021[9], i1021[10], 0, i1020, 'collect')
  request.r(i1021[11], i1021[12], 0, i1020, 'tut')
  return i1020
}

Deserializers["BoxGift"] = function (request, data, root) {
  var i1026 = root || request.c( 'BoxGift' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'Box')
  request.r(i1027[2], i1027[3], 0, i1026, 'SecretGift')
  return i1026
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1028 = root || request.c( 'AudioController' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'musicSource')
  request.r(i1029[2], i1029[3], 0, i1028, 'poolParent')
  i1028.startSize = i1029[4]
  return i1028
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1030 = root || request.c( 'LunaController' )
  var i1031 = data
  i1030.LimitTimePlay = !!i1031[0]
  i1030.TimePlay = i1031[1]
  i1030.TypeMonster = i1031[2]
  var i1033 = i1031[3]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('BoxGift')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('BoxGift', i1033[i + 0]));
  }
  i1030.monsters = i1032
  var i1035 = i1031[4]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 1, i1034, '')
  }
  i1030.images = i1034
  var i1037 = i1031[5]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 1, i1036, '')
  }
  i1030.CTA = i1036
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1043 = data
  i1042.ambientIntensity = i1043[0]
  i1042.reflectionIntensity = i1043[1]
  i1042.ambientMode = i1043[2]
  i1042.ambientLight = new pc.Color(i1043[3], i1043[4], i1043[5], i1043[6])
  i1042.ambientSkyColor = new pc.Color(i1043[7], i1043[8], i1043[9], i1043[10])
  i1042.ambientGroundColor = new pc.Color(i1043[11], i1043[12], i1043[13], i1043[14])
  i1042.ambientEquatorColor = new pc.Color(i1043[15], i1043[16], i1043[17], i1043[18])
  i1042.fogColor = new pc.Color(i1043[19], i1043[20], i1043[21], i1043[22])
  i1042.fogEndDistance = i1043[23]
  i1042.fogStartDistance = i1043[24]
  i1042.fogDensity = i1043[25]
  i1042.fog = !!i1043[26]
  request.r(i1043[27], i1043[28], 0, i1042, 'skybox')
  i1042.fogMode = i1043[29]
  var i1045 = i1043[30]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1045[i + 0]) );
  }
  i1042.lightmaps = i1044
  i1042.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1043[31], i1042.lightProbes)
  i1042.lightmapsMode = i1043[32]
  i1042.mixedBakeMode = i1043[33]
  i1042.environmentLightingMode = i1043[34]
  i1042.ambientProbe = new pc.SphericalHarmonicsL2(i1043[35])
  request.r(i1043[36], i1043[37], 0, i1042, 'customReflection')
  request.r(i1043[38], i1043[39], 0, i1042, 'defaultReflection')
  i1042.defaultReflectionMode = i1043[40]
  i1042.defaultReflectionResolution = i1043[41]
  i1042.sunLightObjectId = i1043[42]
  i1042.pixelLightCount = i1043[43]
  i1042.defaultReflectionHDR = !!i1043[44]
  i1042.hasLightDataAsset = !!i1043[45]
  i1042.hasManualGenerate = !!i1043[46]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'lightmapColor')
  request.r(i1049[2], i1049[3], 0, i1048, 'lightmapDirection')
  request.r(i1049[4], i1049[5], 0, i1048, 'shadowMask')
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1050 = root || new UnityEngine.LightProbes()
  var i1051 = data
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1061[i + 0]));
  }
  i1058.ShaderCompilationErrors = i1060
  i1058.name = i1059[1]
  i1058.guid = i1059[2]
  var i1063 = i1059[3]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1058.shaderDefinedKeywords = i1062
  var i1065 = i1059[4]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1065[i + 0]) );
  }
  i1058.passes = i1064
  var i1067 = i1059[5]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1067[i + 0]) );
  }
  i1058.usePasses = i1066
  var i1069 = i1059[6]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1069[i + 0]) );
  }
  i1058.defaultParameterValues = i1068
  request.r(i1059[7], i1059[8], 0, i1058, 'unityFallbackShader')
  i1058.readDepth = !!i1059[9]
  i1058.hasDepthOnlyPass = !!i1059[10]
  i1058.isCreatedByShaderGraph = !!i1059[11]
  i1058.disableBatching = !!i1059[12]
  i1058.compiled = !!i1059[13]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1073 = data
  i1072.shaderName = i1073[0]
  i1072.errorMessage = i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1078 = root || new pc.UnityShaderPass()
  var i1079 = data
  i1078.id = i1079[0]
  i1078.subShaderIndex = i1079[1]
  i1078.name = i1079[2]
  i1078.passType = i1079[3]
  i1078.grabPassTextureName = i1079[4]
  i1078.usePass = !!i1079[5]
  i1078.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[6], i1078.zTest)
  i1078.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[7], i1078.zWrite)
  i1078.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[8], i1078.culling)
  i1078.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1079[9], i1078.blending)
  i1078.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1079[10], i1078.alphaBlending)
  i1078.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[11], i1078.colorWriteMask)
  i1078.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[12], i1078.offsetUnits)
  i1078.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[13], i1078.offsetFactor)
  i1078.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[14], i1078.stencilRef)
  i1078.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[15], i1078.stencilReadMask)
  i1078.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1079[16], i1078.stencilWriteMask)
  i1078.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1079[17], i1078.stencilOp)
  i1078.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1079[18], i1078.stencilOpFront)
  i1078.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1079[19], i1078.stencilOpBack)
  var i1081 = i1079[20]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1081[i + 0]) );
  }
  i1078.tags = i1080
  var i1083 = i1079[21]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.passDefinedKeywords = i1082
  var i1085 = i1079[22]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1085[i + 0]) );
  }
  i1078.passDefinedKeywordGroups = i1084
  var i1087 = i1079[23]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1087[i + 0]) );
  }
  i1078.variants = i1086
  var i1089 = i1079[24]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1089[i + 0]) );
  }
  i1078.excludedVariants = i1088
  i1078.hasDepthReader = !!i1079[25]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1091 = data
  i1090.val = i1091[0]
  i1090.name = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1093 = data
  i1092.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[0], i1092.src)
  i1092.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[1], i1092.dst)
  i1092.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[2], i1092.op)
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1095 = data
  i1094.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[0], i1094.pass)
  i1094.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[1], i1094.fail)
  i1094.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[2], i1094.zFail)
  i1094.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[3], i1094.comp)
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.value = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( i1105[i + 0] );
  }
  i1102.keywords = i1104
  i1102.hasDiscard = !!i1103[1]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1109 = data
  i1108.passId = i1109[0]
  i1108.subShaderIndex = i1109[1]
  var i1111 = i1109[2]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1108.keywords = i1110
  i1108.vertexProgram = i1109[3]
  i1108.fragmentProgram = i1109[4]
  i1108.exportedForWebGl2 = !!i1109[5]
  i1108.readDepth = !!i1109[6]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'shader')
  i1114.pass = i1115[2]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1119 = data
  i1118.name = i1119[0]
  i1118.type = i1119[1]
  i1118.value = new pc.Vec4( i1119[2], i1119[3], i1119[4], i1119[5] )
  i1118.textureValue = i1119[6]
  i1118.shaderPropertyFlag = i1119[7]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1121 = data
  i1120.name = i1121[0]
  request.r(i1121[1], i1121[2], 0, i1120, 'texture')
  i1120.aabb = i1121[3]
  i1120.vertices = i1121[4]
  i1120.triangles = i1121[5]
  i1120.textureRect = UnityEngine.Rect.MinMaxRect(i1121[6], i1121[7], i1121[8], i1121[9])
  i1120.packedRect = UnityEngine.Rect.MinMaxRect(i1121[10], i1121[11], i1121[12], i1121[13])
  i1120.border = new pc.Vec4( i1121[14], i1121[15], i1121[16], i1121[17] )
  i1120.transparency = i1121[18]
  i1120.bounds = i1121[19]
  i1120.pixelsPerUnit = i1121[20]
  i1120.textureWidth = i1121[21]
  i1120.textureHeight = i1121[22]
  i1120.nativeSize = new pc.Vec2( i1121[23], i1121[24] )
  i1120.pivot = new pc.Vec2( i1121[25], i1121[26] )
  i1120.textureRectOffset = new pc.Vec2( i1121[27], i1121[28] )
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1123 = data
  i1122.name = i1123[0]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.wrapMode = i1125[1]
  i1124.isLooping = !!i1125[2]
  i1124.length = i1125[3]
  var i1127 = i1125[4]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1127[i + 0]) );
  }
  i1124.curves = i1126
  var i1129 = i1125[5]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1129[i + 0]) );
  }
  i1124.events = i1128
  i1124.halfPrecision = !!i1125[6]
  i1124._frameRate = i1125[7]
  i1124.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1125[8], i1124.localBounds)
  i1124.hasMuscleCurves = !!i1125[9]
  var i1131 = i1125[10]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1124.clipMuscleConstant = i1130
  i1124.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1125[11], i1124.clipBindingConstant)
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1135 = data
  i1134.path = i1135[0]
  i1134.hash = i1135[1]
  i1134.componentType = i1135[2]
  i1134.property = i1135[3]
  i1134.keys = i1135[4]
  var i1137 = i1135[5]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1137[i + 0]) );
  }
  i1134.objectReferenceKeys = i1136
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1141 = data
  i1140.time = i1141[0]
  request.r(i1141[1], i1141[2], 0, i1140, 'value')
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1145 = data
  i1144.functionName = i1145[0]
  i1144.floatParameter = i1145[1]
  i1144.intParameter = i1145[2]
  i1144.stringParameter = i1145[3]
  request.r(i1145[4], i1145[5], 0, i1144, 'objectReferenceParameter')
  i1144.time = i1145[6]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1147 = data
  i1146.center = new pc.Vec3( i1147[0], i1147[1], i1147[2] )
  i1146.extends = new pc.Vec3( i1147[3], i1147[4], i1147[5] )
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1150.genericBindings = i1152
  var i1155 = i1151[1]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1150.pptrCurveMapping = i1154
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1157 = data
  i1156.name = i1157[0]
  var i1159 = i1157[1]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1159[i + 0]) );
  }
  i1156.layers = i1158
  var i1161 = i1157[2]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1161[i + 0]) );
  }
  i1156.parameters = i1160
  i1156.animationClips = i1157[3]
  i1156.avatarUnsupported = i1157[4]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1165 = data
  i1164.name = i1165[0]
  i1164.defaultWeight = i1165[1]
  i1164.blendingMode = i1165[2]
  i1164.avatarMask = i1165[3]
  i1164.syncedLayerIndex = i1165[4]
  i1164.syncedLayerAffectsTiming = !!i1165[5]
  i1164.syncedLayers = i1165[6]
  i1164.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1165[7], i1164.stateMachine)
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1167 = data
  i1166.id = i1167[0]
  i1166.name = i1167[1]
  i1166.path = i1167[2]
  var i1169 = i1167[3]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1169[i + 0]) );
  }
  i1166.states = i1168
  var i1171 = i1167[4]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1171[i + 0]) );
  }
  i1166.machines = i1170
  var i1173 = i1167[5]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1173[i + 0]) );
  }
  i1166.entryStateTransitions = i1172
  var i1175 = i1167[6]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1175[i + 0]) );
  }
  i1166.exitStateTransitions = i1174
  var i1177 = i1167[7]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1177[i + 0]) );
  }
  i1166.anyStateTransitions = i1176
  i1166.defaultStateId = i1167[8]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1181 = data
  i1180.id = i1181[0]
  i1180.name = i1181[1]
  i1180.cycleOffset = i1181[2]
  i1180.cycleOffsetParameter = i1181[3]
  i1180.cycleOffsetParameterActive = !!i1181[4]
  i1180.mirror = !!i1181[5]
  i1180.mirrorParameter = i1181[6]
  i1180.mirrorParameterActive = !!i1181[7]
  i1180.motionId = i1181[8]
  i1180.nameHash = i1181[9]
  i1180.fullPathHash = i1181[10]
  i1180.speed = i1181[11]
  i1180.speedParameter = i1181[12]
  i1180.speedParameterActive = !!i1181[13]
  i1180.tag = i1181[14]
  i1180.tagHash = i1181[15]
  i1180.writeDefaultValues = !!i1181[16]
  var i1183 = i1181[17]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 2, i1182, '')
  }
  i1180.behaviours = i1182
  var i1185 = i1181[18]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1185[i + 0]) );
  }
  i1180.transitions = i1184
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1191 = data
  i1190.fullPath = i1191[0]
  i1190.canTransitionToSelf = !!i1191[1]
  i1190.duration = i1191[2]
  i1190.exitTime = i1191[3]
  i1190.hasExitTime = !!i1191[4]
  i1190.hasFixedDuration = !!i1191[5]
  i1190.interruptionSource = i1191[6]
  i1190.offset = i1191[7]
  i1190.orderedInterruption = !!i1191[8]
  i1190.destinationStateId = i1191[9]
  i1190.isExit = !!i1191[10]
  i1190.mute = !!i1191[11]
  i1190.solo = !!i1191[12]
  var i1193 = i1191[13]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1193[i + 0]) );
  }
  i1190.conditions = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1197 = data
  i1196.mode = i1197[0]
  i1196.parameter = i1197[1]
  i1196.threshold = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1203 = data
  i1202.destinationStateId = i1203[0]
  i1202.isExit = !!i1203[1]
  i1202.mute = !!i1203[2]
  i1202.solo = !!i1203[3]
  var i1205 = i1203[4]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1205[i + 0]) );
  }
  i1202.conditions = i1204
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1209 = data
  i1208.defaultBool = !!i1209[0]
  i1208.defaultFloat = i1209[1]
  i1208.defaultInt = i1209[2]
  i1208.name = i1209[3]
  i1208.nameHash = i1209[4]
  i1208.type = i1209[5]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1211 = data
  i1210.name = i1211[0]
  request.r(i1211[1], i1211[2], 0, i1210, '_runtimeAnimatorController')
  var i1213 = i1211[3]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 2) {
  request.r(i1213[i + 0], i1213[i + 1], 2, i1212, '')
  }
  i1210._originalAnimationClips = i1212
  var i1215 = i1211[4]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 2) {
  request.r(i1215[i + 0], i1215[i + 1], 2, i1214, '')
  }
  i1210._overrideAnimationClips = i1214
  var i1217 = i1211[5]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 2) {
  request.r(i1217[i + 0], i1217[i + 1], 2, i1216, '')
  }
  i1210._animationClips = i1216
  var i1219 = i1211[6]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('UnityEngine.AnimationClipPair', i1219[i + 0]) );
  }
  i1210._animationClipPairs = i1218
  return i1210
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1225 = data
  request.r(i1225[0], i1225[1], 0, i1224, 'originalClip')
  request.r(i1225[2], i1225[3], 0, i1224, 'overrideClip')
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1227 = data
  i1226.name = i1227[0]
  i1226.bytes64 = i1227[1]
  i1226.data = i1227[2]
  return i1226
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1229 = data
  i1228.normalStyle = i1229[0]
  i1228.normalSpacingOffset = i1229[1]
  i1228.boldStyle = i1229[2]
  i1228.boldSpacing = i1229[3]
  i1228.italicStyle = i1229[4]
  i1228.tabSize = i1229[5]
  request.r(i1229[6], i1229[7], 0, i1228, 'atlas')
  i1228.m_SourceFontFileGUID = i1229[8]
  i1228.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1229[9], i1228.m_CreationSettings)
  request.r(i1229[10], i1229[11], 0, i1228, 'm_SourceFontFile')
  i1228.m_SourceFontFilePath = i1229[12]
  i1228.m_AtlasPopulationMode = i1229[13]
  i1228.InternalDynamicOS = !!i1229[14]
  var i1231 = i1229[15]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('UnityEngine.TextCore.Glyph', i1231[i + 0]));
  }
  i1228.m_GlyphTable = i1230
  var i1233 = i1229[16]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.TMP_Character', i1233[i + 0]));
  }
  i1228.m_CharacterTable = i1232
  var i1235 = i1229[17]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 2) {
  request.r(i1235[i + 0], i1235[i + 1], 2, i1234, '')
  }
  i1228.m_AtlasTextures = i1234
  i1228.m_AtlasTextureIndex = i1229[18]
  i1228.m_IsMultiAtlasTexturesEnabled = !!i1229[19]
  i1228.m_GetFontFeatures = !!i1229[20]
  i1228.m_ClearDynamicDataOnBuild = !!i1229[21]
  i1228.m_AtlasWidth = i1229[22]
  i1228.m_AtlasHeight = i1229[23]
  i1228.m_AtlasPadding = i1229[24]
  i1228.m_AtlasRenderMode = i1229[25]
  var i1237 = i1229[26]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('UnityEngine.TextCore.GlyphRect', i1237[i + 0]));
  }
  i1228.m_UsedGlyphRects = i1236
  var i1239 = i1229[27]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('UnityEngine.TextCore.GlyphRect', i1239[i + 0]));
  }
  i1228.m_FreeGlyphRects = i1238
  i1228.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1229[28], i1228.m_FontFeatureTable)
  i1228.m_ShouldReimportFontFeatures = !!i1229[29]
  var i1241 = i1229[30]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1241.length; i += 2) {
  request.r(i1241[i + 0], i1241[i + 1], 1, i1240, '')
  }
  i1228.m_FallbackFontAssetTable = i1240
  var i1243 = i1229[31]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('TMPro.TMP_FontWeightPair', i1243[i + 0]) );
  }
  i1228.m_FontWeightTable = i1242
  var i1245 = i1229[32]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('TMPro.TMP_FontWeightPair', i1245[i + 0]) );
  }
  i1228.fontWeights = i1244
  i1228.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1229[33], i1228.m_fontInfo)
  var i1247 = i1229[34]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('TMPro.TMP_Glyph', i1247[i + 0]));
  }
  i1228.m_glyphInfoList = i1246
  i1228.m_KerningTable = request.d('TMPro.KerningTable', i1229[35], i1228.m_KerningTable)
  var i1249 = i1229[36]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1249.length; i += 2) {
  request.r(i1249[i + 0], i1249[i + 1], 1, i1248, '')
  }
  i1228.fallbackFontAssets = i1248
  i1228.m_Version = i1229[37]
  i1228.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1229[38], i1228.m_FaceInfo)
  request.r(i1229[39], i1229[40], 0, i1228, 'm_Material')
  return i1228
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1251 = data
  i1250.sourceFontFileName = i1251[0]
  i1250.sourceFontFileGUID = i1251[1]
  i1250.faceIndex = i1251[2]
  i1250.pointSizeSamplingMode = i1251[3]
  i1250.pointSize = i1251[4]
  i1250.padding = i1251[5]
  i1250.paddingMode = i1251[6]
  i1250.packingMode = i1251[7]
  i1250.atlasWidth = i1251[8]
  i1250.atlasHeight = i1251[9]
  i1250.characterSetSelectionMode = i1251[10]
  i1250.characterSequence = i1251[11]
  i1250.referencedFontAssetGUID = i1251[12]
  i1250.referencedTextAssetGUID = i1251[13]
  i1250.fontStyle = i1251[14]
  i1250.fontStyleModifier = i1251[15]
  i1250.renderMode = i1251[16]
  i1250.includeFontFeatures = !!i1251[17]
  return i1250
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1255 = data
  i1254.m_Index = i1255[0]
  i1254.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1255[1], i1254.m_Metrics)
  i1254.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1255[2], i1254.m_GlyphRect)
  i1254.m_Scale = i1255[3]
  i1254.m_AtlasIndex = i1255[4]
  i1254.m_ClassDefinitionType = i1255[5]
  return i1254
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1257 = data
  i1256.m_Width = i1257[0]
  i1256.m_Height = i1257[1]
  i1256.m_HorizontalBearingX = i1257[2]
  i1256.m_HorizontalBearingY = i1257[3]
  i1256.m_HorizontalAdvance = i1257[4]
  return i1256
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1259 = data
  i1258.m_X = i1259[0]
  i1258.m_Y = i1259[1]
  i1258.m_Width = i1259[2]
  i1258.m_Height = i1259[3]
  return i1258
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_Character' )
  var i1263 = data
  i1262.m_ElementType = i1263[0]
  i1262.m_Unicode = i1263[1]
  i1262.m_GlyphIndex = i1263[2]
  i1262.m_Scale = i1263[3]
  return i1262
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('TMPro.MultipleSubstitutionRecord', i1271[i + 0]));
  }
  i1268.m_MultipleSubstitutionRecords = i1270
  var i1273 = i1269[1]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('TMPro.LigatureSubstitutionRecord', i1273[i + 0]));
  }
  i1268.m_LigatureSubstitutionRecords = i1272
  var i1275 = i1269[2]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1275[i + 0]));
  }
  i1268.m_GlyphPairAdjustmentRecords = i1274
  var i1277 = i1269[3]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1277[i + 0]));
  }
  i1268.m_MarkToBaseAdjustmentRecords = i1276
  var i1279 = i1269[4]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1279[i + 0]));
  }
  i1268.m_MarkToMarkAdjustmentRecords = i1278
  return i1268
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1283 = data
  i1282.m_TargetGlyphID = i1283[0]
  i1282.m_SubstituteGlyphIDs = i1283[1]
  return i1282
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1287 = data
  i1286.m_ComponentGlyphIDs = i1287[0]
  i1286.m_LigatureGlyphID = i1287[1]
  return i1286
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1291 = data
  i1290.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1291[0], i1290.m_FirstAdjustmentRecord)
  i1290.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1291[1], i1290.m_SecondAdjustmentRecord)
  i1290.m_FeatureLookupFlags = i1291[2]
  return i1290
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1295 = data
  i1294.m_BaseGlyphID = i1295[0]
  i1294.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1295[1], i1294.m_BaseGlyphAnchorPoint)
  i1294.m_MarkGlyphID = i1295[2]
  i1294.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1295[3], i1294.m_MarkPositionAdjustment)
  return i1294
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1299 = data
  i1298.m_BaseMarkGlyphID = i1299[0]
  i1298.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1299[1], i1298.m_BaseMarkGlyphAnchorPoint)
  i1298.m_CombiningMarkGlyphID = i1299[2]
  i1298.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1299[3], i1298.m_CombiningMarkPositionAdjustment)
  return i1298
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1305 = data
  request.r(i1305[0], i1305[1], 0, i1304, 'regularTypeface')
  request.r(i1305[2], i1305[3], 0, i1304, 'italicTypeface')
  return i1304
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1307 = data
  i1306.Name = i1307[0]
  i1306.PointSize = i1307[1]
  i1306.Scale = i1307[2]
  i1306.CharacterCount = i1307[3]
  i1306.LineHeight = i1307[4]
  i1306.Baseline = i1307[5]
  i1306.Ascender = i1307[6]
  i1306.CapHeight = i1307[7]
  i1306.Descender = i1307[8]
  i1306.CenterLine = i1307[9]
  i1306.SuperscriptOffset = i1307[10]
  i1306.SubscriptOffset = i1307[11]
  i1306.SubSize = i1307[12]
  i1306.Underline = i1307[13]
  i1306.UnderlineThickness = i1307[14]
  i1306.strikethrough = i1307[15]
  i1306.strikethroughThickness = i1307[16]
  i1306.TabWidth = i1307[17]
  i1306.Padding = i1307[18]
  i1306.AtlasWidth = i1307[19]
  i1306.AtlasHeight = i1307[20]
  return i1306
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1311 = data
  i1310.id = i1311[0]
  i1310.x = i1311[1]
  i1310.y = i1311[2]
  i1310.width = i1311[3]
  i1310.height = i1311[4]
  i1310.xOffset = i1311[5]
  i1310.yOffset = i1311[6]
  i1310.xAdvance = i1311[7]
  i1310.scale = i1311[8]
  return i1310
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.KerningTable' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('TMPro.KerningPair', i1315[i + 0]));
  }
  i1312.kerningPairs = i1314
  return i1312
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.KerningPair' )
  var i1319 = data
  i1318.xOffset = i1319[0]
  i1318.m_FirstGlyph = i1319[1]
  i1318.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1319[2], i1318.m_FirstGlyphAdjustments)
  i1318.m_SecondGlyph = i1319[3]
  i1318.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1319[4], i1318.m_SecondGlyphAdjustments)
  i1318.m_IgnoreSpacingAdjustments = !!i1319[5]
  return i1318
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1321 = data
  i1320.m_FaceIndex = i1321[0]
  i1320.m_FamilyName = i1321[1]
  i1320.m_StyleName = i1321[2]
  i1320.m_PointSize = i1321[3]
  i1320.m_Scale = i1321[4]
  i1320.m_UnitsPerEM = i1321[5]
  i1320.m_LineHeight = i1321[6]
  i1320.m_AscentLine = i1321[7]
  i1320.m_CapLine = i1321[8]
  i1320.m_MeanLine = i1321[9]
  i1320.m_Baseline = i1321[10]
  i1320.m_DescentLine = i1321[11]
  i1320.m_SuperscriptOffset = i1321[12]
  i1320.m_SuperscriptSize = i1321[13]
  i1320.m_SubscriptOffset = i1321[14]
  i1320.m_SubscriptSize = i1321[15]
  i1320.m_UnderlineOffset = i1321[16]
  i1320.m_UnderlineThickness = i1321[17]
  i1320.m_StrikethroughOffset = i1321[18]
  i1320.m_StrikethroughThickness = i1321[19]
  i1320.m_TabWidth = i1321[20]
  return i1320
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1323 = data
  i1322.useSafeMode = !!i1323[0]
  i1322.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1323[1], i1322.safeModeOptions)
  i1322.timeScale = i1323[2]
  i1322.unscaledTimeScale = i1323[3]
  i1322.useSmoothDeltaTime = !!i1323[4]
  i1322.maxSmoothUnscaledTime = i1323[5]
  i1322.rewindCallbackMode = i1323[6]
  i1322.showUnityEditorReport = !!i1323[7]
  i1322.logBehaviour = i1323[8]
  i1322.drawGizmos = !!i1323[9]
  i1322.defaultRecyclable = !!i1323[10]
  i1322.defaultAutoPlay = i1323[11]
  i1322.defaultUpdateType = i1323[12]
  i1322.defaultTimeScaleIndependent = !!i1323[13]
  i1322.defaultEaseType = i1323[14]
  i1322.defaultEaseOvershootOrAmplitude = i1323[15]
  i1322.defaultEasePeriod = i1323[16]
  i1322.defaultAutoKill = !!i1323[17]
  i1322.defaultLoopType = i1323[18]
  i1322.debugMode = !!i1323[19]
  i1322.debugStoreTargetId = !!i1323[20]
  i1322.showPreviewPanel = !!i1323[21]
  i1322.storeSettingsLocation = i1323[22]
  i1322.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1323[23], i1322.modules)
  i1322.createASMDEF = !!i1323[24]
  i1322.showPlayingTweens = !!i1323[25]
  i1322.showPausedTweens = !!i1323[26]
  return i1322
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1324 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1325 = data
  i1324.logBehaviour = i1325[0]
  i1324.nestedTweenFailureBehaviour = i1325[1]
  return i1324
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1326 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1327 = data
  i1326.showPanel = !!i1327[0]
  i1326.audioEnabled = !!i1327[1]
  i1326.physicsEnabled = !!i1327[2]
  i1326.physics2DEnabled = !!i1327[3]
  i1326.spriteEnabled = !!i1327[4]
  i1326.uiEnabled = !!i1327[5]
  i1326.textMeshProEnabled = !!i1327[6]
  i1326.tk2DEnabled = !!i1327[7]
  i1326.deAudioEnabled = !!i1327[8]
  i1326.deUnityExtendedEnabled = !!i1327[9]
  i1326.epoOutlineEnabled = !!i1327[10]
  return i1326
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_Settings' )
  var i1329 = data
  i1328.assetVersion = i1329[0]
  i1328.m_TextWrappingMode = i1329[1]
  i1328.m_enableKerning = !!i1329[2]
  var i1331 = i1329[3]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(i1331[i + 0]);
  }
  i1328.m_ActiveFontFeatures = i1330
  i1328.m_enableExtraPadding = !!i1329[4]
  i1328.m_enableTintAllSprites = !!i1329[5]
  i1328.m_enableParseEscapeCharacters = !!i1329[6]
  i1328.m_EnableRaycastTarget = !!i1329[7]
  i1328.m_GetFontFeaturesAtRuntime = !!i1329[8]
  i1328.m_missingGlyphCharacter = i1329[9]
  i1328.m_ClearDynamicDataOnBuild = !!i1329[10]
  i1328.m_warningsDisabled = !!i1329[11]
  request.r(i1329[12], i1329[13], 0, i1328, 'm_defaultFontAsset')
  i1328.m_defaultFontAssetPath = i1329[14]
  i1328.m_defaultFontSize = i1329[15]
  i1328.m_defaultAutoSizeMinRatio = i1329[16]
  i1328.m_defaultAutoSizeMaxRatio = i1329[17]
  i1328.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1329[18], i1329[19] )
  i1328.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1329[20], i1329[21] )
  i1328.m_autoSizeTextContainer = !!i1329[22]
  i1328.m_IsTextObjectScaleStatic = !!i1329[23]
  var i1333 = i1329[24]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 1, i1332, '')
  }
  i1328.m_fallbackFontAssets = i1332
  i1328.m_matchMaterialPreset = !!i1329[25]
  i1328.m_HideSubTextObjects = !!i1329[26]
  request.r(i1329[27], i1329[28], 0, i1328, 'm_defaultSpriteAsset')
  i1328.m_defaultSpriteAssetPath = i1329[29]
  i1328.m_enableEmojiSupport = !!i1329[30]
  i1328.m_MissingCharacterSpriteUnicode = i1329[31]
  var i1335 = i1329[32]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1335.length; i += 2) {
  request.r(i1335[i + 0], i1335[i + 1], 1, i1334, '')
  }
  i1328.m_EmojiFallbackTextAssets = i1334
  i1328.m_defaultColorGradientPresetsPath = i1329[33]
  request.r(i1329[34], i1329[35], 0, i1328, 'm_defaultStyleSheet')
  i1328.m_StyleSheetsResourcePath = i1329[36]
  request.r(i1329[37], i1329[38], 0, i1328, 'm_leadingCharacters')
  request.r(i1329[39], i1329[40], 0, i1328, 'm_followingCharacters')
  i1328.m_UseModernHangulLineBreakingRules = !!i1329[41]
  return i1328
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1339 = data
  request.r(i1339[0], i1339[1], 0, i1338, 'spriteSheet')
  var i1341 = i1339[2]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('TMPro.TMP_Sprite', i1341[i + 0]));
  }
  i1338.spriteInfoList = i1340
  var i1343 = i1339[3]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1343.length; i += 2) {
  request.r(i1343[i + 0], i1343[i + 1], 1, i1342, '')
  }
  i1338.fallbackSpriteAssets = i1342
  var i1345 = i1339[4]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(request.d('TMPro.TMP_SpriteCharacter', i1345[i + 0]));
  }
  i1338.m_SpriteCharacterTable = i1344
  var i1347 = i1339[5]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.add(request.d('TMPro.TMP_SpriteGlyph', i1347[i + 0]));
  }
  i1338.m_GlyphTable = i1346
  i1338.m_Version = i1339[6]
  i1338.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1339[7], i1338.m_FaceInfo)
  request.r(i1339[8], i1339[9], 0, i1338, 'm_Material')
  return i1338
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1351 = data
  i1350.name = i1351[0]
  i1350.hashCode = i1351[1]
  i1350.unicode = i1351[2]
  i1350.pivot = new pc.Vec2( i1351[3], i1351[4] )
  request.r(i1351[5], i1351[6], 0, i1350, 'sprite')
  i1350.id = i1351[7]
  i1350.x = i1351[8]
  i1350.y = i1351[9]
  i1350.width = i1351[10]
  i1350.height = i1351[11]
  i1350.xOffset = i1351[12]
  i1350.yOffset = i1351[13]
  i1350.xAdvance = i1351[14]
  i1350.scale = i1351[15]
  return i1350
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1357 = data
  i1356.m_Name = i1357[0]
  i1356.m_ElementType = i1357[1]
  i1356.m_Unicode = i1357[2]
  i1356.m_GlyphIndex = i1357[3]
  i1356.m_Scale = i1357[4]
  return i1356
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'sprite')
  i1360.m_Index = i1361[2]
  i1360.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1361[3], i1360.m_Metrics)
  i1360.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1361[4], i1360.m_GlyphRect)
  i1360.m_Scale = i1361[5]
  i1360.m_AtlasIndex = i1361[6]
  i1360.m_ClassDefinitionType = i1361[7]
  return i1360
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1363 = data
  var i1365 = i1363[0]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.add(request.d('TMPro.TMP_Style', i1365[i + 0]));
  }
  i1362.m_StyleList = i1364
  return i1362
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TMP_Style' )
  var i1369 = data
  i1368.m_Name = i1369[0]
  i1368.m_HashCode = i1369[1]
  i1368.m_OpeningDefinition = i1369[2]
  i1368.m_ClosingDefinition = i1369[3]
  i1368.m_OpeningTagArray = i1369[4]
  i1368.m_ClosingTagArray = i1369[5]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1371 = data
  var i1373 = i1371[0]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1373[i + 0]) );
  }
  i1370.files = i1372
  i1370.componentToPrefabIds = i1371[1]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1377 = data
  i1376.path = i1377[0]
  request.r(i1377[1], i1377[2], 0, i1376, 'unityObject')
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1379 = data
  var i1381 = i1379[0]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1381[i + 0]) );
  }
  i1378.scriptsExecutionOrder = i1380
  var i1383 = i1379[1]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1383[i + 0]) );
  }
  i1378.sortingLayers = i1382
  var i1385 = i1379[2]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1385[i + 0]) );
  }
  i1378.cullingLayers = i1384
  i1378.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1379[3], i1378.timeSettings)
  i1378.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1379[4], i1378.physicsSettings)
  i1378.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1379[5], i1378.physics2DSettings)
  i1378.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1379[6], i1378.qualitySettings)
  i1378.enableRealtimeShadows = !!i1379[7]
  i1378.enableAutoInstancing = !!i1379[8]
  i1378.enableStaticBatching = !!i1379[9]
  i1378.enableDynamicBatching = !!i1379[10]
  i1378.usePreservativeDynamicBatching = !!i1379[11]
  i1378.lightmapEncodingQuality = i1379[12]
  i1378.desiredColorSpace = i1379[13]
  var i1387 = i1379[14]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( i1387[i + 0] );
  }
  i1378.allTags = i1386
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1391 = data
  i1390.name = i1391[0]
  i1390.value = i1391[1]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1395 = data
  i1394.id = i1395[0]
  i1394.name = i1395[1]
  i1394.value = i1395[2]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1399 = data
  i1398.id = i1399[0]
  i1398.name = i1399[1]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1401 = data
  i1400.fixedDeltaTime = i1401[0]
  i1400.maximumDeltaTime = i1401[1]
  i1400.timeScale = i1401[2]
  i1400.maximumParticleTimestep = i1401[3]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1403 = data
  i1402.gravity = new pc.Vec3( i1403[0], i1403[1], i1403[2] )
  i1402.defaultSolverIterations = i1403[3]
  i1402.bounceThreshold = i1403[4]
  i1402.autoSyncTransforms = !!i1403[5]
  i1402.autoSimulation = !!i1403[6]
  var i1405 = i1403[7]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1405[i + 0]) );
  }
  i1402.collisionMatrix = i1404
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1409 = data
  i1408.enabled = !!i1409[0]
  i1408.layerId = i1409[1]
  i1408.otherLayerId = i1409[2]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1411 = data
  request.r(i1411[0], i1411[1], 0, i1410, 'material')
  i1410.gravity = new pc.Vec2( i1411[2], i1411[3] )
  i1410.positionIterations = i1411[4]
  i1410.velocityIterations = i1411[5]
  i1410.velocityThreshold = i1411[6]
  i1410.maxLinearCorrection = i1411[7]
  i1410.maxAngularCorrection = i1411[8]
  i1410.maxTranslationSpeed = i1411[9]
  i1410.maxRotationSpeed = i1411[10]
  i1410.baumgarteScale = i1411[11]
  i1410.baumgarteTOIScale = i1411[12]
  i1410.timeToSleep = i1411[13]
  i1410.linearSleepTolerance = i1411[14]
  i1410.angularSleepTolerance = i1411[15]
  i1410.defaultContactOffset = i1411[16]
  i1410.autoSimulation = !!i1411[17]
  i1410.queriesHitTriggers = !!i1411[18]
  i1410.queriesStartInColliders = !!i1411[19]
  i1410.callbacksOnDisable = !!i1411[20]
  i1410.reuseCollisionCallbacks = !!i1411[21]
  i1410.autoSyncTransforms = !!i1411[22]
  var i1413 = i1411[23]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1413[i + 0]) );
  }
  i1410.collisionMatrix = i1412
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1417 = data
  i1416.enabled = !!i1417[0]
  i1416.layerId = i1417[1]
  i1416.otherLayerId = i1417[2]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1419 = data
  var i1421 = i1419[0]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1421[i + 0]) );
  }
  i1418.qualityLevels = i1420
  var i1423 = i1419[1]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( i1423[i + 0] );
  }
  i1418.names = i1422
  i1418.shadows = i1419[2]
  i1418.anisotropicFiltering = i1419[3]
  i1418.antiAliasing = i1419[4]
  i1418.lodBias = i1419[5]
  i1418.shadowCascades = i1419[6]
  i1418.shadowDistance = i1419[7]
  i1418.shadowmaskMode = i1419[8]
  i1418.shadowProjection = i1419[9]
  i1418.shadowResolution = i1419[10]
  i1418.softParticles = !!i1419[11]
  i1418.softVegetation = !!i1419[12]
  i1418.activeColorSpace = i1419[13]
  i1418.desiredColorSpace = i1419[14]
  i1418.masterTextureLimit = i1419[15]
  i1418.maxQueuedFrames = i1419[16]
  i1418.particleRaycastBudget = i1419[17]
  i1418.pixelLightCount = i1419[18]
  i1418.realtimeReflectionProbes = !!i1419[19]
  i1418.shadowCascade2Split = i1419[20]
  i1418.shadowCascade4Split = new pc.Vec3( i1419[21], i1419[22], i1419[23] )
  i1418.streamingMipmapsActive = !!i1419[24]
  i1418.vSyncCount = i1419[25]
  i1418.asyncUploadBufferSize = i1419[26]
  i1418.asyncUploadTimeSlice = i1419[27]
  i1418.billboardsFaceCameraPosition = !!i1419[28]
  i1418.shadowNearPlaneOffset = i1419[29]
  i1418.streamingMipmapsMemoryBudget = i1419[30]
  i1418.maximumLODLevel = i1419[31]
  i1418.streamingMipmapsAddAllCameras = !!i1419[32]
  i1418.streamingMipmapsMaxLevelReduction = i1419[33]
  i1418.streamingMipmapsRenderersPerFrame = i1419[34]
  i1418.resolutionScalingFixedDPIFactor = i1419[35]
  i1418.streamingMipmapsMaxFileIORequests = i1419[36]
  i1418.currentQualityLevel = i1419[37]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1427 = data
  i1426.name = i1427[0]
  var i1429 = i1427[1]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1429[i + 0]) );
  }
  i1426.tos = i1428
  var i1431 = i1427[2]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( i1431[i + 0] );
  }
  i1426.constant = i1430
  i1426.isValid = !!i1427[3]
  i1426.isHuman = !!i1427[4]
  i1426.hasRootMotion = !!i1427[5]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1435 = data
  i1434.hash = i1435[0]
  i1434.path = i1435[1]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1439 = data
  i1438.weight = i1439[0]
  i1438.vertices = i1439[1]
  i1438.normals = i1439[2]
  i1438.tangents = i1439[3]
  return i1438
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1441 = data
  request.r(i1441[0], i1441[1], 0, i1440, 'm_ObjectArgument')
  i1440.m_ObjectArgumentAssemblyTypeName = i1441[2]
  i1440.m_IntArgument = i1441[3]
  i1440.m_FloatArgument = i1441[4]
  i1440.m_StringArgument = i1441[5]
  i1440.m_BoolArgument = !!i1441[6]
  return i1440
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1443 = data
  i1442.m_GlyphIndex = i1443[0]
  i1442.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1443[1], i1442.m_GlyphValueRecord)
  return i1442
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1445 = data
  i1444.m_XCoordinate = i1445[0]
  i1444.m_YCoordinate = i1445[1]
  return i1444
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1446 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1447 = data
  i1446.m_XPositionAdjustment = i1447[0]
  i1446.m_YPositionAdjustment = i1447[1]
  return i1446
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1449 = data
  i1448.xPlacement = i1449[0]
  i1448.yPlacement = i1449[1]
  i1448.xAdvance = i1449[2]
  i1448.yAdvance = i1449[3]
  return i1448
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1451 = data
  i1450.m_XPlacement = i1451[0]
  i1450.m_YPlacement = i1451[1]
  i1450.m_XAdvance = i1451[2]
  i1450.m_YAdvance = i1451[3]
  return i1450
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

Deserializers.buildID = "d88bab19-c486-4fe6-bd8d-45eecff8232e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

