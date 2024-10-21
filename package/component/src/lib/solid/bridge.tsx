
import { Icon } from "../../index";

/**
 * A component that renders the `bridge` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge?s=solid bridge}
 * @preview ![bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bridge.svg)
 */
const Bridge: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l40 0 0 64L0 160 0 288c53 0 96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96s96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96l0-128-72 0 0-64 40 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM456 96l0 64-80 0 0-64 80 0zM328 96l0 64-80 0 0-64 80 0zM200 96l0 64-80 0 0-64 80 0z" />
    </Icon>
);

export default Bridge;