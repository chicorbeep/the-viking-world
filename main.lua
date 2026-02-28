
mainFont = love.graphics.newFont("assets/CozetteVector.ttf", 13)
dtotal = 0

PLAYER = {
    x = 0,
    y = 0,
	speed = 6,
}

ENEMY = {
	x = 200,
	y = 200,
	speed = 2,
}



background = love.grap

function love.load()
	playerSprite = love.graphics.newImage("assets/placeholders/player.png")
	enemySprite = love.graphics.newImage("assets/placeholders/enemy.png")
end

function love.draw()
	love.graphics.print(dtotal, 0, 0)
	love.graphics.draw(playerSprite, PLAYER.x, PLAYER.y)
	love.graphics.draw(enemySprite, ENEMY.x, ENEMY.y)
end

function love.update(dt)
	dtotal = dtotal + dt

	-- movement !!!
	if love.keyboard.isDown("down") then
		PLAYER.y = PLAYER.y + PLAYER.speed
	end

    if love.keyboard.isDown("up") then
        PLAYER.y = PLAYER.y - PLAYER.speed
    end

	if love.keyboard.isDown("left") then
		PLAYER.x = PLAYER.x - PLAYER.speed
	end

	if love.keyboard.isDown("right") then
		PLAYER.x = PLAYER.x + PLAYER.speed
	end


end

function sign(x)
	if x ~= 0 then
		return x / math.abs(x)
	else
		return 0
	end
end


function EnemyUpdate()
	enemyCollision =

	ENEMY.x = ENEMY.x + (ENEMY.speed)*sign(PLAYER.x-ENEMY.x)
	ENEMY.y = ENEMY.y + (ENEMY.speed)*sign(PLAYER.y-ENEMY.y)

	if (ENEMY.x == PLAYER.x and ENEMY.y == PLAYER.y) then

	end
end
