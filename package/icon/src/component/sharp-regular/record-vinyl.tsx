
import { Icon } from "../../index";

/**
 * A component that renders the `record-vinyl` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/record-vinyl?s=sharp-regular record-vinyl}
 * @preview ![record-vinyl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/record-vinyl.svg)
 */
const RecordVinyl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm120 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default RecordVinyl;