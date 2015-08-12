#pragma strict

function Start () {

}
var Accel = 1000.0;
function Update () {
  GetComponent.<Rigidbody>().AddForce(
    transform.right * Input.GetAxisRaw( "Horizontal" ) * Accel,
    ForceMode.Impulse
  );
}
