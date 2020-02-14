/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Home from './containers/HomeContainer/index'
import { createAppContainer } from 'react-navigation'
import DetailView from './containers/DetailViewContainer/index'

import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

if (__DEV__) {
  // tslint:disable-next-line
  console.trace = Reactotron.log

  Reactotron.configure() // controls connection & communication settings
    .useReactNative({}) // add all built-in react native plugins
    .use(reactotronRedux())
    .connect() // let's connect!
}

const Navigation = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home },
      DetailView: { screen: DetailView },
    },
    {
      initialRouteName: 'Home',
      headerMode: 'screen',
    },
  ),
)

// iPhone X safe area (top and bottom color)
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
})

export interface State {
  store
}
export default class Setup extends React.Component<{}, State> {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Provider store={configureStore()}>
          <Navigation />
        </Provider>
      </SafeAreaView>
    )
  }
}
