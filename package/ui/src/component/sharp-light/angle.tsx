
import { Icon } from "../../index";

/**
 * A component that renders the `angle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=sharp-light angle}
 * @preview ![angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/angle.svg)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M209.6 41.1L11.2 457.1 .2 480l25.4 0L432 480l16 0 0-32-16 0L51 448 238.4 54.9 209.6 41.1zm14.8 131.4l-14.5 29c26.2 18.9 49.3 42 68.3 68.1l27.1-17.2c-22.2-31-49.6-58.1-80.9-79.9zM333.4 408l32.3 0c-4.9-40.9-17.1-79.6-35.3-114.7l-27.1 17.2c15.2 30 25.6 62.8 30.2 97.5z" />
    </Icon>
);

export default Angle;