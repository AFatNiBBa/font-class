
import { Icon } from "../../index";

/**
 * A component that renders the `table-columns` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-columns?s=sharp-thin table-columns}
 * @preview ![table-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/table-columns.svg)
 */
const TableColumns: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l480 0 0 112L16 160 16 48zm0 416l0-288 232 0 0 288L16 464zm248 0l0-288 232 0 0 288-232 0zM0 464l0 16 16 0 480 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464z" />
    </Icon>
);

export default TableColumns;