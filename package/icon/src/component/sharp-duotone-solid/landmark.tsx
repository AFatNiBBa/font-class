
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=sharp-duotone-solid landmark}
 * @preview ![landmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/landmark.svg)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 464l0 48 512 0 0-48-64-48 0-224-64 0 0 224-40 0 0-224-64 0 0 224-48 0 0-224-64 0 0 224-40 0 0-224-64 0 0 224L0 464z" />
        <path d="M512 192H0V144L256 0 512 144v48z" />
    </Icon>
);

export default Landmark;