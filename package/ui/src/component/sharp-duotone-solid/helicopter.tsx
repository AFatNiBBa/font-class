
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helicopter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter?s=sharp-duotone-solid helicopter}
 * @preview ![helicopter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/helicopter.svg)
 */
const Helicopter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 0l0 64 192 0 0 64 64 0 0-64 192 0 0-64L128 0zm96 448l0 64 384 0 32 0 0-32 0-64-64 0 0 32-352 0z" />
        <path d="M384 384l-96 0L192 256 32 192 0 64l64 0 48 64 272 0 32 0c88.4 0 160 71.6 160 160l0 64 0 32-32 0-160 0zm0-64l128 0 0-32c0-53-43-96-96-96l-32 0 0 128z" />
    </Icon>
);

export default Helicopter;