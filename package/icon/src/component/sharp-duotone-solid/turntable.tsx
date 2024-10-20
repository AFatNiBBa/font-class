
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turntable` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turntable?s=sharp-duotone-solid turntable}
 * @preview ![turntable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turntable.svg)
 */
const Turntable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zM384 256A160 160 0 1 1 64 256a160 160 0 1 1 320 0zm21.1 134.3l14.3-28.6 24-48 14.3 7.2L480 276.2 480 112l0-16 32 0 0 16 0 168 0 3.8-1.7 3.4-24 48 14.3 7.2-24 48-14.3 28.6-57.2-28.6z" />
        <path d="M64 256a160 160 0 1 1 320 0A160 160 0 1 1 64 256zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM512 96l0 16 0 168 0 3.8-1.7 3.4-24 48 14.3 7.2-24 48-14.3 28.6-57.2-28.6 14.3-28.6 24-48 14.3 7.2L480 276.2 480 112l0-16 32 0z" />
    </Icon>
);

export default Turntable;