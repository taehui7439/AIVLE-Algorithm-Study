import sys

n, m = map(int, sys.stdin.readline().split(' '))

# 노드 1개에 간선이 2개와 같이 주어지면?

if (n == 1):
  print(1)
  sys.exit()
  
input_str = [list(map(int, sys.stdin.readline().split(' '))) for _ in range(m)]
arr = input_str
visited = []

# 그래프 만들기
graph = {i: [] for i in range(1, n + 1)}

for a, b in arr:
		graph[a].append(b)
		graph[b].append(a)

for node in graph:
    graph[node].sort()

# dfs 함수
def dfs(graph, start, visited = []):
		# 1부터 시작해서 탐색
		visited.append(start)
  
		for node in graph[start]:
			if node not in visited:
				dfs(graph, node, visited)

		return visited

ans = dfs(graph, 1, visited)
print(' '.join(map(str, ans)))

# 예시 만들기

# 5 6
# 1 5
# 1 3
# 1 2
# 2 3
# 3 4
# 4 5


# ===========================================
# 원래 코드

import sys

n, m = map(int, sys.stdin.readline().split(' '))

input_str = [list(map(int, sys.stdin.readline().split(' '))) for _ in range(m)]

# 정점, 간선 갯수와 노드 확인
arr = input_str

# 그래프 만들기
graph = dict()
    
for i in range(m):
    graph[arr[i][0]] = arr[i][1]
    graph[arr[i][1]] = arr[i][0]

def dfs(graph, start, visited = []):
    # 1부터 시작해서 탐색
    visited.append(start)
    
    if (start not in graph.keys()):
        return visited
    
    node = graph[start]
    
    if (node not in visited):
        dfs(graph, node, visited)

    return visited

ans = dfs(graph, 1)

print(' '.join(map(str, ans)))
