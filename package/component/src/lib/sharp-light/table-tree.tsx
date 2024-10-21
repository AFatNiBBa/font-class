
import { Icon } from "../../index";

/**
 * A component that renders the `table-tree` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=sharp-light table-tree}
 * @preview ![table-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/table-tree.svg)
 */
const TableTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 96 64 0 32 0 352 0 0-96L32 64zM96 192l-64 0 0 256 448 0 0-256-352 0 0 64 48 0 16 0 0 32-16 0-48 0 0 64 112 0 16 0 0 32-16 0-128 0-16 0 0-16 0-80 0-16 0-80zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM224 256l192 0 0 32-192 0 0-32zm192 96l0 32-128 0 0-32 128 0z" />
    </Icon>
);

export default TableTree;