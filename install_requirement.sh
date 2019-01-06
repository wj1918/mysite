rm -rf env lib
virtualenv env
source env/bin/activate
pip install -r requirements-vendor.txt -t lib/
pip install -r requirements.txt
#python manage.py collectstatic
