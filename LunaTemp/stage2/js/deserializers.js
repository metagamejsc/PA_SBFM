var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointSpring' )
  var i683 = data
  i682.spring = i683[0]
  i682.damper = i683[1]
  i682.targetPosition = i683[2]
  return i682
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointMotor' )
  var i685 = data
  i684.m_TargetVelocity = i685[0]
  i684.m_Force = i685[1]
  i684.m_FreeSpin = i685[2]
  return i684
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointLimits' )
  var i687 = data
  i686.m_Min = i687[0]
  i686.m_Max = i687[1]
  i686.m_Bounciness = i687[2]
  i686.m_BounceMinVelocity = i687[3]
  i686.m_ContactDistance = i687[4]
  i686.minBounce = i687[5]
  i686.maxBounce = i687[6]
  return i686
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointDrive' )
  var i689 = data
  i688.m_PositionSpring = i689[0]
  i688.m_PositionDamper = i689[1]
  i688.m_MaximumForce = i689[2]
  i688.m_UseAcceleration = i689[3]
  return i688
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i691 = data
  i690.m_Spring = i691[0]
  i690.m_Damper = i691[1]
  return i690
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i693 = data
  i692.m_Limit = i693[0]
  i692.m_Bounciness = i693[1]
  i692.m_ContactDistance = i693[2]
  return i692
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i695 = data
  i694.m_ExtremumSlip = i695[0]
  i694.m_ExtremumValue = i695[1]
  i694.m_AsymptoteSlip = i695[2]
  i694.m_AsymptoteValue = i695[3]
  i694.m_Stiffness = i695[4]
  return i694
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i697 = data
  i696.m_LowerAngle = i697[0]
  i696.m_UpperAngle = i697[1]
  return i696
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i699 = data
  i698.m_MotorSpeed = i699[0]
  i698.m_MaximumMotorTorque = i699[1]
  return i698
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i701 = data
  i700.m_DampingRatio = i701[0]
  i700.m_Frequency = i701[1]
  i700.m_Angle = i701[2]
  return i700
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i703 = data
  i702.m_LowerTranslation = i703[0]
  i702.m_UpperTranslation = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i705 = data
  i704.name = i705[0]
  i704.width = i705[1]
  i704.height = i705[2]
  i704.mipmapCount = i705[3]
  i704.anisoLevel = i705[4]
  i704.filterMode = i705[5]
  i704.hdr = !!i705[6]
  i704.format = i705[7]
  i704.wrapMode = i705[8]
  i704.alphaIsTransparency = !!i705[9]
  i704.alphaSource = i705[10]
  i704.graphicsFormat = i705[11]
  i704.sRGBTexture = !!i705[12]
  i704.desiredColorSpace = i705[13]
  i704.wrapU = i705[14]
  i704.wrapV = i705[15]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i706 = root || new pc.UnityMaterial()
  var i707 = data
  i706.name = i707[0]
  request.r(i707[1], i707[2], 0, i706, 'shader')
  i706.renderQueue = i707[3]
  i706.enableInstancing = !!i707[4]
  var i709 = i707[5]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i709[i + 0]) );
  }
  i706.floatParameters = i708
  var i711 = i707[6]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i711[i + 0]) );
  }
  i706.colorParameters = i710
  var i713 = i707[7]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i713[i + 0]) );
  }
  i706.vectorParameters = i712
  var i715 = i707[8]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i715[i + 0]) );
  }
  i706.textureParameters = i714
  var i717 = i707[9]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i717[i + 0]) );
  }
  i706.materialFlags = i716
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i721 = data
  i720.name = i721[0]
  i720.value = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i725 = data
  i724.name = i725[0]
  i724.value = new pc.Color(i725[1], i725[2], i725[3], i725[4])
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i729 = data
  i728.name = i729[0]
  i728.value = new pc.Vec4( i729[1], i729[2], i729[3], i729[4] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i733 = data
  i732.name = i733[0]
  request.r(i733[1], i733[2], 0, i732, 'value')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i737 = data
  i736.name = i737[0]
  i736.enabled = !!i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i739 = data
  i738.name = i739[0]
  i738.halfPrecision = !!i739[1]
  i738.useSimplification = !!i739[2]
  i738.useUInt32IndexFormat = !!i739[3]
  i738.vertexCount = i739[4]
  i738.aabb = i739[5]
  var i741 = i739[6]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( !!i741[i + 0] );
  }
  i738.streams = i740
  i738.vertices = i739[7]
  var i743 = i739[8]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i743[i + 0]) );
  }
  i738.subMeshes = i742
  var i745 = i739[9]
  var i744 = []
  for(var i = 0; i < i745.length; i += 16) {
    i744.push( new pc.Mat4().setData(i745[i + 0], i745[i + 1], i745[i + 2], i745[i + 3],  i745[i + 4], i745[i + 5], i745[i + 6], i745[i + 7],  i745[i + 8], i745[i + 9], i745[i + 10], i745[i + 11],  i745[i + 12], i745[i + 13], i745[i + 14], i745[i + 15]) );
  }
  i738.bindposes = i744
  var i747 = i739[10]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i747[i + 0]) );
  }
  i738.blendShapes = i746
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i753 = data
  i752.triangles = i753[0]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i759 = data
  i758.name = i759[0]
  var i761 = i759[1]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i761[i + 0]) );
  }
  i758.frames = i760
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i763 = data
  i762.name = i763[0]
  i762.atlasId = i763[1]
  i762.mipmapCount = i763[2]
  i762.hdr = !!i763[3]
  i762.size = i763[4]
  i762.anisoLevel = i763[5]
  i762.filterMode = i763[6]
  var i765 = i763[7]
  var i764 = []
  for(var i = 0; i < i765.length; i += 4) {
    i764.push( UnityEngine.Rect.MinMaxRect(i765[i + 0], i765[i + 1], i765[i + 2], i765[i + 3]) );
  }
  i762.rects = i764
  i762.wrapU = i763[8]
  i762.wrapV = i763[9]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i769 = data
  i768.name = i769[0]
  i768.index = i769[1]
  i768.startup = !!i769[2]
  return i768
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_FirstSelected')
  i770.m_sendNavigationEvents = !!i771[2]
  i770.m_DragThreshold = i771[3]
  return i770
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i773 = data
  i772.m_HorizontalAxis = i773[0]
  i772.m_VerticalAxis = i773[1]
  i772.m_SubmitButton = i773[2]
  i772.m_CancelButton = i773[3]
  i772.m_InputActionsPerSecond = i773[4]
  i772.m_RepeatDelay = i773[5]
  i772.m_ForceModuleActive = !!i773[6]
  i772.m_SendPointerHoverToParent = !!i773[7]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i775 = data
  i774.name = i775[0]
  i774.tagId = i775[1]
  i774.enabled = !!i775[2]
  i774.isStatic = !!i775[3]
  i774.layer = i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i777 = data
  i776.type = i777[0]
  i776.color = new pc.Color(i777[1], i777[2], i777[3], i777[4])
  i776.cullingMask = i777[5]
  i776.intensity = i777[6]
  i776.range = i777[7]
  i776.spotAngle = i777[8]
  i776.shadows = i777[9]
  i776.shadowNormalBias = i777[10]
  i776.shadowBias = i777[11]
  i776.shadowStrength = i777[12]
  i776.shadowResolution = i777[13]
  i776.lightmapBakeType = i777[14]
  i776.renderMode = i777[15]
  request.r(i777[16], i777[17], 0, i776, 'cookie')
  i776.cookieSize = i777[18]
  i776.shadowNearPlane = i777[19]
  i776.occlusionMaskChannel = i777[20]
  i776.isBaked = !!i777[21]
  i776.mixedLightingMode = i777[22]
  i776.enabled = !!i777[23]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i779 = data
  i778.pivot = new pc.Vec2( i779[0], i779[1] )
  i778.anchorMin = new pc.Vec2( i779[2], i779[3] )
  i778.anchorMax = new pc.Vec2( i779[4], i779[5] )
  i778.sizeDelta = new pc.Vec2( i779[6], i779[7] )
  i778.anchoredPosition3D = new pc.Vec3( i779[8], i779[9], i779[10] )
  i778.rotation = new pc.Quat(i779[11], i779[12], i779[13], i779[14])
  i778.scale = new pc.Vec3( i779[15], i779[16], i779[17] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i781 = data
  i780.planeDistance = i781[0]
  i780.referencePixelsPerUnit = i781[1]
  i780.isFallbackOverlay = !!i781[2]
  i780.renderMode = i781[3]
  i780.renderOrder = i781[4]
  i780.sortingLayerName = i781[5]
  i780.sortingOrder = i781[6]
  i780.scaleFactor = i781[7]
  request.r(i781[8], i781[9], 0, i780, 'worldCamera')
  i780.overrideSorting = !!i781[10]
  i780.pixelPerfect = !!i781[11]
  i780.targetDisplay = i781[12]
  i780.overridePixelPerfect = !!i781[13]
  i780.enabled = !!i781[14]
  return i780
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i783 = data
  i782.m_UiScaleMode = i783[0]
  i782.m_ReferencePixelsPerUnit = i783[1]
  i782.m_ScaleFactor = i783[2]
  i782.m_ReferenceResolution = new pc.Vec2( i783[3], i783[4] )
  i782.m_ScreenMatchMode = i783[5]
  i782.m_MatchWidthOrHeight = i783[6]
  i782.m_PhysicalUnit = i783[7]
  i782.m_FallbackScreenDPI = i783[8]
  i782.m_DefaultSpriteDPI = i783[9]
  i782.m_DynamicPixelsPerUnit = i783[10]
  i782.m_PresetInfoIsWorld = !!i783[11]
  return i782
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i785 = data
  i784.m_IgnoreReversedGraphics = !!i785[0]
  i784.m_BlockingObjects = i785[1]
  i784.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i785[2] )
  return i784
}

Deserializers["Joystick"] = function (request, data, root) {
  var i786 = root || request.c( 'Joystick' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'background')
  request.r(i787[2], i787[3], 0, i786, 'joy')
  i786.deadZone = i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i789 = data
  i788.cullTransparentMesh = !!i789[0]
  return i788
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Image' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_Sprite')
  i790.m_Type = i791[2]
  i790.m_PreserveAspect = !!i791[3]
  i790.m_FillCenter = !!i791[4]
  i790.m_FillMethod = i791[5]
  i790.m_FillAmount = i791[6]
  i790.m_FillClockwise = !!i791[7]
  i790.m_FillOrigin = i791[8]
  i790.m_UseSpriteMesh = !!i791[9]
  i790.m_PixelsPerUnitMultiplier = i791[10]
  request.r(i791[11], i791[12], 0, i790, 'm_Material')
  i790.m_Maskable = !!i791[13]
  i790.m_Color = new pc.Color(i791[14], i791[15], i791[16], i791[17])
  i790.m_RaycastTarget = !!i791[18]
  i790.m_RaycastPadding = new pc.Vec4( i791[19], i791[20], i791[21], i791[22] )
  return i790
}

Deserializers["JumpButton"] = function (request, data, root) {
  var i792 = root || request.c( 'JumpButton' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'button')
  return i792
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.Button' )
  var i795 = data
  i794.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i795[0], i794.m_OnClick)
  i794.m_Navigation = request.d('UnityEngine.UI.Navigation', i795[1], i794.m_Navigation)
  i794.m_Transition = i795[2]
  i794.m_Colors = request.d('UnityEngine.UI.ColorBlock', i795[3], i794.m_Colors)
  i794.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i795[4], i794.m_SpriteState)
  i794.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i795[5], i794.m_AnimationTriggers)
  i794.m_Interactable = !!i795[6]
  request.r(i795[7], i795[8], 0, i794, 'm_TargetGraphic')
  return i794
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i797 = data
  i796.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i797[0], i796.m_PersistentCalls)
  return i796
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i799 = data
  var i801 = i799[0]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i801.length; i += 1) {
    i800.add(request.d('UnityEngine.Events.PersistentCall', i801[i + 0]));
  }
  i798.m_Calls = i800
  return i798
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'm_Target')
  i804.m_TargetAssemblyTypeName = i805[2]
  i804.m_MethodName = i805[3]
  i804.m_Mode = i805[4]
  i804.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i805[5], i804.m_Arguments)
  i804.m_CallState = i805[6]
  return i804
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i807 = data
  i806.m_Mode = i807[0]
  i806.m_WrapAround = !!i807[1]
  request.r(i807[2], i807[3], 0, i806, 'm_SelectOnUp')
  request.r(i807[4], i807[5], 0, i806, 'm_SelectOnDown')
  request.r(i807[6], i807[7], 0, i806, 'm_SelectOnLeft')
  request.r(i807[8], i807[9], 0, i806, 'm_SelectOnRight')
  return i806
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i809 = data
  i808.m_NormalColor = new pc.Color(i809[0], i809[1], i809[2], i809[3])
  i808.m_HighlightedColor = new pc.Color(i809[4], i809[5], i809[6], i809[7])
  i808.m_PressedColor = new pc.Color(i809[8], i809[9], i809[10], i809[11])
  i808.m_SelectedColor = new pc.Color(i809[12], i809[13], i809[14], i809[15])
  i808.m_DisabledColor = new pc.Color(i809[16], i809[17], i809[18], i809[19])
  i808.m_ColorMultiplier = i809[20]
  i808.m_FadeDuration = i809[21]
  return i808
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_HighlightedSprite')
  request.r(i811[2], i811[3], 0, i810, 'm_PressedSprite')
  request.r(i811[4], i811[5], 0, i810, 'm_SelectedSprite')
  request.r(i811[6], i811[7], 0, i810, 'm_DisabledSprite')
  return i810
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i813 = data
  i812.m_NormalTrigger = i813[0]
  i812.m_HighlightedTrigger = i813[1]
  i812.m_PressedTrigger = i813[2]
  i812.m_SelectedTrigger = i813[3]
  i812.m_DisabledTrigger = i813[4]
  return i812
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.Mask' )
  var i815 = data
  i814.m_ShowMaskGraphic = !!i815[0]
  return i814
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i816 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i817 = data
  i816.m_hasFontAssetChanged = !!i817[0]
  request.r(i817[1], i817[2], 0, i816, 'm_baseMaterial')
  i816.m_maskOffset = new pc.Vec4( i817[3], i817[4], i817[5], i817[6] )
  i816.m_text = i817[7]
  i816.m_isRightToLeft = !!i817[8]
  request.r(i817[9], i817[10], 0, i816, 'm_fontAsset')
  request.r(i817[11], i817[12], 0, i816, 'm_sharedMaterial')
  var i819 = i817[13]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.m_fontSharedMaterials = i818
  request.r(i817[14], i817[15], 0, i816, 'm_fontMaterial')
  var i821 = i817[16]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i816.m_fontMaterials = i820
  i816.m_fontColor32 = UnityEngine.Color32.ConstructColor(i817[17], i817[18], i817[19], i817[20])
  i816.m_fontColor = new pc.Color(i817[21], i817[22], i817[23], i817[24])
  i816.m_enableVertexGradient = !!i817[25]
  i816.m_colorMode = i817[26]
  i816.m_fontColorGradient = request.d('TMPro.VertexGradient', i817[27], i816.m_fontColorGradient)
  request.r(i817[28], i817[29], 0, i816, 'm_fontColorGradientPreset')
  request.r(i817[30], i817[31], 0, i816, 'm_spriteAsset')
  i816.m_tintAllSprites = !!i817[32]
  request.r(i817[33], i817[34], 0, i816, 'm_StyleSheet')
  i816.m_TextStyleHashCode = i817[35]
  i816.m_overrideHtmlColors = !!i817[36]
  i816.m_faceColor = UnityEngine.Color32.ConstructColor(i817[37], i817[38], i817[39], i817[40])
  i816.m_fontSize = i817[41]
  i816.m_fontSizeBase = i817[42]
  i816.m_fontWeight = i817[43]
  i816.m_enableAutoSizing = !!i817[44]
  i816.m_fontSizeMin = i817[45]
  i816.m_fontSizeMax = i817[46]
  i816.m_fontStyle = i817[47]
  i816.m_HorizontalAlignment = i817[48]
  i816.m_VerticalAlignment = i817[49]
  i816.m_textAlignment = i817[50]
  i816.m_characterSpacing = i817[51]
  i816.m_characterHorizontalScale = i817[52]
  i816.m_wordSpacing = i817[53]
  i816.m_lineSpacing = i817[54]
  i816.m_lineSpacingMax = i817[55]
  i816.m_paragraphSpacing = i817[56]
  i816.m_charWidthMaxAdj = i817[57]
  i816.m_TextWrappingMode = i817[58]
  i816.m_wordWrappingRatios = i817[59]
  i816.m_overflowMode = i817[60]
  request.r(i817[61], i817[62], 0, i816, 'm_linkedTextComponent')
  request.r(i817[63], i817[64], 0, i816, 'parentLinkedComponent')
  i816.m_enableKerning = !!i817[65]
  var i823 = i817[66]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(i823[i + 0]);
  }
  i816.m_ActiveFontFeatures = i822
  i816.m_enableExtraPadding = !!i817[67]
  i816.checkPaddingRequired = !!i817[68]
  i816.m_isRichText = !!i817[69]
  i816.m_parseCtrlCharacters = !!i817[70]
  i816.m_isOrthographic = !!i817[71]
  i816.m_isCullingEnabled = !!i817[72]
  i816.m_horizontalMapping = i817[73]
  i816.m_verticalMapping = i817[74]
  i816.m_uvLineOffset = i817[75]
  i816.m_geometrySortingOrder = i817[76]
  i816.m_IsTextObjectScaleStatic = !!i817[77]
  i816.m_VertexBufferAutoSizeReduction = !!i817[78]
  i816.m_useMaxVisibleDescender = !!i817[79]
  i816.m_pageToDisplay = i817[80]
  i816.m_margin = new pc.Vec4( i817[81], i817[82], i817[83], i817[84] )
  i816.m_isUsingLegacyAnimationComponent = !!i817[85]
  i816.m_isVolumetricText = !!i817[86]
  request.r(i817[87], i817[88], 0, i816, 'm_Material')
  i816.m_EmojiFallbackSupport = !!i817[89]
  i816.m_Maskable = !!i817[90]
  i816.m_Color = new pc.Color(i817[91], i817[92], i817[93], i817[94])
  i816.m_RaycastTarget = !!i817[95]
  i816.m_RaycastPadding = new pc.Vec4( i817[96], i817[97], i817[98], i817[99] )
  return i816
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.VertexGradient' )
  var i827 = data
  i826.topLeft = new pc.Color(i827[0], i827[1], i827[2], i827[3])
  i826.topRight = new pc.Color(i827[4], i827[5], i827[6], i827[7])
  i826.bottomLeft = new pc.Color(i827[8], i827[9], i827[10], i827[11])
  i826.bottomRight = new pc.Color(i827[12], i827[13], i827[14], i827[15])
  return i826
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i830 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i831 = data
  i830.targetIsSelf = !!i831[0]
  request.r(i831[1], i831[2], 0, i830, 'targetGO')
  i830.tweenTargetIsTargetGO = !!i831[3]
  i830.delay = i831[4]
  i830.duration = i831[5]
  i830.easeType = i831[6]
  i830.easeCurve = new pc.AnimationCurve( { keys_flow: i831[7] } )
  i830.loopType = i831[8]
  i830.loops = i831[9]
  i830.id = i831[10]
  i830.isRelative = !!i831[11]
  i830.isFrom = !!i831[12]
  i830.isIndependentUpdate = !!i831[13]
  i830.autoKill = !!i831[14]
  i830.autoGenerate = !!i831[15]
  i830.isActive = !!i831[16]
  i830.isValid = !!i831[17]
  request.r(i831[18], i831[19], 0, i830, 'target')
  i830.animationType = i831[20]
  i830.targetType = i831[21]
  i830.forcedTargetType = i831[22]
  i830.autoPlay = !!i831[23]
  i830.useTargetAsV3 = !!i831[24]
  i830.endValueFloat = i831[25]
  i830.endValueV3 = new pc.Vec3( i831[26], i831[27], i831[28] )
  i830.endValueV2 = new pc.Vec2( i831[29], i831[30] )
  i830.endValueColor = new pc.Color(i831[31], i831[32], i831[33], i831[34])
  i830.endValueString = i831[35]
  i830.endValueRect = UnityEngine.Rect.MinMaxRect(i831[36], i831[37], i831[38], i831[39])
  request.r(i831[40], i831[41], 0, i830, 'endValueTransform')
  i830.optionalBool0 = !!i831[42]
  i830.optionalBool1 = !!i831[43]
  i830.optionalFloat0 = i831[44]
  i830.optionalInt0 = i831[45]
  i830.optionalRotationMode = i831[46]
  i830.optionalScrambleMode = i831[47]
  i830.optionalShakeRandomnessMode = i831[48]
  i830.optionalString = i831[49]
  i830.updateType = i831[50]
  i830.isSpeedBased = !!i831[51]
  i830.hasOnStart = !!i831[52]
  i830.hasOnPlay = !!i831[53]
  i830.hasOnUpdate = !!i831[54]
  i830.hasOnStepComplete = !!i831[55]
  i830.hasOnComplete = !!i831[56]
  i830.hasOnTweenCreated = !!i831[57]
  i830.hasOnRewind = !!i831[58]
  i830.onStart = request.d('UnityEngine.Events.UnityEvent', i831[59], i830.onStart)
  i830.onPlay = request.d('UnityEngine.Events.UnityEvent', i831[60], i830.onPlay)
  i830.onUpdate = request.d('UnityEngine.Events.UnityEvent', i831[61], i830.onUpdate)
  i830.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i831[62], i830.onStepComplete)
  i830.onComplete = request.d('UnityEngine.Events.UnityEvent', i831[63], i830.onComplete)
  i830.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i831[64], i830.onTweenCreated)
  i830.onRewind = request.d('UnityEngine.Events.UnityEvent', i831[65], i830.onRewind)
  return i830
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i833 = data
  i832.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i833[0], i832.m_PersistentCalls)
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'animatorController')
  request.r(i835[2], i835[3], 0, i834, 'avatar')
  i834.updateMode = i835[4]
  i834.hasTransformHierarchy = !!i835[5]
  i834.applyRootMotion = !!i835[6]
  var i837 = i835[7]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.humanBones = i836
  i834.enabled = !!i835[8]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'clip')
  request.r(i841[2], i841[3], 0, i840, 'outputAudioMixerGroup')
  i840.playOnAwake = !!i841[4]
  i840.loop = !!i841[5]
  i840.time = i841[6]
  i840.volume = i841[7]
  i840.pitch = i841[8]
  i840.enabled = !!i841[9]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'sharedMesh')
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'additionalVertexStreams')
  i844.enabled = !!i845[2]
  request.r(i845[3], i845[4], 0, i844, 'sharedMaterial')
  var i847 = i845[5]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.sharedMaterials = i846
  i844.receiveShadows = !!i845[6]
  i844.shadowCastingMode = i845[7]
  i844.sortingLayerID = i845[8]
  i844.sortingOrder = i845[9]
  i844.lightmapIndex = i845[10]
  i844.lightmapSceneIndex = i845[11]
  i844.lightmapScaleOffset = new pc.Vec4( i845[12], i845[13], i845[14], i845[15] )
  i844.lightProbeUsage = i845[16]
  i844.reflectionProbeUsage = i845[17]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i849 = data
  i848.center = new pc.Vec3( i849[0], i849[1], i849[2] )
  i848.size = new pc.Vec3( i849[3], i849[4], i849[5] )
  i848.enabled = !!i849[6]
  i848.isTrigger = !!i849[7]
  request.r(i849[8], i849[9], 0, i848, 'material')
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'sharedMesh')
  i850.convex = !!i851[2]
  i850.enabled = !!i851[3]
  i850.isTrigger = !!i851[4]
  request.r(i851[5], i851[6], 0, i850, 'material')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i853 = data
  i852.center = new pc.Vec3( i853[0], i853[1], i853[2] )
  i852.radius = i853[3]
  i852.enabled = !!i853[4]
  i852.isTrigger = !!i853[5]
  request.r(i853[6], i853[7], 0, i852, 'material')
  return i852
}

Deserializers["Box"] = function (request, data, root) {
  var i854 = root || request.c( 'Box' )
  var i855 = data
  i854.lifeTime = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'effect')
  request.r(i855[3], i855[4], 0, i854, 'avatar')
  request.r(i855[5], i855[6], 0, i854, 'openSound')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i857 = data
  i856.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i857[0], i856.main)
  i856.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i857[1], i856.colorBySpeed)
  i856.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i857[2], i856.colorOverLifetime)
  i856.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i857[3], i856.emission)
  i856.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i857[4], i856.rotationBySpeed)
  i856.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i857[5], i856.rotationOverLifetime)
  i856.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i857[6], i856.shape)
  i856.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i857[7], i856.sizeBySpeed)
  i856.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i857[8], i856.sizeOverLifetime)
  i856.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i857[9], i856.textureSheetAnimation)
  i856.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i857[10], i856.velocityOverLifetime)
  i856.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i857[11], i856.noise)
  i856.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i857[12], i856.inheritVelocity)
  i856.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i857[13], i856.forceOverLifetime)
  i856.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i857[14], i856.limitVelocityOverLifetime)
  i856.useAutoRandomSeed = !!i857[15]
  i856.randomSeed = i857[16]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemMain()
  var i859 = data
  i858.duration = i859[0]
  i858.loop = !!i859[1]
  i858.prewarm = !!i859[2]
  i858.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.startDelay)
  i858.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[4], i858.startLifetime)
  i858.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[5], i858.startSpeed)
  i858.startSize3D = !!i859[6]
  i858.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[7], i858.startSizeX)
  i858.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[8], i858.startSizeY)
  i858.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[9], i858.startSizeZ)
  i858.startRotation3D = !!i859[10]
  i858.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[11], i858.startRotationX)
  i858.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[12], i858.startRotationY)
  i858.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[13], i858.startRotationZ)
  i858.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i859[14], i858.startColor)
  i858.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[15], i858.gravityModifier)
  i858.simulationSpace = i859[16]
  request.r(i859[17], i859[18], 0, i858, 'customSimulationSpace')
  i858.simulationSpeed = i859[19]
  i858.useUnscaledTime = !!i859[20]
  i858.scalingMode = i859[21]
  i858.playOnAwake = !!i859[22]
  i858.maxParticles = i859[23]
  i858.emitterVelocityMode = i859[24]
  i858.stopAction = i859[25]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i860 = root || new pc.MinMaxCurve()
  var i861 = data
  i860.mode = i861[0]
  i860.curveMin = new pc.AnimationCurve( { keys_flow: i861[1] } )
  i860.curveMax = new pc.AnimationCurve( { keys_flow: i861[2] } )
  i860.curveMultiplier = i861[3]
  i860.constantMin = i861[4]
  i860.constantMax = i861[5]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i862 = root || new pc.MinMaxGradient()
  var i863 = data
  i862.mode = i863[0]
  i862.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i863[1], i862.gradientMin)
  i862.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i863[2], i862.gradientMax)
  i862.colorMin = new pc.Color(i863[3], i863[4], i863[5], i863[6])
  i862.colorMax = new pc.Color(i863[7], i863[8], i863[9], i863[10])
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i865 = data
  i864.mode = i865[0]
  var i867 = i865[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i867[i + 0]) );
  }
  i864.colorKeys = i866
  var i869 = i865[2]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i869[i + 0]) );
  }
  i864.alphaKeys = i868
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemColorBySpeed()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i871[1], i870.color)
  i870.range = new pc.Vec2( i871[2], i871[3] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i875 = data
  i874.color = new pc.Color(i875[0], i875[1], i875[2], i875[3])
  i874.time = i875[4]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i879 = data
  i878.alpha = i879[0]
  i878.time = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemColorOverLifetime()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i881[1], i880.color)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemEmitter()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.rateOverTime)
  i882.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.rateOverDistance)
  var i885 = i883[3]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i885[i + 0]) );
  }
  i882.bursts = i884
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemBurst()
  var i889 = data
  i888.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[0], i888.count)
  i888.cycleCount = i889[1]
  i888.minCount = i889[2]
  i888.maxCount = i889[3]
  i888.repeatInterval = i889[4]
  i888.time = i889[5]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemRotationBySpeed()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.separateAxes = !!i891[4]
  i890.range = new pc.Vec2( i891[5], i891[6] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemRotationOverLifetime()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.x)
  i892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.y)
  i892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[3], i892.z)
  i892.separateAxes = !!i893[4]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemShape()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.shapeType = i895[1]
  i894.randomDirectionAmount = i895[2]
  i894.sphericalDirectionAmount = i895[3]
  i894.randomPositionAmount = i895[4]
  i894.alignToDirection = !!i895[5]
  i894.radius = i895[6]
  i894.radiusMode = i895[7]
  i894.radiusSpread = i895[8]
  i894.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[9], i894.radiusSpeed)
  i894.radiusThickness = i895[10]
  i894.angle = i895[11]
  i894.length = i895[12]
  i894.boxThickness = new pc.Vec3( i895[13], i895[14], i895[15] )
  i894.meshShapeType = i895[16]
  request.r(i895[17], i895[18], 0, i894, 'mesh')
  request.r(i895[19], i895[20], 0, i894, 'meshRenderer')
  request.r(i895[21], i895[22], 0, i894, 'skinnedMeshRenderer')
  i894.useMeshMaterialIndex = !!i895[23]
  i894.meshMaterialIndex = i895[24]
  i894.useMeshColors = !!i895[25]
  i894.normalOffset = i895[26]
  i894.arc = i895[27]
  i894.arcMode = i895[28]
  i894.arcSpread = i895[29]
  i894.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[30], i894.arcSpeed)
  i894.donutRadius = i895[31]
  i894.position = new pc.Vec3( i895[32], i895[33], i895[34] )
  i894.rotation = new pc.Vec3( i895[35], i895[36], i895[37] )
  i894.scale = new pc.Vec3( i895[38], i895[39], i895[40] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemSizeBySpeed()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[1], i896.x)
  i896.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[2], i896.y)
  i896.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[3], i896.z)
  i896.separateAxes = !!i897[4]
  i896.range = new pc.Vec2( i897[5], i897[6] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemSizeOverLifetime()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.x)
  i898.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.y)
  i898.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.z)
  i898.separateAxes = !!i899[4]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.mode = i901[1]
  i900.animation = i901[2]
  i900.numTilesX = i901[3]
  i900.numTilesY = i901[4]
  i900.useRandomRow = !!i901[5]
  i900.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[6], i900.frameOverTime)
  i900.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[7], i900.startFrame)
  i900.cycleCount = i901[8]
  i900.rowIndex = i901[9]
  i900.flipU = i901[10]
  i900.flipV = i901[11]
  i900.spriteCount = i901[12]
  var i903 = i901[13]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.sprites = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.x)
  i906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.y)
  i906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.z)
  i906.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[4], i906.radial)
  i906.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[5], i906.speedModifier)
  i906.space = i907[6]
  i906.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[7], i906.orbitalX)
  i906.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[8], i906.orbitalY)
  i906.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[9], i906.orbitalZ)
  i906.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[10], i906.orbitalOffsetX)
  i906.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[11], i906.orbitalOffsetY)
  i906.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[12], i906.orbitalOffsetZ)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemNoise()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.separateAxes = !!i909[1]
  i908.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.strengthX)
  i908.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.strengthY)
  i908.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[4], i908.strengthZ)
  i908.frequency = i909[5]
  i908.damping = !!i909[6]
  i908.octaveCount = i909[7]
  i908.octaveMultiplier = i909[8]
  i908.octaveScale = i909[9]
  i908.quality = i909[10]
  i908.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[11], i908.scrollSpeed)
  i908.scrollSpeedMultiplier = i909[12]
  i908.remapEnabled = !!i909[13]
  i908.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[14], i908.remapX)
  i908.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[15], i908.remapY)
  i908.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[16], i908.remapZ)
  i908.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[17], i908.positionAmount)
  i908.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[18], i908.rotationAmount)
  i908.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[19], i908.sizeAmount)
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemInheritVelocity()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.mode = i911[1]
  i910.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.curve)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemForceOverLifetime()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[1], i912.x)
  i912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.y)
  i912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.z)
  i912.space = i913[4]
  i912.randomized = !!i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[1], i914.limit)
  i914.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[2], i914.limitX)
  i914.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[3], i914.limitY)
  i914.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[4], i914.limitZ)
  i914.dampen = i915[5]
  i914.separateAxes = !!i915[6]
  i914.space = i915[7]
  i914.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[8], i914.drag)
  i914.multiplyDragByParticleSize = !!i915[9]
  i914.multiplyDragByParticleVelocity = !!i915[10]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'mesh')
  i916.meshCount = i917[2]
  i916.activeVertexStreamsCount = i917[3]
  i916.alignment = i917[4]
  i916.renderMode = i917[5]
  i916.sortMode = i917[6]
  i916.lengthScale = i917[7]
  i916.velocityScale = i917[8]
  i916.cameraVelocityScale = i917[9]
  i916.normalDirection = i917[10]
  i916.sortingFudge = i917[11]
  i916.minParticleSize = i917[12]
  i916.maxParticleSize = i917[13]
  i916.pivot = new pc.Vec3( i917[14], i917[15], i917[16] )
  request.r(i917[17], i917[18], 0, i916, 'trailMaterial')
  i916.applyActiveColorSpace = !!i917[19]
  i916.enabled = !!i917[20]
  request.r(i917[21], i917[22], 0, i916, 'sharedMaterial')
  var i919 = i917[23]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.sharedMaterials = i918
  i916.receiveShadows = !!i917[24]
  i916.shadowCastingMode = i917[25]
  i916.sortingLayerID = i917[26]
  i916.sortingOrder = i917[27]
  i916.lightmapIndex = i917[28]
  i916.lightmapSceneIndex = i917[29]
  i916.lightmapScaleOffset = new pc.Vec4( i917[30], i917[31], i917[32], i917[33] )
  i916.lightProbeUsage = i917[34]
  i916.reflectionProbeUsage = i917[35]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i921 = data
  i920.enabled = !!i921[0]
  i920.center = new pc.Vec3( i921[1], i921[2], i921[3] )
  i920.radius = i921[4]
  i920.height = i921[5]
  i920.minMoveDistance = i921[6]
  i920.skinWidth = i921[7]
  i920.enableOverlapRecovery = !!i921[8]
  return i920
}

Deserializers["CharacterMotor"] = function (request, data, root) {
  var i922 = root || request.c( 'CharacterMotor' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'characterInput')
  request.r(i923[2], i923[3], 0, i922, 'cameraYawTransform')
  i922.moveSpeed = i923[4]
  i922.jumpHeight = i923[5]
  request.r(i923[6], i923[7], 0, i922, 'groundChecker')
  i922.gravity = i923[8]
  request.r(i923[9], i923[10], 0, i922, 'controller')
  return i922
}

Deserializers["CharacterRotation"] = function (request, data, root) {
  var i924 = root || request.c( 'CharacterRotation' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'motor')
  i924.rotationSpeed = i925[2]
  return i924
}

Deserializers["CharacterAnimation"] = function (request, data, root) {
  var i926 = root || request.c( 'CharacterAnimation' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'animator')
  request.r(i927[2], i927[3], 0, i926, 'motor')
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'sharedMesh')
  var i931 = i929[2]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i928.bones = i930
  i928.updateWhenOffscreen = !!i929[3]
  i928.localBounds = i929[4]
  request.r(i929[5], i929[6], 0, i928, 'rootBone')
  var i933 = i929[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i933[i + 0]) );
  }
  i928.blendShapesWeights = i932
  i928.enabled = !!i929[8]
  request.r(i929[9], i929[10], 0, i928, 'sharedMaterial')
  var i935 = i929[11]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i928.sharedMaterials = i934
  i928.receiveShadows = !!i929[12]
  i928.shadowCastingMode = i929[13]
  i928.sortingLayerID = i929[14]
  i928.sortingOrder = i929[15]
  i928.lightmapIndex = i929[16]
  i928.lightmapSceneIndex = i929[17]
  i928.lightmapScaleOffset = new pc.Vec4( i929[18], i929[19], i929[20], i929[21] )
  i928.lightProbeUsage = i929[22]
  i928.reflectionProbeUsage = i929[23]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i939 = data
  i938.weight = i939[0]
  return i938
}

Deserializers["GroundChecker"] = function (request, data, root) {
  var i940 = root || request.c( 'GroundChecker' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'groundPoint')
  i940.checkRadius = i941[2]
  i940.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i941[3] )
  return i940
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i942 = root || request.c( 'CameraFollow' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'target')
  i942.smoothTime = i943[2]
  return i942
}

Deserializers["CameraLook"] = function (request, data, root) {
  var i944 = root || request.c( 'CameraLook' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'input')
  request.r(i945[2], i945[3], 0, i944, 'yawPivot')
  request.r(i945[4], i945[5], 0, i944, 'pitchPivot')
  i944.minPitch = i945[6]
  i944.maxPitch = i945[7]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i947 = data
  i946.aspect = i947[0]
  i946.orthographic = !!i947[1]
  i946.orthographicSize = i947[2]
  i946.backgroundColor = new pc.Color(i947[3], i947[4], i947[5], i947[6])
  i946.nearClipPlane = i947[7]
  i946.farClipPlane = i947[8]
  i946.fieldOfView = i947[9]
  i946.depth = i947[10]
  i946.clearFlags = i947[11]
  i946.cullingMask = i947[12]
  i946.rect = i947[13]
  request.r(i947[14], i947[15], 0, i946, 'targetTexture')
  i946.usePhysicalProperties = !!i947[16]
  i946.focalLength = i947[17]
  i946.sensorSize = new pc.Vec2( i947[18], i947[19] )
  i946.lensShift = new pc.Vec2( i947[20], i947[21] )
  i946.gateFit = i947[22]
  i946.commandBufferCount = i947[23]
  i946.cameraType = i947[24]
  i946.enabled = !!i947[25]
  return i946
}

Deserializers["CharacterInput"] = function (request, data, root) {
  var i948 = root || request.c( 'CharacterInput' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'joystick')
  request.r(i949[2], i949[3], 0, i948, 'jumpButton')
  return i948
}

Deserializers["InputManager"] = function (request, data, root) {
  var i950 = root || request.c( 'InputManager' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'worldCamera')
  i950.interactLayer = UnityEngine.LayerMask.FromIntegerValue( i951[2] )
  i950.touchSensitivity = i951[3]
  i950.mouseSensitivity = i951[4]
  i950.dragThreshold = i951[5]
  return i950
}

Deserializers["AudioController"] = function (request, data, root) {
  var i952 = root || request.c( 'AudioController' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'musicSource')
  request.r(i953[2], i953[3], 0, i952, 'poolParent')
  i952.startSize = i953[4]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i955 = data
  i954.ambientIntensity = i955[0]
  i954.reflectionIntensity = i955[1]
  i954.ambientMode = i955[2]
  i954.ambientLight = new pc.Color(i955[3], i955[4], i955[5], i955[6])
  i954.ambientSkyColor = new pc.Color(i955[7], i955[8], i955[9], i955[10])
  i954.ambientGroundColor = new pc.Color(i955[11], i955[12], i955[13], i955[14])
  i954.ambientEquatorColor = new pc.Color(i955[15], i955[16], i955[17], i955[18])
  i954.fogColor = new pc.Color(i955[19], i955[20], i955[21], i955[22])
  i954.fogEndDistance = i955[23]
  i954.fogStartDistance = i955[24]
  i954.fogDensity = i955[25]
  i954.fog = !!i955[26]
  request.r(i955[27], i955[28], 0, i954, 'skybox')
  i954.fogMode = i955[29]
  var i957 = i955[30]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i957[i + 0]) );
  }
  i954.lightmaps = i956
  i954.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i955[31], i954.lightProbes)
  i954.lightmapsMode = i955[32]
  i954.mixedBakeMode = i955[33]
  i954.environmentLightingMode = i955[34]
  i954.ambientProbe = new pc.SphericalHarmonicsL2(i955[35])
  request.r(i955[36], i955[37], 0, i954, 'customReflection')
  request.r(i955[38], i955[39], 0, i954, 'defaultReflection')
  i954.defaultReflectionMode = i955[40]
  i954.defaultReflectionResolution = i955[41]
  i954.sunLightObjectId = i955[42]
  i954.pixelLightCount = i955[43]
  i954.defaultReflectionHDR = !!i955[44]
  i954.hasLightDataAsset = !!i955[45]
  i954.hasManualGenerate = !!i955[46]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'lightmapColor')
  request.r(i961[2], i961[3], 0, i960, 'lightmapDirection')
  request.r(i961[4], i961[5], 0, i960, 'shadowMask')
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i962 = root || new UnityEngine.LightProbes()
  var i963 = data
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i971 = data
  var i973 = i971[0]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i973[i + 0]));
  }
  i970.ShaderCompilationErrors = i972
  i970.name = i971[1]
  i970.guid = i971[2]
  var i975 = i971[3]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( i975[i + 0] );
  }
  i970.shaderDefinedKeywords = i974
  var i977 = i971[4]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i977[i + 0]) );
  }
  i970.passes = i976
  var i979 = i971[5]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i979[i + 0]) );
  }
  i970.usePasses = i978
  var i981 = i971[6]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i981[i + 0]) );
  }
  i970.defaultParameterValues = i980
  request.r(i971[7], i971[8], 0, i970, 'unityFallbackShader')
  i970.readDepth = !!i971[9]
  i970.hasDepthOnlyPass = !!i971[10]
  i970.isCreatedByShaderGraph = !!i971[11]
  i970.disableBatching = !!i971[12]
  i970.compiled = !!i971[13]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i985 = data
  i984.shaderName = i985[0]
  i984.errorMessage = i985[1]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i990 = root || new pc.UnityShaderPass()
  var i991 = data
  i990.id = i991[0]
  i990.subShaderIndex = i991[1]
  i990.name = i991[2]
  i990.passType = i991[3]
  i990.grabPassTextureName = i991[4]
  i990.usePass = !!i991[5]
  i990.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[6], i990.zTest)
  i990.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[7], i990.zWrite)
  i990.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[8], i990.culling)
  i990.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i991[9], i990.blending)
  i990.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i991[10], i990.alphaBlending)
  i990.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[11], i990.colorWriteMask)
  i990.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[12], i990.offsetUnits)
  i990.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[13], i990.offsetFactor)
  i990.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[14], i990.stencilRef)
  i990.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[15], i990.stencilReadMask)
  i990.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[16], i990.stencilWriteMask)
  i990.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i991[17], i990.stencilOp)
  i990.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i991[18], i990.stencilOpFront)
  i990.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i991[19], i990.stencilOpBack)
  var i993 = i991[20]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i993[i + 0]) );
  }
  i990.tags = i992
  var i995 = i991[21]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i990.passDefinedKeywords = i994
  var i997 = i991[22]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i997[i + 0]) );
  }
  i990.passDefinedKeywordGroups = i996
  var i999 = i991[23]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i999[i + 0]) );
  }
  i990.variants = i998
  var i1001 = i991[24]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1001[i + 0]) );
  }
  i990.excludedVariants = i1000
  i990.hasDepthReader = !!i991[25]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1003 = data
  i1002.val = i1003[0]
  i1002.name = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1005 = data
  i1004.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[0], i1004.src)
  i1004.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[1], i1004.dst)
  i1004.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1005[2], i1004.op)
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1007 = data
  i1006.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[0], i1006.pass)
  i1006.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[1], i1006.fail)
  i1006.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[2], i1006.zFail)
  i1006.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[3], i1006.comp)
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.value = i1011[1]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( i1017[i + 0] );
  }
  i1014.keywords = i1016
  i1014.hasDiscard = !!i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1021 = data
  i1020.passId = i1021[0]
  i1020.subShaderIndex = i1021[1]
  var i1023 = i1021[2]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1020.keywords = i1022
  i1020.vertexProgram = i1021[3]
  i1020.fragmentProgram = i1021[4]
  i1020.exportedForWebGl2 = !!i1021[5]
  i1020.readDepth = !!i1021[6]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'shader')
  i1026.pass = i1027[2]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.type = i1031[1]
  i1030.value = new pc.Vec4( i1031[2], i1031[3], i1031[4], i1031[5] )
  i1030.textureValue = i1031[6]
  i1030.shaderPropertyFlag = i1031[7]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1033 = data
  i1032.name = i1033[0]
  request.r(i1033[1], i1033[2], 0, i1032, 'texture')
  i1032.aabb = i1033[3]
  i1032.vertices = i1033[4]
  i1032.triangles = i1033[5]
  i1032.textureRect = UnityEngine.Rect.MinMaxRect(i1033[6], i1033[7], i1033[8], i1033[9])
  i1032.packedRect = UnityEngine.Rect.MinMaxRect(i1033[10], i1033[11], i1033[12], i1033[13])
  i1032.border = new pc.Vec4( i1033[14], i1033[15], i1033[16], i1033[17] )
  i1032.transparency = i1033[18]
  i1032.bounds = i1033[19]
  i1032.pixelsPerUnit = i1033[20]
  i1032.textureWidth = i1033[21]
  i1032.textureHeight = i1033[22]
  i1032.nativeSize = new pc.Vec2( i1033[23], i1033[24] )
  i1032.pivot = new pc.Vec2( i1033[25], i1033[26] )
  i1032.textureRectOffset = new pc.Vec2( i1033[27], i1033[28] )
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1035 = data
  i1034.name = i1035[0]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1037 = data
  i1036.name = i1037[0]
  i1036.wrapMode = i1037[1]
  i1036.isLooping = !!i1037[2]
  i1036.length = i1037[3]
  var i1039 = i1037[4]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1039[i + 0]) );
  }
  i1036.curves = i1038
  var i1041 = i1037[5]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1041[i + 0]) );
  }
  i1036.events = i1040
  i1036.halfPrecision = !!i1037[6]
  i1036._frameRate = i1037[7]
  i1036.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1037[8], i1036.localBounds)
  i1036.hasMuscleCurves = !!i1037[9]
  var i1043 = i1037[10]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1036.clipMuscleConstant = i1042
  i1036.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1037[11], i1036.clipBindingConstant)
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1047 = data
  i1046.path = i1047[0]
  i1046.hash = i1047[1]
  i1046.componentType = i1047[2]
  i1046.property = i1047[3]
  i1046.keys = i1047[4]
  var i1049 = i1047[5]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1049[i + 0]) );
  }
  i1046.objectReferenceKeys = i1048
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1053 = data
  i1052.time = i1053[0]
  request.r(i1053[1], i1053[2], 0, i1052, 'value')
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1057 = data
  i1056.functionName = i1057[0]
  i1056.floatParameter = i1057[1]
  i1056.intParameter = i1057[2]
  i1056.stringParameter = i1057[3]
  request.r(i1057[4], i1057[5], 0, i1056, 'objectReferenceParameter')
  i1056.time = i1057[6]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1059 = data
  i1058.center = new pc.Vec3( i1059[0], i1059[1], i1059[2] )
  i1058.extends = new pc.Vec3( i1059[3], i1059[4], i1059[5] )
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( i1065[i + 0] );
  }
  i1062.genericBindings = i1064
  var i1067 = i1063[1]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1062.pptrCurveMapping = i1066
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1069 = data
  i1068.name = i1069[0]
  var i1071 = i1069[1]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1071[i + 0]) );
  }
  i1068.layers = i1070
  var i1073 = i1069[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1073[i + 0]) );
  }
  i1068.parameters = i1072
  i1068.animationClips = i1069[3]
  i1068.avatarUnsupported = i1069[4]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.defaultWeight = i1077[1]
  i1076.blendingMode = i1077[2]
  i1076.avatarMask = i1077[3]
  i1076.syncedLayerIndex = i1077[4]
  i1076.syncedLayerAffectsTiming = !!i1077[5]
  i1076.syncedLayers = i1077[6]
  i1076.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1077[7], i1076.stateMachine)
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1079 = data
  i1078.id = i1079[0]
  i1078.name = i1079[1]
  i1078.path = i1079[2]
  var i1081 = i1079[3]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1081[i + 0]) );
  }
  i1078.states = i1080
  var i1083 = i1079[4]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1083[i + 0]) );
  }
  i1078.machines = i1082
  var i1085 = i1079[5]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1085[i + 0]) );
  }
  i1078.entryStateTransitions = i1084
  var i1087 = i1079[6]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1087[i + 0]) );
  }
  i1078.exitStateTransitions = i1086
  var i1089 = i1079[7]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1089[i + 0]) );
  }
  i1078.anyStateTransitions = i1088
  i1078.defaultStateId = i1079[8]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1093 = data
  i1092.id = i1093[0]
  i1092.name = i1093[1]
  i1092.cycleOffset = i1093[2]
  i1092.cycleOffsetParameter = i1093[3]
  i1092.cycleOffsetParameterActive = !!i1093[4]
  i1092.mirror = !!i1093[5]
  i1092.mirrorParameter = i1093[6]
  i1092.mirrorParameterActive = !!i1093[7]
  i1092.motionId = i1093[8]
  i1092.nameHash = i1093[9]
  i1092.fullPathHash = i1093[10]
  i1092.speed = i1093[11]
  i1092.speedParameter = i1093[12]
  i1092.speedParameterActive = !!i1093[13]
  i1092.tag = i1093[14]
  i1092.tagHash = i1093[15]
  i1092.writeDefaultValues = !!i1093[16]
  var i1095 = i1093[17]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 2, i1094, '')
  }
  i1092.behaviours = i1094
  var i1097 = i1093[18]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1097[i + 0]) );
  }
  i1092.transitions = i1096
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1103 = data
  i1102.fullPath = i1103[0]
  i1102.canTransitionToSelf = !!i1103[1]
  i1102.duration = i1103[2]
  i1102.exitTime = i1103[3]
  i1102.hasExitTime = !!i1103[4]
  i1102.hasFixedDuration = !!i1103[5]
  i1102.interruptionSource = i1103[6]
  i1102.offset = i1103[7]
  i1102.orderedInterruption = !!i1103[8]
  i1102.destinationStateId = i1103[9]
  i1102.isExit = !!i1103[10]
  i1102.mute = !!i1103[11]
  i1102.solo = !!i1103[12]
  var i1105 = i1103[13]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1105[i + 0]) );
  }
  i1102.conditions = i1104
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1109 = data
  i1108.mode = i1109[0]
  i1108.parameter = i1109[1]
  i1108.threshold = i1109[2]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1115 = data
  i1114.destinationStateId = i1115[0]
  i1114.isExit = !!i1115[1]
  i1114.mute = !!i1115[2]
  i1114.solo = !!i1115[3]
  var i1117 = i1115[4]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1117[i + 0]) );
  }
  i1114.conditions = i1116
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1121 = data
  i1120.defaultBool = !!i1121[0]
  i1120.defaultFloat = i1121[1]
  i1120.defaultInt = i1121[2]
  i1120.name = i1121[3]
  i1120.nameHash = i1121[4]
  i1120.type = i1121[5]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1123 = data
  i1122.name = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, '_runtimeAnimatorController')
  var i1125 = i1123[3]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1122._originalAnimationClips = i1124
  var i1127 = i1123[4]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 2, i1126, '')
  }
  i1122._overrideAnimationClips = i1126
  var i1129 = i1123[5]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 2, i1128, '')
  }
  i1122._animationClips = i1128
  var i1131 = i1123[6]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('UnityEngine.AnimationClipPair', i1131[i + 0]) );
  }
  i1122._animationClipPairs = i1130
  return i1122
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'originalClip')
  request.r(i1137[2], i1137[3], 0, i1136, 'overrideClip')
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.bytes64 = i1139[1]
  i1138.data = i1139[2]
  return i1138
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1140 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1141 = data
  i1140.normalStyle = i1141[0]
  i1140.normalSpacingOffset = i1141[1]
  i1140.boldStyle = i1141[2]
  i1140.boldSpacing = i1141[3]
  i1140.italicStyle = i1141[4]
  i1140.tabSize = i1141[5]
  request.r(i1141[6], i1141[7], 0, i1140, 'atlas')
  i1140.m_SourceFontFileGUID = i1141[8]
  i1140.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1141[9], i1140.m_CreationSettings)
  request.r(i1141[10], i1141[11], 0, i1140, 'm_SourceFontFile')
  i1140.m_SourceFontFilePath = i1141[12]
  i1140.m_AtlasPopulationMode = i1141[13]
  i1140.InternalDynamicOS = !!i1141[14]
  var i1143 = i1141[15]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('UnityEngine.TextCore.Glyph', i1143[i + 0]));
  }
  i1140.m_GlyphTable = i1142
  var i1145 = i1141[16]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('TMPro.TMP_Character', i1145[i + 0]));
  }
  i1140.m_CharacterTable = i1144
  var i1147 = i1141[17]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 2, i1146, '')
  }
  i1140.m_AtlasTextures = i1146
  i1140.m_AtlasTextureIndex = i1141[18]
  i1140.m_IsMultiAtlasTexturesEnabled = !!i1141[19]
  i1140.m_GetFontFeatures = !!i1141[20]
  i1140.m_ClearDynamicDataOnBuild = !!i1141[21]
  i1140.m_AtlasWidth = i1141[22]
  i1140.m_AtlasHeight = i1141[23]
  i1140.m_AtlasPadding = i1141[24]
  i1140.m_AtlasRenderMode = i1141[25]
  var i1149 = i1141[26]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(request.d('UnityEngine.TextCore.GlyphRect', i1149[i + 0]));
  }
  i1140.m_UsedGlyphRects = i1148
  var i1151 = i1141[27]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('UnityEngine.TextCore.GlyphRect', i1151[i + 0]));
  }
  i1140.m_FreeGlyphRects = i1150
  i1140.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1141[28], i1140.m_FontFeatureTable)
  i1140.m_ShouldReimportFontFeatures = !!i1141[29]
  var i1153 = i1141[30]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 1, i1152, '')
  }
  i1140.m_FallbackFontAssetTable = i1152
  var i1155 = i1141[31]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('TMPro.TMP_FontWeightPair', i1155[i + 0]) );
  }
  i1140.m_FontWeightTable = i1154
  var i1157 = i1141[32]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('TMPro.TMP_FontWeightPair', i1157[i + 0]) );
  }
  i1140.fontWeights = i1156
  i1140.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1141[33], i1140.m_fontInfo)
  var i1159 = i1141[34]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('TMPro.TMP_Glyph', i1159[i + 0]));
  }
  i1140.m_glyphInfoList = i1158
  i1140.m_KerningTable = request.d('TMPro.KerningTable', i1141[35], i1140.m_KerningTable)
  var i1161 = i1141[36]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 1, i1160, '')
  }
  i1140.fallbackFontAssets = i1160
  i1140.m_Version = i1141[37]
  i1140.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1141[38], i1140.m_FaceInfo)
  request.r(i1141[39], i1141[40], 0, i1140, 'm_Material')
  return i1140
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1163 = data
  i1162.sourceFontFileName = i1163[0]
  i1162.sourceFontFileGUID = i1163[1]
  i1162.faceIndex = i1163[2]
  i1162.pointSizeSamplingMode = i1163[3]
  i1162.pointSize = i1163[4]
  i1162.padding = i1163[5]
  i1162.paddingMode = i1163[6]
  i1162.packingMode = i1163[7]
  i1162.atlasWidth = i1163[8]
  i1162.atlasHeight = i1163[9]
  i1162.characterSetSelectionMode = i1163[10]
  i1162.characterSequence = i1163[11]
  i1162.referencedFontAssetGUID = i1163[12]
  i1162.referencedTextAssetGUID = i1163[13]
  i1162.fontStyle = i1163[14]
  i1162.fontStyleModifier = i1163[15]
  i1162.renderMode = i1163[16]
  i1162.includeFontFeatures = !!i1163[17]
  return i1162
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1167 = data
  i1166.m_Index = i1167[0]
  i1166.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1167[1], i1166.m_Metrics)
  i1166.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1167[2], i1166.m_GlyphRect)
  i1166.m_Scale = i1167[3]
  i1166.m_AtlasIndex = i1167[4]
  i1166.m_ClassDefinitionType = i1167[5]
  return i1166
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1169 = data
  i1168.m_Width = i1169[0]
  i1168.m_Height = i1169[1]
  i1168.m_HorizontalBearingX = i1169[2]
  i1168.m_HorizontalBearingY = i1169[3]
  i1168.m_HorizontalAdvance = i1169[4]
  return i1168
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1171 = data
  i1170.m_X = i1171[0]
  i1170.m_Y = i1171[1]
  i1170.m_Width = i1171[2]
  i1170.m_Height = i1171[3]
  return i1170
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_Character' )
  var i1175 = data
  i1174.m_ElementType = i1175[0]
  i1174.m_Unicode = i1175[1]
  i1174.m_GlyphIndex = i1175[2]
  i1174.m_Scale = i1175[3]
  return i1174
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1181 = data
  var i1183 = i1181[0]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('TMPro.MultipleSubstitutionRecord', i1183[i + 0]));
  }
  i1180.m_MultipleSubstitutionRecords = i1182
  var i1185 = i1181[1]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.LigatureSubstitutionRecord', i1185[i + 0]));
  }
  i1180.m_LigatureSubstitutionRecords = i1184
  var i1187 = i1181[2]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1187[i + 0]));
  }
  i1180.m_GlyphPairAdjustmentRecords = i1186
  var i1189 = i1181[3]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1189[i + 0]));
  }
  i1180.m_MarkToBaseAdjustmentRecords = i1188
  var i1191 = i1181[4]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1191[i + 0]));
  }
  i1180.m_MarkToMarkAdjustmentRecords = i1190
  return i1180
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1195 = data
  i1194.m_TargetGlyphID = i1195[0]
  i1194.m_SubstituteGlyphIDs = i1195[1]
  return i1194
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1199 = data
  i1198.m_ComponentGlyphIDs = i1199[0]
  i1198.m_LigatureGlyphID = i1199[1]
  return i1198
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1203 = data
  i1202.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1203[0], i1202.m_FirstAdjustmentRecord)
  i1202.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1203[1], i1202.m_SecondAdjustmentRecord)
  i1202.m_FeatureLookupFlags = i1203[2]
  return i1202
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1207 = data
  i1206.m_BaseGlyphID = i1207[0]
  i1206.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1207[1], i1206.m_BaseGlyphAnchorPoint)
  i1206.m_MarkGlyphID = i1207[2]
  i1206.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1207[3], i1206.m_MarkPositionAdjustment)
  return i1206
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1211 = data
  i1210.m_BaseMarkGlyphID = i1211[0]
  i1210.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1211[1], i1210.m_BaseMarkGlyphAnchorPoint)
  i1210.m_CombiningMarkGlyphID = i1211[2]
  i1210.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1211[3], i1210.m_CombiningMarkPositionAdjustment)
  return i1210
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1216 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1217 = data
  request.r(i1217[0], i1217[1], 0, i1216, 'regularTypeface')
  request.r(i1217[2], i1217[3], 0, i1216, 'italicTypeface')
  return i1216
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1219 = data
  i1218.Name = i1219[0]
  i1218.PointSize = i1219[1]
  i1218.Scale = i1219[2]
  i1218.CharacterCount = i1219[3]
  i1218.LineHeight = i1219[4]
  i1218.Baseline = i1219[5]
  i1218.Ascender = i1219[6]
  i1218.CapHeight = i1219[7]
  i1218.Descender = i1219[8]
  i1218.CenterLine = i1219[9]
  i1218.SuperscriptOffset = i1219[10]
  i1218.SubscriptOffset = i1219[11]
  i1218.SubSize = i1219[12]
  i1218.Underline = i1219[13]
  i1218.UnderlineThickness = i1219[14]
  i1218.strikethrough = i1219[15]
  i1218.strikethroughThickness = i1219[16]
  i1218.TabWidth = i1219[17]
  i1218.Padding = i1219[18]
  i1218.AtlasWidth = i1219[19]
  i1218.AtlasHeight = i1219[20]
  return i1218
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1223 = data
  i1222.id = i1223[0]
  i1222.x = i1223[1]
  i1222.y = i1223[2]
  i1222.width = i1223[3]
  i1222.height = i1223[4]
  i1222.xOffset = i1223[5]
  i1222.yOffset = i1223[6]
  i1222.xAdvance = i1223[7]
  i1222.scale = i1223[8]
  return i1222
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.KerningTable' )
  var i1225 = data
  var i1227 = i1225[0]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('TMPro.KerningPair', i1227[i + 0]));
  }
  i1224.kerningPairs = i1226
  return i1224
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.KerningPair' )
  var i1231 = data
  i1230.xOffset = i1231[0]
  i1230.m_FirstGlyph = i1231[1]
  i1230.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1231[2], i1230.m_FirstGlyphAdjustments)
  i1230.m_SecondGlyph = i1231[3]
  i1230.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1231[4], i1230.m_SecondGlyphAdjustments)
  i1230.m_IgnoreSpacingAdjustments = !!i1231[5]
  return i1230
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1233 = data
  i1232.m_FaceIndex = i1233[0]
  i1232.m_FamilyName = i1233[1]
  i1232.m_StyleName = i1233[2]
  i1232.m_PointSize = i1233[3]
  i1232.m_Scale = i1233[4]
  i1232.m_UnitsPerEM = i1233[5]
  i1232.m_LineHeight = i1233[6]
  i1232.m_AscentLine = i1233[7]
  i1232.m_CapLine = i1233[8]
  i1232.m_MeanLine = i1233[9]
  i1232.m_Baseline = i1233[10]
  i1232.m_DescentLine = i1233[11]
  i1232.m_SuperscriptOffset = i1233[12]
  i1232.m_SuperscriptSize = i1233[13]
  i1232.m_SubscriptOffset = i1233[14]
  i1232.m_SubscriptSize = i1233[15]
  i1232.m_UnderlineOffset = i1233[16]
  i1232.m_UnderlineThickness = i1233[17]
  i1232.m_StrikethroughOffset = i1233[18]
  i1232.m_StrikethroughThickness = i1233[19]
  i1232.m_TabWidth = i1233[20]
  return i1232
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1234 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1235 = data
  i1234.useSafeMode = !!i1235[0]
  i1234.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1235[1], i1234.safeModeOptions)
  i1234.timeScale = i1235[2]
  i1234.unscaledTimeScale = i1235[3]
  i1234.useSmoothDeltaTime = !!i1235[4]
  i1234.maxSmoothUnscaledTime = i1235[5]
  i1234.rewindCallbackMode = i1235[6]
  i1234.showUnityEditorReport = !!i1235[7]
  i1234.logBehaviour = i1235[8]
  i1234.drawGizmos = !!i1235[9]
  i1234.defaultRecyclable = !!i1235[10]
  i1234.defaultAutoPlay = i1235[11]
  i1234.defaultUpdateType = i1235[12]
  i1234.defaultTimeScaleIndependent = !!i1235[13]
  i1234.defaultEaseType = i1235[14]
  i1234.defaultEaseOvershootOrAmplitude = i1235[15]
  i1234.defaultEasePeriod = i1235[16]
  i1234.defaultAutoKill = !!i1235[17]
  i1234.defaultLoopType = i1235[18]
  i1234.debugMode = !!i1235[19]
  i1234.debugStoreTargetId = !!i1235[20]
  i1234.showPreviewPanel = !!i1235[21]
  i1234.storeSettingsLocation = i1235[22]
  i1234.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1235[23], i1234.modules)
  i1234.createASMDEF = !!i1235[24]
  i1234.showPlayingTweens = !!i1235[25]
  i1234.showPausedTweens = !!i1235[26]
  return i1234
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1236 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1237 = data
  i1236.logBehaviour = i1237[0]
  i1236.nestedTweenFailureBehaviour = i1237[1]
  return i1236
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1238 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1239 = data
  i1238.showPanel = !!i1239[0]
  i1238.audioEnabled = !!i1239[1]
  i1238.physicsEnabled = !!i1239[2]
  i1238.physics2DEnabled = !!i1239[3]
  i1238.spriteEnabled = !!i1239[4]
  i1238.uiEnabled = !!i1239[5]
  i1238.textMeshProEnabled = !!i1239[6]
  i1238.tk2DEnabled = !!i1239[7]
  i1238.deAudioEnabled = !!i1239[8]
  i1238.deUnityExtendedEnabled = !!i1239[9]
  i1238.epoOutlineEnabled = !!i1239[10]
  return i1238
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_Settings' )
  var i1241 = data
  i1240.assetVersion = i1241[0]
  i1240.m_TextWrappingMode = i1241[1]
  i1240.m_enableKerning = !!i1241[2]
  var i1243 = i1241[3]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(i1243[i + 0]);
  }
  i1240.m_ActiveFontFeatures = i1242
  i1240.m_enableExtraPadding = !!i1241[4]
  i1240.m_enableTintAllSprites = !!i1241[5]
  i1240.m_enableParseEscapeCharacters = !!i1241[6]
  i1240.m_EnableRaycastTarget = !!i1241[7]
  i1240.m_GetFontFeaturesAtRuntime = !!i1241[8]
  i1240.m_missingGlyphCharacter = i1241[9]
  i1240.m_ClearDynamicDataOnBuild = !!i1241[10]
  i1240.m_warningsDisabled = !!i1241[11]
  request.r(i1241[12], i1241[13], 0, i1240, 'm_defaultFontAsset')
  i1240.m_defaultFontAssetPath = i1241[14]
  i1240.m_defaultFontSize = i1241[15]
  i1240.m_defaultAutoSizeMinRatio = i1241[16]
  i1240.m_defaultAutoSizeMaxRatio = i1241[17]
  i1240.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1241[18], i1241[19] )
  i1240.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1241[20], i1241[21] )
  i1240.m_autoSizeTextContainer = !!i1241[22]
  i1240.m_IsTextObjectScaleStatic = !!i1241[23]
  var i1245 = i1241[24]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 1, i1244, '')
  }
  i1240.m_fallbackFontAssets = i1244
  i1240.m_matchMaterialPreset = !!i1241[25]
  i1240.m_HideSubTextObjects = !!i1241[26]
  request.r(i1241[27], i1241[28], 0, i1240, 'm_defaultSpriteAsset')
  i1240.m_defaultSpriteAssetPath = i1241[29]
  i1240.m_enableEmojiSupport = !!i1241[30]
  i1240.m_MissingCharacterSpriteUnicode = i1241[31]
  var i1247 = i1241[32]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1247.length; i += 2) {
  request.r(i1247[i + 0], i1247[i + 1], 1, i1246, '')
  }
  i1240.m_EmojiFallbackTextAssets = i1246
  i1240.m_defaultColorGradientPresetsPath = i1241[33]
  request.r(i1241[34], i1241[35], 0, i1240, 'm_defaultStyleSheet')
  i1240.m_StyleSheetsResourcePath = i1241[36]
  request.r(i1241[37], i1241[38], 0, i1240, 'm_leadingCharacters')
  request.r(i1241[39], i1241[40], 0, i1240, 'm_followingCharacters')
  i1240.m_UseModernHangulLineBreakingRules = !!i1241[41]
  return i1240
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1251 = data
  request.r(i1251[0], i1251[1], 0, i1250, 'spriteSheet')
  var i1253 = i1251[2]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('TMPro.TMP_Sprite', i1253[i + 0]));
  }
  i1250.spriteInfoList = i1252
  var i1255 = i1251[3]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 1, i1254, '')
  }
  i1250.fallbackSpriteAssets = i1254
  var i1257 = i1251[4]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('TMPro.TMP_SpriteCharacter', i1257[i + 0]));
  }
  i1250.m_SpriteCharacterTable = i1256
  var i1259 = i1251[5]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.TMP_SpriteGlyph', i1259[i + 0]));
  }
  i1250.m_GlyphTable = i1258
  i1250.m_Version = i1251[6]
  i1250.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1251[7], i1250.m_FaceInfo)
  request.r(i1251[8], i1251[9], 0, i1250, 'm_Material')
  return i1250
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1263 = data
  i1262.name = i1263[0]
  i1262.hashCode = i1263[1]
  i1262.unicode = i1263[2]
  i1262.pivot = new pc.Vec2( i1263[3], i1263[4] )
  request.r(i1263[5], i1263[6], 0, i1262, 'sprite')
  i1262.id = i1263[7]
  i1262.x = i1263[8]
  i1262.y = i1263[9]
  i1262.width = i1263[10]
  i1262.height = i1263[11]
  i1262.xOffset = i1263[12]
  i1262.yOffset = i1263[13]
  i1262.xAdvance = i1263[14]
  i1262.scale = i1263[15]
  return i1262
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1269 = data
  i1268.m_Name = i1269[0]
  i1268.m_ElementType = i1269[1]
  i1268.m_Unicode = i1269[2]
  i1268.m_GlyphIndex = i1269[3]
  i1268.m_Scale = i1269[4]
  return i1268
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1273 = data
  request.r(i1273[0], i1273[1], 0, i1272, 'sprite')
  i1272.m_Index = i1273[2]
  i1272.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1273[3], i1272.m_Metrics)
  i1272.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1273[4], i1272.m_GlyphRect)
  i1272.m_Scale = i1273[5]
  i1272.m_AtlasIndex = i1273[6]
  i1272.m_ClassDefinitionType = i1273[7]
  return i1272
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.TMP_Style', i1277[i + 0]));
  }
  i1274.m_StyleList = i1276
  return i1274
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_Style' )
  var i1281 = data
  i1280.m_Name = i1281[0]
  i1280.m_HashCode = i1281[1]
  i1280.m_OpeningDefinition = i1281[2]
  i1280.m_ClosingDefinition = i1281[3]
  i1280.m_OpeningTagArray = i1281[4]
  i1280.m_ClosingTagArray = i1281[5]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1285[i + 0]) );
  }
  i1282.files = i1284
  i1282.componentToPrefabIds = i1283[1]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1289 = data
  i1288.path = i1289[0]
  request.r(i1289[1], i1289[2], 0, i1288, 'unityObject')
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1293[i + 0]) );
  }
  i1290.scriptsExecutionOrder = i1292
  var i1295 = i1291[1]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1295[i + 0]) );
  }
  i1290.sortingLayers = i1294
  var i1297 = i1291[2]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1297[i + 0]) );
  }
  i1290.cullingLayers = i1296
  i1290.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1291[3], i1290.timeSettings)
  i1290.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1291[4], i1290.physicsSettings)
  i1290.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1291[5], i1290.physics2DSettings)
  i1290.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1291[6], i1290.qualitySettings)
  i1290.enableRealtimeShadows = !!i1291[7]
  i1290.enableAutoInstancing = !!i1291[8]
  i1290.enableStaticBatching = !!i1291[9]
  i1290.enableDynamicBatching = !!i1291[10]
  i1290.usePreservativeDynamicBatching = !!i1291[11]
  i1290.lightmapEncodingQuality = i1291[12]
  i1290.desiredColorSpace = i1291[13]
  var i1299 = i1291[14]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( i1299[i + 0] );
  }
  i1290.allTags = i1298
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1303 = data
  i1302.name = i1303[0]
  i1302.value = i1303[1]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1307 = data
  i1306.id = i1307[0]
  i1306.name = i1307[1]
  i1306.value = i1307[2]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1311 = data
  i1310.id = i1311[0]
  i1310.name = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1313 = data
  i1312.fixedDeltaTime = i1313[0]
  i1312.maximumDeltaTime = i1313[1]
  i1312.timeScale = i1313[2]
  i1312.maximumParticleTimestep = i1313[3]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1315 = data
  i1314.gravity = new pc.Vec3( i1315[0], i1315[1], i1315[2] )
  i1314.defaultSolverIterations = i1315[3]
  i1314.bounceThreshold = i1315[4]
  i1314.autoSyncTransforms = !!i1315[5]
  i1314.autoSimulation = !!i1315[6]
  var i1317 = i1315[7]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1317[i + 0]) );
  }
  i1314.collisionMatrix = i1316
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1321 = data
  i1320.enabled = !!i1321[0]
  i1320.layerId = i1321[1]
  i1320.otherLayerId = i1321[2]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'material')
  i1322.gravity = new pc.Vec2( i1323[2], i1323[3] )
  i1322.positionIterations = i1323[4]
  i1322.velocityIterations = i1323[5]
  i1322.velocityThreshold = i1323[6]
  i1322.maxLinearCorrection = i1323[7]
  i1322.maxAngularCorrection = i1323[8]
  i1322.maxTranslationSpeed = i1323[9]
  i1322.maxRotationSpeed = i1323[10]
  i1322.baumgarteScale = i1323[11]
  i1322.baumgarteTOIScale = i1323[12]
  i1322.timeToSleep = i1323[13]
  i1322.linearSleepTolerance = i1323[14]
  i1322.angularSleepTolerance = i1323[15]
  i1322.defaultContactOffset = i1323[16]
  i1322.autoSimulation = !!i1323[17]
  i1322.queriesHitTriggers = !!i1323[18]
  i1322.queriesStartInColliders = !!i1323[19]
  i1322.callbacksOnDisable = !!i1323[20]
  i1322.reuseCollisionCallbacks = !!i1323[21]
  i1322.autoSyncTransforms = !!i1323[22]
  var i1325 = i1323[23]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1325[i + 0]) );
  }
  i1322.collisionMatrix = i1324
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1329 = data
  i1328.enabled = !!i1329[0]
  i1328.layerId = i1329[1]
  i1328.otherLayerId = i1329[2]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1333[i + 0]) );
  }
  i1330.qualityLevels = i1332
  var i1335 = i1331[1]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( i1335[i + 0] );
  }
  i1330.names = i1334
  i1330.shadows = i1331[2]
  i1330.anisotropicFiltering = i1331[3]
  i1330.antiAliasing = i1331[4]
  i1330.lodBias = i1331[5]
  i1330.shadowCascades = i1331[6]
  i1330.shadowDistance = i1331[7]
  i1330.shadowmaskMode = i1331[8]
  i1330.shadowProjection = i1331[9]
  i1330.shadowResolution = i1331[10]
  i1330.softParticles = !!i1331[11]
  i1330.softVegetation = !!i1331[12]
  i1330.activeColorSpace = i1331[13]
  i1330.desiredColorSpace = i1331[14]
  i1330.masterTextureLimit = i1331[15]
  i1330.maxQueuedFrames = i1331[16]
  i1330.particleRaycastBudget = i1331[17]
  i1330.pixelLightCount = i1331[18]
  i1330.realtimeReflectionProbes = !!i1331[19]
  i1330.shadowCascade2Split = i1331[20]
  i1330.shadowCascade4Split = new pc.Vec3( i1331[21], i1331[22], i1331[23] )
  i1330.streamingMipmapsActive = !!i1331[24]
  i1330.vSyncCount = i1331[25]
  i1330.asyncUploadBufferSize = i1331[26]
  i1330.asyncUploadTimeSlice = i1331[27]
  i1330.billboardsFaceCameraPosition = !!i1331[28]
  i1330.shadowNearPlaneOffset = i1331[29]
  i1330.streamingMipmapsMemoryBudget = i1331[30]
  i1330.maximumLODLevel = i1331[31]
  i1330.streamingMipmapsAddAllCameras = !!i1331[32]
  i1330.streamingMipmapsMaxLevelReduction = i1331[33]
  i1330.streamingMipmapsRenderersPerFrame = i1331[34]
  i1330.resolutionScalingFixedDPIFactor = i1331[35]
  i1330.streamingMipmapsMaxFileIORequests = i1331[36]
  i1330.currentQualityLevel = i1331[37]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1339 = data
  i1338.name = i1339[0]
  var i1341 = i1339[1]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1341[i + 0]) );
  }
  i1338.tos = i1340
  var i1343 = i1339[2]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( i1343[i + 0] );
  }
  i1338.constant = i1342
  i1338.isValid = !!i1339[3]
  i1338.isHuman = !!i1339[4]
  i1338.hasRootMotion = !!i1339[5]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1347 = data
  i1346.hash = i1347[0]
  i1346.path = i1347[1]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1351 = data
  i1350.weight = i1351[0]
  i1350.vertices = i1351[1]
  i1350.normals = i1351[2]
  i1350.tangents = i1351[3]
  return i1350
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1352 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1353 = data
  request.r(i1353[0], i1353[1], 0, i1352, 'm_ObjectArgument')
  i1352.m_ObjectArgumentAssemblyTypeName = i1353[2]
  i1352.m_IntArgument = i1353[3]
  i1352.m_FloatArgument = i1353[4]
  i1352.m_StringArgument = i1353[5]
  i1352.m_BoolArgument = !!i1353[6]
  return i1352
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1355 = data
  i1354.m_GlyphIndex = i1355[0]
  i1354.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1355[1], i1354.m_GlyphValueRecord)
  return i1354
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1357 = data
  i1356.m_XCoordinate = i1357[0]
  i1356.m_YCoordinate = i1357[1]
  return i1356
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1359 = data
  i1358.m_XPositionAdjustment = i1359[0]
  i1358.m_YPositionAdjustment = i1359[1]
  return i1358
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1361 = data
  i1360.xPlacement = i1361[0]
  i1360.yPlacement = i1361[1]
  i1360.xAdvance = i1361[2]
  i1360.yAdvance = i1361[3]
  return i1360
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1363 = data
  i1362.m_XPlacement = i1363[0]
  i1362.m_YPlacement = i1363[1]
  i1362.m_XAdvance = i1363[2]
  i1362.m_YAdvance = i1363[3]
  return i1362
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[45],"67":[49],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[76],"84":[76],"85":[76],"86":[76],"87":[76],"88":[76],"89":[49],"90":[27],"91":[92],"93":[92],"7":[6],"37":[36],"94":[6],"95":[12,6],"96":[27],"97":[12,6],"98":[6],"99":[6],"100":[27,6],"18":[6,12],"101":[102],"103":[102],"104":[102],"105":[6],"106":[6],"9":[7],"13":[12,6],"107":[6],"8":[7],"108":[6],"109":[6],"110":[6],"111":[6],"112":[6],"113":[6],"114":[6],"17":[6],"115":[6],"116":[12,6],"117":[6],"118":[6],"119":[6],"120":[6],"121":[12,6],"122":[6],"123":[3],"124":[3],"4":[3],"125":[3],"126":[49],"127":[49]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","Joystick","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","JumpButton","UnityEngine.UI.Button","UnityEngine.UI.Mask","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","DG.Tweening.DOTweenAnimation","UnityEngine.Animator","UnityEngine.AnimatorOverrideController","UnityEngine.AudioSource","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","UnityEngine.MeshCollider","UnityEngine.SphereCollider","Box","UnityEngine.ParticleSystem","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.ParticleSystemRenderer","UnityEngine.CharacterController","CharacterMotor","CharacterInput","UnityEngine.Transform","GroundChecker","CharacterRotation","CharacterAnimation","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","CameraFollow","CameraLook","InputManager","UnityEngine.Camera","UnityEngine.AudioListener","AudioController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SBFM_V01";

Deserializers.lunaInitializationTime = "07/27/2026 10:05:42";

Deserializers.lunaDaysRunning = "1.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1644";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4216";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SBFM_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "e8a1f976-f706-47ac-a7ca-417408eef1ae";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

