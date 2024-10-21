
import { Icon } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=sharp-thin franc-sign}
 * @preview ![franc-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/franc-sign.svg)
 */
const FrancSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M72 32l-8 0 0 8 0 168 0 16 0 112L0 336l0 16 64 0 0 120 0 8 16 0 0-8 0-120 144 0 0-16L80 336l0-112 208 0 0-16L80 208 80 48l232 0 8 0 0-16-8 0L72 32z" />
    </Icon>
);

export default FrancSign;