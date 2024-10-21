
import { Icon } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=sharp-regular wave-triangle}
 * @preview ![wave-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wave-triangle.svg)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176.1 15.1L195.5 42 464.1 415.1 596.6 233.8l38.8 28.3-152 208-19.5 26.7L444.5 470 175.9 96.9 43.4 278.2 4.6 249.8l152-208 19.5-26.7z" />
    </Icon>
);

export default WaveTriangle;