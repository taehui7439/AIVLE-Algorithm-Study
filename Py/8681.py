import sys
from string import ascii_lowercase

sentence = list(str(sys.stdin.readline().strip()).lower())

def is_Pangram(input_str):
	# 알파벳 표시할 배열 생성
	alpha = {}
	for i in ascii_lowercase:
		alpha[i] = 0

	for i in range(len(input_str)):
		alpha[input_str[i]] += 1

	for i in ascii_lowercase:
		if (alpha[i] == 0):
			return "NO"

	return "YES"

print(is_Pangram(sentence))