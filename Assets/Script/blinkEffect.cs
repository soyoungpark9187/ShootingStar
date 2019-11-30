using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class blinkEffect : MonoBehaviour
{
    public GameObject Star;
    // Start is called before the first frame update
    void Start()
    {
        transform.localScale = (Star.transform.localScale)/2;

    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
