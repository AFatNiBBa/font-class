
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-arc` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-arc?s=thin arrow-left-to-arc}
 * @preview ![arrow-left-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-left-to-arc.svg)
 */
const ArrowLeftToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16c4.4 0 8-3.6 8-8s-3.6-8-8-8C114.6 0 0 114.6 0 256S114.6 512 256 512c4.4 0 8-3.6 8-8s-3.6-8-8-8C123.5 496 16 388.5 16 256zM314.8 121.9l-152 128c-1.8 1.5-2.8 3.8-2.8 6.1s1 4.6 2.8 6.1l152 128c3.4 2.8 8.4 2.4 11.3-1s2.4-8.4-1-11.3L189.9 264 504 264c4.4 0 8-3.6 8-8s-3.6-8-8-8l-314.1 0L325.2 134.1c3.4-2.8 3.8-7.9 1-11.3s-7.9-3.8-11.3-1z" />
    </Icon>
);

export default ArrowLeftToArc;