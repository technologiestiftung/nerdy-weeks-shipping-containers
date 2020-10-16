FROM python:3.7-alpine
# Copies your code file from your action repository to the filesystem path `/` of the container
COPY script.py /script.py

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["python", "/script.py"]