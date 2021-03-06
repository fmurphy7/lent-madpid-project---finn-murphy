namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.Enemy3, function (sprite) {
    Food_2 = sprites.create(img`
        ...........ccccc66666...........
        ........ccc4444444444666........
        ......cc444444444bb4444466......
        .....cb4444bb4444b5b444444b.....
        ....eb4444b5b44444b44444444b....
        ...ebb44444b4444444444b444446...
        ..eb6bb444444444bb444b5b444446..
        ..e6bb5b44444444b5b444b44bb44e..
        .e66b4b4444444444b4444444b5b44e.
        .e6bb444444444444444444444bb44e.
        eb66b44444bb444444444444444444be
        eb66bb444b5b44444444bb44444444be
        fb666b444bb444444444b5b4444444bf
        fcb666b44444444444444bb444444bcf
        .fbb6666b44444444444444444444bf.
        .efbb66666bb4444444444444444bfe.
        .86fcbb66666bbb44444444444bcc688
        8772effcbbbbbbbbbbbbbbbbcfc22778
        87722222cccccccccccccccc22226678
        f866622222222222222222222276686f
        fef866677766667777776667777fffef
        fbff877768f86777777666776fffffbf
        fbeffeefffeff7766688effeeeefeb6f
        f6bfffeffeeeeeeeeeeeeefeeeeebb6e
        f66ddfffffeeeffeffeeeeeffeedb46e
        .c66ddd4effffffeeeeeffff4ddb46e.
        .fc6b4dddddddddddddddddddb444ee.
        ..ff6bb444444444444444444444ee..
        ....ffbbbb4444444444444444ee....
        ......ffebbbbbb44444444eee......
        .........fffffffcccccee.........
        ................................
        `, SpriteKind.Food)
    Food_2.setPosition(136, 68)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ...........fffcc....................
        ...........fbbbbcfffffffff..........
        ............fbfffbbbbbbbbbf.........
        ............ffbbbbffb111bbf.........
        ..........ffcbbbbbff11111bf.........
        .........fcccbcbcbb11cccc1f.........
        ccccc...fcccbcbcbbb1c1c1cf..........
        cbbddccfccccbcbcbbb1333c............
        .ccbddbcccccbbbbbbb1c333c...........
        ..ccbbcccccccbbbbb11c133c...........
        ..fccbffccccccbbbb111c31cc..........
        ..fccf.cbbcccccbbbc111111c..........
        .fcbbf..cdddddfbbbc1111cc...........
        .fbbf....cdddfbbdbffccc.............
        fbbf......ccfbbdbf..................
        fff.........fffff...................
        `, mySprite, 40, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    My_enemy_3.destroy(effects.spray, 500)
})
sprites.onDestroyed(SpriteKind.Enemy2, function (sprite) {
    game.showLongText("Level 3", DialogLayout.Bottom)
    My_enemy_3 = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy3)
    My_enemy_3.setPosition(145, 65)
    My_enemy_3.follow(mySprite, 60)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    Enemy_2.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.showLongText("You Win!", DialogLayout.Bottom)
    game.over(true)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    game.showLongText("Level 2", DialogLayout.Bottom)
    Enemy_2 = sprites.create(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fd1dfbddbbff......
        ......fbddfcdbbcf.......
        .....ffffccddbfff.......
        ....fcb1bbbfcffff.......
        ....f1b1dcffffffff......
        ....fdfdf..ffffffffff...
        .....f.f.....ffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy2)
    Enemy_2.setPosition(142, 13)
    Enemy_2.follow(mySprite, 50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Bad_guys.destroy(effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
let Enemy_2: Sprite = null
let My_enemy_3: Sprite = null
let projectile: Sprite = null
let Food_2: Sprite = null
let Bad_guys: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level2`)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
Bad_guys = sprites.create(img`
    ...............ff.......
    .............ff2ffff....
    ............ff2feeeeff..
    ...........ff22feeeeeff.
    ...........feeeeffeeeef.
    ..........fe2222eefffff.
    ..........f2effff222efff
    ..........fffeeeffffffff
    ..........fee44fbe44efef
    ...........feddfb4d4eef.
    ..........c.eeddd4eeef..
    ....ccccccceddee2222f...
    .....dddddcedd44e444f...
    ......ccccc.eeeefffff...
    ..........c...ffffffff..
    ...............ff..fff..
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
Bad_guys.follow(mySprite, 40)
Bad_guys.setPosition(146, 75)
game.showLongText("Level 1", DialogLayout.Top)
