
import { Icon } from "../../index";

/**
 * A component that renders the `ethernet` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=solid ethernet}
 * @preview ![ethernet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ethernet.svg)
 */
const Ethernet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 224L0 416c0 17.7 14.3 32 32 32l64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32L160 64c-17.7 0-32 14.3-32 32l0 32-32 0c-17.7 0-32 14.3-32 32l0 32-32 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Ethernet;