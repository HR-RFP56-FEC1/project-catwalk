

---
# Amazon ec2 ubuntu setup:

## connecting: 

- key/Authentication:
	- In putty:
		- Connection -> SSH -> Auth
		- Choose a file

![putty.png](putty.png)


- login:
	- user: ubuntu
---
## Setup

- Node version 14:
	- curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
	- sudo apt-get install -y nodejs
<br><br>

- Git:
	- sudo apt-get install git
<br><br>
- port forwarding:
	- sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
	<br><br>
--- 
## Repo setup
clone repo

	git clone urlgoeshere

dont forget to setup packages after cloning

	npm i
___

	
## File uploading:
- FTP client of your choice.
- You will need to add the key similar to in putty
- same port 22

---
## server running after terminal close:
- https://stackoverflow.com/questions/21193988/keep-server-running-on-ec2-instance-after-ssh-is-terminated
	


to start:
	
	 tmux

to disconnect:

	Ctrl+B, D (ie press Ctrl+B, then release both keys, and then press d)

when logging in again:

	tmux attach


if dc'd, reattach:

	tmux attach -d!

### Note:  
	if server stopped, all terminals will close as well and will not automatically reopen unless you have a start script