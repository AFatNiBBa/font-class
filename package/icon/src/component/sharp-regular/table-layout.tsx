
import { Icon } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=sharp-regular table-layout}
 * @preview ![table-layout](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/table-layout.svg)
 */
const TableLayout: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 80l0 80L48 160l0-80 416 0zM48 432l0-224 96 0 0 224-96 0zm144 0l0-224 272 0 0 224-272 0zM48 32L0 32 0 80 0 432l0 48 48 0 416 0 48 0 0-48 0-352 0-48-48 0L48 32z" />
    </Icon>
);

export default TableLayout;