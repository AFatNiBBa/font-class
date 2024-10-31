
import { Icon } from "../../index";

/**
 * A component that renders the `glass-half` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-half?s=sharp-regular glass-half}
 * @preview ![glass-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/glass-half.svg)
 */
const GlassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M70.6 288l242.7 0L299.6 464 84.4 464 70.6 288zm-3.8-48L51.9 48l280.2 0-15 192L66.9 240zM40 512l304 0L380.2 48 384 0 335.9 0 48.1 0 0 0 3.8 48 40 512z" />
    </Icon>
);

export default GlassHalf;