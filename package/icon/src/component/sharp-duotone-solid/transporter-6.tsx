
import { Icon, generic } from "../../index";

/**
 * A component that renders the `transporter-6` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-6?s=sharp-duotone-solid transporter-6}
 * @preview ![transporter-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/transporter-6.svg)
 */
const Transporter_6: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 48L32 32 48 0 64 32 96 48 64 64 48 96 32 64 0 48zM96 256l16 0 288 0 16 0 0 32-16 0-288 0-16 0 0-32zM208 0l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32zM416 400l32-16 16-32 16 32 32 16-32 16-16 32-16-32-32-16z" />
        <path d="M96 448H416v64H96V448z" />
    </Icon>
);

export default Transporter_6;