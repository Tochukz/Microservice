# PHP Microservices (2017)
__By Carlos Sanchez & Pablo Vilarino__    
[Github Code](https://github.com/PacktPublishing/PHP-Microservices)  
## Chapter 1: What are Microservices    
 A microservices  is an extended Service Oriented Architecture.  
 The application is divided into various small services which communicate using APIs on HTTP.
 We need to know when to use a _monolithic_ architecture and when to use _microservices_.  

## Chapter 2: Development Environment  
__Design and architecture__  
All the request for our microservice comes a __REVERSE PROXY__ allowing for load balancing. Also we use __NGINX__ as a gateway for the __API__ build in PHP. Our __NGINX__ and PHP use a __CACHE__ layer to reduce load and increase performance.  

The __API__ uses a __QUEUE__ system to execute resource consuming tasks that can be deferred to a later time.  

__Containerization Management__  
Using containers in the development of an application based on microservices is a default standard.  
We use _Telemetry_ to monitor the stats of containers and _Autodiscovery_ to monitor the health and workings of the containers.      
Install [Docker on Ubuntu](https://docs.docker.com/engine/install/ubuntu/#installation-methods).
