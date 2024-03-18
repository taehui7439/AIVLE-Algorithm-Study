import sys

n = int(sys.stdin.readline())
input_list = [list(map(str, sys.stdin.readline().rstrip().split(' '))) for _ in range(n)]

iq_indices = sorted(range(n), key = lambda x: int(input_list[x][1]), reverse=True)

for idx in iq_indices:
	print(input_list[idx][0])