import sys

n = int(sys.stdin.readline().strip())
str_list = [(str(sys.stdin.readline().strip())) for _ in range(n)]

# 리스트 안에 단어의 길이를 추가해 그 길이로 정렬함
# 추가할 필요가 없으면???

# str_list = [[s[0], len(s[0])] for s in str_list]

str_list = sorted(set(str_list), key = lambda x: (len(x), x), reverse=False)

for i in str_list:
	print(i)

# 먼저 길이로 배열을 정렬
# 만약 길이가 같으면 sort 함수 사용
# i, i+1을 정렬할때, 만약 그 다음 단어와도 해야하면?