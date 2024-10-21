
import { Icon } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=regular wave-triangle}
 * @preview ![wave-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/wave-triangle.svg)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176.1 32c7.7 0 14.9 3.7 19.4 10L464.1 415.1 596.6 233.8c7.8-10.7 22.8-13 33.5-5.2s13 22.8 5.2 33.5l-152 208c-4.5 6.2-11.8 9.9-19.5 9.8s-14.9-3.7-19.4-10L175.9 96.9 43.4 278.2c-7.8 10.7-22.8 13-33.5 5.2s-13-22.8-5.2-33.5l152-208c4.5-6.2 11.8-9.9 19.5-9.8z" />
    </Icon>
);

export default WaveTriangle;