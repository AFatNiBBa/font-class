
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plug` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=duotone plug}
 * @preview ![plug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plug.svg)
 */
const Plug: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 32l0 128 64 0 0-128c0-17.7-14.3-32-32-32S64 14.3 64 32zm192 0l0 128 64 0 0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M0 192c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 32c0 77.4-55 142-128 156.8l0 67.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-67.2C87 398 32 333.4 32 256l0-32c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Plug;