
import { Icon } from "../../index";

/**
 * A component that renders the `blanket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=sharp-duotone-solid blanket}
 * @preview ![blanket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/blanket.svg)
 */
const Blanket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 224l32 0 384 0 32 0 0 32 0 96 0 32-32 0-288 0-32 0 0-64 32 0 256 0 0-32L64 288l0 128 352 0 32 0 0 64-32 0L32 480 0 480l0-32L0 256l0-32z" />
    </Icon>
);

export default Blanket;