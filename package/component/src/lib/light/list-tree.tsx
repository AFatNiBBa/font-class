
import { Icon } from "../../index";

/**
 * A component that renders the `list-tree` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-tree?s=light list-tree}
 * @preview ![list-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/list-tree.svg)
 */
const ListTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 112l32 0 0-32L32 80l0 32zM0 72C0 58.7 10.7 48 24 48l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-8 0 0 96 64 0 0-8c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-8-64 0 0 112c0 8.8 7.2 16 16 16l48 0 0-8c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-8-48 0c-26.5 0-48-21.5-48-48l0-128 0-112-8 0c-13.3 0-24-10.7-24-24L0 72zM160 96c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-320 0c-8.8 0-16-7.2-16-16zM288 256c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm0 160c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zM160 432l32 0 0-32-32 0 0 32zm0-192l0 32 32 0 0-32-32 0z" />
    </Icon>
);

export default ListTree;