using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Limit Time Play?")]
    public bool LimitTimePlay;

    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [SerializeField] private List<Image> images;
    [SerializeField] private Button CTA;

    private void Awake()
    {
        CTA.onClick.AddListener(ClickCTA);
    }

    private void Start()
    {
        StartCoroutine(EndGame());
    }

    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    private IEnumerator EndGame()
    {
        if (CTA.gameObject.activeSelf) yield break;
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (LimitTimePlay)
        {
            CTA.gameObject.SetActive(true);
            CTA.transform.localScale = Vector3.zero;
            CTA.transform.DOScale(1.2f, 0.3f).SetEase(Ease.OutCubic).OnComplete(() =>
            {
                CTA.transform.DOScale(1f, 0.2f).SetEase(Ease.OutCubic);
            });
        }

        yield return new WaitForSeconds(1.5f);
        ClickCTA();
    }
}