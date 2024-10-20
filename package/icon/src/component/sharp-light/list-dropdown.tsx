
import { Icon } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=sharp-light list-dropdown}
 * @preview ![list-dropdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/list-dropdown.svg)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l448 0 0 112L32 176 32 64zM512 208l0-32 0-112 0-32-32 0L32 32 0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-32 0-240zM32 208l448 0 0 240L32 448l0-240zm96 48l-16 0 0 32 16 0 256 0 16 0 0-32-16 0-256 0zm0 96l-16 0 0 32 16 0 256 0 16 0 0-32-16 0-256 0zM400 144l48-48-96 0 48 48z" />
    </Icon>
);

export default ListDropdown;