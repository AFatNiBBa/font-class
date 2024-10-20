
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pump-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pump-medical?s=sharp-duotone-solid pump-medical}
 * @preview ![pump-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pump-medical.svg)
 */
const PumpMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 512L56 160l72 0 128 0 72 0 24 352L32 512zm80-200l0 48 24 0 32 0 0 32 0 24 48 0 0-24 0-32 32 0 24 0 0-48-24 0-32 0 0-32 0-24-48 0 0 24 0 32-32 0-24 0z" />
        <path d="M128 0L256 0l0 32 96 0 13.3 0 9.4 9.4 48 48L445.3 112 400 157.3l-22.6-22.6L338.7 96 256 96l0 64-128 0L128 0zm88 280l0 32 32 0 24 0 0 48-24 0-32 0 0 32 0 24-48 0 0-24 0-32-32 0-24 0 0-48 24 0 32 0 0-32 0-24 48 0 0 24z" />
    </Icon>
);

export default PumpMedical;