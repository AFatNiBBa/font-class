
import { Icon } from "../../index";

/**
 * A component that renders the `wave-square` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=light wave-square}
 * @preview ![wave-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wave-square.svg)
 */
const WaveSquare: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 64c-8.8 0-16 7.2-16 16l0 144c0 26.5-21.5 48-48 48L16 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0c8.8 0 16-7.2 16-16l0-144c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 352c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-144c0-26.5 21.5-48 48-48l112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-112 0c-8.8 0-16 7.2-16 16l0 144c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-352c0-8.8-7.2-16-16-16l-96 0z" />
    </Icon>
);

export default WaveSquare;