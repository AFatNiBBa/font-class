
import { Icon } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=sharp-light wave-triangle}
 * @preview ![wave-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wave-triangle.svg)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176.2 32.3l12.7 17.4L464.2 425.9l147-195.6 25.6 19.2-160 212.8-13 17.2-12.7-17.4L175.8 86.1 28.8 281.6 3.2 262.4l160-212.8 13-17.2z" />
    </Icon>
);

export default WaveTriangle;