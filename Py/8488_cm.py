import sys

input_int = int(sys.stdin.readline())
ans = 0

def is_prime(n):
    # true로 이루어진 배열을 만들고 0, 1번째는 false로 설정
    cnt = [True] * (n + 1)
    cnt[0] = False
    cnt[1] = False
    
	# 숫자 n까지 반복하면서 각 숫자가 true이면, 그 숫자의 배수를 전부 false로 만듬
    for i in range(2, n + 1):
        if (cnt[i] == True):
            j = 2
            
            while (i * j) <= n:
                cnt[i * j] = False
                j += 1
    
    return cnt

arr = is_prime(input_int)

# 리턴한 배열을 가지고 소수의 개수를 카운트
for i in range(len(arr)):
    if (arr[i] == True):
        ans += 1

print(ans)