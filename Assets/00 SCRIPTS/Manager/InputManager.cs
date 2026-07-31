using UnityEngine;
using UnityEngine.EventSystems;

public class InputManager : MonoBehaviour
{
    public static InputManager Instance { get; private set; }

    [Header("Camera")]
    [SerializeField] private Camera worldCamera;
    [SerializeField] private LayerMask interactLayer;
    [SerializeField] private float touchSensitivity = 0.15f;
    [SerializeField] private float mouseSensitivity = 5f;
    [SerializeField] private float dragThreshold = 20f;

    public Vector2 LookDelta { get; private set; }

    public IInteractable CurrentInteractable { get; private set; }

    private int cameraFinger = -1;
    private Vector2 startPosition;
    private bool dragging;

    private void Awake()
    {
        Instance = this;
    }

    private void Update()
    {
        LookDelta = Vector2.zero;

#if UNITY_EDITOR || UNITY_STANDALONE
        HandleMouse();
#else
        HandleTouch();
#endif
    }

    #region Mouse

    private void HandleMouse()
    {
        if (EventSystem.current.IsPointerOverGameObject()) return;
        if (Input.GetMouseButton(1))
        {
            LookDelta = new Vector2(
                Input.GetAxisRaw("Mouse X"),
                Input.GetAxisRaw("Mouse Y")) * mouseSensitivity;
        }

        if (Input.GetMouseButtonDown(0))
        {
            if (EventSystem.current.IsPointerOverGameObject())
                return;

            RaycastInteractable(Input.mousePosition);

            if (CurrentInteractable != null)
            {
                CurrentInteractable.Interact();
                CurrentInteractable = null;
            }
        }
    }

    #endregion

    #region Touch

    private void HandleTouch()
    {
        foreach (Touch touch in Input.touches)
        {
            switch (touch.phase)
            {
                case TouchPhase.Began:

                    if (EventSystem.current.IsPointerOverGameObject(touch.fingerId))
                        continue;

                    startPosition = touch.position;
                    dragging = false;
                    CurrentInteractable = null;

                    RaycastInteractable(touch.position);

                    cameraFinger = touch.fingerId;

                    break;

                case TouchPhase.Moved:

                    if (touch.fingerId != cameraFinger)
                        continue;

                    if (!dragging)
                    {
                        float distance =
                            Vector2.Distance(startPosition, touch.position);

                        if (distance > dragThreshold)
                        {
                            dragging = true;
                        }
                    }

                    if (dragging)
                    {
                        LookDelta =
                            touch.deltaPosition * touchSensitivity;
                    }

                    break;

                case TouchPhase.Ended:

                    if (touch.fingerId != cameraFinger)
                        continue;

                    if (!dragging &&
                        CurrentInteractable != null)
                    {
                        CurrentInteractable.Interact();
                        CurrentInteractable = null;
                    }

                    cameraFinger = -1;
                    dragging = false;

                    break;

                case TouchPhase.Canceled:

                    if (touch.fingerId == cameraFinger)
                    {
                        cameraFinger = -1;
                        dragging = false;
                    }

                    break;
            }
        }
    }

    #endregion

    private void RaycastInteractable(Vector2 screenPosition)
    {
        CurrentInteractable = null;

        Ray ray = worldCamera.ScreenPointToRay(screenPosition);

        if (Physics.Raycast(ray,
            out RaycastHit hit,
            100f,
            interactLayer))
        {
            if (hit.distance > 25f)
            {
                GameController.Ins.Far();
                return;
            }
            CurrentInteractable = hit.collider.GetComponent<IInteractable>();
        }
    }
}