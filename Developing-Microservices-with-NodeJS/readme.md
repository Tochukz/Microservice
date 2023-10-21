# Developing Microservices with Node.js

## Chapter 1: Microservices Architecture
Microservices are small software components that are specialized in one task and work together to achieve a higher-level task.   
A microservice is an autonomous unit of work that can execute one task without interfering with other parts of the system.  
It is important to keep the key principle of the microservices-oriented architecture's design in mind, such as resilience, composability, elasticity an so on; otherwise, you could end up with a monolithic application split across different machines
__Key Design Principle for Microservices__  
* Microservices are business units that model the company processes.
* They communicate using simple channels and protocols.  
* Microservices-oriented architecture are decentralized by definition.  

HTTP is the most used protocol when building microservices-oriented software but another interesting option that needs to be explored is the use of queues, such as Rabbit MQ and Kafka, to facilitate the communication between endpoints.   

One of the most important principles of database design are summarized by the ACID acronym: Atomicity, Consistency, Isolation and Durability.

One of the advantages of modeling a system with microservices is that we can choose the right technology for the right job.

How small is too small? The microservice should be small enough to be managed and scaled up (or down) quickly without affecting the rest of the system, by a single person; and it should do only one thing.

As a general rule of thumb, a team should be able to rewrite and deploy a microservice in a sprint.

__Service Oriented Architecture (SOA)__  
They are self-contained components providing services to other components.
In Principle, SOA looks very similar to microservices architecture.
Microservices are fine-grained SOA components. They are lightweight services with a narrow focus.
In a microservice-based software, every microservice should store its own data locally, isolating the domain models to a single service; whereas, on an SOA oriented-software, the data is usually stored in a few big databases and the services share the domain models.

__API aggregation__  
_Seneca_ is a framework. One of the most attractive characteristics of Seneca is API aggregation. API aggregation is an advanced technique to compose an interface by aggregating different functionalities(plugins, methods, and so on) to it.  

## Chapter 2: Microservices in Node.js - Senca and PM2 Alternatives  

Installing seneca   
`$ npm install --save seneca`  

Installing pm2  
`$ npm install -g pm2`  

__Node.js threading model__  
Programs written in Node.js re single-threaded. If we have ten thousand concurrent requests, they will be queued and satisfied by the Node.js event loop one by one.  Node.js was designed to handle asynchronous processing.  
