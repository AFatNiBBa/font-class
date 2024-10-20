
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-medical-flag` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-medical-flag?s=sharp-duotone-solid house-medical-flag}
 * @preview ![house-medical-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-medical-flag.svg)
 */
const HouseMedicalFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 47.6 64.1 0 0 224.4L416 512l0-346.8L256.4 32 0 240zm160 16l64 0 0-64 64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64z" />
        <path d="M512 32l0-32L448 0l0 32 0 160 0 320 64 0 0-320 128 0 0-160L512 32z" />
    </Icon>
);

export default HouseMedicalFlag;