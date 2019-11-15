release: flask db upgrade
web: gunicorn one_hack_mc_conversation.app:create_app\(\) -b 0.0.0.0:$PORT -w 3
