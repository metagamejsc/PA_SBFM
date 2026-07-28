using UnityEngine;

public class CameraLook : MonoBehaviour
{
    [SerializeField] private InputManager input;
    [SerializeField] private Transform yawPivot;
    [SerializeField] private Transform pitchPivot;

    [SerializeField] private float minPitch = -30f;
    [SerializeField] private float maxPitch = 70f;

    private float yaw;
    private float pitch;

    private void Update()
    {
        Vector2 look = input.LookDelta;

        if (look.sqrMagnitude < 0.0001f)
            return;

        yaw += look.x;

        pitch -= look.y;
        pitch = Mathf.Clamp(pitch, minPitch, maxPitch);

        yawPivot.rotation = Quaternion.Euler(0f, yaw, 0f);
        pitchPivot.localRotation = Quaternion.Euler(pitch, 0f, 0f);
    }
}