
import { Icon } from "../../index";

/**
 * A component that renders the `blanket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=sharp-thin blanket}
 * @preview ![blanket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/blanket.svg)
 */
const Blanket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 32L0 32l0 8L0 304l0 8 0 8L0 472l0 8 8 0 432 0 8 0 0-16-8 0L16 464l0-144 416 0 0 64L88 384l-8 0 0 16 8 0 352 0 8 0 0-8 0-72 0-8 0-8 0-264 0-8-8 0L8 32zM432 304L16 304 16 48l416 0 0 256z" />
    </Icon>
);

export default Blanket;