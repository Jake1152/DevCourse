NAME = app

all: ts
	node $(NAME).js

ts:
	tsc $(NAME).ts

clean:
	rm $(NAME).js

fclean:
	rm -f $(NAME).js

re:
	make fclean
	make all