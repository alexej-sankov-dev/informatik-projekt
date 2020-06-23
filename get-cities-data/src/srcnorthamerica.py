import math

def getNorthAmericaCities():
    FIN  = open("data/northamerica.txt",  "r")
    #FOUT = open("cities2.txt", "a")

    InputData = FIN.read().split('\n')

    citydata = []
    for string in InputData:
        arr = string.split('\t')
        num = "".join(arr[3].split()[0].split('.'))

        filteredArr = [int(arr[0].split('.')[0])+181, arr[1].strip(), int(num), arr[2].strip()]

        citydata.append(filteredArr)

    # for city in citydata:
    #     string =''
    #     for x in city:
    #         string+=str(x)+','
    #         #print(str(x)+',', file = FOUT)
    #     FOUT.write(string)

    #     FOUT.write('\n')

    FIN.close()
    #FOUT.close()

    return citydata

def main():
    print(getNorthAmericaCities())
    return 0

if __name__ == '__main__':
    main()