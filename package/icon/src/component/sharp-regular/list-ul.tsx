
import { Icon } from "../../index";

/**
 * A component that renders the `list-ul` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-ul?s=sharp-regular list-ul}
 * @preview ![list-ul](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/list-ul.svg)
 */
const ListUl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm120 8l-24 0 0 48 24 0 304 0 24 0 0-48-24 0L184 72zm0 160l-24 0 0 48 24 0 304 0 24 0 0-48-24 0-304 0zm0 160l-24 0 0 48 24 0 304 0 24 0 0-48-24 0-304 0zM96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default ListUl;