
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-arc` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-arc?s=sharp-thin arrow-right-from-arc}
 * @preview ![arrow-right-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-right-from-arc.svg)
 */
const ArrowRightFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16l8 0 0-16-8 0C114.6 0 0 114.6 0 256S114.6 512 256 512l8 0 0-16-8 0C123.5 496 16 388.5 16 256zM349.2 121.9l-6.1-5.2L332.7 129l6.1 5.2L474.1 248 168 248l-8 0 0 16 8 0 306.1 0L338.8 377.9l-6.1 5.2L343 395.3l6.1-5.2 152-128 7.3-6.1-7.3-6.1-152-128z" />
    </Icon>
);

export default ArrowRightFromArc;