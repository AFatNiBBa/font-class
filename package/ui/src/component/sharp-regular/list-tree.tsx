
import { Icon } from "../../index";

/**
 * A component that renders the `list-tree` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-tree?s=sharp-regular list-tree}
 * @preview ![list-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/list-tree.svg)
 */
const ListTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 48L0 48l0 96 24 0 0 112 0 160 0 24 24 0 80 0 0 24 96 0 0-96-96 0 0 24-56 0 0-112 56 0 0 24 96 0 0-96-96 0 0 24-56 0 0-88 24 0 0-96zm64 24l0 48 24 0 304 0 24 0 0-48-24 0L184 72l-24 0zM288 232l0 48 24 0 176 0 24 0 0-48-24 0-176 0-24 0zm0 160l0 48 24 0 176 0 24 0 0-48-24 0-176 0-24 0z" />
    </Icon>
);

export default ListTree;