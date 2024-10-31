
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-from-arc` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-arc?s=light arrow-down-from-arc}
 * @preview ![arrow-down-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-down-from-arc.svg)
 */
const ArrowDownFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 160c8.8 0 16 7.2 16 16l0 277.9L372 341.4c5.9-6.6 16-7.2 22.6-1.3s7.2 16 1.3 22.6l-128 144c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4l-128-144c-5.9-6.6-5.3-16.7 1.3-22.6s16.7-5.3 22.6 1.3L240 453.9 240 176c0-8.8 7.2-16 16-16zM0 256C0 114.6 114.6 0 256 0S512 114.6 512 256c0 8.8-7.2 16-16 16s-16-7.2-16-16C480 132.3 379.7 32 256 32S32 132.3 32 256c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
    </Icon>
);

export default ArrowDownFromArc;