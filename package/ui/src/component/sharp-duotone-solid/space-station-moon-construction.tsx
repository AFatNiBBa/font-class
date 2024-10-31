
import { Icon, generic } from "../../index";

/**
 * A component that renders the `space-station-moon-construction` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/space-station-moon-construction?s=sharp-duotone-solid space-station-moon-construction}
 * @preview ![space-station-moon-construction](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/space-station-moon-construction.svg)
 */
const SpaceStationMoonConstruction: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 7.8 .3 15.5 1 23.1C73.2 304.7 160.8 320 256 320s182.8-15.3 255-40.9c.7-7.6 1-15.3 1-23.1c0-10.8-.7-21.5-2-32l-62 0 0-64-80 0 0-64 48 0 0-39.9C372.2 21 316.5 0 256 0C114.6 0 0 114.6 0 256zm6.8 58.8C33.4 427.9 134.9 512 256 512c76.5 0 145.1-33.5 192-86.7l0-41.3-64 0 0-41.2c-40.7 6-83.7 9.2-128 9.2c-91.3 0-176.6-13.6-249.2-37.2zM272 160a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
        <path d="M224 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-112 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM6.8 314.8C4.1 303.2 2.1 291.3 1 279.1C73.2 304.7 160.8 320 256 320s182.8-15.3 255-40.9c-1.1 12.2-3 24.1-5.8 35.8C432.6 338.4 347.3 352 256 352s-176.6-13.6-249.2-37.2z" />
    </Icon>
);

export default SpaceStationMoonConstruction;