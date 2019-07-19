import React, { Component } from 'react';
import { getScreen } from './map';

const optimized = (screenName: string, staticProps?: object) => {
  class Optimized extends Component {
    component = null;
    state = { needsExpensive: false };

    componentDidMount() {
      if (this.component === null) {
        // console.time(`Require ${screenName} took`);
        this.component = getScreen(screenName).default;
        // console.timeEnd(`Require ${screenName} took`);
      }

      this.setState(() => ({
        needsExpensive: true,
      }));
    }

    render() {
      const OptimizedComponent = this.component;

      return this.state.needsExpensive ? <OptimizedComponent {...this.props} /> : null;
    }
  }

  // console.log(`Screen ${screenName} has next static props ${staticProps}`);

  if (staticProps) {
    Object.keys(staticProps).forEach((key) => {
      // console.log(`${screenName} ${key} ${staticProps[key]}`);
      Optimized[key] = staticProps[key];
    });
  }

  return Optimized;
};

export default optimized;