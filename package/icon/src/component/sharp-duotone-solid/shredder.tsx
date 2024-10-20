
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shredder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=sharp-duotone-solid shredder}
 * @preview ![shredder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shredder.svg)
 */
const Shredder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M40 384l0 104 0 24 48 0 0-24 0-104-48 0zM64 0l0 192 384 0 0-128L384 0 64 0zm72 384l0 104 0 24 48 0 0-24 0-104-48 0zm96 0l0 104 0 24 48 0 0-24 0-104-48 0zm96 0l0 104 0 24 48 0 0-24 0-104-48 0zm96 0l0 104 0 24 48 0 0-24 0-104-48 0z" />
        <path d="M512 192L0 192 0 384l512 0 0-192zm-56 56l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Shredder;