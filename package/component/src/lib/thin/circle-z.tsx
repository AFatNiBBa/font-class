
import { Icon } from "../../index";

/**
 * A component that renders the `circle-z` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=thin circle-z}
 * @preview ![circle-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-z.svg)
 */
const CircleZ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128c-4.4 0-8 3.6-8 8s3.6 8 8 8l175.4 0L153.8 371c-1.9 2.4-2.3 5.7-1 8.5s4.1 4.5 7.2 4.5l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-175.4 0L358.2 141c1.9-2.4 2.3-5.7 1-8.5s-4.1-4.5-7.2-4.5l-192 0z" />
    </Icon>
);

export default CircleZ;