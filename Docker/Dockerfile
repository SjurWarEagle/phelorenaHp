FROM node:16.18-buster-slim

RUN apt update -y && \
    apt install -y --no-install-recommends --no-install-suggests \
    nginx ca-certificates git less


RUN mkdir -p /project/

WORKDIR /project/
RUN git clone https://github.com/SjurWarEagle/phelorenaHp .

ENV NG_CLI_ANALYTICS="false"
RUN npm install --no-audi --progress=false
RUN npm run build
#RUN ls -al .
RUN mv -v /project/dist/phelorena-hp/* /var/www/html/


ADD Docker/start.sh /
RUN chmod +x /start.sh

#RUN mkdir -p /project/dist/phelorena-hp/assets/paintings
RUN mkdir -p /var/www/html/paintings


CMD ["/start.sh"]


