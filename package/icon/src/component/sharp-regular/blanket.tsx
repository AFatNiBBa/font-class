
import { Icon } from "../../index";

/**
 * A component that renders the `blanket` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=sharp-regular blanket}
 * @preview ![blanket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/blanket.svg)
 */
const Blanket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 32L0 32 0 56 0 256l0 24 0 24L0 456l0 24 24 0 400 0 24 0 0-48-24 0L48 432l0-128 352 0 0 40-280 0-24 0 0 48 24 0 304 0 24 0 0-24 0-64 0-24 0-24 0-200 0-24-24 0L24 32zM400 256L48 256 48 80l352 0 0 176z" />
    </Icon>
);

export default Blanket;