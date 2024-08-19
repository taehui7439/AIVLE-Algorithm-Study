import sys

# 가위 1, 바위 2, 보자기 3
# 각각 들어갈 n, m 입력 => n, m이 다를 수 있음
# 첫 번째 비교 => 선공 후공 정하기
# 이기면 선공, 비기면 다시
# 두 번째 비교 => 선공이 이기면 유지, 후공이 이기면 공수교대, 비기면 선공 승리
# 길이 내에 해결 못하면 영원히 못함

n, m = map(int, sys.stdin.readline().strip().split())
first_bot = list(map(int, sys.stdin.readline().strip().split()))
sec_bot = list(map(int, sys.stdin.readline().strip().split()))

# n, m이 다른 경우 더 작은 횟수로 반복
min_num = min(n, m)

# 가위바위보 판정 함수
# return 0 = 비김, 1 = first 이김, 2 = sec 이김
def find_winner(first_num, sec_num):
	if first_num == sec_num:
		return 0
	elif (first_num == 1 and sec_num == 3) or (first_num == 2 and sec_num == 1) or (first_num == 3 and sec_num == 2):
		return 1
	else:
		return 2

def solution(first_bot, sec_bot, min_num):
	# 선공을 확인하기 위한 변수 => 1이면 선공이 정해짐
	attack = 0
	# 선공인 쪽 확인 => 0이면 첫 번째, 1이면 두 번째
	attack_side = 0

	for i in range(min_num):
		first = first_bot[i]
		sec = sec_bot[i]
		winner = find_winner(first, sec)

		# 비겼을 때, 선공이 정해져있다면 선공 승리
		if (winner == 0 and attack != 0):
			if (attack_side == 0):
				return 1
			if (attack_side == 1):
				return 2

		if (winner == 1):
			# 선공이 안정해진 상태면
			if (attack == 0):
				attack_side = 0
				attack = 1
			# 선공이 두 번째 봇인데, 첫 번째 봇이 이기면 공수교대
			elif (attack_side == 1):
				attack_side = 0
		elif (winner == 2):
			# 선공이 안정해진 상태면
			if (attack == 0):
				attack_side = 1
				attack = 1
			# 선공이 두 번째 봇인데, 첫 번째 봇이 이기면 공수교대
			elif (attack_side == 0):
				attack_side = 1

	# 끝나도 선공이 안정해지면
	return 0


print(solution(first_bot, sec_bot, min_num))