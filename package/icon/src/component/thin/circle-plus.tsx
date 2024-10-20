
import { Icon } from "../../index";

/**
 * A component that renders the `circle-plus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-plus?s=thin circle-plus}
 * @preview ![circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-plus.svg)
 */
const CirclePlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm-8-160c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-88 0 0-88c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 88-88 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 0 88z" />
    </Icon>
);

export default CirclePlus;