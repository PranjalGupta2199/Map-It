init:
	cd backend/
	pip install pipenv --upgrade
	pipenv install --dev
test:
	pipenv run pytest 
