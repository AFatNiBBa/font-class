
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mars-stroke-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke-right?s=sharp-duotone-solid mars-stroke-right}
 * @preview ![mars-stroke-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mars-stroke-right.svg)
 */
const MarsStrokeRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 256a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M320 256A112 112 0 1 0 96 256a112 112 0 1 0 224 0zm62.4 24C370.7 365.8 297.1 432 208 432c-97.2 0-176-78.8-176-176s78.8-176 176-176c89.1 0 162.7 66.2 174.4 152l33.6 0 0-48 0-24 48 0 0 24 0 48 32 0 0-72 32 0 96 96-96 96-32 0 0-72-32 0 0 48 0 24-48 0 0-24 0-48-33.6 0z" />
    </Icon>
);

export default MarsStrokeRight;