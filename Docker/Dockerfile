FROM node:16.18-buster-slim

RUN apt update -y && \
    apt install -y --no-install-recommends --no-install-suggests \
    nginx ca-certificates git less


RUN mkdir -p /project/

WORKDIR /project/
RUN git clone https://github.com/SjurWarEagle/phelorena-hp .
RUN npm install --no-audi --progress=false
RUN npm run build


#TODO convert to copy, this is im this git we just cloned, no need to get it from outside
ADD Docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/apt/apt.conf.d/90nginx


EXPOSE 90

STOPSIGNAL SIGTERM

ADD Docker/start.sh /
RUN chmod +x /start.sh

CMD ["/start.sh"]


