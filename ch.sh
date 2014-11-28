#!/bin/bash
### Set default parameters
action=$1
domain=$2
owner=$(who am i | awk '{print $1}')
email='[email protected]'
sitesEnable='/etc/apache2/sites-enabled/'
sitesAvailable='/etc/apache2/sites-available/'
userDir='/var/www/'
 
if [ "$(whoami)" != 'root' ]; then
        echo "You have no permission to run $0 as non-root user. Use sudo !!!"
        exit 1;
fi
 
if [ "$action" != 'create' ] && [ "$action" != 'delete' ] 
	then
		echo "You need to prompt for action (create or delete) -- Lower-case only !!!!!!"
	    exit 1;
fi
 
while [ "$domain" == ""  ]
do
	echo -e "Please provide domain. e.g.dev,staging"
	read  domain
done
 
#rootdir=${domain//./}
rootdir=$domain
 
if [ "$action" == 'create' ] 
	then
		### check if domain already exists
		if [ -e $sitesAvailable$domain ]; then
			echo -e 'This domain already exists.\nPlease Try Another one'
			exit;
		fi
 
		### check if directory exists or not
		if [ -d $userDir$rootdir ]; then
			echo -e 'Directory already exists !'
			exit;
		fi
 
		### create the directory
		mkdir $userDir$rootdir
 
		### create virtual host rules file
		if ! echo "<VirtualHost *:80>
			ServerAdmin hostmaster@localhost
			ServerName $domain
			ServerAlias $domain www.$domain
			DocumentRoot $userDir$rootdir
			<Directory />
		        AllowOverride All
			</Directory>
			<Directory $rootdir>
		        AllowOverride All
			</Directory>
			ErrorLog /var/log/apache2/$domain
			 LogLevel error
			CustomLog /var/log/apache2/$domain custom
		</VirtualHost>" > $sitesAvailable$domain".conf"
		then
			echo -e 'There is an ERROR create $domain file'
			exit;
		else
			echo -e '\nNew Virtual Host Created\n'
		fi
 
		### Add domain in /etc/hosts
		if ! echo "127.0.0.1       $domain" >> /etc/hosts
		then
		    echo "ERROR: Not able write in /etc/hosts"
		    exit;
		else
		    echo -e "Host added to /etc/hosts file \n"
		fi
 
		### enable website
		a2ensite $domain".conf"
 
		### restart Apache
		service apache2 reload
 
		### give permission to root dir
		chmod 755 $userDir$rootdir
 
		### write test file in the new domain dir
		if ! echo "<?php echo phpinfo(); ?>" > $userDir$rootdir/index.php
		then
		    echo "ERROR: Not able to write in file "$userDir"/"$rootdir"/index.php. Please check permissions."
		    exit;
		else
		    echo "Added content to "$userDir$rootdir"/phpinfo.php."
		fi
 
		if [ "$owner" == ""  ]; then
			chown -R $(whoami):$(whoami) $userDir$rootdir
		else
			chown -R $owner:$owner $userDir$rootdir
		fi
 
		### show the finished message
		echo -e "Complete!
		You now have a new Virtual Host
		Your new host is: http://"$domain"
		And its located at "$userDir$rootdir
		exit;
	else
		### check whether domain already exists
		if ! [ -e $sitesAvailable$domain".conf" ]; then
			echo -e 'This domain dont exists.\nPlease Try Another one'
			exit;
		fi
 
		### check if directory exists or not
		if ! [ -d $userDir$rootdir ]; then
			echo -e 'Directory not exists !'
			exit;
		fi
 
		### Delete the directory
		rm -rf $userDir$rootdir
 
		### Delete virtual host rules file
		rm $sitesAvailable$domain".conf"
 
		### Delete domain in /etc/hosts
		newhost=${domain//./\\.}
		sed -i "/$newhost/d" /etc/hosts
 
		### enable website
		rm $sitesEnable$domain".conf"
 
		### restart Apache
		service apache2 reload
 
		### show the finished message
		echo -e "Complete!
		You just removed Virtual Host "$domain
		exit 0;
fi