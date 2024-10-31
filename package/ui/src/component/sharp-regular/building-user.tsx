
import { Icon } from "../../index";

/**
 * A component that renders the `building-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-user?s=sharp-regular building-user}
 * @preview ![building-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/building-user.svg)
 */
const BuildingUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 48l0 416 96 0 0-112 96 0 0 112 96 0 0-416L48 48zM0 0L48 0 336 0l48 0 0 48 0 311L317.1 512 48 512 0 512l0-48L0 48 0 0zM88 88l80 0 0 80-80 0 0-80zm208 0l0 80-80 0 0-80 80 0zM88 216l80 0 0 80-80 0 0-80zm208 0l0 80-80 0 0-80 80 0zm120 56a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM584 384l56 128-288 0 56-128 176 0z" />
    </Icon>
);

export default BuildingUser;