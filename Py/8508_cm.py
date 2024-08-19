# 서류, 면접 둘 다 높으면 높은 등수
# 한 점수 동일, 다른 점수 높으면 높은 등수
# 둘 다 하나씩 높은 점수면 같은 등수

# 둘 다 높은 경우
# 하나 같고 하나 높은 경우

# 둘 다 같은 경우
# 하나 높고 하나 낮은 경우

# 배열을 추가해서 비긴 등수를 가진 사람을 표시 => 그게 3명이 된 경우 3명의 등수를 동일하게 만듬
# 1 2 1 4 4가 뜨네,,, same이 같으면 같게 처리하도록 만들어야함


# import sys

# n = int(sys.stdin.readline().strip())
# scores = []
# rank = [1] * n

# for _ in range(n):
# 	scores.append(list(map(int, sys.stdin.readline().split(" "))))

# 입력
n = 2
scores = [[62, 53], [36, 53]]
rank = [1] * n

for i in range(n):
	for j in range(n):
		if (i != j):
			if (scores[i][0] < scores[j][0] and scores[i][1] < scores[j][1]):
				rank[i] += 1
			elif ((scores[i][0] == scores[j][0] and scores[i][1] < scores[j][1]) or 
		scores[i][0] < scores[j][0] and scores[i][1] == scores[j][1]):
				rank[i] += 1

# 다른 지원자보다 등수가 낮은데, 점수는 높은 경우,
# same에 저장, 높은 rank를 저장
for i in range(n):
	tmp = rank[i]
	same = 0
	
	for j in range(n):
		if (i != j and tmp > rank[j]):
			if (scores[i][0] > scores[j][0] or scores[i][1] > scores[j][1]):
				same = 1
				tmp = rank[j]

# 우열을 가릴 수 없는 경우,
# 
	if (same == 1):
		for j in range(n):
			if (i != j and tmp < rank[j] and rank[j] <= rank[i]):
				rank[j] = tmp
		rank[i] = tmp

print(" ".join(map(str, rank)))

# ------------------------------------

n = 5
scores = [[68, 73], [56, 64], [71, 56], [15, 23], [18, 22]]
rank = [1] * n 

for i in range(n - 1):
	print(rank)
	for j in range(i + 1, n):
		if ((scores[i][0] > scores[j][0] and scores[i][1] >= scores[j][1]) or 
			(scores[i][0] >= scores[j][0] and scores[i][1] > scores[j][1])): rank[j] += 1

		elif ((scores[i][0] < scores[j][0] and scores[i][1] > scores[j][1]) or 
			(scores[i][0] > scores[j][0] and scores[i][1] < scores[j][1])
			(scores[i][0] == scores[j][0] and scores[i][1] == scores[j][1])):
			if rank[i] > rank[j]:
				rank[i] = rank[j]
			elif rank[i] < rank[j]:
				rank[j] = rank[i] 
			else: continue
