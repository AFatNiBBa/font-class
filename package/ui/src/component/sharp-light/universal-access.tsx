
import { Icon } from "../../index";

/**
 * A component that renders the `universal-access` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/universal-access?s=sharp-light universal-access}
 * @preview ![universal-access](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/universal-access.svg)
 */
const UniversalAccess: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM135.9 186.9l-13 29.2 14.6 6.5L208 254l0 64.5-15.7 78.4-3.1 15.7 31.4 6.3 3.1-15.7L237.1 336l37.8 0 13.4 67.1 3.1 15.7 31.4-6.3-3.1-15.7L304 318.4l0-64.5 70.5-31.3 14.6-6.5-13-29.2-14.6 6.5L292.6 224 272 224l-32 0-20.6 0-68.9-30.6-14.6-6.5zM240 256l32 0 0 48-32 0 0-48z" />
    </Icon>
);

export default UniversalAccess;