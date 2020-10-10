import React, {useState, useEffect, useContext, createContext, useRef} from "react";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyAuRzAT0GaWEa39FKtQm5_VkmxX-piaPdM",
   authDomain: "coffee-shop-83f31.firebaseapp.com",
   databaseURL: "https://coffee-shop-83f31.firebaseio.com",
   projectId: "coffee-shop-83f31",
   storageBucket: "coffee-shop-83f31.appspot.com",
   messagingSenderId: "803044224791",
   appId: "1:803044224791:web:32638360153057d6d91152",
   measurementId: "G-KBREE3C99B"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const AuthContext = createContext();

export function ProvideAuth({children}) {
   const auth = useProvideAuth();
   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
   return useContext(AuthContext);
};

export default function useProvideAuth() {
   const [user, setUser] = useState([]);
   const [error, setError] = useState(null);
   const [codez, setCode] = useState('');
   const ref = useRef();

   useEffect(() => {
      setCode(codez);
   }, [codez])
   const reCaptcha = (props) => {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
         'size': 'invisible',
         'callback': function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
         }
      });
   }

   const onSignInSubmit = (number, name, code) => {
      let phoneNumber = number;
      let userName = name;
      let appVerifier = window.recaptchaVerifier;

      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
         .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            let code = window.prompt('Подтвердите код');
            confirmationResult.confirm(code).then(function (result) {
               // User signed in successfully.
               return result.user.updateProfile({
                  displayName: userName,
               });
               setUser(result.user)
               console.log(result.user)
               localStorage.setItem('user', JSON.stringify(result.user));
            }).catch(function (error) {
               // User couldn't sign in (bad verification code?)
               console.log(error)
            })
         }).catch(function (error) {
         // Error; SMS not sent
         console.log(error)
      });
   }
   // console.log(codez)
   // const submitCode = (code) => {
   //    setCode(code);
   // }
   const signout = () => {
      return firebase
         .auth()
         .signOut()
         .then(() => {
            setUser(false);
         })
         .catch(error => {
            setError(error);
         });
   };
   // signout()
   // Subscribe to user on mount
   // Because this sets state in the callback it will cause any ...
   // ... component that utilizes this hook to re-render with the ...
   // ... latest auth object.
   useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
         if (user) {
            setUser(user);
         } else {
            setUser(false);
         }
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
   }, []);

   return {
      reCaptcha,
      onSignInSubmit,
      user,
      error,
      setError,
      signout,
      // submitCode
   };
}