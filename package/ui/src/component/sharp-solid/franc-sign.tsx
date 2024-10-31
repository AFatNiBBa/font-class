
import { Icon } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=sharp-solid franc-sign}
 * @preview ![franc-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/franc-sign.svg)
 */
const FrancSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M320 32L112 32 48 32l0 64 0 96 0 64 0 64L0 320l0 64 48 0 0 96 64 0 0-96 112 0 0-64-112 0 0-64 176 0 0-64-176 0 0-96 208 0 0-64z" />
    </Icon>
);

export default FrancSign;