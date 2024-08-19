import sys
from collections import deque

n = int(sys.stdin.readline().strip())

def bfs(n):
	if (n == 1):
		return 0
	
	# 현재 숫자, 사용한 횟수를 기록
	queue = deque([(n, 0)])
	# 이미 지나간 숫자 기록
	visited = set()
	visited.add(n)
	
	while (deque):
		current, steps = queue.popleft()

		print(f"queue = {queue}")
		print(f"current = {current}, steps = {steps}")
		
		# 조건에 맞게 계산
		if (current % 2 == 0):
			next_num = current // 2
			# 계산한 결과가 1이면 리턴
			if (next_num == 1):
				return steps + 1
			# 결과가 지나가지 않은 숫자면 visited 추가
			if (next_num not in visited):
				visited.add(next_num)
				queue.append((next_num, steps + 1))
		
		# 3으로 나눌 경우
		if (current % 3 == 0):
			next_num = (current //  3) * 2
			# 계산한 결과가 1이면 리턴
			if (next_num == 1):
				return steps + 1
			# 결과가 지나가지 않은 숫자면 visited 추가
			if (next_num not in visited):
				visited.add(next_num)
				queue.append((next_num, steps + 1))
	
		# 5로 나눌 경우
		if (current % 5 == 0):
				next_num = (current // 5) * 4
				# 계산한 결과가 1이면 리턴
				if (next_num == 1):
					return steps + 1
				# 결과가 지나가지 않은 숫자면 visited 추가
				if (next_num not in visited):
					visited.add(next_num)
					queue.append((next_num, steps + 1))
    
	return -1

print(bfs(n))