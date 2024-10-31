
import { Icon } from "../../index";

/**
 * A component that renders the `user-visor` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-visor?s=sharp-solid user-visor}
 * @preview ![user-visor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-visor.svg)
 */
const UserVisor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M342.7 176c-19 46.9-65 80-118.7 80s-99.7-33.1-118.7-80L80 176 80 48l44.1 0C147.5 18.7 183.6 0 224 0s76.5 18.7 99.9 48L368 48l0 128-25.3 0zM384 304l64 208L0 512 64 304l320 0zM328 440l24 24 8-8-40-88-40 88 8 8 40-24zM144 96l-16 0 0 32 16 0 160 0 16 0 0-32-16 0L144 96z" />
    </Icon>
);

export default UserVisor;