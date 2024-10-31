
import { Icon } from "../../index";

/**
 * A component that renders the `table-tree` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=sharp-thin table-tree}
 * @preview ![table-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/table-tree.svg)
 */
const TableTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 112 480 0 0-112L16 48zm0 128l0 288 480 0 0-288-384 0 0 96 72 0 8 0 0 16-8 0-72 0 0 80 136 0 8 0 0 16-8 0-144 0-8 0 0-8 0-88 0-8 0-104-80 0zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM224 272l192 0 0 16-192 0 0-16zm192 96l0 16-128 0 0-16 128 0z" />
    </Icon>
);

export default TableTree;