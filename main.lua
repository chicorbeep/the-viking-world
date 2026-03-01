--[[
	aaaaa!! mi sona ala e toki ilo Luja.
	mi wile ala sin kepeken e toki ni!
	toki ni li ike MUTE tawa mi.
]]
mainFont = love.graphics.newFont("assets/CozetteVector.ttf", 13)
dtotal = 0

PLAYER = {
    x = 0,
    y = 0,
	speed = 4,
	hp = 100
}

ENEMY = {
	x = 200,
	y = 200,
	speed = 1,
	hp = 20
}

gameState = "overworld"  -- overworld, battle, or title?



function love.load()
	playerSprite = love.graphics.newImage("assets/placeholders/player.png")
	enemySprite = love.graphics.newImage("assets/placeholders/enemy.png")
end

function love.draw()

	if gameState == "overworld" then
		love.graphics.print(PLAYER.x.." "..PLAYER.y..";"..ENEMY.x.." "..ENEMY.y, 0, 0)
		love.graphics.draw(playerSprite, PLAYER.x, PLAYER.y)
		love.graphics.draw(enemySprite, ENEMY.x, ENEMY.y)
	elseif gameState == "battle" then
	 	love.graphics.draw(playerSprite, 50, 50)
		love.graphics.draw(enemySprite, 150, 50)
		love.graphics.print("BATTLE TIME", 0, 0) -- unintentional off reference (this one has never actually played off)
	end


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
	local downHeld = love.keyboard.isDown("down")
	local upHeld = love.keyboard.isDown("up")
	local leftHeld = love.keyboard.isDown("left")
	local rightHeld = love.keyboard.isDown("right")

	local modifier
	-- movement !!!

	if bool_to_num(downHeld) +
		bool_to_num(upHeld) +
		bool_to_num(leftHeld) +
		bool_to_num(rightHeld) == 2
	then
		modifier = 1/math.sqrt(2)
	else
		modifier = 1
	end

	if downHeld and not upHeld then
		PLAYER.y = math.floor(PLAYER.y + PLAYER.speed * modifier)
	elseif upHeld and not downHeld then
        PLAYER.y = math.floor(PLAYER.y - PLAYER.speed * modifier)
    end

	if leftHeld and not rightHeld then
		PLAYER.x = math.floor(PLAYER.x - PLAYER.speed * modifier)
	elseif rightHeld and not leftHeld then
		PLAYER.x = math.floor(PLAYER.x + PLAYER.speed * modifier)
	end



end
