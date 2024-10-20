
import { Icon } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=sharp-light franc-sign}
 * @preview ![franc-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/franc-sign.svg)
 */
const FrancSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 32L64 32l0 16 0 144 0 32 0 96L0 320l0 32 64 0 0 112 0 16 32 0 0-16 0-112 128 0 0-32L96 320l0-96 192 0 0-32L96 192 96 64l208 0 16 0 0-32-16 0L80 32z" />
    </Icon>
);

export default FrancSign;