
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kit-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kit-medical?s=sharp-duotone-solid kit-medical}
 * @preview ![kit-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/kit-medical.svg)
 */
const KitMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l32 0 0 448-32 0L96 32zm352 0l32 0 0 448-32 0 0-448z" />
        <path d="M0 32L0 480l96 0L96 32 0 32zm128 0l0 448 320 0 0-448L128 32zM576 480l0-448-96 0 0 448 96 0zM256 160l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default KitMedical;