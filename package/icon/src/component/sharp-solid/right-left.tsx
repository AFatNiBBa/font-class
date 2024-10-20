
import { Icon } from "../../index";

/**
 * A component that renders the `right-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=sharp-solid right-left}
 * @preview ![right-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/right-left.svg)
 */
const RightLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 0L512 128 384 256l-32 0 0-96L32 160 0 160 0 96l32 0 320 0 0-96 32 0zM128 256l32 0 0 96 320 0 32 0 0 64-32 0-320 0 0 96-32 0L0 384 128 256z" />
    </Icon>
);

export default RightLeft;