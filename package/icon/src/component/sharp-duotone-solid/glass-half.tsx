
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-half?s=sharp-duotone-solid glass-half}
 * @preview ![glass-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/glass-half.svg)
 */
const GlassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L5 64 40 512l304 0L379 64l5-64L319.8 0 64.2 0 0 0zM69.2 64l245.6 0c-4.2 53.3-8.3 106.7-12.5 160L284.8 448 99.2 448 81.7 224c-4.2-53.3-8.3-106.7-12.5-160z" />
        <path d="M81.7 224L99.2 448l185.6 0 17.5-224L81.7 224z" />
    </Icon>
);

export default GlassHalf;