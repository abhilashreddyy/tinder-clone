import heapq


def convert_nums(mins):
    new_mins = []
    for min_ in mins:
        new_mins.append((min_%100) + ((min_//100)*60))
    return new_mins

def getArrivalTimes(train_start, station, timeBtwStations):
    if station == 1:
        return train_start
    else:
        return train_start+(station-1-1)*(timeBtwStations+2)+timeBtwStations

def trainSchedule(arrivalStations, arrivalTimes, destStations, destTimes, timeBtwStations):
    arrivalTimes = convert_nums(arrivalTimes)
    destTimes = convert_nums(destTimes)
    all_people = []
    for (a,b,c,d) in zip(arrivalStations, arrivalTimes, destStations, destTimes):
        all_people.append([a,b,c,d])
    
    all_people.sort()

    train_start = 6*60+30
    late_people = 0
    while train_start < 60*24:
        my_heap = []
        flag = 0
        count = 5
        print(all_people)
        for i in range(len(all_people)):
            
            
            if all_people[i][0] == None:
                flag += 1
                continue

            while my_heap and all_people[i][0] >= my_heap[0]:
                heapq.heappop(my_heap)

            # print(all_people[i] , train_start, all_people[i][0], timeBtwStations, getArrivalTimes(train_start, all_people[i][0], timeBtwStations)+2)
            if all_people[i][1] <= getArrivalTimes(train_start, all_people[i][0], timeBtwStations)+2 and len(my_heap) < 5:
                # print("x : ", train_start, all_people[i][2], timeBtwStations)
                destination_reach_time = getArrivalTimes(train_start, all_people[i][2], timeBtwStations)
                # print(train_start, destination_reach_time, i)
                if destination_reach_time > all_people[i][3]:
                    late_people+=1
                heapq.heappush(my_heap, all_people[i][2])
                all_people[i][0] = None

        # print(flag)
        if len(all_people)-flag == 2:
            break
            
        if flag == len(arrivalStations):
            break
        
        train_start+=15

    return late_people

print(trainSchedule([1,1,1,2], [620, 620, 620, 650], [2,2,3,3], [700, 700, 645, 655], 5))




                



