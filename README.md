
<img src="frontend/front-cover.png" alt="Front Cover" width="800"/>

# How to Run This Project

To run this project, first clone or unzip the folder. For the **frontend**, go to the `frontend` directory using `cd frontend`, then create a `.env.local` file in the root (same level as `package.json`) and add your Firebase configuration:  
`VITE_API_KEY="AIzaSyCXvDIC4MPrkaMdeg_O2iij88wLpfj3qBA"`,  
`VITE_Auth_Domain="book-store-mern-app.firebaseapp.com"`,  
`VITE_PROJECT_ID="book-store-mern-app"`,  
`VITE_STORAGE_BUCKET="book-store-mern-app.appspot.com"`,  
`VITE_MESSAGING_SENDERID="205632822247"`,  
`VITE_APPID="1:205632822247:web:b0db0ec66bf6de0bbb3b42"`.  
After that, install dependencies with `npm install` and start the frontend using `npm run dev`.  

For the **backend**, go to the `backend` directory using `cd backend`, then install dependencies with `npm install`. Create a `.env` file in the root directory (same level as `package.json`) and add:  
`DB_URL="mongodb+srv://<username>:<password>@cluster0.qc3bq.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0"` and  
`JWT_SECRET_KEY="your-secret-key"`.  
Replace `<username>` and `<password>` with your MongoDB credentials and set your own JWT secret key. Finally, start the backend with `npm run start:dev`.
