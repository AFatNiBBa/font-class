
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-circle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-circle?s=sharp-regular arrows-to-circle}
 * @preview ![arrows-to-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrows-to-circle.svg)
 */
const ArrowsToCircle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M52.2 18.2l-17-17L1.3 35.2l17 17L126.1 160 88 160l-24 0 0 48 24 0 96 0 24 0 0-24 0-96 0-24-48 0 0 24 0 38.1L52.2 18.2zM621.8 52.2l17-17L604.8 1.3l-17 17L480 126.1 480 88l0-24-48 0 0 24 0 96 0 24 24 0 96 0 24 0 0-48-24 0-38.1 0L621.8 52.2zM126.1 352L18.2 459.8l-17 17 33.9 33.9 17-17L160 385.9l0 38.1 0 24 48 0 0-24 0-96 0-24-24 0-96 0-24 0 0 48 24 0 38.1 0zM480 385.9L587.8 493.8l17 17 33.9-33.9-17-17L513.9 352l38.1 0 24 0 0-48-24 0-96 0-24 0 0 24 0 96 0 24 48 0 0-24 0-38.1zM320 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default ArrowsToCircle;