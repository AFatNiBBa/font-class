
import { Icon } from "../../index";

/**
 * A component that renders the `bird` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bird?s=sharp-regular bird}
 * @preview ![bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bird.svg)
 */
const Bird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 208L48.7 208c8.1 89.7 83.5 160 175.3 160c97.2 0 176-78.8 176-176l0-80c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 48 0 48-48 0zm0 208c-1 0-2 0-3 0l50.8 96-54.3 0L162.1 407.4C73.4 381.9 7.3 303.2 .6 208c-.4-5.3-.6-10.6-.6-16l0-32 48 0 128 0 48 0 0-48C224 50.1 274.1 0 336 0c51.7 0 95.3 35.1 108.1 82.8L512 128l-64 42.7 0 21.3c0 93.9-57.7 174.3-139.7 207.6L367.9 512l-54.3 0-52.4-99.1C249 415 236.6 416 224 416zM336 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Bird;