
import { Icon, generic } from "../../index";

/**
 * A component that renders the `transporter-5` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-5?s=sharp-duotone-solid transporter-5}
 * @preview ![transporter-5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/transporter-5.svg)
 */
const Transporter_5: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 176l32 16 16 32 16-32 32-16L64 160 48 128 32 160 0 176zm96 80l0 32 16 0 288 0 16 0 0-32-16 0-288 0-16 0zm64-128l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0zm0 256l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0zM208 0l0 32 16 0 64 0 16 0 0-32L288 0 224 0 208 0zM416 48l32 16 16 32 16-32 32-16L480 32 464 0 448 32 416 48z" />
        <path d="M96 448H416v64H96V448z" />
    </Icon>
);

export default Transporter_5;