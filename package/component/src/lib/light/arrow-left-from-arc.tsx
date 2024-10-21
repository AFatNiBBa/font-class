
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-from-arc` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-arc?s=light arrow-left-from-arc}
 * @preview ![arrow-left-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-left-from-arc.svg)
 */
const ArrowLeftFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256C480 132.3 379.7 32 256 32c-8.8 0-16-7.2-16-16s7.2-16 16-16C397.4 0 512 114.6 512 256s-114.6 256-256 256c-8.8 0-16-7.2-16-16s7.2-16 16-16c123.7 0 224-100.3 224-224zM149.4 116c6.6-5.9 16.7-5.3 22.6 1.3s5.3 16.7-1.3 22.6L58.1 240 336 240c8.8 0 16 7.2 16 16s-7.2 16-16 16L58.1 272 170.6 372c6.6 5.9 7.2 16 1.3 22.6s-16 7.2-22.6 1.3L5.4 268C2 264.9 0 260.6 0 256s2-8.9 5.4-12l144-128z" />
    </Icon>
);

export default ArrowLeftFromArc;