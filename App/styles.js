const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
    flexDirection: 'row'
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
    width: 150
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'flex-start',
    height: 55,
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom:20,
    //paddingLeft: 10
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 70,
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },

  formContainer: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 10,
    backgroundColor: '#ffffff',
    flex: 1,
  },

  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  backButton: {
   color: '#444',
   fontSize: 18,
   marginLeft: 5,
   alignSelf: 'flex-start',
   justifyContent: 'flex-start'
  },

  statusBarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500",
    alignSelf: 'center'

  },
  statusBar: {
    paddingTop: 30,
    flexDirection: 'row',
    paddingBottom: 20,
    justifyContent: 'center',
  },
  chart: {
    flex: 1
  },
  baseText: {
  //  fontFamily: 'Cochin',
  },
  titleText: {
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: "#696969",
  //  fontFamily: 'Cochin'
  },
  normalText: {
    paddingLeft: 5,
    fontSize: 14,
    justifyContent: 'center',
    color: "#696969",
  //  fontFamily: 'Cochin'
  },
  nadiTitle: {
    color: '#1E90FF',
    //fontFamily: 'Cochin'
  },
  notice: {
    fontSize: 10,
    color: 'grey'
  },
  subjectNotice: {
    paddingLeft: 5,
    fontSize: 14,
    justifyContent: 'center',
    color: "#696969",
  //  fontFamily: 'Cochin'
}
})

module.exports = styles
module.exports.constants = constants;
