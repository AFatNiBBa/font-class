
import { Icon, generic } from "../../index";

/**
 * A component that renders the `raygun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=sharp-duotone-solid raygun}
 * @preview ![raygun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/raygun.svg)
 */
const Raygun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 0l0 74.8C78.5 67.9 94.8 64 112 64l80 0L64 0zM288 32l0 24 0 8 0 192 0 32 0 8 0 24 48 0 0-24 0-240 0-24-48 0zm80 32l0 24 0 176 0 24 48 0 0-24 0-56 0-64 0-56 0-24-48 0z" />
        <path d="M0 176C0 114.1 50.1 64 112 64l176 0 0 192 0 32L176 512 48 448l80-160-16 0C50.1 288 0 237.9 0 176zm416-32l64 0 96-48 0 160-96-48-64 0 0-64zM112 200a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Raygun;