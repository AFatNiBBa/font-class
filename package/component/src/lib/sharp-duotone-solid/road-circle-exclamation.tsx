
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-circle-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-circle-exclamation?s=sharp-duotone-solid road-circle-exclamation}
 * @preview ![road-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/road-circle-exclamation.svg)
 */
const RoadCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 480l256 0 0-64 0-32 32.7 0c-.5-5.3-.7-10.6-.7-16c0-16.6 2.3-32.7 6.6-48L288 320l0-32 0-64 0-32 64 0 0 32 0 42.8c31.9-45.2 84.5-74.8 144-74.8c10.4 0 20.6 .9 30.5 2.6L480 32 352 32l0 64 0 32-64 0 0-32 0-64L160 32 32 480z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160 48l-32 0 0 32 32 0 0-32zm0-128l0-16-32 0 0 16 0 80 0 16 32 0 0-16 0-80z" />
    </Icon>
);

export default RoadCircleExclamation;