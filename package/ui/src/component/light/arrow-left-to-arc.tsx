
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-arc` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-arc?s=light arrow-left-to-arc}
 * @preview ![arrow-left-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-left-to-arc.svg)
 */
const ArrowLeftToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32c8.8 0 16-7.2 16-16s-7.2-16-16-16C114.6 0 0 114.6 0 256S114.6 512 256 512c8.8 0 16-7.2 16-16s-7.2-16-16-16C132.3 480 32 379.7 32 256zM309.4 116l-144 128c-3.4 3-5.4 7.4-5.4 12s2 8.9 5.4 12l144 128c6.6 5.9 16.7 5.3 22.6-1.3s5.3-16.7-1.3-22.6L218.1 272 496 272c8.8 0 16-7.2 16-16s-7.2-16-16-16l-277.9 0L330.6 140c6.6-5.9 7.2-16 1.3-22.6s-16-7.2-22.6-1.3z" />
    </Icon>
);

export default ArrowLeftToArc;