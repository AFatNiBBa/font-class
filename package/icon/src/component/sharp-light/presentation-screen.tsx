
import { Icon } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=sharp-light presentation-screen}
 * @preview ![presentation-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/presentation-screen.svg)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 0L0 0 0 32l16 0 544 0 16 0 0-32L560 0 16 0zM64 80l0-16L32 64l0 16 0 256 0 16 16 0 224 0 0 41.4-83.3 83.3L177.4 488 200 510.6l11.3-11.3L288 422.6l76.7 76.7L376 510.6 398.6 488l-11.3-11.3L304 393.4l0-41.4 224 0 16 0 0-16 0-256 0-16-32 0 0 16 0 240-224 0L64 320 64 80z" />
    </Icon>
);

export default PresentationScreen;