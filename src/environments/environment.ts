export const environment = {
  production: false,

  apiUrl: 'http://localhost:3000/api' // Your development API URL
};
/**this is the recommeded way of stroring api calls rather tha calling it directly 
in the service as it:


// Keeps your configuration separate from code

// Makes it easy to switch between environments

// Prevents accidental deployment of development settings to production

// Follows Angular best practices**/