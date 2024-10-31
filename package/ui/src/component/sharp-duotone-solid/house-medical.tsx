
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-medical?s=sharp-duotone-solid house-medical}
 * @preview ![house-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-medical.svg)
 */
const HouseMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240 448.5 0-.5-224c-.1-5.3-.1-10.7-.1-16L288 88C213.3 149.3 138.7 210.6 64 272zm128 16l64 0 0-64 64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64z" />
        <path d="M288 0L0 240l0 32 64 0L288 88 512 272l64 0 0-32L288 0zM256 288l-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default HouseMedical;