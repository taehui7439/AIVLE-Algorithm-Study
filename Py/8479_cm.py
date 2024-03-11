
input = [list(map(str, sys.stdin.readline().rstrip().split(' '))) for _ in range(2)]
cnt, height = input

std = 160

for h in height:
    if (std >= int(h)):
        print(f'I {h}')
        sys.exit()

print('P')