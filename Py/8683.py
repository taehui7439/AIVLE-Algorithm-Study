import sys

n, m = map(int, sys.stdin.readline().split(' '))

field = []

for i in range(n):
  line = sys.stdin.readline().strip()
  field.append(list(line))

print(field)

# 돌면서 최대 최소 x, y값을 지정해서 직사각형인지 확인
# 직사각형 아니면 직사각형으로 만들도록 


# 방문 확인 기록
visited = [[0 for j in range(m)] for i in range(n)]

direction = [(0, 1), (0, -1), (1, 0), (-1, 0)]

# 직사각형 땅에 알파벳이 같은지 확인
def is_valid_rectangle(x1, y1, x2, y2, char):
    for i in range(x1, x2 + 1):
        for j in range(y1, y2 + 1):
            if field[i][j] != char:
                return False
    return True


def dfs(x, y):
  # 방문 기록
  visited[x][y] = 1
  count = 1
  
  for dx, dy in direction:
    nx, ny = x + dx, y + dy
    
    if (0 <= nx < n and 0 <= ny < m and field[x][y] == field[nx][ny] and not visited[nx][ny]):
      count += dfs(nx, ny)
  
  return count

max_area = 0

for i in range(n):
  for j in range(m):
    if (not visited[i][j]):
      max_area = max(max_area, dfs(i, j))

print(max_area)