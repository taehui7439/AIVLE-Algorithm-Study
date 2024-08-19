import sys

n = int( sys.stdin.readline())

# 5로 나누기, 3으로 나누기, 2로 나누기, 1 빼기
# 5에 나머지가 없으면 나눔, 나머지가 1이면 1을 뺌
# 3에 나머지가 없으면 나눔, 나머지가 1이면 1을 뺌
# 2도 동일
# 모두 안되면 1뺌

def make_1(n):
	cnt = 0
	d = [0] * (n + 1)

	for i in range(2, n + 1):
		d[i] = d[i - 1] + 1
		if (i % 5 == 0):
			d[i] = min(d[i], d[i // 5] + 1)
		if (i % 3 == 0):
			d[i] = min(d[i], d[i // 3] + 1)
		if (i % 2 == 0):
			d[i] = min(d[i], d[i // 2] + 1)

		print(f"{i} = {d[i]}")

	print(d[n])

make_1(n)

	# while (n != 1):
	# 	if (n % 5 == 0):
	# 		n /= 5
	# 		cnt += 1
	# 		continue
	# 	elif(n % 5 == 1):
	# 		n -= 1
	# 		cnt += 1
	# 		continue
	# 	elif (n % 3 == 0):
	# 		n /= 3
	# 		cnt += 1
	# 		continue
	# 	elif (n % 3 == 1):
	# 		n -= 1
	# 		cnt += 1
	# 		continue
	# 	elif (n % 2 == 0):
	# 		n /= 2
	# 		cnt += 1
	# 		continue
	# 	elif (n % 2 == 1):
	# 		n -= 1
	# 		cnt += 1
	# 		continue

	# return cnt


