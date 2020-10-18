# the base image we use to build upon
FROM python:3.7.7-stretch
# we set the working directory
WORKDIR /cows
# we install poetry
RUN pip install "poetry==1.0"
# we copy our requirements into the imagr
COPY ./pyproject.toml poetry.lock ./
# we run the install with poetry
RUN poetry install
# we copy our script into the image
COPY cow.py cow.py
# we define the executable that we will call
ENTRYPOINT [ "poetry" ]
# we set the arguments for that executable
CMD ["run", "python", "cow.py"]