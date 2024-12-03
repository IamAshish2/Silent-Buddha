import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { auth } from "../Firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

export async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();
    console.log(signInResult);


    // Try the new style of google-sign in result, from v13+ of that module
    let idToken = signInResult.data?.idToken;
    console.log(idToken);
    
    if (!idToken) {
        // if you are using older versions of google-signin, try old style result
        idToken = signInResult.idToken;
    }
    if (!idToken) {
        throw new Error('No ID token found');
    }

    // Create a Google credential with the token
    const googleCredential = GoogleAuthProvider.credential(signInResult.data.token);

    // Sign-in the user with the credential

    return await signInWithCredential(auth,googleCredential);
}