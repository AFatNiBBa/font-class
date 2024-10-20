
import { Icon } from "../../index";

/**
 * A component that renders the `list` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list?s=sharp-regular list}
 * @preview ![list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/list.svg)
 */
const List: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 48L16 48l0 96 96 0 0-96zm72 24l-24 0 0 48 24 0 304 0 24 0 0-48-24 0L184 72zm0 160l-24 0 0 48 24 0 304 0 24 0 0-48-24 0-304 0zm0 160l-24 0 0 48 24 0 304 0 24 0 0-48-24 0-304 0zM16 208l0 96 96 0 0-96-96 0zm96 160l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default List;