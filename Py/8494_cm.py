import sys

# n, m 입력 및 노드 입력
n, m = map(int, sys.stdin.readline().strip().split(' '))
node_location = [list(map(int, sys.stdin.readline().strip().split(' '))) for i in range(m)]

# 2차원 배열 초기화
arr = [[0] * n for _ in range(n)]

# (노드의 위치값-1)을 위치로 배열에 1로 맵핑, x & y 좌표를 반대로 해서 반대로 맵핑
for i in range(m):
	x_loc = node_location[i][0] - 1
	y_loc = node_location[i][1] - 1

	arr[x_loc][y_loc] = 1
	arr[y_loc][x_loc] = 1

for i in arr:
		for j in i:
			print(j, end = ' ')
		print()