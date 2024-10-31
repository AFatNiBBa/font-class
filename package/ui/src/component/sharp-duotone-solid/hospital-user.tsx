
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hospital-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospital-user?s=sharp-duotone-solid hospital-user}
 * @preview ![hospital-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hospital-user.svg)
 */
const HospitalUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L320 0l0 359L253.1 512 0 512 0 384l144 0 16 0 0-32-16 0L0 352l0-64 144 0 16 0 0-32-16 0L0 256 0 0zM96 104l0 48 40 0 0 40 48 0 0-40 40 0 0-48-40 0 0-40-48 0 0 40-40 0z" />
        <path d="M432 352a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM576 512L520 384l-176 0L288 512l288 0z" />
    </Icon>
);

export default HospitalUser;