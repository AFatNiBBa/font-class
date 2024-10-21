
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-right?s=sharp-duotone-solid angles-right}
 * @preview ![angles-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/angles-right.svg)
 */
const AnglesRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M50.7 96l22.6 22.6L210.7 256 73.4 393.4 50.7 416 96 461.3l22.6-22.6 160-160L301.3 256l-22.6-22.6-160-160L96 50.7 50.7 96z" />
        <path d="M493.3 256l-22.6 22.6-160 160L288 461.3 242.7 416l22.6-22.6L402.7 256 265.4 118.6 242.7 96 288 50.7l22.6 22.6 160 160L493.3 256z" />
    </Icon>
);

export default AnglesRight;