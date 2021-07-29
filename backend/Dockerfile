# pull official base image
FROM adoptopenjdk/openjdk11:latest

# Set the current working directory inside the image
WORKDIR /app

# find and copy Java ARchive file
ADD target/*.jar app.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# start the server
ENTRYPOINT ["java","-jar","app.jar"]