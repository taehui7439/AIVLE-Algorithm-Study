import sys

n_name = list(map(str, sys.stdin.readline().strip().split(' ')))
name_list = list(map(str, sys.stdin.readline().strip().split(' ')))

n, name = n_name

for i in range(len(name_list)):
	if (name_list[i] == name):
		print(i + 1)
