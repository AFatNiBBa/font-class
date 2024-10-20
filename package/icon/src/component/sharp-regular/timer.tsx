
import { Icon } from "../../index";

/**
 * A component that renders the `timer` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timer?s=sharp-regular timer}
 * @preview ![timer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/timer.svg)
 */
const Timer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0C397.4 0 512 114.6 512 256s-114.6 256-256 256S0 397.4 0 256c0-37.9 8.2-73.8 23-106.1c6-13.2 13.1-25.8 21.2-37.6l.1-.2C53.4 98.7 63.6 86.3 75 75l33.9 33.9c-9.2 9.2-17.6 19.3-25 30.1l-.1 .2c-21.2 31.2-34.2 68.5-35.7 108.7c-.1 2.7-.2 5.4-.2 8.1c0 114.9 93.1 208 208 208s208-93.1 208-208c0-106.8-80.4-194.7-184-206.6l0 54.6 0 24-24 0-24 0 0-24 0-80 0-24 24 0zM176 142.1l17 17 80 80 17 17L256 289.9l-17-17-80-80-17-17L176 142.1z" />
    </Icon>
);

export default Timer;