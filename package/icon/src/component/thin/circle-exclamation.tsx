
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation?s=thin circle-exclamation}
 * @preview ![circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-exclamation.svg)
 */
const CircleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-4.4 0-8 3.6-8 8l0 160c0 4.4 3.6 8 8 8s8-3.6 8-8l0-160c0-4.4-3.6-8-8-8zm16 224a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default CircleExclamation;