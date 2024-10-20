
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=sharp-light arrow-down-right}
 * @preview ![arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-down-right.svg)
 */
const ArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 416l16 0 0-16 0-224 0-16-32 0 0 16 0 185.4L67.3 108.7 56 97.4 33.4 120l11.3 11.3L297.4 384 112 384l-16 0 0 32 16 0 224 0z" />
    </Icon>
);

export default ArrowDownRight;