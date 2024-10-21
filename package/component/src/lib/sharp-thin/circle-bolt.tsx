
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bolt` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bolt?s=sharp-thin circle-bolt}
 * @preview ![circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-bolt.svg)
 */
const CircleBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM198.3 374.9L220 288l4-16-16.5 0L160 272l-16 0 0-16 0-8L299.6 127.8 320 112l-6.3 25.1L292 224l-4 16 16.5 0 47.5 0 16 0 0 16 0 8L212.4 384.2 192 400l6.3-25.1zM224 256l20.5 0-5 19.9-20.8 83.3L352 256.1l0-.1-64 0-20.5 0 5-19.9 20.8-83.3L160 255.9l0 .1 64 0z" />
    </Icon>
);

export default CircleBolt;