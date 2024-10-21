
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-from-arc` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-arc?s=thin arrow-down-from-arc}
 * @preview ![arrow-down-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-down-from-arc.svg)
 */
const ArrowDownFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.5 16 16 123.5 16 256c0 4.4-3.6 8-8 8s-8-3.6-8-8C0 114.6 114.6 0 256 0S512 114.6 512 256c0 4.4-3.6 8-8 8s-8-3.6-8-8C496 123.5 388.5 16 256 16zM121.9 357.2c-2.8-3.4-2.4-8.4 1-11.3s8.4-2.4 11.3 1L248 482.1 248 168c0-4.4 3.6-8 8-8s8 3.6 8 8l0 314.1L377.9 346.8c2.8-3.4 7.9-3.8 11.3-1s3.8 7.9 1 11.3l-128 152c-1.5 1.8-3.8 2.8-6.1 2.8s-4.6-1-6.1-2.8l-128-152z" />
    </Icon>
);

export default ArrowDownFromArc;