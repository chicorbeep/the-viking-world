function love.conf(t)
	t.console = true
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
