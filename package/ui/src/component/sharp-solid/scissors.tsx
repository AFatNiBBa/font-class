
import { Icon } from "../../index";

/**
 * A component that renders the `scissors` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scissors?s=sharp-solid scissors}
 * @preview ![scissors](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/scissors.svg)
 */
const Scissors: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-7.5 104.5c-12.6 4.9-26.2 7.5-40.5 7.5C50.1 224 0 173.9 0 112S50.1 0 112 0s112 50.1 112 112c0 14.3-2.7 27.9-7.5 40.5L256 192 416 32l64 0 32 32L216.5 359.5c4.9 12.6 7.5 26.2 7.5 40.5c0 61.9-50.1 112-112 112S0 461.9 0 400s50.1-112 112-112c14.3 0 27.9 2.7 40.5 7.5L192 256l-39.5-39.5zM278.6 342.6l64-64L512 448l-32 32-64 0L278.6 342.6zM112 352a48 48 0 1 0 0 96 48 48 0 1 0 0-96z" />
    </Icon>
);

export default Scissors;