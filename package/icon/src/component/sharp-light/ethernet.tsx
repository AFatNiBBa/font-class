
import { Icon } from "../../index";

/**
 * A component that renders the `ethernet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=sharp-light ethernet}
 * @preview ![ethernet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ethernet.svg)
 */
const Ethernet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 64l16 0 224 0 16 0 0 16 0 48 48 0 16 0 0 16 0 48 48 0 16 0 0 16 0 224 0 16-16 0-96 0-96 0-96 0-96 0-96 0L0 448l0-16L0 208l0-16 16 0 48 0 0-48 0-16 16 0 48 0 0-48 0-16zm32 32l0 48 0 16-16 0-48 0 0 48 0 16-16 0-48 0 0 192 64 0 0-80 0-16 32 0 0 16 0 80 64 0 0-80 0-16 32 0 0 16 0 80 64 0 0-80 0-16 32 0 0 16 0 80 64 0 0-80 0-16 32 0 0 16 0 80 64 0 0-192-48 0-16 0 0-16 0-48-48 0-16 0 0-16 0-48L160 96z" />
    </Icon>
);

export default Ethernet;