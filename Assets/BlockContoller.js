#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(collision: Collision) {
	Destroy(gameObject);
}