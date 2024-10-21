
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=sharp-light arrow-left}
 * @preview ![arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-left.svg)
 */
const ArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M12.7 244.7L1.4 256l11.3 11.3 168 168L192 446.6 214.6 424l-11.3-11.3L62.6 272 432 272l16 0 0-32-16 0L62.6 240 203.3 99.3 214.6 88 192 65.4 180.7 76.7l-168 168z" />
    </Icon>
);

export default ArrowLeft;