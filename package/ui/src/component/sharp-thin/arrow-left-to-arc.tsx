
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-arc` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-arc?s=sharp-thin arrow-left-to-arc}
 * @preview ![arrow-left-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-left-to-arc.svg)
 */
const ArrowLeftToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16l8 0 0-16-8 0C114.6 0 0 114.6 0 256S114.6 512 256 512l8 0 0-16-8 0C123.5 496 16 388.5 16 256zM314.8 121.9l-152 128-7.3 6.1 7.3 6.1 152 128 6.1 5.2L331.3 383l-6.1-5.2L189.9 264 504 264l8 0 0-16-8 0-314.1 0L325.2 134.1l6.1-5.2L321 116.7l-6.1 5.2z" />
    </Icon>
);

export default ArrowLeftToArc;