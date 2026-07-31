using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private float timeToShowComplete;
    [SerializeField] private float timeToShowHint;
    [SerializeField] private int currentProgress;
    [SerializeField] private int target;
    [SerializeField] private TextMeshProUGUI progressText;
    [SerializeField] private RectTransform completeScene;
    [SerializeField] private List<BoxGift> boxGifts;
    private Dictionary<Box, Gift> giftMap;
    [SerializeField] private CharacterCollect collect;
    [SerializeField] private TutController tut;
    public static GameController Ins { get; private set; }
    private void Awake()
    {
        CreateIns();
        MappingGift();
    }

    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }
    public void Far()
    {
        tut.ShowFarTut();
    }

    private void Fail()
    {
        tut.ShowFailTut();
        StartCoroutine(ShowHint());
    }
    private void MappingGift()
    {
        giftMap = new Dictionary<Box, Gift>();
        foreach (BoxGift boxGift in boxGifts)
        {
            giftMap.Add(boxGift.Box, boxGift.SecretGift);
        }
    }
    public void UnBox(Box box)
    {
        if (giftMap.ContainsKey(box)) Correct(box);
        else Fail();
    }
    private void Correct(Box box)
    {
        CollectGift(giftMap[box]);
    }
    private void CollectGift(Gift gift)
    {
        int collected = -1;
        for (int i = 0; i < boxGifts.Count; i++)
        {
            if (boxGifts[i].SecretGift != gift) continue;
            collected = i;
            break;
        }
        if (collected == -1) return;
        Gift g = boxGifts[collected].SecretGift;
        boxGifts.RemoveAt(collected);
        g.Collect(collect);
        StartCoroutine(WaitForCollect(g));
    }
    private IEnumerator WaitForCollect(Gift g)
    {
        yield return new WaitUntil(() => g.collectDone);
        g.RemoveGift();
        UpdateProgress();
    }

    private void UpdateProgress()
    {
        currentProgress++;
        progressText.text = string.Format("{0}/{1}", currentProgress, target + 1);
        if (currentProgress >= target) StartCoroutine(ShowComplete());
    }
    private void Complete()
    {
        tut.StopTut();
        completeScene.gameObject.SetActive(true);
    }
    private IEnumerator ShowComplete()
    {
        yield return new WaitForSeconds(timeToShowComplete);
        Complete();
    }
    private IEnumerator ShowHint()
    {
        yield return new WaitForSeconds(timeToShowHint);
        foreach (BoxGift box in boxGifts)
        {
            box.SecretGift.ShowHints();
        }
    }
}
[System.Serializable]
public struct BoxGift
{
    public Box Box;
    public Gift SecretGift;
}
