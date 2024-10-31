
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cabin` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cabin?s=duotone cabin}
 * @preview ![cabin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cabin.svg)
 */
const Cabin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 280c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24L56 320c-13.3 0-24-10.7-24-24l0-16zm0 96c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24L56 416c-13.3 0-24-10.7-24-24l0-16zm0 96c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24L56 512c-13.3 0-24-10.7-24-24l0-16zM320 280c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24l0-16zm0 96c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24l0-16zm0 96c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24l0-16z" />
        <path d="M237.4 6C248.5-2 263.5-2 274.6 6L384 84.1 384 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 88.7L498.6 166c11.3 8.1 16.1 22.6 11.9 35.8S493.9 224 480 224l-32 0-32 0L32 224c-13.9 0-26.2-9-30.5-22.2S2.1 174 13.4 166L237.4 6zM256 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Cabin;