import sys

num_to_four = list(map(int, sys.stdin.readline().strip()))
num_six = list(map(int, sys.stdin.readline().strip()))
part_num = int(sys.stdin.readline())

# 우리가 구해야하는 나머지 값
mod_num = 10 - part_num

# 1101 bb 146875 4 
# (2b + a) % 10 = 6
# 2b + a는 16, 26, 36....
# 그러면 숫자 홀수 짝수 계산
# 1 0 b 1 6 7 => 15
# 1 1 b 4 8 5 => 19

# 2(19 + b) + 15 + b = 16, 26, 36....
# 38 + 15 + 2b = 53 + 2b = 66, 76...이 가능
# 66일 경우 b = 6.5
# 76일 경우 b = 11.5
# 86일 경우 b = 16.5

# 아니면 범위 안에 숫자를 넣어서 다 계산해보고 나머지가 6이 나오는지


def solution(start, end):
	flag = 0
	ans = ""

	# 각자 확인
	for i in range(start, end):
		num_mid = list(map(int, str(i)))
		total_list = num_to_four + num_mid + num_six + [part_num]
		# 홀수 합
		odd_sum = 0
		for j in range(0, 12, 2):
			odd_sum += total_list[j]
		# 짝수 합
		even_sum = 0
		for k in range(1, 12, 2):
			even_sum += total_list[k]
		
		# 나머지 계산
		cal_mod = ((even_sum * 2) + odd_sum) % 10
  
		print(f"{i}의 나머지 {cal_mod}")
		
		# 만약 가능하면 1표시
		if (cal_mod == mod_num):
			flag = 1
		elif (part_num == 0 and cal_mod == 0):
			flag = 1
	
	if (flag == 1):
		ans += "O"
	else:
		ans += "X"
	
	return ans

ans1 = solution(11, 16)
ans2 = solution(21, 23)
ans3 = solution(31, 52)
ans4 = solution(81, 87)
ans5 = solution(71, 72)


print(ans1 + ans2 + ans3 + ans4 + ans5)