init:
	pip install pipenv
	pipenv install
	git clone https://github.com/boundlessgeo/gsconfig.git
	cd gsconfig && python setup.py develop 
	cd ..
test:
	pipenv run pytest 
