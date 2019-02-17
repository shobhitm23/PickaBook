import requests
from bs4 import BeautifulSoup
import pandas as pd
# import re

def tag_remove(HTML_string):
    
    removeList = ['<span class="details-content-text"> ','<b>','</b>','<i>','</i>','<p>','</p>','</span>', '<br>', '<br/>', '<span class="details-content-text">', '</strong>', '<strong>']
    
    clean_HTML = HTML_string
    for r in removeList:
        clean_HTML = clean_HTML.replace(r, '')
        
    return clean_HTML

def getPublishedDate(HTML_string):
    try:
        datePublished = str(HTML_string).split("<li><strong>Publish Date</strong>:")[1].split('</li>')[0][1:]
    except IndexError:
        return -1
    
    return datePublished

def parseInfo(HTML_string):
    clean_HTML = HTML_string.split('\"')
    clean_HTML = clean_HTML[1].split(',')
    
    author = clean_HTML[0]
    title = clean_HTML[1][1:]
    genre = clean_HTML[4].replace(' ', '')
    
#     print(author)
#     print(title)

    return title, author, genre

def getDetail(link):
    req = requests.get(link)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')
    
    overview = tag_remove(str(soup.select('span[class=details-content-text]')[0]))
    title, author, genre = parseInfo(str(soup.select('meta[name=keywords]')[0]))
    datePublished = getPublishedDate(soup.select('div[class="details-content-text"]'))
    
    if(datePublished == -1):
        return - 1
    
    return (title, author, genre, overview, datePublished)

def run():
    
    req = requests.get("https://www.booksamillion.com/new?oxid=8134b&oxname=newarrivals&oxpage=books&oxpos=navi&oxdate=062618")
    html = req.text
     
    soup = BeautifulSoup(html, 'html.parser')
     
    Books = {"Title":[], "Author":[], "Genre":[], "Link":[], "Image":[], "PbDate":[], "Overview":[], "Rating":[]}
    cnt = 0
    print("------------------------------------------------------")
    for tag in soup.select('div[class=img]'):
#         title = tag.a["title"]
        link = tag.a["href"]
        img = tag.img["src"]
        detail = getDetail(link)
        
        if(detail == -1):
            break  ## DVD section after this point

        cnt += 1
        print(cnt)
        print("Title: ", detail[0])
        print("Author: ", detail[1])
        print("Genre: ", detail[2])
        print("Link: ", link)
        print("Image: ", img)
        print("Date Published: ", detail[4])
        print("Overview: ",detail[3])
        
        
        Books["Title"].append(detail[0])
        Books["Author"].append(detail[1])
        Books["Genre"].append(detail[2])
        Books["Link"].append(link)
        Books["Image"].append(img)
        Books["PbDate"].append(detail[4])
        Books["Overview"].append(detail[3])
        Books["Rating"].append(0)
        
        print("------------------------------------------------------")


    df = pd.DataFrame.from_dict(Books, orient="index")
    df.to_csv("Books.csv")

if __name__ == '__main__':
    print("started!")
    run()
        