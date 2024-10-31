
import { Icon } from "../../index";

/**
 * A component that renders the `table-list` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-list?s=sharp-regular table-list}
 * @preview ![table-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/table-list.svg)
 */
const TableList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 80l0 88 272 0 0-88L192 80zm-48 0L48 80l0 88 96 0 0-88zM48 216l0 80 96 0 0-80-96 0zm0 128l0 88 96 0 0-88-96 0zm144 88l272 0 0-88-272 0 0 88zM464 296l0-80-272 0 0 80 272 0zM0 32l48 0 416 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32z" />
    </Icon>
);

export default TableList;