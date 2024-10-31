
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-clock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-clock?s=solid hourglass-clock}
 * @preview ![hourglass-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hourglass-clock.svg)
 */
const HourglassClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l36 36c-10.7 22.2-16.8 47.1-17.2 73.3l-64-64-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11 179.2 0c13.1 25.6 32.2 47.6 55.6 64L320 512 64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default HourglassClock;