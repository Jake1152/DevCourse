NAME = app.js

all: ts
	node $(NAME)

ts:
	tsc app.ts

clean:
	rm $(NAME)

fclean:
	rm -f $(NAME)

re:
	make fclean
	make all