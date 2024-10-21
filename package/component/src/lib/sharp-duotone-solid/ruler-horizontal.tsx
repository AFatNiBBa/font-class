
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler-horizontal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=sharp-duotone-solid ruler-horizontal}
 * @preview ![ruler-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ruler-horizontal.svg)
 */
const RulerHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128l112 0 0 80 0 16 32 0 0-16 0-80 64 0 0 80 0 16 32 0 0-16 0-80 64 0 0 80 0 16 32 0 0-16 0-80 64 0 0 80 0 16 32 0 0-16 0-80 64 0 0 80 0 16 32 0 0-16 0-80 112 0 0 256L0 384 0 128z" />
        <path d="M144 208l0-80-32 0 0 80 0 16 32 0 0-16zm96-80l-32 0 0 80 0 16 32 0 0-16 0-80zm96 80l0-80-32 0 0 80 0 16 32 0 0-16zm96-80l-32 0 0 80 0 16 32 0 0-16 0-80zm96 0l-32 0 0 80 0 16 32 0 0-16 0-80z" />
    </Icon>
);

export default RulerHorizontal;