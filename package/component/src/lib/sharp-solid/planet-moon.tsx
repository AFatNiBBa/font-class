
import { Icon } from "../../index";

/**
 * A component that renders the `planet-moon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/planet-moon?s=sharp-solid planet-moon}
 * @preview ![planet-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/planet-moon.svg)
 */
const PlanetMoon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 0a64 64 0 1 1 0 128A64 64 0 1 1 512 0zM0 288a224 224 0 1 1 448 0A224 224 0 1 1 0 288zM256 114.9c-10.4-1.9-21.1-2.9-32-2.9c-86.3 0-158 62.1-173.1 144l77.1 0 64 64 0 64 32 0 0 72 40 0 56-104 0-64-112 0-32-32 80-96 0-45.1z" />
    </Icon>
);

export default PlanetMoon;