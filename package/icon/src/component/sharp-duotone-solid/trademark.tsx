
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trademark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=sharp-duotone-solid trademark}
 * @preview ![trademark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trademark.svg)
 */
const Trademark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 96l48 0 9.6 12.8L464 266.7 582.4 108.8 592 96l48 0 0 32 0 256 0 32-64 0 0-32 0-160L489.6 339.2 464 373.3l-25.6-34.1L352 224l0 160 0 32-64 0 0-32 0-256 0-32z" />
        <path d="M32 96L0 96l0 64 32 0 64 0 0 224 0 32 64 0 0-32 0-224 64 0 32 0 0-64-32 0-64 0L96 96 32 96z" />
    </Icon>
);

export default Trademark;