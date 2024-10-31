
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cup-togo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cup-togo?s=sharp-duotone-solid cup-togo}
 * @preview ![cup-togo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cup-togo.svg)
 */
const CupTogo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 128l352 0-8.7 104L56.7 232 48 128zM70 392l308 0L368 512 80 512c-3.3-40-6.7-80-10-120z" />
        <path d="M64 0L32 64 0 64l0 64 32 0 384 0 32 0 0-64-32 0L384 0 64 0zM378 392l13.3-160L56.7 232 70 392l308 0z" />
    </Icon>
);

export default CupTogo;