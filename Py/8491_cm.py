import sys

n_num = list(map(str, sys.stdin.readline().strip().split(' ')))
num_list = list(map(str, sys.stdin.readline().strip().split(' ')))

n, num = n_num

for i in range(int(n)):
	if (num_list[i] == num):
		print(i + 1)
		sys.exit()

print(-1)