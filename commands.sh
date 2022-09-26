sudo service docker start
sudo docker pull mongo
docker run -d -p 27017:27017 --name test-mongo mongo:latest