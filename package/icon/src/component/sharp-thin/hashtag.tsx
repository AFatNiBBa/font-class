
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag?s=sharp-thin hashtag}
 * @preview ![hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hashtag.svg)
 */
const Hashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M353.6 32L370 32 345.1 144l100.8 0-3.2 16-101.2 0L298.9 352l105.5 0-3.2 16-105.8 0L270.4 480 254 480l24.9-112-175.6 0L78.4 480 62 480 86.9 368 2.1 368l3.2-16 85.2 0 42.7-192-89.5 0 3.2-16 89.8 0L161.6 32 178 32 153.1 144l175.6 0L353.6 32zM149.5 160L106.9 352l175.6 0 42.7-192-175.6 0z" />
    </Icon>
);

export default Hashtag;