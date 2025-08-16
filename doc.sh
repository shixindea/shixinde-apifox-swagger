
rm -rf ./docs/

pnpm docs:build

git add .

git commit -m "update docs"

git push