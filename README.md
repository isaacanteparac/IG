# randomG

**API**

    npm init --yes
    "dependencies": {
        "bcryptjs": "^2.4.3",
        "body-parser": "^1.20.0",
        "cors": "^2.8.5",
        "express": "^4.18.1",
        "express-mysql-session": "^2.1.8",
        "express-validator": "^6.14.2",
        "jsonwebtoken": "^8.5.1",
        "morgan": "^1.10.0",
        "multer": "^1.4.5-lts.1",
        "mysql2": "^2.3.3",
        "nodemon": "^2.0.19",
        "passport": "^0.6.0"
    },
    "devDependencies": {
        "mysql2": "^2.3.3",
        "nodemon": "^2.0.19"
    },

**BACKEND**
 
    "main": "dist/index.js",
    "scripts": {
        "start": "tsc && nodemon && node dist/index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "dependencies": {

        "apollo-server": "^3.10.1",
        "axios": "^0.27.2",
        "graphql": "^16.6.0",
        "ts-node": "^10.9.1",
        "tslint": "^6.1.3",
        "typescript": "^4.7.4"
    },
    "devDependencies": {
        "nodemon": "^2.0.19"
    }


**FRONTEND**
    
    "npx create-react-app frontend"
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
    }
**RUN**

    api = npm run dev
    backend = {p1: npx tsc, p2: npm start}
    frontend = npm start
