
import { Icon } from "../../index";

/**
 * A component that renders the `box` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=solid box}
 * @preview ![box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/box.svg)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z" />
    </Icon>
);

export default Box;