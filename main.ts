controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.setBackgroundColor(0)
let mySprite = sprites.create(assets.image`myImage7`, SpriteKind.Player)
controller.moveSprite(mySprite)
