
import { Icon } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=sharp-regular list-dropdown}
 * @preview ![list-dropdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/list-dropdown.svg)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 192l0 240 416 0 0-240L48 192zM0 32l48 0 416 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM352 96l48 48 48-48-96 0zM128 232l256 0 24 0 0 48-24 0-256 0-24 0 0-48 24 0zm0 96l256 0 24 0 0 48-24 0-256 0-24 0 0-48 24 0z" />
    </Icon>
);

export default ListDropdown;