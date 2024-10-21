
import { Icon } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=solid presentation-screen}
 * @preview ![presentation-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/presentation-screen.svg)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 224c0 35.3 28.7 64 64 64l160 0 0 34.7-70.6 70.6c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 445.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L320 386.7l0-34.7 160 0c35.3 0 64-28.7 64-64l0-224c17.7 0 32-14.3 32-32s-14.3-32-32-32L512 0 64 0 32 0zM96 64l384 0 0 224-192 0L96 288 96 64z" />
    </Icon>
);

export default PresentationScreen;