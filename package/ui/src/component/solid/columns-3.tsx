
import { Icon } from "../../index";

/**
 * A component that renders the `columns-3` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/columns-3?s=solid columns-3}
 * @preview ![columns-3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/columns-3.svg)
 */
const Columns_3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM192 96l0 320L64 416 64 96l128 0zm64 0l128 0 0 320-128 0 0-320zm320 0l0 320-128 0 0-320 128 0z" />
    </Icon>
);

export default Columns_3;