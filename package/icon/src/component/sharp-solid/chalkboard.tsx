
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=sharp-solid chalkboard}
 * @preview ![chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chalkboard.svg)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32L32 32l0 32 0 320 64 0L96 96l384 0 0 288 64 0 0-320 0-32-32 0L64 32zM224 352l0 64L32 416 0 416l0 64 32 0 512 0 32 0 0-64-32 0-128 0 0-64-192 0z" />
    </Icon>
);

export default Chalkboard;