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


def main():
    print(getUniqueCities())
    return 0

if __name__ == '__main__':
    main()