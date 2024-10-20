
import { Icon } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=sharp-light pedestal}
 * @preview ![pedestal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pedestal.svg)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 32L64 32l0 416-32 0L32 32 32 0 64 0 384 0l32 0 0 32 0 416-32 0 0-416zM16 480l416 0 16 0 0 32-16 0L16 512 0 512l0-32 16 0zM112 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM320 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Pedestal;