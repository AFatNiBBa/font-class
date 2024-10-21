
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=light chess-clock}
 * @preview ![chess-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-clock.svg)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M240 32c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 64 384 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l96 0 0-64-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 64 0zM544 80c0 8.8-7.2 16-16 16L400 96c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0c8.8 0 16 7.2 16 16zM64 160c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L64 160zM176 384a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM520.6 360.6A80 80 0 1 0 407.4 247.4 80 80 0 1 0 520.6 360.6zM384.8 224.8A112 112 0 1 1 543.2 383.2 112 112 0 1 1 384.8 224.8zM176 240c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zm333.3 41.4l-33.9 33.9c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default ChessClock;