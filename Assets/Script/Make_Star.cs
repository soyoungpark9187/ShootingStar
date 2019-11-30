using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Make_Star : MonoBehaviour
{

    float randomTime;
    public bool routineStarted = false;
   
    //Used to check if the target has been hit
    public bool isHit = false;
    //The explosion prefab
    public Transform player;
    
    public int make_num;
    public int current_num;
    public float size;
    public int score;
    public int turnSpeed = 300;
    public bool col_map = false;
    float distance;
    private void Start()
    {
        score = 30; // 10 ~ 50
        float randomV = Random.Range(-0.99f, 1.0f);
        size = randomV;
        transform.localScale += new Vector3(randomV,randomV,randomV);

        float tmp_score = score + (-randomV * 20);
        score = (int)tmp_score;
        player = GameObject.Find("PSControllere_01_FPSController").GetComponent<Transform>();

    }
    private void Update()
    {

        transform.Rotate(Vector3.forward, turnSpeed * Time.deltaTime);
        transform.Translate(0, 0, -Time.deltaTime );
        //If the target is hit
        if (isHit == true)
        {
            distance = Vector3.Distance(transform.position, player.transform.position);
            Debug.Log(distance);

            GameObject.Find("arms_assault_rifle_01").GetComponent<AutomaticGunScriptLPFP>().currentScore += score + (int)distance;
            GameObject.Find("SceneManager").GetComponent<sceneManager>().current_num -=1;

            Destroy(gameObject);

        }
       

    }

    private void OnCollisionEnter(Collision collision)
    {
        try
        {
            if (collision.transform.parent.tag == "Map")
            {
                if (col_map == false)
                {
                    col_map = true;
                    Debug.Log("Map!!!!");
                    GameObject.Find("SceneManager").GetComponent<sceneManager>().current_num -= 1;
                    Destroy(gameObject);
                }

            };
        }
        catch (System.Exception ex)
        {
            Debug.Log("myLight was not set in the inspector");
        }
        
        
      
    }

}
