
import { Icon } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=thin bore-hole}
 * @preview ![bore-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bore-hole.svg)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c4.4 0 8 3.6 8 8l0 264.5c31.6 3.9 56 30.9 56 63.5c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-32.6 24.4-59.6 56-63.5L248 8c0-4.4 3.6-8 8-8zm0 288a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM64 144c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48l-64 0c-8.8 0-16 7.2-16 16l0 192c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-192c0-8.8-7.2-16-16-16l-64 0zM0 192c0-35.3 28.7-64 64-64l64 0c17.7 0 32 14.3 32 32l0 192c0 53 43 96 96 96s96-43 96-96l0-192c0-17.7 14.3-32 32-32l64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192z" />
    </Icon>
);

export default BoreHole;