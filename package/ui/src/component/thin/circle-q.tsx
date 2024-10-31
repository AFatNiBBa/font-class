
import { Icon } from "../../index";

/**
 * A component that renders the `circle-q` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=thin circle-q}
 * @preview ![circle-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-q.svg)
 */
const CircleQ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 256c0-61.9 50.1-112 112-112s112 50.1 112 112c0 28-10.3 53.7-27.3 73.3l-61.9-61.9c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l61.9 61.9C309.7 357.7 284 368 256 368c-61.9 0-112-50.1-112-112zm240 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128c32.5 0 62.1-12.1 84.7-32l29.7 29.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L352 340.7c19.9-22.6 32-52.2 32-84.7z" />
    </Icon>
);

export default CircleQ;