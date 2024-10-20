
import { Icon } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=thin wave-triangle}
 * @preview ![wave-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wave-triangle.svg)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176.1 32c2.6 0 5.1 1.4 6.6 3.6L464.2 457.8 625.4 227.4c2.5-3.6 7.5-4.5 11.1-2s4.5 7.5 2 11.1l-168 240c-1.5 2.2-4 3.4-6.6 3.4s-5.1-1.4-6.6-3.6L175.8 54.2 14.6 284.6c-2.5 3.6-7.5 4.5-11.1 2s-4.5-7.5-2-11.1l168-240c1.5-2.2 4-3.4 6.6-3.4z" />
    </Icon>
);

export default WaveTriangle;