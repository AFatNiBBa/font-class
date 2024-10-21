
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=sharp-duotone-solid table-layout}
 * @preview ![table-layout](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/table-layout.svg)
 */
const TableLayout: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 160l384 0 0 64-256 0 0 192-64 0 0-192-64 0 0-64z" />
        <path d="M512 32L0 32 0 480l512 0 0-448zM448 96l0 320L64 416 64 96l384 0z" />
    </Icon>
);

export default TableLayout;