
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-left?s=sharp-duotone-solid angles-left}
 * @preview ![angles-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/angles-left.svg)
 */
const AnglesLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M210.7 256l22.6-22.6 160-160L416 50.7 461.3 96l-22.6 22.6L301.3 256 438.6 393.4 461.3 416 416 461.3l-22.6-22.6-160-160L210.7 256z" />
        <path d="M18.7 256l22.6 22.6 160 160L224 461.3 269.3 416l-22.6-22.6L109.3 256 246.6 118.6 269.3 96 224 50.7 201.4 73.4l-160 160L18.7 256z" />
    </Icon>
);

export default AnglesLeft;