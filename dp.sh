cd website
npm run build
cd ../
git checkout -b gh-pages
git add -f website/build/react-native-bundle-splitter && git commit -m "Initial dist subtree commit"
git subtree push --prefix website/build/react-native-bundle-splitter origin gh-pages
