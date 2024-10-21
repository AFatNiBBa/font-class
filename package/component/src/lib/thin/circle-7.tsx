
import { Icon } from "../../index";

/**
 * A component that renders the `circle-7` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-7?s=thin circle-7}
 * @preview ![circle-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-7.svg)
 */
const Circle_7: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 128c-4.4 0-8 3.6-8 8s3.6 8 8 8l161.9 0L193.1 371.9c-2.3 3.8-1 8.7 2.7 11s8.7 1 11-2.7l144-240c1.5-2.5 1.5-5.5 .1-8.1s-4.1-4.1-7-4.1l-176 0z" />
    </Icon>
);

export default Circle_7;