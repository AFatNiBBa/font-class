
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=sharp-light arrow-up}
 * @preview ![arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-up.svg)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M203.3 44.7L192 33.4 180.7 44.7l-168 168L1.4 224 24 246.6l11.3-11.3L176 94.6 176 464l0 16 32 0 0-16 0-369.4L348.7 235.3 360 246.6 382.6 224l-11.3-11.3-168-168z" />
    </Icon>
);

export default ArrowUp;