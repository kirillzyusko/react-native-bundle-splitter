import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Enhanced cache management',
    image: require('@site/static/img/caching.png').default,
    description: (
      <>
        Load component only once and then reuse it without additional CPU expensive operations
      </>
    ),
  },
  {
    title: 'Ability to preload component',
    Svg: require('@site/static/img/time.svg').default,
    description: (
      <>
        You can preload any components and be sure that you can immediately display them without any delays
      </>
    ),
  },
  {
    title: 'Supporting all navigation libraries',
    Svg: require('@site/static/img/route-svgrepo-com.svg').default,
    description: (
      <>
        This library was created mostly for separating screens by navigation route and easily integrate with any navigation library
      </>
    ),
  },
];

const imageStyle = {
  width: 80,
  height: 80,
  marginBottom: 10,
}

function Feature({title, Svg, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg style={imageStyle} role="img" />}
        {image && <img style={imageStyle} src={image} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
