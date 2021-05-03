FROM mysql:8

ENV MYSQL_ROOT_PASSWORD root
ENV LANG=C.UTF-8

COPY setup.sql docker-entrypoint-initdb.d/

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 3306 33060
CMD ["mysqld"]