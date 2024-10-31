
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-circle-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-exclamation?s=sharp-duotone-solid house-circle-exclamation}
 * @preview ![house-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-circle-exclamation.svg)
 */
const HouseCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 47.6 64.1 0 0 224.4L224 512l0-160 96.7 0c8.1-89.7 83.5-160 175.3-160c8.3 0 16.5 .6 24.5 1.7L288.4 0 0 240z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160 48l-32 0 0 32 32 0 0-32zm0-128l0-16-32 0 0 16 0 80 0 16 32 0 0-16 0-80z" />
    </Icon>
);

export default HouseCircleExclamation;