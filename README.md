# fullstack-docker-exercise

This repo was created to learn docker and to create a template for future app building.

List of content

- [Intro](#Intro)
- [Frontend container](#Frontend-container)
- [Backend container](#Backend-container)
    - [Maven issue](#Maven-issue)
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
Here is where things get a little complicated.<br>

## Maven issue
Because this project was created in Win10/WSL2, there was an error, which unfortunately prevented from achieving full automation:<br>
Docker, to run a java application, needs a .jar file. To create it in terminal, a programme called maven is required. However running maven in Dockerfile (Win10/WSL2) turns out to be not a trivial task.

![sceenshot_7](/img/7.png)
<br><br>
Here is more on this topic:<br>
https://stackoverflow.com/questions/61226664/build-docker-error-bin-sh-1-mvnw-not-found <br>
https://stackoverflow.com/questions/52748640/unable-to-run-mvnw-clean-install-when-building-docker-image-based-on-openjd/52748878<br>

<b>!!So instead .jar file is required to be created manually!!</b><br>
Here is the instruction:<br>
1. run database container:<br>
'docker run -e POSTGRES_PASSWORD=passwd -e POSTGRES_USER=postgres -d -p 5433:5432 postgres'<br>
2. in <u>/backend/src/main/resources/application.properties</u> uncomment this section:<br>
![sceenshot_8](/img/8.png)
3. in /backend catalog run command 'mvn install -DSkipTests'<br>
4. in application.properties comment it back
5. stop and delete database container:<br>
docker stop <u>id</u> -> docker rm <u>id</u> -> docker rmi <u>id</u>

That's it, the rest is automated

## Container dependency
Just to remind.. The backend container requires connection to the database and is unable to work without it, so if started, will throw an error:

![sceenshot_6](/img/6.png)
<br>
That is where the docker compose enters the stage..

# Docker-compose

To run the whole application 2 steps are required:<br>
1. create .jar file in backend (see Backend container -> Maven issue)<br>
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
