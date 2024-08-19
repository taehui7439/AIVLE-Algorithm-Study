import sys

"""
2x2 영역이 x로 되어 있는지
x가 4개 중 3개 or 4개면 충족

4x4니 2x2씩 9번 반복
"""

field = [list(sys.stdin.readline().strip()) for _ in range(4)]

# print(field)

def solution(field):
		# x축 0 ~ 2, y축 0 ~ 2까지 반복하면서 찾음
		for i in range(3):
				for j in range(3):
						total_x = 0
						# 2x2 영역 내의 X 개수 세기
						if field[i][j] == "X":
								total_x += 1
						if field[i+1][j] == "X":
								total_x += 1
						if field[i][j+1] == "X":
								total_x += 1
						if field[i+1][j+1] == "X":
								total_x += 1
						
						# X의 개수가 2개 이상이면 마법의 붓을 한 번 사용하여 X로만 이루어진 영역을 만들 수 있음
						if total_x >= 3:
								return "yes"
		
		return "no"

if solution(field) == "yes":
		print("yes")
else:
		print("no")