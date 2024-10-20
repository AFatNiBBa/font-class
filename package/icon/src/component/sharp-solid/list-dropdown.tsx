
import { Icon } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=sharp-solid list-dropdown}
 * @preview ![list-dropdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/list-dropdown.svg)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM448 192l0 224L64 416l0-224 384 0zM352 96l96 0-48 48L352 96zM128 232l-24 0 0 48 24 0 256 0 24 0 0-48-24 0-256 0zm0 96l-24 0 0 48 24 0 256 0 24 0 0-48-24 0-256 0z" />
    </Icon>
);

export default ListDropdown;