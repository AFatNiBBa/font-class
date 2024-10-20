
import { Icon } from "../../index";

/**
 * A component that renders the `backward-fast` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-fast?s=sharp-regular backward-fast}
 * @preview ![backward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/backward-fast.svg)
 */
const BackwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l0 24 0 134.1L240 97.9 288 64l0 58.8 0 99.4L464 97.9 512 64l0 58.8 0 266.5 0 58.8-48-33.9L288 289.9l0 99.4 0 58.8-48-33.9L64 289.9 64 424l0 24-48 0 0-24 0-168L16 88l0-24 48 0zM240 256l0-99.4L99.2 256 240 355.4l0-99.4zm83.2 0L464 355.4l0-198.7L323.2 256z" />
    </Icon>
);

export default BackwardFast;