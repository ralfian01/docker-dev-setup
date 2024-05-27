FROM php:8.2-fpm

WORKDIR /var/www

# Update container
RUN apt update -y

RUN apt-get install sudo -y

# Install packages for php extensions
RUN apt-get install -y libpng-dev \
    zlib1g-dev \
    libicu-dev \
    libonig-dev \
    libpq-dev \
    libsqlite3-dev \
    libzip-dev

# Install php extensions
RUN docker-php-ext-install curl
RUN docker-php-ext-install gd
RUN docker-php-ext-install gettext
RUN docker-php-ext-install intl
RUN docker-php-ext-install mbstring
RUN docker-php-ext-install mysqli
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install pdo_pgsql
RUN docker-php-ext-install pdo_sqlite
RUN docker-php-ext-install pgsql
RUN docker-php-ext-install zip
RUN docker-php-ext-install fileinfo