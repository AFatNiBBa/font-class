
import { Icon } from "../../index";

/**
 * A component that renders the `space-station-moon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/space-station-moon?s=sharp-solid space-station-moon}
 * @preview ![space-station-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/space-station-moon.svg)
 */
const SpaceStationMoon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256c0 7.8-.3 15.5-1 23.1C438.8 304.7 351.2 320 256 320s-182.8-15.3-255-40.9c-.7-7.6-1-15.3-1-23.1C0 114.6 114.6 0 256 0S512 114.6 512 256zM256 512C134.9 512 33.4 427.9 6.8 314.8C79.4 338.4 164.7 352 256 352s176.6-13.6 249.2-37.2C478.6 427.9 377.1 512 256 512zM160 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default SpaceStationMoon;