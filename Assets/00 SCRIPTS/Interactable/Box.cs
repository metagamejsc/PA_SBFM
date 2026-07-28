using System.Collections;
using UnityEngine;

public class Box : MonoBehaviour, IInteractable
{
    [SerializeField] private float lifeTime = 2;
    [SerializeField] private ParticleSystem effect;
    [SerializeField] private GameObject avatar;
    [SerializeField] private AudioClip openSound;
    
    private bool isInteract;
    public void Interact()
    {
        if (isInteract) return;
        isInteract = true;
        AudioController.Ins.PlaySFX(openSound);
        avatar.SetActive(false);
        effect.Play();
        StartCoroutine(DestroyBox());
    }
    private IEnumerator DestroyBox()
    {
        yield return new WaitForSeconds(lifeTime);
        Destroy(gameObject);
    }
}