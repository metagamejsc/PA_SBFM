using System.Collections;
using UnityEngine;

public class Box : MonoBehaviour, IInteractable
{
    [SerializeField] private float lifeTime = 2;
    [SerializeField] private ParticleSystem effect;
    [SerializeField] private GameObject avatar;
    [SerializeField] private AudioClip interactSound;
    [SerializeField] private AudioClip openSound;

    private bool isInteract;
    public void Interact()
    {
        if (isInteract) return;
        isInteract = true;
        AudioController.Ins.PlaySFX(interactSound);

        effect.Play();
        StartCoroutine(DestroyBox());
    }
    private void UnBox()
    {
        avatar.SetActive(false);
        AudioController.Ins.PlaySFX(openSound);
    }

    private IEnumerator DestroyBox()
    {
        yield return new WaitForSeconds(lifeTime);
        UnBox();
        Destroy(gameObject);
    }
}
