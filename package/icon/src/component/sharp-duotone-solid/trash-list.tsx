
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=sharp-duotone-solid trash-list}
 * @preview ![trash-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-list.svg)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l304 0L384 96 32 96z" />
        <path d="M288 0L128 0 112 32 0 32 0 96l424 0 0-64L304 32 288 0zM448 128l0 64 192 0 0-64-192 0zm0 128l0 64 160 0 0-64-160 0zm96 128l-96 0 0 64 96 0 0-64z" />
    </Icon>
);

export default TrashList;