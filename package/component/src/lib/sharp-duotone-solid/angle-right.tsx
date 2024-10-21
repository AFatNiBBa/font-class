
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angle-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-right?s=sharp-duotone-solid angle-right}
 * @preview ![angle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/angle-right.svg)
 */
const AngleRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M301.3 256l-22.6 22.6-160 160L96 461.3 50.7 416l22.6-22.6L210.7 256 73.4 118.6 50.7 96 96 50.7l22.6 22.6 160 160L301.3 256z" />
    </Icon>
);

export default AngleRight;