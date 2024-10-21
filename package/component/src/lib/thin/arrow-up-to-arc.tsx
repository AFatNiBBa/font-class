
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-arc` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-arc?s=thin arrow-up-to-arc}
 * @preview ![arrow-up-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-up-to-arc.svg)
 */
const ArrowUpToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16c132.5 0 240 107.5 240 240c0 4.4 3.6 8 8 8s8-3.6 8-8C512 114.6 397.4 0 256 0S0 114.6 0 256c0 4.4 3.6 8 8 8s8-3.6 8-8C16 123.5 123.5 16 256 16zM390.1 314.8l-128-152c-1.5-1.8-3.8-2.8-6.1-2.8s-4.6 1-6.1 2.8l-128 152c-2.8 3.4-2.4 8.4 1 11.3s8.4 2.4 11.3-1L248 189.9 248 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-314.1L377.9 325.2c2.8 3.4 7.9 3.8 11.3 1s3.8-7.9 1-11.3z" />
    </Icon>
);

export default ArrowUpToArc;