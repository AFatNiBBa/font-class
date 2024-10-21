
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-columns` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-columns?s=sharp-duotone-solid building-columns}
 * @preview ![building-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-columns.svg)
 */
const BuildingColumns: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 464l0 48 512 0 0-48-64-48 0-224-64 0 0 224-40 0 0-224-64 0 0 224-48 0 0-224-64 0 0 224-40 0 0-224-64 0 0 224L0 464z" />
        <path d="M0 144l0 48 512 0 0-48L256 0 0 144zM256 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default BuildingColumns;