
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flute` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=sharp-duotone-solid flute}
 * @preview ![flute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flute.svg)
 */
const Flute: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 352l96 0 0-192L0 160zm128 0l0 192 512 0 0-192-512 0zm216 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M128 160l-32 0 0 192 32 0 0-192zM320 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm96 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Flute;