
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ethernet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=sharp-duotone-solid ethernet}
 * @preview ![ethernet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ethernet.svg)
 */
const Ethernet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192l64 0 0-64 64 0 0-64 256 0 0 64 64 0 0 64 64 0 0 256-96 0 0-112 0-16-32 0 0 16 0 112-64 0 0-112 0-16-32 0 0 16 0 112-64 0 0-112 0-16-32 0 0 16 0 112-64 0 0-112 0-16-32 0 0 16 0 112L0 448 0 192z" />
        <path d="M128 320l0 16 0 112-32 0 0-112 0-16 32 0zm96 0l0 16 0 112-32 0 0-112 0-16 32 0zm96 0l0 16 0 112-32 0 0-112 0-16 32 0zm96 0l0 16 0 112-32 0 0-112 0-16 32 0z" />
    </Icon>
);

export default Ethernet;