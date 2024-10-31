
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-circle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-circle?s=light arrows-to-circle}
 * @preview ![arrows-to-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrows-to-circle.svg)
 */
const ArrowsToCircle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M27.3 4.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L137.4 160 80 160c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 57.4L27.3 4.7zM320 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM464 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-57.4 0L635.3 27.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L480 137.4 480 80c0-8.8-7.2-16-16-16zM176 448c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l57.4 0L4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L160 374.6l0 57.4c0 8.8 7.2 16 16 16zm288 0c8.8 0 16-7.2 16-16l0-57.4L612.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L502.6 352l57.4 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16z" />
    </Icon>
);

export default ArrowsToCircle;