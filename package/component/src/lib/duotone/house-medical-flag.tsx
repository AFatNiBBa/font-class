
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-medical-flag` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-medical-flag?s=duotone house-medical-flag}
 * @preview ![house-medical-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-medical-flag.svg)
 */
const HouseMedicalFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 3.7 .6 7.5 2 11.1C6.6 279.7 18.6 288 32 288l32 0 0 192c0 17.7 14.3 32 32 32l320.8 0-.8 0 0-353L276.8 39.7c-6-5.1-13.4-7.7-20.8-7.7s-14.8 2.6-20.8 7.7l-224 192C3.9 237.9 0 246.8 0 256zm160 16c0-8.8 7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32z" />
        <path d="M512 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160 0 320 64 0 0-320 112 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L512 32z" />
    </Icon>
);

export default HouseMedicalFlag;