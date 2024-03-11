import sys

std = int(sys.stdin.readline())

if (std == 0):
	print("0 0")
	sys.exit(0)

# def octal(num):

# 	n = num
# 	quot= 0
# 	remain = []

# 	while(n >= 8):
# 		quot = n // 8
# 		remain.append(str(n % 8))
# 		n = quot
	
# 	remain.append(str(n))

# 	remain.reverse()

# 	print(''.join(remain))

# 	return ''.join(remain)


# def hexa(num):

# 	n = num
# 	quot = 0
# 	remain = []
# 	exchange = ['A', 'B', 'C', 'D', 'E', 'F']
# 	tmp = 0

# 	while(n >= 16):
# 		quot = n // 16
		
# 		if ((n % 16) >= 10):
# 			remain.append(exchange[(n % 16) - 10])
# 		else: remain.append(str((n % 16)))
		
# 		n = quot
	
# 	remain.append(str(n))

# 	remain.reverse()

# 	print(''.join(remain))
# 	return ''.join(remain)



# print(f'{octal(std)} {hexa(std)}')


o = format(std, 'o')
x = format(std, 'x')

print(f'{o} {x.upper()}')