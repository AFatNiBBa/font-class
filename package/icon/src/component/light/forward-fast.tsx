
import { Icon } from "../../index";

/**
 * A component that renders the `forward-fast` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-fast?s=light forward-fast}
 * @preview ![forward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/forward-fast.svg)
 */
const ForwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 64c-8.8 0-16 7.2-16 16l0 135.8L301.4 70.2c-5-4-11.2-6.2-17.6-6.2C268.4 64 256 76.4 256 91.8l0 150.1L45.4 70.2c-5-4-11.2-6.2-17.6-6.2C12.4 64 0 76.4 0 91.8L0 420.2C0 435.6 12.4 448 27.8 448c6.4 0 12.6-2.2 17.6-6.2L256 270.1l0 150.1c0 15.4 12.4 27.8 27.8 27.8c6.4 0 12.6-2.2 17.6-6.2L480 296.2 480 432c0 8.8 7.2 16 16 16s16-7.2 16-16l0-161.9 0-28.2L512 80c0-8.8-7.2-16-16-16zM478.7 256L288 411.4l0-310.7L478.7 256zM32 100.6L222.7 256 32 411.4l0-310.7z" />
    </Icon>
);

export default ForwardFast;