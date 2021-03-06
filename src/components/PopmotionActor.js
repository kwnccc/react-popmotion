import React from 'react/addons';
import PopmotionUI from 'popmotion';

var _ = {
    keys    : require('lodash/object/keys'),
    omit    : require('lodash/object/omit')
};

class PopmotionActorComponent extends React.Component {

    render() {
        return this.props.children;
    }

    componentDidMount() {
        this.actor = this._initializeActor();
        if(this.props.onLoad) {
            this.runAnimation();
        }
    }

    runAnimation() {
        this.actor.start(this.props.action);
    }

    _initializeActor() {
        if(this.props == null) {
            return;
        }

        let actorProps = _.omit(this.props, _.keys(PopmotionActorComponent.propTypes));
        return new PopmotionUI.Actor(actorProps);
    }
}

PopmotionActorComponent.displayName = 'PopmotionActor';

PopmotionActorComponent.propTypes = {
    onLoad      : React.PropTypes.bool,
    action      : React.PropTypes.object,
    children    : React.PropTypes.element.isRequired
}

PopmotionActorComponent.defaultProps = {
    onLoad      : false,
    action      : null
};

export default PopmotionActorComponent;