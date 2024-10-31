
import { Icon } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=regular table-layout}
 * @preview ![table-layout](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/table-layout.svg)
 */
const TableLayout: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 80c8.8 0 16 7.2 16 16l0 64L48 160l0-64c0-8.8 7.2-16 16-16l384 0zM48 416l0-208 96 0 0 224-80 0c-8.8 0-16-7.2-16-16zm144 16l0-224 272 0 0 208c0 8.8-7.2 16-16 16l-256 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default TableLayout;