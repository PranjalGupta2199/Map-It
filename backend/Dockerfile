FROM ubuntu:18.04

RUN apt update
RUN apt install -y libpq-dev python3 python3-dev python3-pip
RUN pip3 install --upgrade pip

ENV LANG C.UTF-8

RUN pip3 --no-cache-dir install pipenv
WORKDIR /app
COPY . /app
RUN pipenv lock -r > requirements.txt
RUN pip3 install -r requirements.txt

EXPOSE 5000
ENTRYPOINT [ "python3" ]
CMD [ "run.py" ]