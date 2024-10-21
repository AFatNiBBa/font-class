
import { Icon } from "../../index";

/**
 * A component that renders the `blanket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=sharp-solid blanket}
 * @preview ![blanket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/blanket.svg)
 */
const Blanket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l32 0 384 0 32 0 0 32 0 160 0 32 0 48 0 48 0 32-32 0-288 0-32 0 0-64 32 0 256 0 0-16 0-16L64 288l0 64 0 64 352 0 32 0 0 64-32 0L32 480 0 480l0-32 0-96 0-96 0-32L0 64 0 32z" />
    </Icon>
);

export default Blanket;