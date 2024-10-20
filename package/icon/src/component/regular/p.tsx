
import { Icon } from "../../index";

/**
 * A component that renders the `p` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=regular p}
 * @preview ![p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/p.svg)
 */
const P: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M56 80l112 0c57.4 0 104 46.6 104 104s-46.6 104-104 104L48 288 48 88c0-4.4 3.6-8 8-8zM48 336l120 0c83.9 0 152-68.1 152-152s-68.1-152-152-152L56 32C25.1 32 0 57.1 0 88L0 312 0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-120z" />
    </Icon>
);

export default P;