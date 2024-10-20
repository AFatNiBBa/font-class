
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pump-soap` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pump-soap?s=sharp-duotone-solid pump-soap}
 * @preview ![pump-soap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pump-soap.svg)
 */
const PumpSoap: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 512L56 160l72 0 128 0 72 0 24 352L32 512zm96-152c0 35.3 28.7 56 64 56s64-20.7 64-56c0-40-64-120-64-120s-64 80-64 120z" />
        <path d="M128 0L256 0l0 32 96 0 13.3 0 9.4 9.4 48 48L445.3 112 400 157.3l-22.6-22.6L338.7 96 256 96l0 64-128 0L128 0zM256 360c0 35.3-28.7 56-64 56s-64-20.7-64-56c0-40 64-120 64-120s64 80 64 120z" />
    </Icon>
);

export default PumpSoap;