
mainFont = love.graphics.newFont("assets/CozetteVector.ttf", 13)
dtotal = 0

PLAYER = {
    x = 0,
    y = 0,
	speed = 6,
	hp = 100
}

ENEMY = {
	x = 200,
	y = 200,
	speed = 2,
	hp = 20
}

gameState = "overworld"  -- overworld, battle, or title?

function love.conf(t)
	t.console = true
end

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

	if gameState == "overworld" then
		PlayerUpdate()
		EnemyUpdate()
	elseif gameState == "battle" then
		print("This is where the battle would go... IF WE HAD ANY!!")
		ENEMY.x = 400
		ENEMY.y = 300
		love.timer.sleep(2)
		gameState = "overworld"
	else
		print("wha")
		love.timer.sleep(2)
		gameState = "overworld"
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
	ENEMY.x = ENEMY.x + (ENEMY.speed)*sign(PLAYER.x-ENEMY.x)
	ENEMY.y = ENEMY.y + (ENEMY.speed)*sign(PLAYER.y-ENEMY.y)

	if (ENEMY.x == PLAYER.x and ENEMY.y == PLAYER.y) then
		TriggerFight()
	end
end

function TriggerFight()
	-- placeholdler :3
	gameState = "battle"
end

function PlayerUpdate()
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
