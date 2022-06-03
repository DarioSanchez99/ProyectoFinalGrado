using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MuerteCaida : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision){
        if (collision.gameObject.CompareTag("Jhon")){
        SceneManager.LoadScene("EscenaMenu");
        }
    }
}
