
import { Icon } from "../../index";

/**
 * A component that renders the `list-tree` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-tree?s=sharp-light list-tree}
 * @preview ![list-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/list-tree.svg)
 */
const ListTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 80l0 32 32 0 0-32L32 80zM0 48l32 0 32 0 32 0 0 32 0 32 0 32-32 0 0 96 64 0 0-32 32 0 32 0 32 0 0 32 0 32 0 32-32 0-32 0-32 0 0-32-64 0 0 128 64 0 0-32 32 0 32 0 32 0 0 32 0 32 0 32-32 0-32 0-32 0 0-32-80 0-16 0 0-16 0-160 0-112L0 144l0-32L0 80 0 48zM160 80l16 0 320 0 16 0 0 32-16 0-320 0-16 0 0-32zM288 240l16 0 192 0 16 0 0 32-16 0-192 0-16 0 0-32zm0 160l16 0 192 0 16 0 0 32-16 0-192 0-16 0 0-32zM192 240l-32 0 0 32 32 0 0-32zM160 400l0 32 32 0 0-32-32 0z" />
    </Icon>
);

export default ListTree;