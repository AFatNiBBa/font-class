
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-wizard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-wizard?s=sharp-duotone-solid hat-wizard}
 * @preview ![hat-wizard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hat-wizard.svg)
 */
const HatWizard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448l0 64 32 0 448 0 32 0 0-64-32 0-16 0L48 448l-16 0L0 448zM224 176l32 16 16 32 16-32 32-16-32-16-16-32-16 32-32 16z" />
        <path d="M192 128L48 448l416 0L352 192 416 0 192 128zm8 200l24-56 24 56 56 24-56 24-24 56-24-56-56-24 56-24zm72-104l-16-32-32-16 32-16 16-32 16 32 32 16-32 16-16 32z" />
    </Icon>
);

export default HatWizard;