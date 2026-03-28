import { dummyUsers } from '../data/dummyUsers';

// Mock JWT token for demonstration
const MOCK_TOKEN = 'mock-jwt-token-for-esuuq';

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = dummyUsers.find(u => u.email === email && u.password === password);
      if (user) {
        resolve({
          token: MOCK_TOKEN,
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
          },
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 500);
  });
};

export const register = (userData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userExists = dummyUsers.some(u => u.email === userData.email);
            if (userExists) {
                reject(new Error('User with this email already exists.'));
            } else {
                const newUser = {
                    id: dummyUsers.length + 1,
                    ...userData,
                    role: userData.role || 'user',
                };
                dummyUsers.push(newUser);
                resolve({
                    token: MOCK_TOKEN,
                    user: {
                        id: newUser.id,
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        email: newUser.email,
                        role: newUser.role,
                    },
                });
            }
        }, 500);
    });
};

export const checkAuth = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // In a real app, you'd verify the token
            const token = localStorage.getItem('token');
            if (token === MOCK_TOKEN) {
                // This is simplified. You'd decode the token to get user info.
                const user = JSON.parse(localStorage.getItem('user'));
                resolve({ isAuthenticated: true, user });
            } else {
                resolve({ isAuthenticated: false, user: null });
            }
        }, 200);
    });
};

export const logout = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            resolve();
        }, 200);
    });
};

export const getCurrentUser = () => {
    const token = localStorage.getItem('token');
    if (token === MOCK_TOKEN) {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            return JSON.parse(userStr);
        }
    }
    return null;
};
