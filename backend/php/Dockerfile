FROM php:8.2-fpm

# Update container
RUN apt update -y

RUN apt-get install sudo -y

# Install composer
# RUN apt-get install php-cli unzip
RUN cd ~
RUN curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
RUN HASH=`curl -sS https://composer.github.io/installer.sig`
RUN php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www

# Install packages for php extensions
RUN apt-get install -y libcurl4-openssl-dev \
    libpng-dev \
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