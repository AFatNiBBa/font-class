
import { Icon } from "../../index";

/**
 * A component that renders the `wave-pulse` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-pulse?s=thin wave-pulse}
 * @preview ![wave-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wave-pulse.svg)
 */
const WavePulse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M319.8 0c3.8-.1 7.1 2.5 8 6.1l90.1 375.6 46.6-116.5c6.1-15.2 20.8-25.1 37.1-25.1L632 240c4.4 0 8 3.6 8 8s-3.6 8-8 8l-130.3 0c-9.8 0-18.6 6-22.3 15.1L423.4 411c-1.3 3.2-4.5 5.3-8 5s-6.4-2.7-7.2-6.1L320.8 45.8l-89 459.7c-.7 3.7-3.9 6.4-7.6 6.5s-7.1-2.4-8-6.1L158.3 274.2C155.6 263.5 146 256 135 256L8 256c-4.4 0-8-3.6-8-8s3.6-8 8-8l127 0c18.4 0 34.4 12.5 38.8 30.3L223 467 312.1 6.5c.7-3.7 3.9-6.4 7.7-6.5z" />
    </Icon>
);

export default WavePulse;