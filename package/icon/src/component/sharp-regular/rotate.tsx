
import { Icon } from "../../index";

/**
 * A component that renders the `rotate` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate?s=sharp-regular rotate}
 * @preview ![rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rotate.svg)
 */
const Rotate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M94 187.1C120.8 124.1 183.3 80 256 80c39.7 0 77.8 15.8 105.9 43.9L367 129l-21.1 21.1L312 184l33.9 33.9L352 224l96 0 48 0 0-48 0-96-6.1-6.1L456 40 422.1 73.9 401 95l-5.1-5.1C358.8 52.8 308.5 32 256 32C163.4 32 83.9 88.2 49.8 168.3L94 187.1zM417.9 325.2C391 388.1 328.6 432 256 432c-39.7 0-77.8-15.8-105.9-43.9L145 383l21.1-21.1L200 328l-33.9-33.9L160 288l-96 0-48 0 0 48 0 96 6.1 6.1L56 472l33.9-33.9L111 417l5.1 5.1C153.2 459.2 203.5 480 256 480c92.5 0 171.8-56 206-135.9l-44.1-18.9zM387.9 176L448 115.9l0 60.1-60.1 0zM124.1 336L64 396.1 64 336l60.1 0z" />
    </Icon>
);

export default Rotate;