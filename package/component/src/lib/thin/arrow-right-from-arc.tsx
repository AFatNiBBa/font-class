
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-arc` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-arc?s=thin arrow-right-from-arc}
 * @preview ![arrow-right-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-right-from-arc.svg)
 */
const ArrowRightFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16c4.4 0 8-3.6 8-8s-3.6-8-8-8C114.6 0 0 114.6 0 256S114.6 512 256 512c4.4 0 8-3.6 8-8s-3.6-8-8-8C123.5 496 16 388.5 16 256zM357.2 121.9c-3.4-2.8-8.4-2.4-11.3 1s-2.4 8.4 1 11.3L482.1 248 168 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l314.1 0L346.8 377.9c-3.4 2.8-3.8 7.9-1 11.3s7.9 3.8 11.3 1l152-128c1.8-1.5 2.8-3.8 2.8-6.1s-1-4.6-2.8-6.1l-152-128z" />
    </Icon>
);

export default ArrowRightFromArc;