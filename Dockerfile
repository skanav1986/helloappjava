#FROM openjdk:17-jdk-alpine
FROM adoptopenjdk/openjdk11:alpine-jre
MAINTAINER txconsole.com
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
