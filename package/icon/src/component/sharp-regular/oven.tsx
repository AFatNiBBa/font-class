
import { Icon } from "../../index";

/**
 * A component that renders the `oven` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oven?s=sharp-regular oven}
 * @preview ![oven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/oven.svg)
 */
const Oven: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 48l0 112L48 160 48 48l352 0zm0 160l0 256L48 464l0-256 352 0zM48 0L0 0 0 48 0 464l0 48 48 0 352 0 48 0 0-48 0-416 0-48L400 0 48 0zm80 104a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm104-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 112L80 240l0 192 288 0 0-192zM144 288l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Oven;