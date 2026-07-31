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

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i807 = data
  i806.name = i807[0]
  i806.atlasId = i807[1]
  i806.mipmapCount = i807[2]
  i806.hdr = !!i807[3]
  i806.size = i807[4]
  i806.anisoLevel = i807[5]
  i806.filterMode = i807[6]
  var i809 = i807[7]
  var i808 = []
  for(var i = 0; i < i809.length; i += 4) {
    i808.push( UnityEngine.Rect.MinMaxRect(i809[i + 0], i809[i + 1], i809[i + 2], i809[i + 3]) );
  }
  i806.rects = i808
  i806.wrapU = i807[8]
  i806.wrapV = i807[9]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i813 = data
  i812.name = i813[0]
  i812.index = i813[1]
  i812.startup = !!i813[2]
  return i812
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'm_FirstSelected')
  i814.m_sendNavigationEvents = !!i815[2]
  i814.m_DragThreshold = i815[3]
  return i814
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i817 = data
  i816.m_HorizontalAxis = i817[0]
  i816.m_VerticalAxis = i817[1]
  i816.m_SubmitButton = i817[2]
  i816.m_CancelButton = i817[3]
  i816.m_InputActionsPerSecond = i817[4]
  i816.m_RepeatDelay = i817[5]
  i816.m_ForceModuleActive = !!i817[6]
  i816.m_SendPointerHoverToParent = !!i817[7]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i821 = data
  i820.type = i821[0]
  i820.color = new pc.Color(i821[1], i821[2], i821[3], i821[4])
  i820.cullingMask = i821[5]
  i820.intensity = i821[6]
  i820.range = i821[7]
  i820.spotAngle = i821[8]
  i820.shadows = i821[9]
  i820.shadowNormalBias = i821[10]
  i820.shadowBias = i821[11]
  i820.shadowStrength = i821[12]
  i820.shadowResolution = i821[13]
  i820.lightmapBakeType = i821[14]
  i820.renderMode = i821[15]
  request.r(i821[16], i821[17], 0, i820, 'cookie')
  i820.cookieSize = i821[18]
  i820.shadowNearPlane = i821[19]
  i820.occlusionMaskChannel = i821[20]
  i820.isBaked = !!i821[21]
  i820.mixedLightingMode = i821[22]
  i820.enabled = !!i821[23]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i823 = data
  i822.pivot = new pc.Vec2( i823[0], i823[1] )
  i822.anchorMin = new pc.Vec2( i823[2], i823[3] )
  i822.anchorMax = new pc.Vec2( i823[4], i823[5] )
  i822.sizeDelta = new pc.Vec2( i823[6], i823[7] )
  i822.anchoredPosition3D = new pc.Vec3( i823[8], i823[9], i823[10] )
  i822.rotation = new pc.Quat(i823[11], i823[12], i823[13], i823[14])
  i822.scale = new pc.Vec3( i823[15], i823[16], i823[17] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i825 = data
  i824.planeDistance = i825[0]
  i824.referencePixelsPerUnit = i825[1]
  i824.isFallbackOverlay = !!i825[2]
  i824.renderMode = i825[3]
  i824.renderOrder = i825[4]
  i824.sortingLayerName = i825[5]
  i824.sortingOrder = i825[6]
  i824.scaleFactor = i825[7]
  request.r(i825[8], i825[9], 0, i824, 'worldCamera')
  i824.overrideSorting = !!i825[10]
  i824.pixelPerfect = !!i825[11]
  i824.targetDisplay = i825[12]
  i824.overridePixelPerfect = !!i825[13]
  i824.enabled = !!i825[14]
  return i824
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i827 = data
  i826.m_UiScaleMode = i827[0]
  i826.m_ReferencePixelsPerUnit = i827[1]
  i826.m_ScaleFactor = i827[2]
  i826.m_ReferenceResolution = new pc.Vec2( i827[3], i827[4] )
  i826.m_ScreenMatchMode = i827[5]
  i826.m_MatchWidthOrHeight = i827[6]
  i826.m_PhysicalUnit = i827[7]
  i826.m_FallbackScreenDPI = i827[8]
  i826.m_DefaultSpriteDPI = i827[9]
  i826.m_DynamicPixelsPerUnit = i827[10]
  i826.m_PresetInfoIsWorld = !!i827[11]
  return i826
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i829 = data
  i828.m_IgnoreReversedGraphics = !!i829[0]
  i828.m_BlockingObjects = i829[1]
  i828.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i829[2] )
  return i828
}

Deserializers["Joystick"] = function (request, data, root) {
  var i830 = root || request.c( 'Joystick' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'background')
  request.r(i831[2], i831[3], 0, i830, 'joy')
  i830.deadZone = i831[4]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i833 = data
  i832.cullTransparentMesh = !!i833[0]
  return i832
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.Image' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'm_Sprite')
  i834.m_Type = i835[2]
  i834.m_PreserveAspect = !!i835[3]
  i834.m_FillCenter = !!i835[4]
  i834.m_FillMethod = i835[5]
  i834.m_FillAmount = i835[6]
  i834.m_FillClockwise = !!i835[7]
  i834.m_FillOrigin = i835[8]
  i834.m_UseSpriteMesh = !!i835[9]
  i834.m_PixelsPerUnitMultiplier = i835[10]
  request.r(i835[11], i835[12], 0, i834, 'm_Material')
  i834.m_Maskable = !!i835[13]
  i834.m_Color = new pc.Color(i835[14], i835[15], i835[16], i835[17])
  i834.m_RaycastTarget = !!i835[18]
  i834.m_RaycastPadding = new pc.Vec4( i835[19], i835[20], i835[21], i835[22] )
  return i834
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i836 = root || request.c( 'JumpButton' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'button')
  return i836
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.Button' )
  var i839 = data
  i838.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i839[0], i838.m_OnClick)
  i838.m_Navigation = request.d('UnityEngine.UI.Navigation', i839[1], i838.m_Navigation)
  i838.m_Transition = i839[2]
  i838.m_Colors = request.d('UnityEngine.UI.ColorBlock', i839[3], i838.m_Colors)
  i838.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i839[4], i838.m_SpriteState)
  i838.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i839[5], i838.m_AnimationTriggers)
  i838.m_Interactable = !!i839[6]
  request.r(i839[7], i839[8], 0, i838, 'm_TargetGraphic')
  return i838
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i841 = data
  i840.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i841[0], i840.m_PersistentCalls)
  return i840
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i843 = data
  var i845 = i843[0]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('UnityEngine.Events.PersistentCall', i845[i + 0]));
  }
  i842.m_Calls = i844
  return i842
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'm_Target')
  i848.m_TargetAssemblyTypeName = i849[2]
  i848.m_MethodName = i849[3]
  i848.m_Mode = i849[4]
  i848.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i849[5], i848.m_Arguments)
  i848.m_CallState = i849[6]
  return i848
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i851 = data
  i850.m_Mode = i851[0]
  i850.m_WrapAround = !!i851[1]
  request.r(i851[2], i851[3], 0, i850, 'm_SelectOnUp')
  request.r(i851[4], i851[5], 0, i850, 'm_SelectOnDown')
  request.r(i851[6], i851[7], 0, i850, 'm_SelectOnLeft')
  request.r(i851[8], i851[9], 0, i850, 'm_SelectOnRight')
  return i850
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i853 = data
  i852.m_NormalColor = new pc.Color(i853[0], i853[1], i853[2], i853[3])
  i852.m_HighlightedColor = new pc.Color(i853[4], i853[5], i853[6], i853[7])
  i852.m_PressedColor = new pc.Color(i853[8], i853[9], i853[10], i853[11])
  i852.m_SelectedColor = new pc.Color(i853[12], i853[13], i853[14], i853[15])
  i852.m_DisabledColor = new pc.Color(i853[16], i853[17], i853[18], i853[19])
  i852.m_ColorMultiplier = i853[20]
  i852.m_FadeDuration = i853[21]
  return i852
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'm_HighlightedSprite')
  request.r(i855[2], i855[3], 0, i854, 'm_PressedSprite')
  request.r(i855[4], i855[5], 0, i854, 'm_SelectedSprite')
  request.r(i855[6], i855[7], 0, i854, 'm_DisabledSprite')
  return i854
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i857 = data
  i856.m_NormalTrigger = i857[0]
  i856.m_HighlightedTrigger = i857[1]
  i856.m_PressedTrigger = i857[2]
  i856.m_SelectedTrigger = i857[3]
  i856.m_DisabledTrigger = i857[4]
  return i856
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.Mask' )
  var i859 = data
  i858.m_ShowMaskGraphic = !!i859[0]
  return i858
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i861 = data
  i860.m_hasFontAssetChanged = !!i861[0]
  request.r(i861[1], i861[2], 0, i860, 'm_baseMaterial')
  i860.m_maskOffset = new pc.Vec4( i861[3], i861[4], i861[5], i861[6] )
  i860.m_text = i861[7]
  i860.m_isRightToLeft = !!i861[8]
  request.r(i861[9], i861[10], 0, i860, 'm_fontAsset')
  request.r(i861[11], i861[12], 0, i860, 'm_sharedMaterial')
  var i863 = i861[13]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.m_fontSharedMaterials = i862
  request.r(i861[14], i861[15], 0, i860, 'm_fontMaterial')
  var i865 = i861[16]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i860.m_fontMaterials = i864
  i860.m_fontColor32 = UnityEngine.Color32.ConstructColor(i861[17], i861[18], i861[19], i861[20])
  i860.m_fontColor = new pc.Color(i861[21], i861[22], i861[23], i861[24])
  i860.m_enableVertexGradient = !!i861[25]
  i860.m_colorMode = i861[26]
  i860.m_fontColorGradient = request.d('TMPro.VertexGradient', i861[27], i860.m_fontColorGradient)
  request.r(i861[28], i861[29], 0, i860, 'm_fontColorGradientPreset')
  request.r(i861[30], i861[31], 0, i860, 'm_spriteAsset')
  i860.m_tintAllSprites = !!i861[32]
  request.r(i861[33], i861[34], 0, i860, 'm_StyleSheet')
  i860.m_TextStyleHashCode = i861[35]
  i860.m_overrideHtmlColors = !!i861[36]
  i860.m_faceColor = UnityEngine.Color32.ConstructColor(i861[37], i861[38], i861[39], i861[40])
  i860.m_fontSize = i861[41]
  i860.m_fontSizeBase = i861[42]
  i860.m_fontWeight = i861[43]
  i860.m_enableAutoSizing = !!i861[44]
  i860.m_fontSizeMin = i861[45]
  i860.m_fontSizeMax = i861[46]
  i860.m_fontStyle = i861[47]
  i860.m_HorizontalAlignment = i861[48]
  i860.m_VerticalAlignment = i861[49]
  i860.m_textAlignment = i861[50]
  i860.m_characterSpacing = i861[51]
  i860.m_characterHorizontalScale = i861[52]
  i860.m_wordSpacing = i861[53]
  i860.m_lineSpacing = i861[54]
  i860.m_lineSpacingMax = i861[55]
  i860.m_paragraphSpacing = i861[56]
  i860.m_charWidthMaxAdj = i861[57]
  i860.m_TextWrappingMode = i861[58]
  i860.m_wordWrappingRatios = i861[59]
  i860.m_overflowMode = i861[60]
  request.r(i861[61], i861[62], 0, i860, 'm_linkedTextComponent')
  request.r(i861[63], i861[64], 0, i860, 'parentLinkedComponent')
  i860.m_enableKerning = !!i861[65]
  var i867 = i861[66]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(i867[i + 0]);
  }
  i860.m_ActiveFontFeatures = i866
  i860.m_enableExtraPadding = !!i861[67]
  i860.checkPaddingRequired = !!i861[68]
  i860.m_isRichText = !!i861[69]
  i860.m_parseCtrlCharacters = !!i861[70]
  i860.m_isOrthographic = !!i861[71]
  i860.m_isCullingEnabled = !!i861[72]
  i860.m_horizontalMapping = i861[73]
  i860.m_verticalMapping = i861[74]
  i860.m_uvLineOffset = i861[75]
  i860.m_geometrySortingOrder = i861[76]
  i860.m_IsTextObjectScaleStatic = !!i861[77]
  i860.m_VertexBufferAutoSizeReduction = !!i861[78]
  i860.m_useMaxVisibleDescender = !!i861[79]
  i860.m_pageToDisplay = i861[80]
  i860.m_margin = new pc.Vec4( i861[81], i861[82], i861[83], i861[84] )
  i860.m_isUsingLegacyAnimationComponent = !!i861[85]
  i860.m_isVolumetricText = !!i861[86]
  request.r(i861[87], i861[88], 0, i860, 'm_Material')
  i860.m_EmojiFallbackSupport = !!i861[89]
  i860.m_Maskable = !!i861[90]
  i860.m_Color = new pc.Color(i861[91], i861[92], i861[93], i861[94])
  i860.m_RaycastTarget = !!i861[95]
  i860.m_RaycastPadding = new pc.Vec4( i861[96], i861[97], i861[98], i861[99] )
  return i860
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.VertexGradient' )
  var i871 = data
  i870.topLeft = new pc.Color(i871[0], i871[1], i871[2], i871[3])
  i870.topRight = new pc.Color(i871[4], i871[5], i871[6], i871[7])
  i870.bottomLeft = new pc.Color(i871[8], i871[9], i871[10], i871[11])
  i870.bottomRight = new pc.Color(i871[12], i871[13], i871[14], i871[15])
  return i870
}

Deserializers["TutController"] = function (request, data, root) {
  var i874 = root || request.c( 'TutController' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'tutScene')
  request.r(i875[2], i875[3], 0, i874, 'startTut')
  request.r(i875[4], i875[5], 0, i874, 'playTut')
  request.r(i875[6], i875[7], 0, i874, 'farTut')
  request.r(i875[8], i875[9], 0, i874, 'failTut')
  return i874
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i876 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i877 = data
  i876.targetIsSelf = !!i877[0]
  request.r(i877[1], i877[2], 0, i876, 'targetGO')
  i876.tweenTargetIsTargetGO = !!i877[3]
  i876.delay = i877[4]
  i876.duration = i877[5]
  i876.easeType = i877[6]
  i876.easeCurve = new pc.AnimationCurve( { keys_flow: i877[7] } )
  i876.loopType = i877[8]
  i876.loops = i877[9]
  i876.id = i877[10]
  i876.isRelative = !!i877[11]
  i876.isFrom = !!i877[12]
  i876.isIndependentUpdate = !!i877[13]
  i876.autoKill = !!i877[14]
  i876.autoGenerate = !!i877[15]
  i876.isActive = !!i877[16]
  i876.isValid = !!i877[17]
  request.r(i877[18], i877[19], 0, i876, 'target')
  i876.animationType = i877[20]
  i876.targetType = i877[21]
  i876.forcedTargetType = i877[22]
  i876.autoPlay = !!i877[23]
  i876.useTargetAsV3 = !!i877[24]
  i876.endValueFloat = i877[25]
  i876.endValueV3 = new pc.Vec3( i877[26], i877[27], i877[28] )
  i876.endValueV2 = new pc.Vec2( i877[29], i877[30] )
  i876.endValueColor = new pc.Color(i877[31], i877[32], i877[33], i877[34])
  i876.endValueString = i877[35]
  i876.endValueRect = UnityEngine.Rect.MinMaxRect(i877[36], i877[37], i877[38], i877[39])
  request.r(i877[40], i877[41], 0, i876, 'endValueTransform')
  i876.optionalBool0 = !!i877[42]
  i876.optionalBool1 = !!i877[43]
  i876.optionalFloat0 = i877[44]
  i876.optionalInt0 = i877[45]
  i876.optionalRotationMode = i877[46]
  i876.optionalScrambleMode = i877[47]
  i876.optionalShakeRandomnessMode = i877[48]
  i876.optionalString = i877[49]
  i876.updateType = i877[50]
  i876.isSpeedBased = !!i877[51]
  i876.hasOnStart = !!i877[52]
  i876.hasOnPlay = !!i877[53]
  i876.hasOnUpdate = !!i877[54]
  i876.hasOnStepComplete = !!i877[55]
  i876.hasOnComplete = !!i877[56]
  i876.hasOnTweenCreated = !!i877[57]
  i876.hasOnRewind = !!i877[58]
  i876.onStart = request.d('UnityEngine.Events.UnityEvent', i877[59], i876.onStart)
  i876.onPlay = request.d('UnityEngine.Events.UnityEvent', i877[60], i876.onPlay)
  i876.onUpdate = request.d('UnityEngine.Events.UnityEvent', i877[61], i876.onUpdate)
  i876.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i877[62], i876.onStepComplete)
  i876.onComplete = request.d('UnityEngine.Events.UnityEvent', i877[63], i876.onComplete)
  i876.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i877[64], i876.onTweenCreated)
  i876.onRewind = request.d('UnityEngine.Events.UnityEvent', i877[65], i876.onRewind)
  return i876
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i879 = data
  i878.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i879[0], i878.m_PersistentCalls)
  return i878
}

Deserializers["HideOnPointer"] = function (request, data, root) {
  var i880 = root || request.c( 'HideOnPointer' )
  var i881 = data
  i880.OnPointerDownEvent = request.d('System.Action', i881[0], i880.OnPointerDownEvent)
  return i880
}

Deserializers["System.Action"] = function (request, data, root) {
  var i882 = root || request.c( 'System.Action' )
  var i883 = data
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'additionalVertexStreams')
  i884.enabled = !!i885[2]
  request.r(i885[3], i885[4], 0, i884, 'sharedMaterial')
  var i887 = i885[5]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.sharedMaterials = i886
  i884.receiveShadows = !!i885[6]
  i884.shadowCastingMode = i885[7]
  i884.sortingLayerID = i885[8]
  i884.sortingOrder = i885[9]
  i884.lightmapIndex = i885[10]
  i884.lightmapSceneIndex = i885[11]
  i884.lightmapScaleOffset = new pc.Vec4( i885[12], i885[13], i885[14], i885[15] )
  i884.lightProbeUsage = i885[16]
  i884.reflectionProbeUsage = i885[17]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'sharedMesh')
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i891 = data
  i890.center = new pc.Vec3( i891[0], i891[1], i891[2] )
  i890.size = new pc.Vec3( i891[3], i891[4], i891[5] )
  i890.enabled = !!i891[6]
  i890.isTrigger = !!i891[7]
  request.r(i891[8], i891[9], 0, i890, 'material')
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'sharedMesh')
  i892.convex = !!i893[2]
  i892.enabled = !!i893[3]
  i892.isTrigger = !!i893[4]
  request.r(i893[5], i893[6], 0, i892, 'material')
  return i892
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i894 = root || request.c( 'CharacterMotor' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'characterInput')
  request.r(i895[2], i895[3], 0, i894, 'cameraYawTransform')
  i894.moveSpeed = i895[4]
  i894.jumpHeight = i895[5]
  request.r(i895[6], i895[7], 0, i894, 'groundChecker')
  i894.gravity = i895[8]
  request.r(i895[9], i895[10], 0, i894, 'controller')
  i894.autoRun = !!i895[11]
  return i894
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i896 = root || request.c( 'CharacterRotation' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'motor')
  i896.rotationSpeed = i897[2]
  return i896
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i898 = root || request.c( 'CharacterAnimation' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'animator')
  request.r(i899[2], i899[3], 0, i898, 'motor')
  return i898
}

Deserializers["CharacterCollect"] = function (request, data, root) {
  var i900 = root || request.c( 'CharacterCollect' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'motor')
  request.r(i901[2], i901[3], 0, i900, 'avatar')
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i903 = data
  i902.mass = i903[0]
  i902.drag = i903[1]
  i902.angularDrag = i903[2]
  i902.useGravity = !!i903[3]
  i902.isKinematic = !!i903[4]
  i902.constraints = i903[5]
  i902.maxAngularVelocity = i903[6]
  i902.collisionDetectionMode = i903[7]
  i902.interpolation = i903[8]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i905 = data
  i904.center = new pc.Vec3( i905[0], i905[1], i905[2] )
  i904.radius = i905[3]
  i904.height = i905[4]
  i904.direction = i905[5]
  i904.enabled = !!i905[6]
  i904.isTrigger = !!i905[7]
  request.r(i905[8], i905[9], 0, i904, 'material')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'animatorController')
  request.r(i907[2], i907[3], 0, i906, 'avatar')
  i906.updateMode = i907[4]
  i906.hasTransformHierarchy = !!i907[5]
  i906.applyRootMotion = !!i907[6]
  var i909 = i907[7]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.humanBones = i908
  i906.enabled = !!i907[8]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'clip')
  request.r(i913[2], i913[3], 0, i912, 'outputAudioMixerGroup')
  i912.playOnAwake = !!i913[4]
  i912.loop = !!i913[5]
  i912.time = i913[6]
  i912.volume = i913[7]
  i912.pitch = i913[8]
  i912.enabled = !!i913[9]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i915 = data
  i914.color = new pc.Color(i915[0], i915[1], i915[2], i915[3])
  request.r(i915[4], i915[5], 0, i914, 'sprite')
  i914.flipX = !!i915[6]
  i914.flipY = !!i915[7]
  i914.drawMode = i915[8]
  i914.size = new pc.Vec2( i915[9], i915[10] )
  i914.tileMode = i915[11]
  i914.adaptiveModeThreshold = i915[12]
  i914.maskInteraction = i915[13]
  i914.spriteSortPoint = i915[14]
  i914.enabled = !!i915[15]
  request.r(i915[16], i915[17], 0, i914, 'sharedMaterial')
  var i917 = i915[18]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i914.sharedMaterials = i916
  i914.receiveShadows = !!i915[19]
  i914.shadowCastingMode = i915[20]
  i914.sortingLayerID = i915[21]
  i914.sortingOrder = i915[22]
  i914.lightmapIndex = i915[23]
  i914.lightmapSceneIndex = i915[24]
  i914.lightmapScaleOffset = new pc.Vec4( i915[25], i915[26], i915[27], i915[28] )
  i914.lightProbeUsage = i915[29]
  i914.reflectionProbeUsage = i915[30]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'sharedMesh')
  var i921 = i919[2]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.bones = i920
  i918.updateWhenOffscreen = !!i919[3]
  i918.localBounds = i919[4]
  request.r(i919[5], i919[6], 0, i918, 'rootBone')
  var i923 = i919[7]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i923[i + 0]) );
  }
  i918.blendShapesWeights = i922
  i918.enabled = !!i919[8]
  request.r(i919[9], i919[10], 0, i918, 'sharedMaterial')
  var i925 = i919[11]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i918.sharedMaterials = i924
  i918.receiveShadows = !!i919[12]
  i918.shadowCastingMode = i919[13]
  i918.sortingLayerID = i919[14]
  i918.sortingOrder = i919[15]
  i918.lightmapIndex = i919[16]
  i918.lightmapSceneIndex = i919[17]
  i918.lightmapScaleOffset = new pc.Vec4( i919[18], i919[19], i919[20], i919[21] )
  i918.lightProbeUsage = i919[22]
  i918.reflectionProbeUsage = i919[23]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i929 = data
  i928.weight = i929[0]
  return i928
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i930 = root || request.c( 'GroundChecker' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'groundPoint')
  i930.checkRadius = i931[2]
  i930.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i931[3] )
  return i930
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i932 = root || request.c( 'CameraFollow' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'target')
  i932.smoothTime = i933[2]
  return i932
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i934 = root || request.c( 'CameraLook' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'input')
  request.r(i935[2], i935[3], 0, i934, 'yawPivot')
  request.r(i935[4], i935[5], 0, i934, 'pitchPivot')
  i934.minPitch = i935[6]
  i934.maxPitch = i935[7]
  i934.yaw = i935[8]
  i934.pitch = i935[9]
  i934.defaltYaw = i935[10]
  i934.defaltPitch = i935[11]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i937 = data
  i936.aspect = i937[0]
  i936.orthographic = !!i937[1]
  i936.orthographicSize = i937[2]
  i936.backgroundColor = new pc.Color(i937[3], i937[4], i937[5], i937[6])
  i936.nearClipPlane = i937[7]
  i936.farClipPlane = i937[8]
  i936.fieldOfView = i937[9]
  i936.depth = i937[10]
  i936.clearFlags = i937[11]
  i936.cullingMask = i937[12]
  i936.rect = i937[13]
  request.r(i937[14], i937[15], 0, i936, 'targetTexture')
  i936.usePhysicalProperties = !!i937[16]
  i936.focalLength = i937[17]
  i936.sensorSize = new pc.Vec2( i937[18], i937[19] )
  i936.lensShift = new pc.Vec2( i937[20], i937[21] )
  i936.gateFit = i937[22]
  i936.commandBufferCount = i937[23]
  i936.cameraType = i937[24]
  i936.enabled = !!i937[25]
  return i936
}

Deserializers["Box"] = function (request, data, root) {
  var i938 = root || request.c( 'Box' )
  var i939 = data
  i938.lifeTime = i939[0]
  request.r(i939[1], i939[2], 0, i938, 'effect')
  request.r(i939[3], i939[4], 0, i938, 'avatar')
  request.r(i939[5], i939[6], 0, i938, 'interactSound')
  request.r(i939[7], i939[8], 0, i938, 'openSound')
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i941 = data
  i940.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i941[0], i940.main)
  i940.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i941[1], i940.colorBySpeed)
  i940.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i941[2], i940.colorOverLifetime)
  i940.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i941[3], i940.emission)
  i940.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i941[4], i940.rotationBySpeed)
  i940.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i941[5], i940.rotationOverLifetime)
  i940.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i941[6], i940.shape)
  i940.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i941[7], i940.sizeBySpeed)
  i940.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i941[8], i940.sizeOverLifetime)
  i940.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i941[9], i940.textureSheetAnimation)
  i940.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i941[10], i940.velocityOverLifetime)
  i940.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i941[11], i940.noise)
  i940.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i941[12], i940.inheritVelocity)
  i940.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i941[13], i940.forceOverLifetime)
  i940.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i941[14], i940.limitVelocityOverLifetime)
  i940.useAutoRandomSeed = !!i941[15]
  i940.randomSeed = i941[16]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i942 = root || new pc.ParticleSystemMain()
  var i943 = data
  i942.duration = i943[0]
  i942.loop = !!i943[1]
  i942.prewarm = !!i943[2]
  i942.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[3], i942.startDelay)
  i942.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[4], i942.startLifetime)
  i942.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[5], i942.startSpeed)
  i942.startSize3D = !!i943[6]
  i942.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[7], i942.startSizeX)
  i942.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[8], i942.startSizeY)
  i942.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[9], i942.startSizeZ)
  i942.startRotation3D = !!i943[10]
  i942.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[11], i942.startRotationX)
  i942.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[12], i942.startRotationY)
  i942.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[13], i942.startRotationZ)
  i942.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i943[14], i942.startColor)
  i942.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[15], i942.gravityModifier)
  i942.simulationSpace = i943[16]
  request.r(i943[17], i943[18], 0, i942, 'customSimulationSpace')
  i942.simulationSpeed = i943[19]
  i942.useUnscaledTime = !!i943[20]
  i942.scalingMode = i943[21]
  i942.playOnAwake = !!i943[22]
  i942.maxParticles = i943[23]
  i942.emitterVelocityMode = i943[24]
  i942.stopAction = i943[25]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i944 = root || new pc.MinMaxCurve()
  var i945 = data
  i944.mode = i945[0]
  i944.curveMin = new pc.AnimationCurve( { keys_flow: i945[1] } )
  i944.curveMax = new pc.AnimationCurve( { keys_flow: i945[2] } )
  i944.curveMultiplier = i945[3]
  i944.constantMin = i945[4]
  i944.constantMax = i945[5]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i946 = root || new pc.MinMaxGradient()
  var i947 = data
  i946.mode = i947[0]
  i946.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i947[1], i946.gradientMin)
  i946.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i947[2], i946.gradientMax)
  i946.colorMin = new pc.Color(i947[3], i947[4], i947[5], i947[6])
  i946.colorMax = new pc.Color(i947[7], i947[8], i947[9], i947[10])
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i949 = data
  i948.mode = i949[0]
  var i951 = i949[1]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i951[i + 0]) );
  }
  i948.colorKeys = i950
  var i953 = i949[2]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i953[i + 0]) );
  }
  i948.alphaKeys = i952
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i954 = root || new pc.ParticleSystemColorBySpeed()
  var i955 = data
  i954.enabled = !!i955[0]
  i954.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i955[1], i954.color)
  i954.range = new pc.Vec2( i955[2], i955[3] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i959 = data
  i958.color = new pc.Color(i959[0], i959[1], i959[2], i959[3])
  i958.time = i959[4]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i963 = data
  i962.alpha = i963[0]
  i962.time = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemColorOverLifetime()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i965[1], i964.color)
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemEmitter()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[1], i966.rateOverTime)
  i966.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.rateOverDistance)
  var i969 = i967[3]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i969[i + 0]) );
  }
  i966.bursts = i968
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemBurst()
  var i973 = data
  i972.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[0], i972.count)
  i972.cycleCount = i973[1]
  i972.minCount = i973[2]
  i972.maxCount = i973[3]
  i972.repeatInterval = i973[4]
  i972.time = i973[5]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemRotationBySpeed()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[1], i974.x)
  i974.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[2], i974.y)
  i974.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[3], i974.z)
  i974.separateAxes = !!i975[4]
  i974.range = new pc.Vec2( i975[5], i975[6] )
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i976 = root || new pc.ParticleSystemRotationOverLifetime()
  var i977 = data
  i976.enabled = !!i977[0]
  i976.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[1], i976.x)
  i976.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[2], i976.y)
  i976.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[3], i976.z)
  i976.separateAxes = !!i977[4]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i978 = root || new pc.ParticleSystemShape()
  var i979 = data
  i978.enabled = !!i979[0]
  i978.shapeType = i979[1]
  i978.randomDirectionAmount = i979[2]
  i978.sphericalDirectionAmount = i979[3]
  i978.randomPositionAmount = i979[4]
  i978.alignToDirection = !!i979[5]
  i978.radius = i979[6]
  i978.radiusMode = i979[7]
  i978.radiusSpread = i979[8]
  i978.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[9], i978.radiusSpeed)
  i978.radiusThickness = i979[10]
  i978.angle = i979[11]
  i978.length = i979[12]
  i978.boxThickness = new pc.Vec3( i979[13], i979[14], i979[15] )
  i978.meshShapeType = i979[16]
  request.r(i979[17], i979[18], 0, i978, 'mesh')
  request.r(i979[19], i979[20], 0, i978, 'meshRenderer')
  request.r(i979[21], i979[22], 0, i978, 'skinnedMeshRenderer')
  i978.useMeshMaterialIndex = !!i979[23]
  i978.meshMaterialIndex = i979[24]
  i978.useMeshColors = !!i979[25]
  i978.normalOffset = i979[26]
  i978.arc = i979[27]
  i978.arcMode = i979[28]
  i978.arcSpread = i979[29]
  i978.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[30], i978.arcSpeed)
  i978.donutRadius = i979[31]
  i978.position = new pc.Vec3( i979[32], i979[33], i979[34] )
  i978.rotation = new pc.Vec3( i979[35], i979[36], i979[37] )
  i978.scale = new pc.Vec3( i979[38], i979[39], i979[40] )
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i980 = root || new pc.ParticleSystemSizeBySpeed()
  var i981 = data
  i980.enabled = !!i981[0]
  i980.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[1], i980.x)
  i980.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[2], i980.y)
  i980.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[3], i980.z)
  i980.separateAxes = !!i981[4]
  i980.range = new pc.Vec2( i981[5], i981[6] )
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i982 = root || new pc.ParticleSystemSizeOverLifetime()
  var i983 = data
  i982.enabled = !!i983[0]
  i982.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[1], i982.x)
  i982.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[2], i982.y)
  i982.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[3], i982.z)
  i982.separateAxes = !!i983[4]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i984 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i985 = data
  i984.enabled = !!i985[0]
  i984.mode = i985[1]
  i984.animation = i985[2]
  i984.numTilesX = i985[3]
  i984.numTilesY = i985[4]
  i984.useRandomRow = !!i985[5]
  i984.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[6], i984.frameOverTime)
  i984.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[7], i984.startFrame)
  i984.cycleCount = i985[8]
  i984.rowIndex = i985[9]
  i984.flipU = i985[10]
  i984.flipV = i985[11]
  i984.spriteCount = i985[12]
  var i987 = i985[13]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i984.sprites = i986
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i990 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i991 = data
  i990.enabled = !!i991[0]
  i990.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[1], i990.x)
  i990.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[2], i990.y)
  i990.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[3], i990.z)
  i990.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[4], i990.radial)
  i990.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[5], i990.speedModifier)
  i990.space = i991[6]
  i990.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[7], i990.orbitalX)
  i990.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[8], i990.orbitalY)
  i990.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[9], i990.orbitalZ)
  i990.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[10], i990.orbitalOffsetX)
  i990.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[11], i990.orbitalOffsetY)
  i990.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[12], i990.orbitalOffsetZ)
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i992 = root || new pc.ParticleSystemNoise()
  var i993 = data
  i992.enabled = !!i993[0]
  i992.separateAxes = !!i993[1]
  i992.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[2], i992.strengthX)
  i992.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[3], i992.strengthY)
  i992.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[4], i992.strengthZ)
  i992.frequency = i993[5]
  i992.damping = !!i993[6]
  i992.octaveCount = i993[7]
  i992.octaveMultiplier = i993[8]
  i992.octaveScale = i993[9]
  i992.quality = i993[10]
  i992.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[11], i992.scrollSpeed)
  i992.scrollSpeedMultiplier = i993[12]
  i992.remapEnabled = !!i993[13]
  i992.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[14], i992.remapX)
  i992.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[15], i992.remapY)
  i992.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[16], i992.remapZ)
  i992.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[17], i992.positionAmount)
  i992.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[18], i992.rotationAmount)
  i992.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[19], i992.sizeAmount)
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i994 = root || new pc.ParticleSystemInheritVelocity()
  var i995 = data
  i994.enabled = !!i995[0]
  i994.mode = i995[1]
  i994.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i995[2], i994.curve)
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i996 = root || new pc.ParticleSystemForceOverLifetime()
  var i997 = data
  i996.enabled = !!i997[0]
  i996.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[1], i996.x)
  i996.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[2], i996.y)
  i996.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[3], i996.z)
  i996.space = i997[4]
  i996.randomized = !!i997[5]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i998 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i999 = data
  i998.enabled = !!i999[0]
  i998.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[1], i998.limit)
  i998.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[2], i998.limitX)
  i998.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[3], i998.limitY)
  i998.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[4], i998.limitZ)
  i998.dampen = i999[5]
  i998.separateAxes = !!i999[6]
  i998.space = i999[7]
  i998.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[8], i998.drag)
  i998.multiplyDragByParticleSize = !!i999[9]
  i998.multiplyDragByParticleVelocity = !!i999[10]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'mesh')
  i1000.meshCount = i1001[2]
  i1000.activeVertexStreamsCount = i1001[3]
  i1000.alignment = i1001[4]
  i1000.renderMode = i1001[5]
  i1000.sortMode = i1001[6]
  i1000.lengthScale = i1001[7]
  i1000.velocityScale = i1001[8]
  i1000.cameraVelocityScale = i1001[9]
  i1000.normalDirection = i1001[10]
  i1000.sortingFudge = i1001[11]
  i1000.minParticleSize = i1001[12]
  i1000.maxParticleSize = i1001[13]
  i1000.pivot = new pc.Vec3( i1001[14], i1001[15], i1001[16] )
  request.r(i1001[17], i1001[18], 0, i1000, 'trailMaterial')
  i1000.applyActiveColorSpace = !!i1001[19]
  i1000.enabled = !!i1001[20]
  request.r(i1001[21], i1001[22], 0, i1000, 'sharedMaterial')
  var i1003 = i1001[23]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 2, i1002, '')
  }
  i1000.sharedMaterials = i1002
  i1000.receiveShadows = !!i1001[24]
  i1000.shadowCastingMode = i1001[25]
  i1000.sortingLayerID = i1001[26]
  i1000.sortingOrder = i1001[27]
  i1000.lightmapIndex = i1001[28]
  i1000.lightmapSceneIndex = i1001[29]
  i1000.lightmapScaleOffset = new pc.Vec4( i1001[30], i1001[31], i1001[32], i1001[33] )
  i1000.lightProbeUsage = i1001[34]
  i1000.reflectionProbeUsage = i1001[35]
  return i1000
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

Deserializers.buildID = "859a179e-9bbf-401d-bb4d-2ee8f6a051db";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

