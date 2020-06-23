from srcallcities import getAllCities

def getUniqueCities():
        
        cities = getAllCities()

        seen = {}
        duplicates = []

        for city in cities:
            if city[1] not in seen:
                seen[city[1]] = 1
            else:
                if seen[city[1]] == 1:
                    duplicates.append(city[0]-1)
                seen[city[1]] += 1
        

        cities = [i for j, i in enumerate(cities) if j not in duplicates]


        for i in range(0, len(cities)):
            cities[i][0] = i
        
        return cities

def getURLS():
    FIN  = open("data/linksbild.txt",  "r")
    InputData = FIN.read().split('\n')

    urls = []
    for string in InputData:
        arr = string.split(' ')
        urls.append(arr[1])



    FIN.close()
    return urls

def addImageURL():
    cities = getUniqueCities()
    urls = getURLS()
    for  i, elem in enumerate(cities):
        elem.append(urls[i])

    return cities

def main():
    return 0

if __name__ == '__main__':
    main()