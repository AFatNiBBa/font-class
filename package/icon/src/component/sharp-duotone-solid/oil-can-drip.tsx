
import { Icon, generic } from "../../index";

/**
 * A component that renders the `oil-can-drip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can-drip?s=sharp-duotone-solid oil-can-drip}
 * @preview ![oil-can-drip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/oil-can-drip.svg)
 */
const OilCanDrip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 64l0 64 64 0 0 32 64 0 0-32 64 0 0-64L160 64zM544 400c0 26.5 21.5 48 48 48s48-16 48-48s-48-96-48-96s-48 64-48 96z" />
        <path d="M96 208l0 86.1L48 272.8 48 208l48 0zM0 304l96 42.7L96 416l288 0 48 0L640 192l-32-32L448 192l-64-32-240 0-48 0-48 0L0 160l0 48 0 96z" />
    </Icon>
);

export default OilCanDrip;