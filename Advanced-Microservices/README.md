# Advanced Microservices (2017)  
__By Thomas Hunter II__   

#### Tools  
* cURL
* jq [stedolan.github.io](stedolan.github.io/jq)
* Postman [getpostman.com](getpostman.com)

## Chapter 1: Introduction
__Seperation of concern__   
When naming a microservice, as a rule of thumb, you should be able to describe what the service does using a single sentence, and that sentence shouldn’t contain the word and.  

__Example of Microservice break down__  
Here’s a list of microservices you may arrive at for the Instagram example as well as some of the features of that service:
* User: Register account, close account
* Authentication: Generate token from username/password
* Photo: Store photos, resize photos, remove photos
* Location: Store locations, find location by latitude/longitude
* Tag: Store tags, create tags, remove tags
* Timeline: List photos
* E-mail: Send e-mail
* Search: List photos based on tags


__Team Structure__   
Vertical teams own, essentially, one part of the overall product. Each team runs pretty much autonomously and can choose whatever technologies they want to use. It’s important to also develop “horizontal” teams that span all parts of the product. The most common horizontal team would be that of operations (opts) and another is a design team.  

__Splitting a Monolith__  
Any time you make a single query for data that crosses multiple concerns, such as getting data from a photo table based on an identifier from a user table, you’ll need to separate it into multiple queries.  
An example of this could be the natural tight coupling between users and authentication. With a monolithic service, you have a single database query look up a username and confirm the password while returning user data. After separating the concerns, you could have a single function for confirming a username and password, returning a user ID, and then another function to take a user ID and return user data.  

__Network Interfaces__  
To view a list of interfaces available on your Linux or macOS computer, run the command
```
$ ifconfig
```  
if you’re using Windows, run
```
$ ipconfig
```  
You should see a list of interfaces, each with names and associated IP addresses.

__Protocol__  
The simpler one is called _User Datagram Protocol_ (UDP), and the more complex is called _Transmission Control Protocol_ (TCP). These are often used as building blocks for building higher-level protocols, such as HTTP, which is based on TCP.  
TCP includes a system for “guaranteeing” the delivery of packets over a network. If a packet is lost, it will be retransmitted.
This additional layer of guarantees comes with some network overhead, however, because you need to perform handshakes and an acknowledgment of packet receipt.
UDP does not include any of these guarantees. Packets that are sent may never be received, and software will never know whether a packet is received unless the software has its own message delivery guarantee system on top.  
