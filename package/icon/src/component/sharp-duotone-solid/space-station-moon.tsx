
import { Icon, generic } from "../../index";

/**
 * A component that renders the `space-station-moon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/space-station-moon?s=sharp-duotone-solid space-station-moon}
 * @preview ![space-station-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/space-station-moon.svg)
 */
const SpaceStationMoon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 7.8 .3 15.5 1 23.1C73.2 304.7 160.8 320 256 320s182.8-15.3 255-40.9c.7-7.6 1-15.3 1-23.1C512 114.6 397.4 0 256 0S0 114.6 0 256zm6.8 58.8C33.4 427.9 134.9 512 256 512s222.6-84.1 249.2-197.2C432.6 338.4 347.3 352 256 352s-176.6-13.6-249.2-37.2zM272 160a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
        <path d="M224 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-112 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM6.8 314.8C4.1 303.2 2.1 291.3 1 279.1C73.2 304.7 160.8 320 256 320s182.8-15.3 255-40.9c-1.1 12.2-3 24.1-5.8 35.8C432.6 338.4 347.3 352 256 352s-176.6-13.6-249.2-37.2z" />
    </Icon>
);

export default SpaceStationMoon;