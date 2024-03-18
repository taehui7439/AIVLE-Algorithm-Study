import sys

n = int(sys.stdin.readline().strip())

# n * 2인 복도를 채우는 방법

# n이 1 이상이면 + 1이므로 기본으로 1
# 만약 2로 나눠지면 + 1
# 3이면 3개
# 4면 5개
# 5면 8개
# n = (n-1) + (n-2)

arr = [0] * (n + 1)
arr[1] = 1
arr[2] = 2

if (n <= 2):
	print(arr[n])
	sys.exit()

for i in range(3, n + 1):
	arr[i] = arr[i - 1] + arr[i - 2]

print(arr[n] % 796796)