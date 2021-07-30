# fullstack-docker-exercise

This repo was created to learn docker and to create a template for future app building.

List of content

- [Intro](#Intro)
- [Frontend container](#Frontend-container)
- [Backend container](#Backend-container)
    - [The instruction](#The-instruction)
    - [The alternative way](#The-alternative-way)
    - [Container dependency](#Container-dependency)
- [Docker-compose](#Docker-compose)
    - [Result](#Result)

# Intro

<h2>Stack:</h2>
&ensp;frontend: React.js/Typescript<br>
&ensp;backend: Spring Boot<br>
&ensp;database: postgreSQL<br><br>

To make it clear, there are here two separate catalogs: <u>frontend</u> and <u>backend</u>.<br> Each of them contains separate <b>Dockerfile</b>, so in theory they can be build separately. More info below:<br>

# Frontend container
Running a frontend container is fairly simple.<br>
<u>Create an image:</u><br>'docker build -t front-container:dev .'<br>
<u>Start a container:</u><br>'docker run -it --rm -p 3000:3000 -e CHOKIDAR_USEPOLLING=true front-container:dev' <br><br>
If run alone, will create an app and display only hardcoded data:

![sceenshot_5](/img/5.png)
<br><br>

# Backend container
Docker to start a java application needs a .jar file. Here things can be done in many ways. The one below automatically creates database and fills it with data <b>BUT</b> requires additional steps to create the .jar file.<br>

## The instruction<br>
1. run database container:<br>
'docker run -e POSTGRES_PASSWORD=passwd -e POSTGRES_USER=postgres -d -p 5433:5432 postgres'<br>
2. in <u>/backend/src/main/resources/application.properties</u> uncomment this section:<br>
![sceenshot_8](/img/8.png)
3. in /backend catalog run command 'mvn install -DSkipTests'<br>
4. in application.properties comment it back
5. stop and delete database container:<br>
docker stop <u>id</u> -> docker rm <u>id</u> -> docker rmi <u>id</u>

It must be done separately, because docker-compose can controll which containers are run first but <b>it can not always controll</b> the order of when they are build. And backend container needs database container to already be up and running to properly create .jar file.

## The alternative way
To automate it all it would be required to:
1. set in /backend/src/main/resources/application.properties<br>
<b>spring.jpa.hibernate.ddl-auto=none</b><br>
2. change backend/Dockerfile to download maven, create .jar and run it<br>(example)

![sceenshot_9](/img/9.png)

3. create schema.sql to recreate the database and data.sql to fill it
4. modify docker-compose.yml to run it all

But then everytime the database changes, there are at least 2 additional files to change what slows the development

## Container dependency
Just a reminder.. The backend container requires connection to the database and is unable to work without it, so if started alone, will throw an error:

![sceenshot_6](/img/6.png)
<br>
That is where the docker compose comes in..


# Docker-compose

To run the whole application 2 steps are required:<br>
1. create .jar file in backend (see Backend container -> The instruction)<br>
2. run 'docker-compose up' in terminal
<br><br>
and that's all

## Result
As a result there should be an app that looks like this<br>

![sceenshot_4](/img/4.png)
<br><br>
There are two tables:<br>
first one containing the data hardcoded at the front<br>
and the second one with the data from the database.
