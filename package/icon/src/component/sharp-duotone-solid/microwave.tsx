
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microwave` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=sharp-duotone-solid microwave}
 * @preview ![microwave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/microwave.svg)
 */
const Microwave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 128l0 224 320 0 0-224L96 128z" />
        <path d="M0 32l576 0 0 416-64 0 0 32-64 0 0-32-320 0 0 32-64 0 0-32L0 448 0 32zm96 96l0 224 320 0 0-224L96 128zm416-16l-32 0 0 256 32 0 0-256z" />
    </Icon>
);

export default Microwave;