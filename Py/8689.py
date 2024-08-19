import sys

"""
가장 작은 수 찾음
이 숫자가 다른 숫자들과의 나머지가 0이 되어야함

"""

n = int(sys.stdin.readline().strip())
num_list = list(map(int, sys.stdin.readline().strip().split(' ')))

def solution(n, num_list):
	ans = 0
	not_zero = 0

	for i in range(1, max(num_list) + 1):
		not_zero = 0

		for j in range(n):
			if (num_list[j] % i != 0):
				not_zero = 1
		
		if (not_zero == 0):
			ans = i

	print(ans)


solution(n, num_list)