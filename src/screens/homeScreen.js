import React,{ Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { deviceHeight, deviceWidth, INFO_ICON, FAVBOX_ICON, COPY_ICON } from '../common/constant';
import { getRequest } from '../helper/apiHelper';

export default class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            links: [{id:1,link:'https://api.kanye.rest'},{id:2,link:'https://api.taylor.rest'}],
            currentLink: -1,
            isLoading: false,
            counter: 0
        }
    }

    componentDidMount() {
        this.customHeader()
        this.getAdvice()
    }

     // Function to get Api response
     getAdvice() {
        
        const randomElement = this.state.links[Math.floor(Math.random() * this.state.links.length)];
        this.setState({isLoading: true, currentLink: randomElement.id})
        let url = randomElement.link
        getRequest(
            url,
            {
                'Content-Type' : 'application/json'
            },
            (error,response) => {
                if (error == null && response == null) {
                    alert('Something went wrong')
                } else if (error != null) {
                    alert(JSON.stringify(error))
                } else  {
                    this.handleGetAdvice(response)
                }
            }
        )
    }

    // Handler for API function
    handleGetAdvice = (response) => {
    this.setState({isLoading: false})
        if (response != null) {
            this.setState({data: response})
            console.log(JSON.stringify(response))
        }
    }

    // Custom Header Function
    customHeader() {
        this.props.navigation.setOptions({
            title: 'quoter',
            headerTitleAlign: 'center',
            headerTitleAllowFontScaling: false,
            headerTitleStyle: {
                textTransform: 'uppercase',
                letterSpacing: 4,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff'
            },
            headerStyle: {
                backgroundColor: '#363636',
                elevation: 0
                
            },
            headerRight:() => {
                return (
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('InfoScreen')}}
                    >
                        <Image source={INFO_ICON} style={{tintColor: '#fff',height:0.08 * deviceWidth, width:0.08 * deviceWidth, resizeMode: 'contain', marginRight: 0.027 * deviceWidth}} />
                    </TouchableOpacity>
                )
            },
        })
    }

    // Generate Button Click Function
    tapGenerateButton() {
        this.getAdvice()
        this.setState({ counter: this.state.counter + 1})
        if (this.state.counter == 5) {
            //this.showInterstitialAd()
            this.setState({counter: 0})
        }
    }

    render() {
        let mainView = <View/>
        let loadingView = (
            <View>
                <ActivityIndicator color='#fff' size='large' />
            </View>
        )
        if ( this.state.isLoading ) {
            mainView = loadingView
        } else {
            mainView = (
                <View style={{justifyContent:'center',alignItems: 'center'}}>
                    <Text
                    allowFontScaling={false}
                    style={styles.quoteText}
                    >
                        {this.state.data.quote}
                    </Text>
                </View>
                
            )
        }
        return (
            <View style={styles.container}>
                 <Text
                    allowFontScaling={false}
                    style={styles.tagLine}
                >
                    {'A simple QUOTE Giver'}
                </Text>

                <View style={styles.cardView}>
                    {mainView}
                    
                    
                    <View style={{width:'100%', justifyContent: 'center'}}>
                    <TouchableOpacity 
                        style={{alignSelf: 'flex-end'}}
                        onPress={() => {
                            Clipboard.setString(this.state.data.quote)
                            this.showSnackbar()
                        }}>
                            <Image source={this.state.isLoading ? null : COPY_ICON} style={{tintColor: '#fff',height: 0.08 * deviceWidth, width:0.08 * deviceWidth,alignSelf:'flex-end',marginTop:0.015 * deviceHeight}} />   
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.generateButton}
                    onPress={() => {
                       this.tapGenerateButton()
                    }}
                >
                    <Text
                        allowFontScaling={false}
                        style={styles.buttonText}
                    >
                        Generate Random
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


// Style Sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363636',
        alignItems: 'center'
    },
    cardView: {
        height: '70%',
        width: deviceWidth - 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(29,29,29,0.5)',
        //borderWidth: 2,
        padding:5,
        marginTop: 10
    },
    quoteText: {
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'italic',
        color: '#fff'
    },
    tagLine: {
        fontSize: 18,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        color: '#fff'
    },
    generateButton: {
        //backgroundColor: '#065c6f',
        width: deviceWidth * 0.67,
        height: 0.09 * deviceHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth:1,
        marginTop:10
    },
    buttonText: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#fff'
    }
})