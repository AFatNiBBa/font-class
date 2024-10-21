
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-ul` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-ul?s=sharp-duotone-solid list-ul}
 * @preview ![list-ul](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/list-ul.svg)
 */
const ListUl: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 64l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64zm0 160l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64zm0 160l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64z" />
        <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default ListUl;