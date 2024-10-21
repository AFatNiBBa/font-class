
import { Icon } from "../../index";

/**
 * A component that renders the `house-user` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-user?s=solid house-user}
 * @preview ![house-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/house-user.svg)
 */
const HouseUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c.2 35.5-28.5 64.3-64 64.3l-320.4 0c-35.3 0-64-28.7-64-64l0-160.4-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0z" />
    </Icon>
);

export default HouseUser;