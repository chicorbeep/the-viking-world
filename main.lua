--[[
	aaaaa!! mi sona ala e toki ilo Luja.
	mi wile ala sin kepeken e toki ni!
	toki ni li ike MUTE tawa mi.
]]
MAIN_FONT = love.graphics.newFont("assets/CozetteVector.ttf", 26)
function resetEverything()
	PLAYER = {
	    x = 320,
	    y = 240,
		speed = 3,
		hp = 100,
		rotation = 0
	}

	ENEMY = {
		x = 480,
		y = 0,
		speed = 1,
		rotation = 0
	}

    GAME_STATE = "overworld"
    DTOTAL = 0

end
resetEverything()

BOARD_SCALE = 2
BATTLE_MESSAGE = ""

function love.load()
	love.graphics.setFont(MAIN_FONT)
	playerSprite = love.graphics.newImage("assets/asset-pack/Ships/ship (1).png")
	enemySprite = love.graphics.newImage("assets/asset-pack/Ships/Pirate.png")
	mapSprite = love.graphics.newImage("assets/map.png")
end

function love.draw()
    if GAME_STATE == "overworld" then
        love.graphics.draw(mapSprite, -80, 26)
        love.graphics.setBackgroundColor(0.1, 0.2, 0.7)
        love.graphics.print("⏰ "..math.floor(DTOTAL*10)/10, 240, 0)
        love.graphics.draw(playerSprite, (PLAYER.x + 33) * BOARD_SCALE, (PLAYER.y + 56) * BOARD_SCALE, PLAYER.rotation)
        love.graphics.draw(enemySprite, (ENEMY.x + 33) * BOARD_SCALE, (ENEMY.y + 56) * BOARD_SCALE, ENEMY.rotation)

    love.graphics.print("♥ "..PLAYER.hp.."/100", 0, 0)
    elseif GAME_STATE == "battle" then
        love.graphics.draw(playerSprite, 320 - 33, 480 - 59)
        love.graphics.draw(enemySprite, 960 - 33, 480 - 59)
        love.graphics.print("BATTLE TIME!", 320, 240) -- unintentional off reference (this one has never actually played off)
        love.graphics.print(BATTLE_MESSAGE, 320, 720)
        love.graphics.print("♥ "..PLAYER.hp .. "/100", 0, 0)
    elseif GAME_STATE == "end" then
        love.graphics.setBackgroundColor(0, 0, 0)
        love.graphics.print("You survived for "..(math.floor(DTOTAL*10)/10).." seconds!", 640, 480)
    end

end

function love.update(dt)
	DTOTAL = DTOTAL + dt

	if GAME_STATE == "overworld" then
		PlayerUpdate()
		EnemyUpdate()
	elseif GAME_STATE == "battle" then
		love.timer.sleep(3)
		ENEMY.x = math.random(0, 640)
		ENEMY.y = math.random(0, 480)
		GAME_STATE = "overworld"
	elseif GAME_STATE == "end" then
        love.timer.sleep(3)
        resetEverything()
	end
end

function EnemyUpdate()
	local positionXSign = sign(PLAYER.x - ENEMY.x)
	local positionYSign = sign(PLAYER.y - ENEMY.y)
	ENEMY.x = ENEMY.x + (ENEMY.speed) * positionXSign
    ENEMY.y = ENEMY.y + (ENEMY.speed) * positionYSign

    if positionYSign == 1 or positionYSign == 0 then
        ENEMY.rotation = math.pi* 2

    elseif positionYSign == -1 then
        ENEMY.rotation = math.pi*2
    end

	playerAngle = math.atan2(PLAYER.y-ENEMY.y, PLAYER.x-ENEMY.x)

	love.graphics.draw(enemySprite, ENEMY.x, ENEMY.y, 1, 1, 0,0)


    if PLAYER.x > ENEMY.x then
   		ENEMY.rotation = ENEMY.rotation - math.pi/2 * positionYSign+math.pi
    elseif PLAYER.x < ENEMY.x then
   		ENEMY.rotation = ENEMY.rotation + math.pi/2 * positionYSign-math.pi/4
    elseif positionXSign == 0 then
   		ENEMY.rotation = ENEMY.rotation
    end

	if (ENEMY.x == PLAYER.x and ENEMY.y == PLAYER.y) then
		TriggerFight()
	end
end

function TriggerFight()
	GAME_STATE = "battle"
	local hpLoss = math.random(10, 40)
	BATTLE_MESSAGE = "You ran into the enemy ship! Lost "..hpLoss.. "HP!"
	PLAYER.hp = PLAYER.hp - hpLoss
end



function GameOver()
	if PLAYER.hp < 1 then -----------Game is over
		love.graphics.setBackgroundColor(0, 0, 0)

	end
end



function PlayerUpdate()
	local downHeld = love.keyboard.isDown("down")
	local upHeld = love.keyboard.isDown("up")
	local leftHeld = love.keyboard.isDown("left")
	local rightHeld = love.keyboard.isDown("right")

    -- Vector Math to prevent increasing speed onm diagnol movement
    local modifier
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
			PLAYER.rotation = 0
		elseif upHeld and not downHeld then
	        PLAYER.y = math.floor(PLAYER.y - PLAYER.speed * modifier)
			-- love.graphics.rotate(playerSprite)
			PLAYER.rotation = -math.pi
	    end

	    if leftHeld and not rightHeld then
	        PLAYER.x = math.floor(PLAYER.x - PLAYER.speed * modifier)
	        PLAYER.rotation = math.pi / 2
	    elseif rightHeld and not leftHeld then
	        PLAYER.x = math.floor(PLAYER.x + PLAYER.speed * modifier)
	        PLAYER.rotation = -math.pi / 2
	    end

    if PLAYER.hp < 1 then
        GAME_STATE = "end"
        GameOver()
    end


end
