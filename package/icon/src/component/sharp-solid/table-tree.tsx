
import { Icon } from "../../index";

/**
 * A component that renders the `table-tree` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=sharp-solid table-tree}
 * @preview ![table-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/table-tree.svg)
 */
const TableTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM448 160l0 256L64 416l0-256 32 0 0 96 0 16 0 80 0 16 16 0 128 0 16 0 0-32-16 0-112 0 0-64 48 0 16 0 0-32-16 0-48 0 0-80 320 0zM224 224l0 64 192 0 0-64-192 0zm192 96l-128 0 0 64 128 0 0-64z" />
    </Icon>
);

export default TableTree;