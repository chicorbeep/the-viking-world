--[[
	aaaaa!! mi sona ala e toki ilo Luja.
	mi wile ala sin kepeken e toki ni!
	toki ni li ike MUTE tawa mi.
]]
mainFont = love.graphics.newFont("assets/CozetteVector.ttf", 26)
dtotal = 0


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
end
resetEverything()

BOARD_SCALE = 2
BATTLE_MESSAGE = ""

function love.load()
	love.graphics.setFont(mainFont)
	playerSprite = love.graphics.newImage("assets/asset-pack/Ships/ship (1).png")
	enemySprite = love.graphics.newImage("assets/asset-pack/Ships/Pirate.png")
	mapSprite = love.graphics.newImage("assets/map.png")
end

function love.draw()
    if GAME_STATE == "overworld" then
    	love.graphics.draw(mapSprite, -80, 0)
		love.graphics.setBackgroundColor(0.1, 0.2, 0.7)
		love.graphics.print(PLAYER.x.." "..PLAYER.y..";"..ENEMY.x.." "..ENEMY.y, 0, 0)
		love.graphics.draw(playerSprite, (PLAYER.x + 33)  * BOARD_SCALE, (PLAYER.y + 56) * BOARD_SCALE, PLAYER.rotation)
		love.graphics.draw(enemySprite, (ENEMY.x + 33) * BOARD_SCALE, (ENEMY.y + 56) * BOARD_SCALE, ENEMY.rotation)
	elseif GAME_STATE == "battle" then
	 	love.graphics.draw(playerSprite, 320 - 33, 480 - 59)
		love.graphics.draw(enemySprite, 960 - 33, 480 - 59)
        love.graphics.print("BATTLE TIME!", 320, 240) -- unintentional off reference (this one has never actually played off)
		love.graphics.print(BATTLE_MESSAGE , 320, 720)
		love.graphics.print(PLAYER.hp.."/100", 0, 0)
	elseif GAME_STATE == "win" then
		love.graphics.setBackgroundColor(0, 0, 0)
        love.graphics.print("You win!", 640, 480)
    elseif GAME_STATE == "lose" then
    	love.graphics.setBackgroundColor(0,0,0)
     	love.graphics.print("Oops. You lose. Try again!")
      	love.timer.sleep(3)
       	resetEverything()
    end
end

function love.update(dt)
	dtotal = dtotal + dt

	if GAME_STATE == "overworld" then
		PlayerUpdate()
		EnemyUpdate()
	elseif GAME_STATE == "battle" then

		love.timer.sleep(3)
		ENEMY.x = 400
		ENEMY.y = 300
		GAME_STATE = "overworld"
	end
end

function EnemyUpdate()
	local positionXSign = sign(PLAYER.x - ENEMY.x)
	local positionYSign = sign(PLAYER.y - ENEMY.y)
	ENEMY.x = ENEMY.x + (ENEMY.speed) * positionXSign
    ENEMY.y = ENEMY.y + (ENEMY.speed) * positionYSign

    if positionYSign == 1 or positionYSign == 0 then
        ENEMY.rotation = 0
    elseif positionYSign == -1 then
        ENEMY.rotation = math.pi
    end

    if positionXSign == 1 then
   		ENEMY.rotation = ENEMY.rotation - math.pi/2 * positionYSign
    elseif positionXSign == -1 then
   		ENEMY.rotation = ENEMY.rotation + math.pi/2 * positionYSign
    elseif positionXSign == 0 then
   		ENEMY.rotation = ENEMY.rotation
    end

	if (ENEMY.x == PLAYER.x and ENEMY.y == PLAYER.y) then
		TriggerFight()
	end
end

function TriggerFight()
	GAME_STATE = "battle"
	local hpLoss = math.random(45, 55)
	BATTLE_MESSAGE = "You ran into the enemy ship! Lost "..hpLoss.. "HP!"
	PLAYER.hp = PLAYER.hp - hpLoss
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
    	GAME_STATE = "loss"
    end


end
