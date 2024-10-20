
import { Icon } from "../../index";

/**
 * A component that renders the `palette` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/palette?s=sharp-solid palette}
 * @preview ![palette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/palette.svg)
 */
const Palette: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0C397.4 0 512 114.6 512 256l0 64-156.1 0c-37.5 0-67.9 30.4-67.9 67.9c0 18 7.2 35.3 19.9 48L320 448l-64 64C114.6 512 0 397.4 0 256S114.6 0 256 0zm0 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-96 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Palette;