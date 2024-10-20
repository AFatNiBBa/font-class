
import { Icon } from "../../index";

/**
 * A component that renders the `table-tree` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=sharp-regular table-tree}
 * @preview ![table-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/table-tree.svg)
 */
const TableTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 160l0 272 416 0 0-272-336 0 0 80 48 0 16 0 0 32-16 0-48 0 0 64 112 0 16 0 0 32-16 0-128 0-16 0 0-16 0-80 0-16 0-96-48 0zM0 32l48 0 416 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM224 224l192 0 0 64-192 0 0-64zm192 96l0 64-128 0 0-64 128 0z" />
    </Icon>
);

export default TableTree;