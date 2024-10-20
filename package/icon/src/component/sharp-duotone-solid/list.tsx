
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list?s=sharp-duotone-solid list}
 * @preview ![list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/list.svg)
 */
const List: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 64l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64zm0 160l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64zm0 160l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64z" />
        <path d="M16 48l96 0 0 96-96 0 0-96zm0 160l96 0 0 96-96 0 0-96zm96 160l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default List;