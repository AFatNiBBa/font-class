
import { Icon } from "../../index";

/**
 * A component that renders the `house-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-user?s=sharp-solid house-user}
 * @preview ![house-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-user.svg)
 */
const HouseUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 287.6l-64.2 0 1 224.4L64.1 512l0-224.4L0 287.6 0 240 288.4 0 576 240l0 47.6zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm48 192l-32-96-160 0-32 96 224 0z" />
    </Icon>
);

export default HouseUser;