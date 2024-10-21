
import { Icon } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=light list-dropdown}
 * @preview ![list-dropdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/list-dropdown.svg)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 64 448 0 0-64c0-17.7-14.3-32-32-32L64 64zM32 192l0 224c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-224L32 192zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM128 256l256 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-256 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l256 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-256 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM352.2 90.3L384 109.3l31.8-19.1c7.6-4.5 17.4-2.1 21.9 5.5s2.1 17.4-5.5 22l-40 24c-5.1 3-11.4 3-16.5 0l-40-24c-7.6-4.5-10-14.4-5.5-22s14.4-10 21.9-5.5z" />
    </Icon>
);

export default ListDropdown;