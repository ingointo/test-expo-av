// import React, { useCallback, useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
// import { useNavigation } from '@react-navigation/native';
// // import RegistrationScreen from './RegistrationScreen'; // Assuming RegistrationScreen uses navigation
// import LoginScreen from './LoginScreen';
// import OptionScreen from './OptionScreen';
// import BottomDrawer from '../../routes/BottomDrawer';
// import NewCollection from './NewCollection';

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// const Splash = () => {


//   const navigation = useNavigation();
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync(Entypo.font);
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise(resolve => setTimeout(resolve, 20));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       <LoginScreen navigation={navigation} />
//       {/* <BottomDrawer/> */}
//     </View>
//   )
// }

// export default Splash;
// import React, { useCallback, useEffect, useState } from 'react';
// import { View } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// import LoginScreen from './LoginScreen';
// import BottomDrawer from '../../routes/BottomDrawer';

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// const Splash = () => {
//   const navigation = useNavigation();
//   const [appIsReady, setAppIsReady] = useState(false);
//   const [userLoggedIn, setUserLoggedIn] = useState(false); // Track user login state

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await Font.loadAsync({}); // Load fonts (add more if needed)
//         // Check if the user is logged in by retrieving a stored token or data
//         const userToken = await AsyncStorage.getItem('userToken');
//         if (userToken) {
//           console.log("Splashjs i am entered user token: " + userToken)
//           navigation.navigate('BottomDrawer')
//           setUserLoggedIn(true); // User is logged in
//         } 
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (error) {
//         console.error(error);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       {userLoggedIn ? (
//         <BottomDrawer /> // User is logged in, navigate to the main app screen
//       ) : (
//         <LoginScreen navigation={navigation} /> // User is not logged in, show the login screen
//       )}
//     </View>
//   );
// };

// export default Splash;

// import React, { useCallback, useEffect, useState } from 'react';
// import { View } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// import LoginScreen from './LoginScreen';
// import BottomDrawer from '../../routes/BottomDrawer';

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// const Splash = () => {
//   const navigation = useNavigation();
//   const [appIsReady, setAppIsReady] = useState(false);
//   const [userLoggedIn, setUserLoggedIn] = useState(false); // Track user login state

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await Font.loadAsync({}); // Load fonts (add more if needed)
//         // Check if the user is logged in by retrieving a stored token or data
//         const userToken = await AsyncStorage.getItem('userToken');
//         if (userToken) {
//           console.log("Splashjs i am entered user token: " + userToken)
//           // User is logged in, set the state and navigate to the main app screen
//           setUserLoggedIn(true);
//           navigation.navigate('Drawer');
//         }
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (error) {
//         console.error(error);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       {userLoggedIn ? (
//         <BottomDrawer /> // User is logged in, navigate to the main app screen
//       ) : (
//         <LoginScreen navigation={navigation} /> // User is not logged in, show the login screen
//       )}
//     </View>
//   );
// };

// export default Splash;


// import React, { useEffect, useState, useCallback } from 'react';
// import { View } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import { useIsFocused } from '@react-navigation/native'; // Import `useIsFocused`

// import LoginScreen from './LoginScreen';
// import BottomDrawer from '../../routes/BottomDrawer';

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// const Splash = () => {
//   const navigation = useNavigation();
//   const [appIsReady, setAppIsReady] = useState(false);
//   const [userLoggedIn, setUserLoggedIn] = useState(false); // Track user login state

//   // Use `useIsFocused` to track if the screen is focused
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await Font.loadAsync({}); // Load fonts (add more if needed)
//         // Check user authentication when the screen is focused
//         if (isFocused) {
//           // Check if the user is logged in by retrieving a stored token or data
//           const userToken = await AsyncStorage.getItem('userToken');
//           if (userToken) {
//             console.log("Splashjs i am entered user token: " + userToken)
//             // User is logged in, set the state and navigate to the main app screen
//             setUserLoggedIn(true);
//             navigation.navigate('Drawer');
//           }
//         }
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (error) {
//         console.error(error);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, [isFocused, navigation]);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       {userLoggedIn ? (
//         <BottomDrawer /> // User is logged in, navigate to the main app screen
//       ) : (
//         <LoginScreen navigation={navigation} /> // User is not logged in, show the login screen
//       )}
//     </View>
//   );
// };

// export default Splash;

// import React, { useEffect, useState, useCallback } from 'react';
// import { View } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
// import * as Font from 'expo-font';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useIsFocused } from '@react-navigation/native';

// import LoginScreen from './LoginScreen';
// import BottomDrawer from '../../routes/BottomDrawer';

// SplashScreen.preventAutoHideAsync();

// const Splash = () => {
//   const navigation = useNavigation();
//   const [appIsReady, setAppIsReady] = useState(false);
//   const [userLoggedIn, setUserLoggedIn] = useState(false);

//   const isFocused = useIsFocused();

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await Font.loadAsync({});
//         if (isFocused) {
//           const userToken = await AsyncStorage.getItem('userToken');
//           if (userToken) {
//             console.log("Splashjs i am entered user token: " + userToken);
//             setUserLoggedIn(true);
//             navigation.navigate('Drawer');
//           } else {
//             // If the user is not logged in, navigate to the login screen
//             navigation.navigate('LoginScreen');
//           }
//         }
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, [isFocused, navigation]);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   // Render the appropriate screen based on userLoggedIn state
//   return (
//     <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       {userLoggedIn ? (
//         <BottomDrawer /> // User is logged in, navigate to the main app screen
//       ) : (
//         <LoginScreen navigation={navigation} /> // User is not logged in, show the login screen
//       )}
//     </View>
//   );
// };

// export default Splash;

import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

import LoginScreen from './LoginScreen';
import BottomDrawer from '../../routes/BottomDrawer';

SplashScreen.preventAutoHideAsync();

const Splash = () => {
  const navigation = useNavigation();
  const [appIsReady, setAppIsReady] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({});
        if (isFocused) {
          const userToken = await AsyncStorage.getItem('userToken');
          console.log('User Token:', userToken); // Log the user token for debugging
          if (userToken) {
            setUserLoggedIn(true);
          }
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [isFocused]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // Render the appropriate screen based on userLoggedIn state
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {userLoggedIn ? (
        <BottomDrawer /> // User is logged in, navigate to the main app screen
      ) : (
        <LoginScreen navigation={navigation} /> // User is not logged in, show the login screen
      )}
    </View>
  );
};

export default Splash;

