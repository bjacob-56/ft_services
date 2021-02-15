#!/bin/bash

# wordpress roles : author / editor / contributor / subscriber

wp user create \
		user1 user1@users.com \
		--first_name=User --last_name=One \
		--role=subscriber \
		--user_pass=user1 \
		--allow-root --path='/usr/share/webapps/wordpress/'

wp user create \
		user2 user2@users.com \
		--first_name=User --last_name=Two \
		--role=editor \
		--user_pass=user2 \
		--allow-root --path='/usr/share/webapps/wordpress/'

wp user create \
		user3 user3@users.com \
		--first_name=User --last_name=Three \
		--role=author \
		--user_pass=user3 \
		--allow-root --path='/usr/share/webapps/wordpress/'

