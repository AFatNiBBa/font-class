
import { Icon } from "../../index";

/**
 * A component that renders the `bomb` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bomb?s=sharp-solid bomb}
 * @preview ![bomb](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bomb.svg)
 */
const Bomb: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 0L405.3 53.3 352 80l53.3 26.7L432 160l26.7-53.3L512 80 458.7 53.3 432 0zM326.6 105.4L304 82.7l-22.6 22.6-2.9 2.9C256.5 100.3 232.7 96 208 96C93.1 96 0 189.1 0 304S93.1 512 208 512s208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9L429.3 208l-22.6-22.6-80-80zM200 192c-57.4 0-104 46.6-104 104l0 8-32 0 0-8c0-75.1 60.9-136 136-136l8 0 0 32-8 0z" />
    </Icon>
);

export default Bomb;