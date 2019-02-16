import pandas as pd

def run(csvFilePath, outputFilePath):
    
    dataCSV = pd.read_csv(csvFilePath, engine='python', encoding='utf-8', error_bad_lines=False)

#     for key in dataCSV:
#         print(key)

    rmvList = ["ratingsCount", "reviewsCount", "reviewerName", "reviewerRatings"]
    
    for rm in rmvList:
        del dataCSV[rm]

    rmvList = None

    print("%d books information parsed from br.csv" %len(dataCSV["bookID"]))

    dataCSV.to_csv(outputFilePath)


if __name__ == "__main__":
    
    csvFilePath = "/Users/kimmyeongsu/Desktop/cs307/PickaBook/crawler/csv_crawler/br.csv"
    outputFilePath = "/Users/kimmyeongsu/Desktop/cs307/PickaBook/crawler/csv_crawler/brOut.csv"
    run(csvFilePath, outputFilePath)
    