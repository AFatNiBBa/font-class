
import { Icon } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=sharp-solid table-layout}
 * @preview ![table-layout](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/table-layout.svg)
 */
const TableLayout: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM448 96l0 64L64 160l0-64 384 0zM64 224l64 0 0 192-64 0 0-192zm384 0l0 192-256 0 0-192 256 0z" />
    </Icon>
);

export default TableLayout;