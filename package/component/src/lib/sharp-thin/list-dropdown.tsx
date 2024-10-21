
import { Icon } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=sharp-thin list-dropdown}
 * @preview ![list-dropdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/list-dropdown.svg)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 128 480 0 0-128L16 48zm0 144l0 272 480 0 0-272L16 192zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM120 272l272 0 8 0 0 16-8 0-272 0-8 0 0-16 8 0zm0 96l272 0 8 0 0 16-8 0-272 0-8 0 0-16 8 0zM349 89.8l35 28 35-28 6.2-5 10 12.5-6.2 5-40 32-5 4-5-4-40-32-6.2-5 10-12.5 6.2 5z" />
    </Icon>
);

export default ListDropdown;