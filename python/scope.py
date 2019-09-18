n = 10

def functionScope():
    for i in range(n):
        inside = i
        print(inside)
    print(inside)

def globalScope():
    global inside
    for i in range(n):
        inside = i
        print(inside)
    print(inside)

