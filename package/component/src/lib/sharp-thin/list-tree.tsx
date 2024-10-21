
import { Icon } from "../../index";

/**
 * A component that renders the `list-tree` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-tree?s=sharp-thin list-tree}
 * @preview ![list-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/list-tree.svg)
 */
const ListTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 64l0 64 24 0 16 0 24 0 0-64L16 64zm24 80l-24 0L0 144l0-16L0 64 0 48l16 0 64 0 16 0 0 16 0 64 0 16-16 0-24 0 0 112 72 0 0-32 0-16 16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-16-72 0 0 144 72 0 0-32 0-16 16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-16-80 0-8 0 0-8 0-160 0-120zM144 416l0 16 0 16 64 0 0-64-64 0 0 32zm0-128l64 0 0-64-64 0 0 32 0 16 0 16zM168 88l8 0 320 0 8 0 0 16-8 0-320 0-8 0 0-16zM296 248l8 0 192 0 8 0 0 16-8 0-192 0-8 0 0-16zm0 160l8 0 192 0 8 0 0 16-8 0-192 0-8 0 0-16z" />
    </Icon>
);

export default ListTree;