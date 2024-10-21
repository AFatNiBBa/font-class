
import { Icon } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=regular franc-sign}
 * @preview ![franc-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/franc-sign.svg)
 */
const FrancSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M72 32C58.7 32 48 42.7 48 56l0 160 0 104-24 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-88 104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L96 320l0-80 168 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L96 192 96 80l200 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 32z" />
    </Icon>
);

export default FrancSign;