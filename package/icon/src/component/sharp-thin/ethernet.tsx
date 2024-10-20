
import { Icon } from "../../index";

/**
 * A component that renders the `ethernet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=sharp-thin ethernet}
 * @preview ![ethernet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ethernet.svg)
 */
const Ethernet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 64l8 0 240 0 8 0 0 8 0 56 56 0 8 0 0 8 0 56 56 0 8 0 0 8 0 240 0 8-8 0-104 0-96 0-96 0-96 0L8 448l-8 0 0-8L0 200l0-8 8 0 56 0 0-56 0-8 8 0 56 0 0-56 0-8zm16 16l0 56 0 8-8 0-56 0 0 56 0 8-8 0-56 0 0 224 88 0 0-104 0-8 16 0 0 8 0 104 80 0 0-104 0-8 16 0 0 8 0 104 80 0 0-104 0-8 16 0 0 8 0 104 80 0 0-104 0-8 16 0 0 8 0 104 88 0 0-224-56 0-8 0 0-8 0-56-56 0-8 0 0-8 0-56L144 80z" />
    </Icon>
);

export default Ethernet;