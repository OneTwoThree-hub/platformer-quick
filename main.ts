scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTilemap(tilemap`City2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 10))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpCount < 1) {
        jumpCount += 1
        mySprite.vy = -150
    }
    pause(2000)
    jumpCount = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTilemap(tilemap`CityScape2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 10))
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    color.FadeToWhite.startScreenEffect(1000)
    game.over(false)
})
let jumpCount = 0
let mySprite: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`CityScape`)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
info.setLife(1)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 10))
mySprite.ay = 200
forever(function () {
    if (true) {
    	
    }
})
forever(function () {
    mySprite.ay = 200
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jumpCount += 0
    }
})
