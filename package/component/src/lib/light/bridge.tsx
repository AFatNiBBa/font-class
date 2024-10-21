
import { Icon } from "../../index";

/**
 * A component that renders the `bridge` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge?s=light bridge}
 * @preview ![bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bridge.svg)
 */
const Bridge: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l64 0 0 64-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 128 0 128 0 128 0 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-64 64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0L352 32 224 32 96 32 16 32zM464 64l0 64-96 0 0-64 96 0zM336 64l0 64-96 0 0-64 96 0zM208 64l0 64-96 0 0-64 96 0zM16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0c35.3 0 64 28.7 64 64l0 96c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-96c0-35.3 28.7-64 64-64l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0c-53 0-96 43-96 96l0 96c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-96c0-53-43-96-96-96s-96 43-96 96l0 96c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-96c0-53-43-96-96-96l-16 0z" />
    </Icon>
);

export default Bridge;