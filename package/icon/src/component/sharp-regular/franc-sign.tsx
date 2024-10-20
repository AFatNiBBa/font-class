
import { Icon } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=sharp-regular franc-sign}
 * @preview ![franc-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/franc-sign.svg)
 */
const FrancSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M72 32L48 32l0 24 0 136 0 48 0 80L0 320l0 48 48 0 0 88 0 24 48 0 0-24 0-88 128 0 0-48L96 320l0-80 192 0 0-48L96 192 96 80l200 0 24 0 0-48-24 0L72 32z" />
    </Icon>
);

export default FrancSign;