using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private float timeToShow;
    [SerializeField] private RectTransform failScene;
    [SerializeField] private RectTransform completeScene;
    [SerializeField] private RectTransform farLog;
    [SerializeField] private List<BoxGift> boxGifts;

    public void Fail()
    {
        failScene.gameObject.SetActive(true);
    }
    public void Correct()
    {
        StartCoroutine(ShowComplete());
    }
    public void Complete()
    {
        completeScene.gameObject.SetActive(true);
    }
    private IEnumerator ShowComplete()
    {
        yield return new WaitForSeconds(timeToShow);
        Complete();
    }
}
public struct BoxGift
{
    public IInteractable Box;
    public Gift SecretGift;
}
