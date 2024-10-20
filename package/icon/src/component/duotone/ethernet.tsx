
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ethernet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=duotone ethernet}
 * @preview ![ethernet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ethernet.svg)
 */
const Ethernet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224c0-17.7 14.3-32 32-32l32 0 0-32c0-17.7 14.3-32 32-32l32 0 0-32c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 32 32 0c17.7 0 32 14.3 32 32l0 32 32 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-64 0 0-112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 112-64 0 0-112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 112-64 0 0-112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 112-64 0 0-112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 112-64 0c-17.7 0-32-14.3-32-32L0 224z" />
        <path d="M112 320c8.8 0 16 7.2 16 16l0 112-32 0 0-112c0-8.8 7.2-16 16-16zm96 0c8.8 0 16 7.2 16 16l0 112-32 0 0-112c0-8.8 7.2-16 16-16zm96 0c8.8 0 16 7.2 16 16l0 112-32 0 0-112c0-8.8 7.2-16 16-16zm96 0c8.8 0 16 7.2 16 16l0 112-32 0 0-112c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Ethernet;