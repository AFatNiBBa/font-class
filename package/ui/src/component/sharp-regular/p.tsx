
import { Icon } from "../../index";

/**
 * A component that renders the `p` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=sharp-regular p}
 * @preview ![p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/p.svg)
 */
const P: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 288l120 0c57.4 0 104-46.6 104-104s-46.6-104-104-104L48 80l0 208zm0 48l0 120 0 24L0 480l0-24L0 312 0 56 0 32l48 0 120 0c83.9 0 152 68.1 152 152s-68.1 152-152 152L48 336z" />
    </Icon>
);

export default P;