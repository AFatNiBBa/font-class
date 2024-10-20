
import { Icon } from "../../index";

/**
 * A component that renders the `blanket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=sharp-light blanket}
 * @preview ![blanket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/blanket.svg)
 */
const Blanket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 32L0 32 0 48 0 288l0 16 0 16L0 464l0 16 16 0 416 0 16 0 0-32-16 0L32 448l0-128 384 0 0 48L96 368l-16 0 0 32 16 0 336 0 16 0 0-16 0-64 0-16 0-16 0-240 0-16-16 0L16 32zM416 288L32 288 32 64l384 0 0 224z" />
    </Icon>
);

export default Blanket;