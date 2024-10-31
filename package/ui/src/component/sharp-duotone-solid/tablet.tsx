
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=sharp-duotone-solid tablet}
 * @preview ![tablet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tablet.svg)
 */
const Tablet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384L0 512l448 0 0-128L0 384zm176 48l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32z" />
        <path d="M0 0H448V384H0V0z" />
    </Icon>
);

export default Tablet;