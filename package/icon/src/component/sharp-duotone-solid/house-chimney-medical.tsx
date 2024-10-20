
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-chimney-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney-medical?s=sharp-duotone-solid house-chimney-medical}
 * @preview ![house-chimney-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-chimney-medical.svg)
 */
const HouseChimneyMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240 448.5 0-.5-224c-.1-5.3-.1-10.7-.1-16L288 88C213.3 149.3 138.7 210.6 64 272zm128 16l64 0 0-64 64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64z" />
        <path d="M0 240L288 0 416 106.7 416 32l96 0 0 154.7L576 240l0 32-64 0L288 88 64 272 0 272l0-32zm256 48l0-64 64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0z" />
    </Icon>
);

export default HouseChimneyMedical;