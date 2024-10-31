
import { Icon } from "../../index";

/**
 * A component that renders the `bridge` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge?s=sharp-solid bridge}
 * @preview ![bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bridge.svg)
 */
const Bridge: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32L0 32 0 96l32 0 40 0 0 64L0 160 0 288c53 0 96 43 96 96l0 96 96 0 0-96c0-53 43-96 96-96s96 43 96 96l0 96 96 0 0-96c0-53 43-96 96-96l0-128-72 0 0-64 40 0 32 0 0-64-32 0L32 32zM456 96l0 64-80 0 0-64 80 0zM328 96l0 64-80 0 0-64 80 0zM200 96l0 64-80 0 0-64 80 0z" />
    </Icon>
);

export default Bridge;