# 입력이 적어서 하나씩 세도 됨
# 맵이 0이고 field가 t이면 += 1

import sys

# field = [map(str, sys.stdin.readline().split()) for _ in range(8)]
# field = [item.split() for item in field]

field = []

for _ in range(8):
	row = list(sys.stdin.readline().strip())
	field.append(row)


map = [
	'0 1 0 1 0 1 0 1',
	'1 0 1 0 1 0 1 0',
	'0 1 0 1 0 1 0 1',
	'1 0 1 0 1 0 1 0',
	'0 1 0 1 0 1 0 1',
	'1 0 1 0 1 0 1 0',
	'0 1 0 1 0 1 0 1',
	'1 0 1 0 1 0 1 0'
]
map = [item.split(' ') for item in map]
ans = 0

for i in range(8):
	for j in range(8):
		if (field[i][j] == 'F' and map[i][j] == '0'):
			ans += 1

print(ans)