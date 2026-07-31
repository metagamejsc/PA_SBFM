using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Type Monster 0 -> 3")] public int TypeMonster;
    [SerializeField] private List<BoxGift> monsters;
    [SerializeField] private List<Image> images;
    [SerializeField] private List<Button> CTA;
    private void Awake()
    {
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        InitMonster();
    }
    private void InitMonster()
    {
        if (TypeMonster < 0) TypeMonster = 0;
        if (TypeMonster >= monsters.Count) TypeMonster = monsters.Count - 1;
        monsters[TypeMonster].Box.gameObject.SetActive(true);
        monsters[TypeMonster].SecretGift.gameObject.SetActive(true);
        images[TypeMonster].gameObject.SetActive(true);
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
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (LimitTimePlay) ClickCTA();
    }
}
