using UnityEngine;

[RequireComponent(typeof(CharacterController))]
public class CharacterMotor : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private CharacterInput characterInput;
    [SerializeField] private Transform cameraYawTransform;

    [Header("Movement")]
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float jumpHeight = 1.5f;

    [Header("Gravity")]
    [SerializeField] private GroundChecker groundChecker;
    [SerializeField] private float gravity = -20f;

    public float VerticalVelocity => verticalVelocity;

    public float MaxMoveSpeed => moveSpeed;
    public float Speed => (MoveDirection * moveSpeed).magnitude;

    public bool IsGrounded => groundChecker.IsGrounded;

    private float verticalVelocity;
    [SerializeField] private CharacterController controller;

    public Vector3 MoveDirection { get; private set; }
    public bool IsMoving => MoveDirection.sqrMagnitude > 0.01f;

    private void Update()
    {
        ApplyJump();
        ApplyGravity();
        ApplyMotor();
        Move();
    }
    private void ApplyGravity()
    {
        if (groundChecker.IsGrounded && verticalVelocity < 0f)
        {
            verticalVelocity = -2f;
        }

        verticalVelocity += gravity * Time.deltaTime;
    }
    private void Move()
    {
        Vector3 motion = MoveDirection * moveSpeed;
        motion.y = verticalVelocity;

        controller.Move(motion * Time.deltaTime);
    }

    private void ApplyMotor()
    {
        Vector2 input = characterInput.Move;

        Vector3 forward = cameraYawTransform.forward;
        Vector3 right = cameraYawTransform.right;

        forward.y = 0f;
        right.y = 0f;

        forward.Normalize();
        right.Normalize();

        MoveDirection = forward * input.y + right * input.x;
        MoveDirection = Vector3.ClampMagnitude(MoveDirection, 1f);
    }
    private void ApplyJump()
    {
        if (!groundChecker.IsGrounded)
            return;

        if (!characterInput.Jump)
            return;

        verticalVelocity = Mathf.Sqrt(jumpHeight * -2f * gravity);
    }
}