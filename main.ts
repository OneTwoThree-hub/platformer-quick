controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpCount < 1) {
        jumpCount += 1
        mySprite.vy = -150
    }
    pause(2000)
    jumpCount = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.image`paintTwo`, function (sprite, location) {
    tiles.setTilemap(tilemap`City2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 9))
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    color.FadeToWhite.startScreenEffect(1000)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.image`paintOne`, function (sprite, location) {
    tiles.setTilemap(tilemap`CityScape2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 9))
})
scene.onOverlapTile(SpriteKind.Player, assets.image`paintThree`, function (sprite, location) {
    game.over(true)
})
let jumpCount = 0
let mySprite: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`CityScape`)
mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
info.setLife(1)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 9))
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
