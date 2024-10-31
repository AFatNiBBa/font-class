
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turntable` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turntable?s=duotone turntable}
 * @preview ![turntable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turntable.svg)
 */
const Turntable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM384 256A160 160 0 1 1 64 256a160 160 0 1 1 320 0zm35.4 105.7c5.3-10.7 10.7-21.3 16-32c5.3-10.6 15.7-17 26.7-17.6c5.4-10.8 10.8-21.6 16.2-32.5c1.1-2.2 1.7-4.7 1.7-7.2L480 112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 160.4c0 7.5-1.7 14.8-5.1 21.5l-16.2 32.4c6.1 9.2 7.2 21.4 1.9 31.9l-16 32c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9z" />
        <path d="M64 256a160 160 0 1 1 320 0A160 160 0 1 1 64 256zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM496 96c8.8 0 16 7.2 16 16l0 160.4c0 7.5-1.7 14.8-5.1 21.5l-16.2 32.4c6.1 9.2 7.2 21.4 1.9 31.9l-16 32c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32c5.3-10.6 15.7-17 26.7-17.6l16.2-32.5c1.1-2.2 1.7-4.7 1.7-7.2L480 112c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Turntable;