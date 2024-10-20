
import { Icon } from "../../index";

/**
 * A component that renders the `hospital-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospital-user?s=sharp-regular hospital-user}
 * @preview ![hospital-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hospital-user.svg)
 */
const HospitalUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 48l0 224 88 0 24 0 0 48-24 0-88 0 0 48 88 0 24 0 0 48-24 0-88 0 0 48 224 0 0-416L48 48zM0 0L48 0 272 0l48 0 0 48 0 311L253.1 512 48 512 0 512l0-48L0 48 0 0zM136 96l48 0 0 40 40 0 0 48-40 0 0 40-48 0 0-40-40 0 0-48 40 0 0-40zM352 272a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM520 384l56 128-288 0 56-128 176 0z" />
    </Icon>
);

export default HospitalUser;