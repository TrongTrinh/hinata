# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
set -e

env=$1
if [ -z "$1" ]
  then
    echo "Param :env is required as $1"
    exit 1
fi

branch=$2
if [ -z "$2" ]
  then
    echo "Param :branch is required as $2"
    exit 1
fi

echo "Deploying $2 branch to $1"
git fetch origin && git checkout $2 && git merge origin/$2

echo "Overwriting .env with .env.$1"
cp ".env.$1" .env

docker network create --driver bridge "hinata_web_ads_network" || true

# Up prod in detached mode
docker-compose -p "hinata_web_ads_$1" -f docker-compose.yml -f "docker-compose.$1.yml" up -d --build --remove-orphans

# clearn cache
echo "Clean docker image"
docker system prune -f
exit 0