import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export interface IYouWonButtonProps {
    mountedCallBack: () => void;
    unmountedCallback: () => void;
}

export default class YouWonButton extends React.Component<IYouWonButtonProps> {
    componentDidMount() {
        let { mountedCallBack } = this.props;
        mountedCallBack();
    }

    componentWillUnmount() {
        let { unmountedCallback } = this.props;
        unmountedCallback();
    }

    public render() {
        return (
            <Button
                content="YOU WON YAAAY!!!"
                color="green"
                as={Link}
                to={"/"}
            />
        );
    }
}
