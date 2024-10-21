
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-arc` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-arc?s=light arrow-right-from-arc}
 * @preview ![arrow-right-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-right-from-arc.svg)
 */
const ArrowRightFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32c8.8 0 16-7.2 16-16s-7.2-16-16-16C114.6 0 0 114.6 0 256S114.6 512 256 512c8.8 0 16-7.2 16-16s-7.2-16-16-16C132.3 480 32 379.7 32 256zM362.6 116c-6.6-5.9-16.7-5.3-22.6 1.3s-5.3 16.7 1.3 22.6L453.9 240 176 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l277.9 0L341.4 372c-6.6 5.9-7.2 16-1.3 22.6s16 7.2 22.6 1.3l144-128c3.4-3 5.4-7.4 5.4-12s-2-8.9-5.4-12l-144-128z" />
    </Icon>
);

export default ArrowRightFromArc;