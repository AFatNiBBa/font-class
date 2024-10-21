
import { Icon } from "../../index";

/**
 * A component that renders the `wave-square` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=sharp-thin wave-square}
 * @preview ![wave-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wave-square.svg)
 */
const WaveSquare: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 40c0-4.4 3.6-8 8-8l168 0c4.4 0 8 3.6 8 8l0 424 152 0 0-208c0-4.4 3.6-8 8-8l144 0 8 0 0 16-8 0-136 0 0 208c0 4.4-3.6 8-8 8l-168 0c-4.4 0-8-3.6-8-8l0-424L160 48l0 208c0 4.4-3.6 8-8 8L8 264l-8 0 0-16 8 0 136 0 0-208z" />
    </Icon>
);

export default WaveSquare;