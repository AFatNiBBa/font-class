
import { Icon } from "../../index";

/**
 * A component that renders the `glass-half` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-half?s=sharp-solid glass-half}
 * @preview ![glass-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/glass-half.svg)
 */
const GlassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M81.7 224L69.2 64l245.6 0L302.3 224 81.7 224zM40 512l304 0L379 64l5-64L319.8 0 64.2 0 0 0 5 64 40 512z" />
    </Icon>
);

export default GlassHalf;