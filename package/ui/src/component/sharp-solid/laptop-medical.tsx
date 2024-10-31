
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-medical?s=sharp-solid laptop-medical}
 * @preview ![laptop-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/laptop-medical.svg)
 */
const LaptopMedical: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32l32 0 448 0 32 0 0 32 0 288-64 0 0-256L128 96l0 256-64 0L64 64l0-32zM0 432l0-48 640 0 0 48-48 48L48 480 0 432zM288 144l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default LaptopMedical;