
import { Icon } from "../../index";

/**
 * A component that renders the `x` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x?s=sharp-light x}
 * @preview ![x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/x.svg)
 */
const X: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M340.8 32l40.1 0L212 256 380.9 480l-40.1 0L192 282.6 43.2 480 3.1 480 172 256 3.1 32l40.1 0L192 229.4 340.8 32z" />
    </Icon>
);

export default X;