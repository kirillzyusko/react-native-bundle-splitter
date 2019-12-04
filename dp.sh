cd website
npm run build
<meta name="google-site-verification" content="ntb09WlwTjLqEM0zi_UtNNzyzj8nlxeiPbqxlocq1QI" />
cd ../
git checkout -b gh-pages
git add -f website/build/react-native-bundle-splitter-docs && git commit -m "Initial dist subtree commit"
git subtree push --prefix website/build/react-native-bundle-splitter-docs origin gh-pages
