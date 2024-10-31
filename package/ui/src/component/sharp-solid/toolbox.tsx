
import { Icon } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=sharp-solid toolbox}
 * @preview ![toolbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/toolbox.svg)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 32l-24 0 0 24 0 72-48 0L0 208 0 320l128 0 0-32 0-32 64 0 0 32 0 32 128 0 0-32 0-32 64 0 0 32 0 32 128 0 0-112-80-80-48 0 0-72 0-24-24 0L152 32zm184 96l-160 0 0-48 160 0 0 48zM0 480l512 0 0-128-128 0 0 32-64 0 0-32-128 0 0 32-64 0 0-32L0 352 0 480z" />
    </Icon>
);

export default Toolbox;