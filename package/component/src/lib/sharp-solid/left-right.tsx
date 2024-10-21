
import { Icon } from "../../index";

/**
 * A component that renders the `left-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=sharp-solid left-right}
 * @preview ![left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/left-right.svg)
 */
const LeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 128L512 256 384 384l-32 0 0-80-192 0 0 80-32 0L0 256 128 128l32 0 0 80 192 0 0-80 32 0z" />
    </Icon>
);

export default LeftRight;