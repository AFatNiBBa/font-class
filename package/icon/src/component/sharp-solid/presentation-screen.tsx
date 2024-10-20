
import { Icon } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=sharp-solid presentation-screen}
 * @preview ![presentation-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/presentation-screen.svg)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 0L0 0 0 64l32 0 0 256 0 32 32 0 192 0 0 34.7-54.6 54.6L178.7 464 224 509.3l22.6-22.6L288 445.3l41.4 41.4L352 509.3 397.3 464l-22.6-22.6L320 386.7l0-34.7 192 0 32 0 0-32 0-256 32 0 0-64L544 0 480 0 96 0 32 0zM96 64l384 0 0 224-160 0-64 0L96 288 96 64z" />
    </Icon>
);

export default PresentationScreen;