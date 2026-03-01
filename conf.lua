


function love.conf(t)
    t.console = true
    t.window.width = 1280
    t.window.height = 960
    t.window.icon = nil --placeholder
	t.window.title = "The Viking World"
end

-- utility functions

function sign(x)
	if x ~= 0 then
		return x / math.abs(x)
	else
		return 0
	end
end

function bool_to_num(value)
	return value and 1 or 0
end
