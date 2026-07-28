using System.Collections;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private float timeToShow;
    [SerializeField] private RectTransform failScene;
    [SerializeField] private RectTransform completeScene;
    [SerializeField] private RectTransform farLog;


    public void Fail()
    {
        failScene.gameObject.SetActive(true);
    }
    public void Correct()
    {

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
