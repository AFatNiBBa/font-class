
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=thin arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-down-to-arc.svg)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496c132.5 0 240-107.5 240-240c0-4.4 3.6-8 8-8s8 3.6 8 8c0 141.4-114.6 256-256 256S0 397.4 0 256c0-4.4 3.6-8 8-8s8 3.6 8 8c0 132.5 107.5 240 240 240zM390.1 197.2l-128 152c-1.5 1.8-3.8 2.8-6.1 2.8s-4.6-1-6.1-2.8l-128-152c-2.8-3.4-2.4-8.4 1-11.3s8.4-2.4 11.3 1L248 322.1 248 8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 314.1L377.9 186.8c2.8-3.4 7.9-3.8 11.3-1s3.8 7.9 1 11.3z" />
    </Icon>
);

export default ArrowDownToArc;