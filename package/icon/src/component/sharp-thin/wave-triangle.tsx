
import { Icon } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=sharp-thin wave-triangle}
 * @preview ![wave-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wave-triangle.svg)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176.1 34.1l6.5 9.4L464.1 450.1 622.3 227.4l4.6-6.5 13 9.3-4.6 6.5-164.8 232-6.6 9.3-6.5-9.4L175.9 61.9 17.7 284.6l-4.6 6.5L0 281.9l4.6-6.5 164.8-232 6.6-9.3z" />
    </Icon>
);

export default WaveTriangle;