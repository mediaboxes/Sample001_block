#pragma strict

function Start () {

}

function Update () {

}
public var sound : AudioClip;
function OnCollisionEnter(collision: Collision) {
	AudioSource.PlayClipAtPoint(sound, transform.position);
}