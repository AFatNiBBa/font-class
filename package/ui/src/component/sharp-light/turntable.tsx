
import { Icon } from "../../index";

/**
 * A component that renders the `turntable` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turntable?s=sharp-light turntable}
 * @preview ![turntable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/turntable.svg)
 */
const Turntable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64l0 384L32 448 32 64l512 0zM32 32L0 32 0 64 0 448l0 32 32 0 512 0 32 0 0-32 0-384 0-32-32 0L32 32zM224 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256zM64 256a160 160 0 1 0 320 0A160 160 0 1 0 64 256zm160 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm263.8 20.2l-7.8-3.9L480 112l0-16-32 0 0 16 0 168.3-17.5-8.7-14.3 28.6-30.3 60.6-14.3 28.6 28.6 14.3 28.6 14.3 28.6 14.3 14.3-28.6 30.3-60.6 14.3-28.6-28.6-14.3zm-30.3 60.6l-14.3 28.6-28.6-14.3 14.3-28.6 1.7-3.4 14.3-28.6 28.6 14.3-14.3 28.6-1.7 3.4z" />
    </Icon>
);

export default Turntable;