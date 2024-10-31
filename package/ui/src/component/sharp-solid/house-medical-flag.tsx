
import { Icon } from "../../index";

/**
 * A component that renders the `house-medical-flag` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-medical-flag?s=sharp-solid house-medical-flag}
 * @preview ![house-medical-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-medical-flag.svg)
 */
const HouseMedicalFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 0l0 32 128 0 0 160-128 0 0 320-64 0 0-320 0-160 0-32 64 0zM256.4 32L416 165.2 416 512 64.1 512l0-224.4L0 287.6 0 240 256.4 32zM224 192l0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0z" />
    </Icon>
);

export default HouseMedicalFlag;