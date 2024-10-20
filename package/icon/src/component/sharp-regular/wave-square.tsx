
import { Icon } from "../../index";

/**
 * A component that renders the `wave-square` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=sharp-regular wave-square}
 * @preview ![wave-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wave-square.svg)
 */
const WaveSquare: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M136 32l24 0 160 0 24 0 0 24 0 376 112 0 0-176 0-24 24 0 136 0 24 0 0 48-24 0-112 0 0 176 0 24-24 0-160 0-24 0 0-24 0-376L184 80l0 176 0 24-24 0L24 280 0 280l0-48 24 0 112 0 0-176 0-24z" />
    </Icon>
);

export default WaveSquare;