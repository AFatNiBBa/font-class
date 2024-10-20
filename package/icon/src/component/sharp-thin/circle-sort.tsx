
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort?s=sharp-thin circle-sort}
 * @preview ![circle-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-sort.svg)
 */
const CircleSort: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 199.4l96-82.3 96 82.3 0 8.6-192 0 0-8.6zM256 96L144 192l0 16 0 16 16 0 192 0 16 0 0-16 0-16L256 96zM160 312.6l0-8.6 192 0 0 8.6-96 82.3-96-82.3zM256 416l112-96 0-16 0-16-16 0-192 0-16 0 0 16 0 16 112 96z" />
    </Icon>
);

export default CircleSort;