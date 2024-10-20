
import { Icon } from "../../index";

/**
 * A component that renders the `columns-3` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/columns-3?s=sharp-solid columns-3}
 * @preview ![columns-3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/columns-3.svg)
 */
const Columns_3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 32L0 32 0 480l640 0 0-448zM192 96l0 320L64 416 64 96l128 0zm64 0l128 0 0 320-128 0 0-320zm320 0l0 320-128 0 0-320 128 0z" />
    </Icon>
);

export default Columns_3;