import React, { Component } from 'react';

import Feature from './Feature';

class FeaturesOverview extends Component {
  render() {
    const { features } = this.props;
      return (
        <form className="main__form">
          <h2>Customize your laptop</h2>
            {Object.keys(features).map((feature, idx) => 
              <Feature 
                feature={feature}
                index={idx}
                key={feature + '-' + idx}
                featureHash={feature + '-' + idx}
                features={this.props.features} 
                selected={this.props.selected} 
                updateFeature={this.props.updateFeature}
              />
            )}
        </form>
      );
  };
}

export default FeaturesOverview;