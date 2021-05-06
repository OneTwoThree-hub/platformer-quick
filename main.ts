controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        mySprite.vy += -100
        jumpCount += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTilemap(tilemap`City2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    game.over(false)
})
let jumpCount = 0
let mySprite: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`CityScape`)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 10))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
forever(function () {
    mySprite.ay = 200
    jumpCount += 0
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
    	
    }
})
