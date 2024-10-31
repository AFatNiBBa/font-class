
import { Icon } from "../../index";

/**
 * A component that renders the `list` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list?s=sharp-solid list}
 * @preview ![list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/list.svg)
 */
const List: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 48L16 48l0 96 96 0 0-96zm80 16l-32 0 0 64 32 0 288 0 32 0 0-64-32 0L192 64zm0 160l-32 0 0 64 32 0 288 0 32 0 0-64-32 0-288 0zm0 160l-32 0 0 64 32 0 288 0 32 0 0-64-32 0-288 0zM16 208l0 96 96 0 0-96-96 0zm96 160l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default List;