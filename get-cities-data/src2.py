import math


def main():
    FIN  = open("deutschestaedte.txt",  "r")
    FOUT = open("output.txt", "w")

    InputData = FIN.read().split('\n')

    #print(InputData)
    
    print(0, file = FOUT)
    citydata = []
    for string in InputData:
        arr = string.split('\t')
        num = "".join(arr[2].split()[0].split('.'))

        filteredArr = [int(arr[0])+61, arr[1], int(num), 'Deutschland']

        citydata.append(filteredArr)

    #for string in citydata:
     #   arr2 = string.split()
    #print(citydata)
    for elem in citydata:
        print(elem)

        

    #print(len(citydata))
    FIN.close()
    FOUT.close()

    return 0

if __name__ == '__main__':
    main()