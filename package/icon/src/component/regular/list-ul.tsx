
import { Icon } from "../../index";

/**
 * A component that renders the `list-ul` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-ul?s=regular list-ul}
 * @preview ![list-ul](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/list-ul.svg)
 */
const ListUl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm120 8c-13.3 0-24 10.7-24 24s10.7 24 24 24l304 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L184 72zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l304 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-304 0zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l304 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-304 0zM96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default ListUl;