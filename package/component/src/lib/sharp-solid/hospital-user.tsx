
import { Icon } from "../../index";

/**
 * A component that renders the `hospital-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospital-user?s=sharp-solid hospital-user}
 * @preview ![hospital-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hospital-user.svg)
 */
const HospitalUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0L0 0 0 256l144 0 16 0 0 32-16 0L0 288l0 64 144 0 16 0 0 32-16 0L0 384 0 512l253.1 0L320 359 320 0zM184 64l0 40 40 0 0 48-40 0 0 40-48 0 0-40-40 0 0-48 40 0 0-40 48 0zM512 272a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm8 112l-176 0L288 512l288 0L520 384z" />
    </Icon>
);

export default HospitalUser;