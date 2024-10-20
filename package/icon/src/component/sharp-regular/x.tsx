
import { Icon } from "../../index";

/**
 * A component that renders the `x` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x?s=sharp-regular x}
 * @preview ![x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/x.svg)
 */
const X: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M3 32L162.5 256 3 480 62 480 192 297.4 322 480l58.9 0L221.5 256 381 32 322 32 192 214.6 62 32 3 32z" />
    </Icon>
);

export default X;