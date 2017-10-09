import * as React from 'react';
import {render} from 'react-dom';

const App = WONDER.App;

class Entry extends React.Component{
    public render(){
        return (
            <Provider {...stores}>
                <App>
                    <View type="hash">
                        <Pages exact path="/" component={IndexPage}/>
                        <Pages exact path="/result/:status" component={ResultPage}/>
                    </View>
                    <Preloader visible={UIState.showPreloader}></Preloader>
                </App>
            </Provider>
        );
    }
}
render(<Entry/>, document.querySelector('.root'));