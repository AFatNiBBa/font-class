
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-medical?s=sharp-solid hand-holding-medical}
 * @preview ![hand-holding-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-holding-medical.svg)
 */
const HandHoldingMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 0l0 80-80 0 0 96 80 0 0 80 96 0 0-80 80 0 0-96-80 0 0-80L224 0zM140 327L68.8 384 0 384 0 512l32 0 192 0 160 0 12.4 0 10.2-7 128-88 33-22.7-45.3-65.9-33 22.7-94.5 65L256 416l0-32 32 0 64 0 32 0 0-64-32 0-64 0-64 0-64 0-11.2 0-8.8 7z" />
    </Icon>
);

export default HandHoldingMedical;