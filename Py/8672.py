import sys

n, m = map(int, sys.stdin.readline().split(' '))

# 뺀 물건인지 확인하는 배열
isSelected = [0] * n

# 가방 확인하는 배열
isBag = [0] * n
sum = 0

# 물건과 가방 배열 분리
items = []
for i in range(n):
	item = list(map(int, sys.stdin.readline().split(' ')))
	items.append(item)

bags = []
for j in range(m):
	bag = int(sys.stdin.readline())
	bags.append(bag)

# 물건을 가격 기준 내림차순, 가방은 오름차순 정렬
# 고른 물건은 없애야 하는데.... 배열에서 빼? 
# 물건을 뺐는 지 확인하는 배열을 만들어서 true면 선택하는 걸로 하면 배열에서 뺄 필요 없음
# 가방도 배열을 만들어서 확인해야하네....

# 물건들을 무게 중심으로 정렬
items.sort(key=lambda x: x[1], reverse=True)

# 가방배열 정렬
bags.sort()

print(f"물건 = {items}, 가방 = {bags}")

for i in range(n):
	for j in range(m):
		# 가방 무게보다 가벼운 물건 중 가장 무거운 물건 찾기
		# 만약 가방 무게보다 가볍고 선택된 물건이 아니면 합침
		# 둘 중 하나라도 아니면 다음 가방과 비교
		bag = bags[j]
		item = items[i][0]

		if (isSelected[i] == True or isBag[j] == True):
			break

		if (bag >= item):
			print(f"{item} 선택")
			sum += items[i][1]
			isSelected[i] = True
			isBag[j] = True
			break

print(sum)