// @flow
import * as React from 'react'
import { Platform, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import HomeView from '../../screens/Home'
import { fetchPictures } from './actions'

export interface Props {
  navigation: any
  fetchPictures: (reset: boolean) => void
  pictures: []
  isLoading: boolean
  page: number
}

class HomeContainer extends React.Component<Props, {}> {
  static navigationOptions = {
    headerShown: false,
  }

  constructor(props) {
    super(props)
    StatusBar.setBarStyle('light-content')
    Platform.OS === 'android' && StatusBar.setBackgroundColor('#000')
    this.onRefresh = this.onRefresh.bind(this)
    this.onLoadNext = this.onLoadNext.bind(this)
  }

  componentDidMount() {
    this.onRefresh()
  }

  async onRefresh() {
    await this.props.fetchPictures(true)
  }

  async onLoadNext() {
    await this.props.fetchPictures(false)
  }

  render() {
    return (
      <HomeView {...this.props} onRefresh={this.onRefresh} onLoadNext={this.onLoadNext} />
    )
  }
}

function bindAction(dispatch) {
  return {
    fetchPictures: reset => dispatch(fetchPictures(reset)),
  }
}

const mapStateToProps = state => ({
  pictures: state.homeReducer.pictures,
  page: state.homeReducer.page,
  isLoading: state.homeReducer.isLoading,
})

export default connect(
  mapStateToProps,
  bindAction,
)(HomeContainer)
