
import { Icon } from "../../index";

/**
 * A component that renders the `building-columns` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-columns?s=sharp-solid building-columns}
 * @preview ![building-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/building-columns.svg)
 */
const BuildingColumns: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 144L256 0 512 144l0 48L0 192l0-48zM0 512l0-48 64-48 0-192 64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 192 64 48 0 48L0 512zM256 144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default BuildingColumns;