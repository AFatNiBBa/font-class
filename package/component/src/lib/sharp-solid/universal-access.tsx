
import { Icon } from "../../index";

/**
 * A component that renders the `universal-access` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/universal-access?s=sharp-solid universal-access}
 * @preview ![universal-access](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/universal-access.svg)
 */
const UniversalAccess: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160.4-86.5L138 161.1 121.1 206l22.5 8.4 64 24 .4 .2 0 53.5-30.8 92.3-7.6 22.8 45.5 15.2 7.6-22.8L249.3 320l13.4 0 26.5 79.6 7.6 22.8 45.5-15.2-7.6-22.8L304 292.1l0-53.5 .4-.2 64-24 22.5-8.4L374 161.1l-22.5 8.4L291.6 192l-71.3 0-59.9-22.5zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default UniversalAccess;