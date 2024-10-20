
import { Icon } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=sharp-regular pedestal}
 * @preview ![pedestal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pedestal.svg)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 48L80 48l0 384-48 0L32 48 32 0 80 0 368 0l48 0 0 48 0 384-48 0 0-384zM24 464l400 0 24 0 0 48-24 0L24 512 0 512l0-48 24 0zm96-352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM304 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Pedestal;