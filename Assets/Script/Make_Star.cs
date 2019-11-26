using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Make_Star : MonoBehaviour
{

    float randomTime;
    bool routineStarted = false;

    //Used to check if the target has been hit
    public bool isHit = false;
    //The explosion prefab
    public Transform explosionPrefab;
    public Transform randomT;
    public GameObject Star;
    public int make_num;

    public float size;
    public int score;

    private void Start()
    {
        score = 30; // 10 ~ 50
        float randomV = Random.Range(-0.99f, 1.0f);
        size = randomV;
        transform.localScale += new Vector3(randomV,randomV,randomV);

        float tmp_score = score + (-randomV * 20);
        score = (int)tmp_score;
    }
    private void Update()
    {
        if(routineStarted == false)
        {
            for(int i =0; i< make_num; i++)
            {
                randomT.position = new Vector3(Random.Range(-8f, 8f), Random.Range(0f, 8f), Random.Range(-8f, 8f));
                Instantiate(Star, randomT.position, randomT.rotation);
            }
            
            routineStarted = true;
        }

        //If the target is hit
        if (isHit == true)
        {

            GameObject.Find("arms_assault_rifle_01").GetComponent<AutomaticGunScriptLPFP>().currentScore += score;
            Destroy(gameObject);


        }


    }
  
}
