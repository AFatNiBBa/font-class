
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-pivot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-pivot?s=sharp-duotone-solid table-pivot}
 * @preview ![table-pivot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/table-pivot.svg)
 */
const TablePivot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192l128 0 0 224 320 0 0-256-288 0 0-128 352 0 0 448L0 480 0 192z" />
        <path d="M128 32L0 32 0 160l128 0 0-128zM368 192l-48 48 0 16 32 0 0 64-64 0 0-32-16 0-48 48 48 48 16 0 0-32 80 0 16 0 0-16 0-80 32 0 0-16-48-48z" />
    </Icon>
);

export default TablePivot;