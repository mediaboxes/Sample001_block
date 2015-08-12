#pragma strict

var Speed = 20.0;
function Start () {
	GetComponent.<Rigidbody>().AddForce(
		( transform.forward + transform.right ) * Speed,
		ForceMode.VelocityChange );
}

function Update () {

}