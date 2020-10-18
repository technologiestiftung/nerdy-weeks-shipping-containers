# here we build our new image based on Debian stretch
# for production it it better to use a slim or alpine version
FROM node:14.8.0-stretch
# we define our working directory where our application will life.
WORKDIR /app
# this is how you set a environment variable within the dockerfile be aware that if you need some devDependencies to run through a build process you need to set first the NODE_ENV to developement do your build and then set it to production. But that is a more complex scenario.
ENV NODE_ENV production
# we copy package.json and package-lock.json in one command over.
COPY package*.json ./
# we run our install based on package-lock.json
# this is faster and gives you a mare reliable build
RUN npm ci
# now we copy two files into our working directory
COPY index.ts tsconfig.json ./
# our entrypoint is on this case the ts-node exeutable. Since we don't want to run through a tsc build process for this example
ENTRYPOINT [ "./node_modules/.bin/ts-node" ]
# and we pass our script to the ts-node exeutable
CMD ["index.ts"]
