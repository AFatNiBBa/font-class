
import { Icon, generic } from "../../index";

/**
 * A component that renders the `columns-3` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/columns-3?s=sharp-duotone-solid columns-3}
 * @preview ![columns-3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/columns-3.svg)
 */
const Columns_3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 96l64 0 0 320-64 0 0-320zm192 0l64 0 0 320-64 0 0-320z" />
        <path d="M640 32L0 32 0 480l640 0 0-448zM576 96l0 320L64 416 64 96l512 0z" />
    </Icon>
);

export default Columns_3;