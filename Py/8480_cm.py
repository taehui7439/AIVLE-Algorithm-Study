import sys

input = int(sys.stdin.readline())

cnt = 0
coin_list = [10, 50, 100, 500, 1000, 5000, 10000, 50000]
coin_list.sort(reverse = True)

for i in coin_list:
    cnt += (input // i)

    input -= (input // i) * i


print(cnt)












# ----------------------------------------------

# # 입력받은 숫자를 분리해서 순서를 뒤집음
# input = str(input).split('').reverse()

# # 리스트 길이가 5를 넘으면, 십만 단위이므로 만과 함께 계산 해야함
# # 인덱스 4 뒤의 숫자를 하나의 숫자로 합침
# if (len(input) > 5):
#     tmp = list(input[4:]).reverse()
#     print(tmp)
    
#     input[4] = ''.join(tmp)

# # 숫자 돌면서 확인하며 갯수 추가
# for i in range(5):

#     if (+input[i] == 0): continue

#     mod = +input[i] % 5
#     q = +input[i] / 5

#     if (mod == 0):
#         cnt += q
#     elif (+input[i] > 5):
#         cnt += 1 + mod
#     else:
#         cnt += (+input[i])
	
# print(cnt)