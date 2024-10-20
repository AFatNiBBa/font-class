
import { Icon } from "../../index";

/**
 * A component that renders the `wave-square` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=regular wave-square}
 * @preview ![wave-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/wave-square.svg)
 */
const WaveSquare: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M136 56c0-13.3 10.7-24 24-24l160 0c13.3 0 24 10.7 24 24l0 376 112 0 0-176c0-13.3 10.7-24 24-24l136 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0 0 176c0 13.3-10.7 24-24 24l-160 0c-13.3 0-24-10.7-24-24l0-376L184 80l0 176c0 13.3-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0 0-176z" />
    </Icon>
);

export default WaveSquare;