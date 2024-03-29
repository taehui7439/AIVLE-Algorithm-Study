# 0이 2개가 없으면 -1 출력
# 00을 맨 뒤에 기본으로 깔고,
# 남은 숫자 중 큰 숫자부터 앞에 배치 => 3의 배수가 맞는지 확인
# 배치를 바꾸면서 숫자 확인 => 가장 큰 수 => 1, 2 / 1, 3 /

import sys

n = int(sys.stdin.readline())
list_str = list(map(int, sys.stdin.readline().strip().split(" ")))
list_str.sort(reverse = True)

if (sum(list_str) % 3 == 0 and list_str[-1] == 0 and list_str[-2] == 0):
	if (list_str.count(0) == n):
		print("0")
	else:
		print("".join(map(str, list_str)))
else: print(-1)