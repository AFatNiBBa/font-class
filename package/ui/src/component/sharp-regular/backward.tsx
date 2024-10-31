
import { Icon } from "../../index";

/**
 * A component that renders the `backward` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=sharp-regular backward}
 * @preview ![backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/backward.svg)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M43.3 284.8L0 256l43.3-28.8L240 96l48-32 0 57.7 0 76.7L464 92.8 512 64l0 56 0 272 0 56-48-28.8L288 313.6l0 76.7 0 57.7-48-32L43.3 284.8zM288 257.6L464 363.2l0-214.4L288 254.4l0 3.2zM240 358.3l0-204.6L86.5 256 240 358.3z" />
    </Icon>
);

export default Backward;