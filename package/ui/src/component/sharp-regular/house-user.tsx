
import { Icon } from "../../index";

/**
 * A component that renders the `house-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-user?s=sharp-regular house-user}
 * @preview ![house-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/house-user.svg)
 */
const HouseUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 .5l15.5 13.2 264 224-31.1 36.6L512 253.5 512 488l0 24-24 0L88 512l-24 0 0-24 0-234.5L39.5 274.3 8.5 237.7l264-224L288 .5zM112 212.8L112 464l352 0 0-251.2L288 63.5 112 212.8zM224 224a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96-224 0 32-96 160 0z" />
    </Icon>
);

export default HouseUser;