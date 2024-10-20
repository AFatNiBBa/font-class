
import { Icon } from "../../index";

/**
 * A component that renders the `glass-half` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-half?s=sharp-thin glass-half}
 * @preview ![glass-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/glass-half.svg)
 */
const GlassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M36 256L348 256 329.2 496 54.8 496 36 256zm-1.2-16L17.3 16l349.4 0L349.2 240 34.8 240zM40 512l304 0L382.7 16 384 0 368 0 16 0 0 0 1.3 16 40 512z" />
    </Icon>
);

export default GlassHalf;