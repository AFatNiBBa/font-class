
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=sharp-duotone-solid list-dropdown}
 * @preview ![list-dropdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/list-dropdown.svg)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M104 232l0 48 24 0 256 0 24 0 0-48-24 0-256 0-24 0zm0 88l0 48 24 0 256 0 24 0 0-48-24 0-256 0-24 0z" />
        <path d="M0 32l512 0 0 448L0 480 0 32zM64 192l0 224 384 0 0-224L64 192zm336-48l48-48-96 0 48 48z" />
    </Icon>
);

export default ListDropdown;