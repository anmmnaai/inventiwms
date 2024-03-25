<div align="center">
  <img src="static/img/logo.jpge" alt="inventiwms logo" width="200" height="auto" />
  <h1>InventiWMS</h1>
  <p>Inventi-Sell - Inventory Management System </p>


</div>

#### You can share your vacant warehouse space, use it for those in need, and generate income

## :rocket: Link US

## :star2: About the Project



[//]: # (Function)
## :dart: Function

* [x] Multiple Warehouses
* [x] Supplier Management
* [x] Customer Management
* [x] Scanner PDA
* [x] Cycle Count
* [x] Order Management
* [x] Stock Control
* [x] Safety Stock Show
* [x] API Documents
* [x] IOS APP Support
* [x] Android APP Support
* [x] Electron APP Support
* [x] Auto Update
* [x] i18n Support
* [x] API Documents

[//]: # (Install)
## :compass: Install
Python install
- [python 3.8.10](https://www.python.org/downloads/release/python-3810/)

Nodejs install
- [nodejs 14.19.3](https://nodejs.org/download/release/v14.19.3/)

Twisted install
- Please google how to install Twisted , if you have some problem on install it . 

Clone Project
~~~shell
git clone https://github.com/anmmnaai/inventiwms.git
~~~

### docker(Optional)
~~~shell
cd InventiWMS/
docker-compose up -d
# Change Baseurl
# baseurl GreaterWMS/templates/public/statics/baseurl.txt
docker-compose restart
~~~


[//]: # (development)
## :hammer_and_wrench: How To Run Development Server:

- Run Backend:
~~~shell
cd InventiWMS
daphne -p 8008 inventiwms.asgi:application
or
daphne -b 0.0.0.0 -p 8008 inventiwms.asgi:application # lan
~~~

- Run Frontend:
~~~shell
cd templates
quasar d
~~~

- Change Request Baseurl
~~~shell
templates/public/statics/baseurl.txt
~~~


- API Documents

~~~shell
baseurl + '/docs/'
~~~

### Companion Mobile APP

- App Source Code

~~~shell
npm install cordova -g

cd app
yarn install
## Development
quasar d -m cordova -T [android, ios]
## Deploy
quasar build -m [android, ios]
~~~

- You can directly use app if you don't want to build it 

InventiWMS is supported by a companion mobile app which allows users access to run the business well.
It can scan the goods by your camera or your PDA scanner.

[IOS](https://apps.apple.com/gb/app/intelligent-warehousing-gwms/id6444078526)

[Android](https://production.56yhz.com/media/GWMS.apks)

## Download Android installer tools

!!! info "Android"
    
    App store search

    Split APKs Installer 

## Directly download installer tools

[Sai](https://po.56yhz.com/media/sai.apk)

- Open Sai APP, choose GWMS.apks then install

[//]: # (publish)
## :trumpet: How To Publish Your APP:

- Web Build:

~~~shell
cd templates
quasar build
~~~

[//]: # (deploy)
## :computer: How To Deploy Server: