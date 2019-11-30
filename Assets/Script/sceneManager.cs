using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;



public class sceneManager : MonoBehaviour
{

    public Animator gameOverAni;
    public Text gameOverUI;
    public bool gameOver;
    public bool gameClear;
    public GameObject Star;
    public int make_num;
    public int current_num;
    public Transform randomT;

    public bool routineStarted = false;
    int nextBuildIndex;
    // Start is called before the first frame update
    void Start()
    {
        gameOver = false;
        gameClear = false;
        current_num = 0;
        nextBuildIndex = SceneManager.GetActiveScene().buildIndex+1;
        if (routineStarted == false)
        {
            for (current_num = 0; current_num < make_num; current_num++)
            {
                randomT.position = new Vector3(Random.Range(-12f, 12f), Random.Range(3f, 10), Random.Range(-12f, 12f));
                Instantiate(Star, randomT.position, randomT.rotation);
            }

            routineStarted = true;
        }
            
    }

    // Update is called once per frame
    void Update()
    {
        
        

        if (gameOver)
        {
            gameOverAni.SetBool("IsGameOver", true);
        }
        if (gameClear)
        {
            if(nextBuildIndex == 3)
            {
                gameOverUI.text = "Game Clear!!";
                gameOverAni.SetBool("IsGameOver", true);

            }
            else
            {
                gameOverUI.text = "StageClear!!\nTry Next Stage?";

                gameOverAni.SetBool("IsGameOver", true);

            }
            

        }
        if (gameOver && Input.GetKeyDown(KeyCode.Y))
        {
            
            SceneManager.LoadScene(nextBuildIndex-1);

        }
        if (gameClear && Input.GetKeyDown(KeyCode.Y))
        {
            SceneManager.LoadScene(nextBuildIndex);  /// 다음스테이지로 신 전환
        }

        if (current_num < make_num)
        {
            current_num++;

            randomT.position = new Vector3(Random.Range(-12f, 12f), Random.Range(3f, 10f), Random.Range(-12f, 12f));
            Instantiate(Star, randomT.position, randomT.rotation);
        }
    }
}
