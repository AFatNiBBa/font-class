
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=sharp-light arrow-up-right}
 * @preview ![arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-up-right.svg)
 */
const ArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 96l16 0 0 16 0 224 0 16-32 0 0-16 0-185.4L67.3 403.3 56 414.6 33.4 392l11.3-11.3L297.4 128 112 128l-16 0 0-32 16 0 224 0z" />
    </Icon>
);

export default ArrowUpRight;