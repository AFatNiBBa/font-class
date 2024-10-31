
import { Icon } from "../../index";

/**
 * A component that renders the `turntable` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turntable?s=sharp-solid turntable}
 * @preview ![turntable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/turntable.svg)
 */
const Turntable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l576 0 0 448L0 480 0 32zM384 256A160 160 0 1 0 64 256a160 160 0 1 0 320 0zM512 112l0-16-32 0 0 16 0 164.2-22.3 44.6-14.3-7.2-24 48-14.3 28.6 57.2 28.6 14.3-28.6 24-48-14.3-7.2 24-48 1.7-3.4 0-3.8 0-168zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Turntable;