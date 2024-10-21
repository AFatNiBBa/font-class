
import { Icon, generic } from "../../index";

/**
 * A component that renders the `siren` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=duotone siren}
 * @preview ![siren](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/siren.svg)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 352L73 152.1C77 120 104.2 96 136.5 96l175 0c32.3 0 59.5 24 63.5 56.1L400 352l-261.9 0 21.8-174c1.1-8.8-5.1-16.8-13.9-17.9s-16.8 5.1-17.9 13.9L105.9 352 48 352z" />
        <path d="M32 352c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L32 352z" />
    </Icon>
);

export default Siren;