using UnityEngine;

public class CharacterAnimation : MonoBehaviour
{
    [SerializeField] private Animator animator;
    [SerializeField] private CharacterMotor motor;

    [Header("Smoothing")]
    [SerializeField, Min(0.01f)] private float speedChangeRate = 8f;
    [SerializeField, Min(0f)] private float groundedGraceTime = 0.1f;

    private float displayedSpeed;
    private float groundedTimer;

    private void Update()
    {
        UpdateAnimation();
    }

    private void UpdateAnimation()
    {
        float targetSpeed = motor.MaxMoveSpeed > 0f
            ? motor.Speed / motor.MaxMoveSpeed
            : 0f;

        displayedSpeed = Mathf.MoveTowards(
            displayedSpeed,
            targetSpeed,
            speedChangeRate * Time.deltaTime);

        if (motor.IsGrounded)
            groundedTimer = groundedGraceTime;
        else
            groundedTimer = Mathf.Max(0f, groundedTimer - Time.deltaTime);

        animator.SetFloat("Speed", displayedSpeed);
        animator.SetBool("Jump", groundedTimer <= 0f);
    }

    public void SetAvatar(Animator avatar)
    {
        animator.gameObject.SetActive(false);
        animator = avatar;
        animator.gameObject.SetActive(true);

        animator.SetFloat("Speed", displayedSpeed);
        animator.SetBool("Jump", groundedTimer <= 0f);
    }
}
