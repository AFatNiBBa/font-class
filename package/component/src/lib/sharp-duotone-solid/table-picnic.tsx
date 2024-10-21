
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-picnic` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-picnic?s=sharp-duotone-solid table-picnic}
 * @preview ![table-picnic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/table-picnic.svg)
 */
const TablePicnic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16.7 448l17.6-43.9 32-80L80.7 288l68.9 0-24 59.9-32 80-8 20.1-68.9 0zm89.6-224l38.4-96 68.9 0-38.4 96-68.9 0zm192-96l68.9 0 38.4 96-68.9 0-38.4-96zm64 160l68.9 0 46.4 116.1L495.3 448l-68.9 0-8-20.1L362.3 288z" />
        <path d="M96 64L64 64l0 64 32 0 320 0 32 0 0-64-32 0L96 64zM32 224L0 224l0 64 32 0 448 0 32 0 0-64-32 0L32 224z" />
    </Icon>
);

export default TablePicnic;