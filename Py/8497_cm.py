import sys

input_int = list(map(int, sys.stdin.readline().split(' ')))

loc = input_int[0]
target = input_int[1]

# +3 or -1

# 37 남음
# 12 * 3 + 1
# 13번 + 2번

# 민수의 위치가 3보다 작으면 내가 만든 패턴에 문제가 생김

# cnt = ((target - loc) // 3) + 1 

# print(cnt + ((cnt * 3 + loc) - target))

dist = target - loc
cnt = dist // 3
remaining = dist % 3

if (remaining == 0):
	print(cnt)
	sys.exit()

if (remaining == 1):
	cnt += 3
else: cnt += 2

print(cnt)
