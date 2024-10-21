
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=thin dice-d8}
 * @preview ![dice-d8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dice-d8.svg)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 20.7L19.8 248.9 248 332.5l0-311.9zM24.2 267.5L248 491.3l0-141.7L24.2 267.5zM264 491.3L487.8 267.5 264 349.6l0 141.7zM492.2 248.9L264 20.7l0 311.9 228.2-83.7zM239 7c9.4-9.4 24.6-9.4 33.9 0L505 239c9.4 9.4 9.4 24.6 0 33.9L273 505c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L239 7z" />
    </Icon>
);

export default DiceD8;