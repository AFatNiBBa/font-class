
import { Icon } from "../../index";

/**
 * A component that renders the `mug` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=sharp-solid mug}
 * @preview ![mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mug.svg)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 64L32 64l0 384 384 0 0-128 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-32 0-32 0zm32 64l32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0-128z" />
    </Icon>
);

export default Mug;