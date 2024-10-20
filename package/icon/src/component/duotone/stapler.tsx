
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stapler` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=duotone stapler}
 * @preview ![stapler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/stapler.svg)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 219.4L64 320c0 17.7 14.3 32 32 32l352 0 0-64c-128-22.9-256-45.7-384-68.6z" />
        <path d="M640 304l0-4.7c0-36.4-20.5-69.6-53.1-85.9L260.7 50.4C236.6 38.3 209.9 32 182.9 32C128.2 32 76.7 57.8 43.8 101.6L8.2 149.1C2.9 156.2 0 164.8 0 173.7c0 19.9 14.2 36.9 33.8 40.4L448 288l0 128L64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0 64 0 80 0c26.5 0 48-21.5 48-48l0-128z" />
    </Icon>
);

export default Stapler;