
import { Icon } from "../../index";

/**
 * A component that renders the `circle-i` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-i?s=thin circle-i}
 * @preview ![circle-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-i.svg)
 */
const CircleI: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 128c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 0 224-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-224 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-88 0-88 0z" />
    </Icon>
);

export default CircleI;