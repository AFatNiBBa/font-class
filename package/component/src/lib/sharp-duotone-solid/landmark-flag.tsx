
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=sharp-duotone-solid landmark-flag}
 * @preview ![landmark-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/landmark-flag.svg)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 464l0 48 512 0 0-48-64-48 0-224-64 0 0 224-40 0 0-224-64 0 0 224-48 0 0-224-64 0 0 224-40 0 0-224-64 0 0 224L0 464z" />
        <path d="M272 0l96 0 0 96-96 0 0 32 192 0 32 0 0 64-32 0L48 192l-32 0 0-64 32 0 192 0L240 0l32 0z" />
    </Icon>
);

export default LandmarkFlag;