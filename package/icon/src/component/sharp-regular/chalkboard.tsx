
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=sharp-regular chalkboard}
 * @preview ![chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chalkboard.svg)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M56 32L32 32l0 24 0 344 48 0L80 80l416 0 0 320 48 0 0-344 0-24-24 0L56 32zM224 352l0 24 0 56L24 432 0 432l0 48 24 0 200 0 24 0 144 0 24 0 136 0 24 0 0-48-24 0-136 0 0-56 0-24-24 0-144 0-24 0zm144 48l0 32-96 0 0-32 96 0z" />
    </Icon>
);

export default Chalkboard;