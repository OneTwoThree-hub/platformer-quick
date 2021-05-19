controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpCount < 1) {
        jumpCount += 1
        mySprite.vy = -150
    }
    pause(2000)
    jumpCount = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.image`paintTwo`, function (sprite, location) {
    tiles.setTilemap(tilemap`CityScape2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 9))
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    let statusbar: StatusBarSprite = null
    statusbar.value += -1000
    pause(100)
    if (statusbar.value <= 0) {
        game.over(false)
    } else {
        color.FadeToWhite.startScreenEffect(1000)
    }
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
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`01_level_One1`)
mySprite = sprites.create(assets.image`myImage7`, SpriteKind.Player)
info.setLife(1)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 9))
mySprite.ay = 200
forever(function () {
    mySprite.ay = 200
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jumpCount += 0
    }
})
