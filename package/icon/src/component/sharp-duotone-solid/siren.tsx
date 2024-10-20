
import { Icon, generic } from "../../index";

/**
 * A component that renders the `siren` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=sharp-duotone-solid siren}
 * @preview ![siren](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/siren.svg)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 352L80 96l288 0 32 256-261.9 0 21.8-174 2.2-18-32.2 0-1.8 14L105.9 352 48 352z" />
        <path d="M448 352L0 352 0 480l448 0 0-128z" />
    </Icon>
);

export default Siren;