# tvStore

## 1) Run project

- Create a folder in your computer 
	``` 
	~ mkdir tvStore
	~ cd tvStore 
	~ git init
	~ git clone https://github.com/raffaeldantass/tvStore
	```

- Install the whole structure
``` ~ npm install ```

- Run Yarn
``` ~ yarn ```

- Start the project
``` ~ yarn start ```

## 2) Folder Structure

```
TVStore
    JSON
      product-list.json //Contains all data for the shop, the API using this JSON was mocked
    PUBLIC
			ASSETS
				IMG
					TVS
						samsung_01.jpeg
						philips_02.jpg
						lg_03.jpg
						lg_04.jpg
						sony_05.jpg
						sony_06.jpg
						samsung_07.jpg
						lg_08.jpg
						sony_09.jpg
						lg_10.jpg
					checkout.svg
					logo.svg
				STYLES
					main.css
        index.html
    SRC
			ASSETS
				STYLES
					FOOTER
						footer.styl
					HELPERS
						fonts.styl
						normalize.styl
					HOME
						card.styl
						home.styl
					MAIN-BLOCK
						main-bock.styl
					MENU
						menu.styl
					main.styl
			TEMPLATES
				Card.js
				Footer.js
				Menu.js
			VIEWS
				Home.js
				ProductDetails.js
			App.js
			Index.js
    Webpack-configs
			base.config.js
			dev.config.js
			prod.config.js
    .babelrc
    .gitignore
    .stylintrc
    .eslintrc.json
    LICENSE
    package.json
    README.md
    yarn.lock
```
