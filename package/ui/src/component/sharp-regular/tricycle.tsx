
import { Icon } from "../../index";

/**
 * A component that renders the `tricycle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tricycle?s=sharp-regular tricycle}
 * @preview ![tricycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tricycle.svg)
 */
const Tricycle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 32l-24 0 0 48 24 0 88 0 0 21-47.6 40.8-2.6 2.2-10.6 0c-58.8 0-114 23.9-154.1 64.6L133.6 176l2.4 0 24 0 0-48-24 0-80 0-24 0 0 48 24 0 21.6 0 44 73.4c-1.3 2.2-2.6 4.5-3.9 6.7c-1.9-.1-3.9-.1-5.8-.1C50.1 256 0 306.1 0 368s50.1 112 112 112s112-50.1 112-112c0-42.4-23.6-79.4-58.4-98.4c30.7-48.1 84-77.6 141.6-77.6l12.1 0 11 43.8C286.4 256.1 256 300.5 256 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-2.4 0-4.8 .1-7.2 .2l-13.9-55.6 44.7-38.3L416 123l0-11 0-56 0-24-24 0L280 32zm62.2 251.8l18.5 74 5.8 23.3 46.6-11.6-5.8-23.3-18.5-74c42 2.5 75.2 37.3 75.2 79.9c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-28.9 15.3-54.2 38.2-68.2zM112 304a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Tricycle;