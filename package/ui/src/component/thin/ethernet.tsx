
import { Icon } from "../../index";

/**
 * A component that renders the `ethernet` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=thin ethernet}
 * @preview ![ethernet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ethernet.svg)
 */
const Ethernet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 32 32 0c17.7 0 32 14.3 32 32l0 32 32 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-80 0-96 0-96 0-96 0-80 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32l32 0 0-32c0-17.7 14.3-32 32-32l32 0 0-32zm32-16c-8.8 0-16 7.2-16 16l0 40c0 4.4-3.6 8-8 8l-40 0c-8.8 0-16 7.2-16 16l0 40c0 4.4-3.6 8-8 8l-40 0c-8.8 0-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16l72 0 0-104c0-4.4 3.6-8 8-8s8 3.6 8 8l0 104 80 0 0-104c0-4.4 3.6-8 8-8s8 3.6 8 8l0 104 80 0 0-104c0-4.4 3.6-8 8-8s8 3.6 8 8l0 104 80 0 0-104c0-4.4 3.6-8 8-8s8 3.6 8 8l0 104 72 0c8.8 0 16-7.2 16-16l0-192c0-8.8-7.2-16-16-16l-40 0c-4.4 0-8-3.6-8-8l0-40c0-8.8-7.2-16-16-16l-40 0c-4.4 0-8-3.6-8-8l0-40c0-8.8-7.2-16-16-16L160 80z" />
    </Icon>
);

export default Ethernet;