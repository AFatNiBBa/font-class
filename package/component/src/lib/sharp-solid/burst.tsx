
import { Icon } from "../../index";

/**
 * A component that renders the `burst` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burst?s=sharp-solid burst}
 * @preview ![burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/burst.svg)
 */
const Burst: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0l56.8 118.8L437 75 393.2 199.2 512 256 393.2 312.8 437 437 312.8 393.2 256 512 199.2 393.2 75 437l43.8-124.2L0 256l118.8-56.8L0 0 199.2 118.8 256 0z" />
    </Icon>
);

export default Burst;