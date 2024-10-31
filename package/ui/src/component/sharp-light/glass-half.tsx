
import { Icon } from "../../index";

/**
 * A component that renders the `glass-half` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-half?s=sharp-light glass-half}
 * @preview ![glass-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/glass-half.svg)
 */
const GlassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M52.1 256l279.8 0L314.4 480 69.6 480 52.1 256zm-2.5-32L34.6 32l314.8 0-15 192L49.6 224zM40 512l304 0L381.5 32 384 0 351.9 0 32.1 0 0 0 2.5 32 40 512z" />
    </Icon>
);

export default GlassHalf;