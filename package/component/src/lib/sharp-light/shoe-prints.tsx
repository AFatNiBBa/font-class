
import { Icon } from "../../index";

/**
 * A component that renders the `shoe-prints` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shoe-prints?s=sharp-light shoe-prints}
 * @preview ![shoe-prints](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shoe-prints.svg)
 */
const ShoePrints: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M327.6 128l6.8 3.4 117.4 58.7L608 151l0-64L445.4 32.9 288 59.1l0 68.9 32 0 7.6 0zM288 160l-32 0 0-32 0-96L448 0 640 64l0 112L448 224 320 160l-32 0zm-160 0l0-16 0-96 0-16 16 0 80 0 0 32-64 0 0 64 64 0 0 32-80 0-16 0zm71.6 224l-7.6 0-32 0 0 68.9 157.4 26.2L480 424.9l0-63.9L323.7 321.9 206.3 380.6l-6.8 3.4zM160 352l32 0 128-64 192 48 0 112L320 512 128 480l0-96 0-32 32 0zM0 352l16 0 80 0 0 32-64 0 0 64 64 0 0 32-80 0L0 480l0-16 0-96 0-16z" />
    </Icon>
);

export default ShoePrints;