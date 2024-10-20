
import { Icon, generic } from "../../index";

/**
 * A component that renders the `transporter-7` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-7?s=sharp-duotone-solid transporter-7}
 * @preview ![transporter-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/transporter-7.svg)
 */
const Transporter_7: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304l32 16 16 32 16-32 32-16L64 288 48 256 32 288 0 304zM416 80l32 16 16 32 16-32 32-16L480 64 464 32 448 64 416 80z" />
        <path d="M96 448H416v64H96V448z" />
    </Icon>
);

export default Transporter_7;