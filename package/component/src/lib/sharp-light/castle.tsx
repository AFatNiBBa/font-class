
import { Icon } from "../../index";

/**
 * A component that renders the `castle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/castle?s=sharp-light castle}
 * @preview ![castle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/castle.svg)
 */
const Castle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0l16 0 72 0 16 0 0 16 0 48 32 0 0-48 0-16 16 0 80 0 16 0 0 16 0 48 32 0 0-48 0-16 16 0 72 0 16 0 0 16 0 208 32 0 0-48 0-16 16 0 64 0 16 0 0 16 0 320 0 16-16 0L16 512 0 512l0-16L0 176l0-16 16 0 64 0 16 0 0 16 0 48 32 0 0-208 0-16zm32 256l-16 0-64 0-16 0 0-16 0-48-32 0 0 288 192 0 0-80c0-53 43-96 96-96s96 43 96 96l0 80 192 0 0-288-32 0 0 48 0 16-16 0-64 0-16 0-320 0zm320-32l0-192-40 0 0 48 0 16-16 0-64 0-16 0 0-16 0-48-48 0 0 48 0 16-16 0-64 0-16 0 0-16 0-48-40 0 0 192 320 0zM384 400c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 80 128 0 0-80z" />
    </Icon>
);

export default Castle;