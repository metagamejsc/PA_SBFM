using System.Collections.Generic;
using UnityEngine;

public class Gift : MonoBehaviour
{
    [SerializeField] private List<Hint> hints;
    [SerializeField] private AudioClip collectSound;
    [SerializeField] private ParticleSystem collectEffect;
    [SerializeField] private CollectAction action;
    [SerializeField] public Animator avatar;
    [SerializeField] private bool unLocked;
    public bool collectDone;
    public void ShowHints()
    {
        if (hints == null) return;
        for (int i = 0; i < hints.Count; i++)
        {
            hints[i].ShowHint();
        }
    }
    public void Collect(CharacterCollect character)
    {
        unLocked = true;
        character.SetTarget(this, avatar);
    }
    private void OnTriggerEnter(Collider collision)
    {
        if (!unLocked || !collision.gameObject.CompareTag("Player")) return;
        collectDone = true;
        //collectEffect.Play();
        action.Collect();
        AudioController.Ins.PlaySFX(collectSound);
    }
    public void RemoveGift()
    {
        //Destroy(gameObject);
    }
}