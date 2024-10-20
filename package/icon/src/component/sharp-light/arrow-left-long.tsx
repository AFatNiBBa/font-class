
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=sharp-light arrow-left-long}
 * @preview ![arrow-left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-left-long.svg)
 */
const ArrowLeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M11.3 244.7L0 256l11.3 11.3 144 144 11.3 11.3L189.3 400l-11.3-11.3L61.3 272 496 272l16 0 0-32-16 0L61.3 240 177.9 123.3 189.3 112 166.6 89.4l-11.3 11.3-144 144z" />
    </Icon>
);

export default ArrowLeftLong;