# mini-proxy

A minimalist URL-based proxy

## Install
### Development
```sh
git clone https://github.com/maxlath/mini-proxy
cd mini-proxy
npm install
npm start
```

### Systemd
```sh
git clone https://github.com/maxlath/mini-proxy
cd mini-proxy
npm install
npm run add-to-systemd
```

## How to
```sh
curl "http://localhost:4124/https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q471142&format=json"
# => proxies the query to https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q471142&format=json
```
