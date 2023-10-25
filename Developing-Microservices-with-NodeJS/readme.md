# Developing Microservices with Node.js - 2016
__By David Gonzales__  
[Github Code](https://github.com/PacktPublishing/Developing-Microservices-With-Nodejs)  

## Chapter 1: Microservices Architecture
Microservices are small software components that are specialized in one task and work together to achieve a higher-level task.   
A microservice is an autonomous unit of work that can execute one task without interfering with other parts of the system.  
It is important to keep the key principle of the microservices-oriented architecture's design in mind, such as resilience, composability, elasticity and so on; otherwise, you could end up with a monolithic application split across different machines.   

__Shortcomings of microservices-oriented architecture__   
Microservices introduce some problems to deal with, such as _latency_, _traceability_, and
_configuration management_ that are not present with monolithic-based software.  
1. __Network latency__: Microservices have a distributed nature so that network
latency has to be accounted for
2. __Operations overhead__: More servers indicate more maintenance
3. __Eventual consistency__: On highly transactional systems, we need to factor into implementation the fact that the data could be inconsistent during a period of time.

__Key Design Principle for Microservices__  
* Microservices are business units that model the company processes.
* They communicate using simple channels and protocols.  
* Microservices-oriented architecture are decentralized by definition.  

HTTP is the most used protocol when building microservices-oriented software but another interesting option that needs to be explored is the use of queues, such as Rabbit MQ and Kafka, to facilitate the communication between endpoints.   

One of the most important principles of database design are summarized by the ACID acronym: Atomicity, Consistency, Isolation and Durability.

One of the advantages of modeling a system with microservices is that we can choose the right technology for the right job.

How small is too small? The microservice should be small enough to be managed and scaled up (or down) quickly without affecting the rest of the system by a single person; and it should do only one thing.

As a general rule of thumb, a team should be able to rewrite and deploy a microservice in a sprint.

__Business units, no components__  
when creating new components, keep the coupling as low as possible with the rest of the software, so that it works as an independent unit.  
Keeping a low level of coupling allows a software component to be converted into a microservice with little to no effort.

__Smart services, dumb communication pipes__  
HTTP is all you need for the communication between microservices: a protocol to transfer data and recover from transmission errors when necessary.  
The endpoints (microservices) should embed into their implementation the fact that a service could be down for a period of time (this is called resilience) or the network could cause communication issues.  

HTTP usually is the most used protocol when building microservices-oriented software but another interesting option that needs to be explored is the use of queues, such as _Rabbit MQ_ and _Kafka_, to facilitate the communication between endpoints.  

__ACID Principle__
The ACID principle is one of the first and the most important principles in database design.
1. __Atomicity__: Each transaction will be all or nothing. If one part fails, no changes are persisted on the database.  
2. __Consistency__: Changes to the data through transactions need to guarantee its consistency.  
3. __Isolation__: The result of concurrent execution of transactions results in a system state that would be obtained if the transactions were executed serially.  
4. __Durability__: Once the transaction is committed, the data persists.  

__Decentralization__  
Microservices aim for decentralization. Instead of having a huge database, why not split the data according to the business units explained earlier?  

On a microservices-oriented software, the ACID principle is not guaranteed globally.
Microservices will commit the transaction locally, but there are no mechanisms that can guarantee a 100% integrity of the global transaction.  

On a microservices-oriented architecture, the transactionality of the data is not guaranteed, so we need to factor the failure into the implementation. A way to solve this problem is decentralizing the governance and data storage.

When working with microservices, we need to account for what the engineers call eventual consistency. After a partial fail on a transaction, each microservice instance should store the information required to recover the transaction so that the information will be eventually consistent.

__Technology alignment__  
One of the advantages of modeling a system with microservices is that we can choose the right technology for the right job so that we can be quite efficient when
tackling problems.  

__How small is too small?__  
The microservices should be as small as needed, but keep in mind that every microservice adds an overhead to the operations team that needs to manage a new service.   
The microservice should be small enough to be
managed and scaled up (or down) quickly without affecting the rest of the system, by a single person.
It should do only one thing.
As a general rule, a microservice should be small
enough to be completely rewritten in a sprint.

__Key benefits__  
1. __Resilience and fault tolerance__  
Resilience is the ability to gracefully recover from errors.
We should build our system in a way that if one microservice is experiencing problems, the service response is degraded instead of a general failure of the whole system.  
2. __Scalability__  
Microservices enable you to scale parts of the system as the demand ramps up for a particular area of it.
We can spawn more instances of the microservice (or microservices) responsible when demand increase without having to scale the whole application.  
3. __Technology heterogeneity__  
Microservices are technology agnostic, we can use combine different Technologies, programming languages or frameworks to implement the microservices in the system.
Microservices hide data storage/gathering, having only the communication points in common.
4. __Replaceability__  
Replaceability is the ability to change one component of a system without interfering
with how the system behaves.
5. __Independence__  
All the services should be independent and interact through the interface up to a point that they can be developed by different groups of engineers without any interaction, aside from agreeing the interfaces.
6. Better data security and compliance
7. Faster time to market and “future-proofing”
8. Greater Business Agility and Support for DevOps
7. Support for Two-Pizza Development Teams

__Service Oriented Architecture (SOA)__  
They are self-contained components providing services to other components.
In Principle, SOA looks very similar to microservices architecture.  
Microservices are fine-grained SOA components. They are lightweight services with a narrow focus.

__SOA versus microservices__   
1. __Size__: Microservices are fine-grained SOA components. In other words, a single SOA component can be decomposed in a number of microservices that can work together in order to provide the same level of functionality.  
2. __Service Integration__: SOA enforces the use of _Enterprise Service Bus (ESB)_ as the standard for service integration. On the other hand, microservices enforce the use of standards (such as HTTP) that are broadly known and broadly interoperable.
3. __Data Storage__: In a microservice-based software, every microservice should store its own data locally, isolating the domain models to a single service; whereas, on an SOA oriented-software, the data is usually stored in a few big databases and the services share the domain models.

__API aggregation__  
_Seneca_ is a framework. One of the most attractive characteristics of Seneca is API aggregation. API aggregation is an advanced technique to compose an interface by aggregating different functionalities(plugins, methods, and so on) to it.  

## Chapter 2: Microservices in Node.js - Seneca and PM2 Alternatives  
We can use Seneca and PM2 as the frameworks for building and running microservices.
Other alternatives are _restify_ or _Express_ for building applications and _forever_ or _nodemon_ to run them.  

__Seneca__    
Seneca is a microservices toolkit for Node.js. It provides plugins that look after the foundations of your app.  
Install seneca in your application:
```bash
$ npm install --save seneca
```  
[senecajs.org](https://senecajs.org/)  

__PM2__   
PM2 is mainly a
command tool, like ls or grep in any Unix system
Install PM2 globally on your system:  
```bash
$ npm install -g pm2
$ pm2 --version
```    
__Node.js threading model__  
Programs written in Node.js are single-threaded.
If we have ten thousand concurrent requests, they will be queued and satisfied by the Node.js event loop one by one.   
Modern CPUs can handle multiple parallel requests due to their multicore nature. So, what is the benefit of executing them in one thread?
Node.js was designed to handle asynchronous processing. This means that in the event of a slow operation such as reading a file,
instead of blocking the thread, Node.js allows the thread to continue satisfying other
events, and then the control process of the node will execute the method associated
with the event, processing the response.

__Seneca__   
Seneca is a framework for building microservices.  
Seneca is about simplicity, it connects services through a sophisticated pattern-matching interface that abstracts the transport from the code so that it is fairly easy to write highly scalable software.  

__Inversion of control done right__  
Inversion of control can be defined as a technique to delegate the creation or call of components and methods so that your module does not need to know how to build the dependencies, which usually, are obtained through the dependency injection.

__Pattern matching in Seneca__  
Pattern matching is one of the most flexible software patterns that you can use for microservices.  

__Patrun pattern-matching library__  
It is used by Seneca in order to execute the pattern matching and decide which service should respond to the call.  
