
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-medical?s=sharp-duotone-solid head-side-medical}
 * @preview ![head-side-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/head-side-medical.svg)
 */
const HeadSideMedical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224.2C0 100.6 100.2 0 224 0l32 0C358.1 0 441.6 79.7 447.7 180.3L505 252l7 8.8 0 11.2 0 16 0 32-32 0-32 0 0 96 0 32-32 0-96 0 0 32 0 32-32 0L96 512l-32 0 0-32 0-98.8c-41-41.9-64-98.3-64-157zM128 160l0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0z" />
        <path d="M256 96l-64 0 0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64z" />
    </Icon>
);

export default HeadSideMedical;