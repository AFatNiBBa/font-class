
import { Icon } from "../../index";

/**
 * A component that renders the `wave-square` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=sharp-light wave-square}
 * @preview ![wave-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wave-square.svg)
 */
const WaveSquare: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 32l16 0 160 0 16 0 0 16 0 400 128 0 0-192 0-16 16 0 144 0 16 0 0 32-16 0-128 0 0 192 0 16-16 0-160 0-16 0 0-16 0-400L176 64l0 192 0 16-16 0L16 272 0 272l0-32 16 0 128 0 0-192 0-16z" />
    </Icon>
);

export default WaveSquare;