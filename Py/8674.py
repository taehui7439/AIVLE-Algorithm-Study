import sys

n, m = map(int, sys.stdin.readline().split(' '))
# input_str = [list(str, sys.stdin.readline()) for _ in range(n)]

field = []

for _ in range(n):
  line = sys.stdin.readline().strip()
  field.append(list(line))

print(field)

result = 0

# 방문 확인용 리스트
visited = [[0 for j in range(m)] for i in range(n)]

# 구멍을 구분하는 방법
# 왼, 오, 위, 아래 중 2군데가 1이면 갯수 + 1
# 그럼 구멍이 따로 인지 확인하는 방법
# dfs or bfs인데.. dfs를 이용해서 해보자

def dfs(x, y):
  if (x < 0 or x >= n or y < 0 or y >= m):
    print(f"{x, y}좌표 false: 인덱스 끝")
    return False
  if (visited[x][y] == 1):
    return False
  
  # 먼저 방문 처리
  visited[x][y] = 1
  
  # 만약 필드값이 0이면 순회하면서 찾기
  if field[x][y] == "0":
    dfs(x - 1, y)
    dfs(x + 1, y)
    dfs(x, y - 1)
    dfs(x, y + 1)
    print(f"{x, y}좌표 true")
    return True
  
  # 아니면 false 리턴
  return False

# 모든 노드 돌면서 확인
for i in range(n):
  for j in range(m):
    if (dfs(i, j) == True):
      result += 1

print(result)