FROM tomcat:9.0

#making configuration directory
RUN mkdir -p /usr/local/tomcat/conf

#deploying geoserver and geowebcache on the container
COPY ./geowebcache.war /usr/local/tomcat/webapps/
COPY ./geoserver.war /usr/local/tomcat/webapps/

#Adding username, password for manager on tomcat 
COPY tomcat-users.xml /usr/local/tomcat/conf
COPY context.xml /usr/local/tomcat/webapps/manager/META-INF

#making the container executable
CMD ["catalina.sh", "run"]
