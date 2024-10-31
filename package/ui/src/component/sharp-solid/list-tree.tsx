
import { Icon } from "../../index";

/**
 * A component that renders the `list-tree` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-tree?s=sharp-solid list-tree}
 * @preview ![list-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/list-tree.svg)
 */
const ListTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 48L0 48l0 96 24 0 0 112 0 160 0 24 24 0 80 0 0 24 96 0 0-96-96 0 0 24-56 0 0-112 56 0 0 24 96 0 0-96-96 0 0 24-56 0 0-88 24 0 0-96zm64 16l0 64 32 0 288 0 32 0 0-64-32 0L192 64l-32 0zM288 224l0 64 32 0 160 0 32 0 0-64-32 0-160 0-32 0zm0 160l0 64 32 0 160 0 32 0 0-64-32 0-160 0-32 0z" />
    </Icon>
);

export default ListTree;