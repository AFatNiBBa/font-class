
import { Icon } from "../../index";

/**
 * A component that renders the `filter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=sharp-regular filter}
 * @preview ![filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/filter.svg)
 */
const Filter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 286.4l0 17.6 0 56.9 64 51.2L288 304l0-17.6L299.4 273 462.7 80 49.3 80 212.6 273 224 286.4zM0 80L0 32l48 0 416 0 48 0 0 48 0 16L336 304l0 146.5 0 61.5-48-38.4L176 384l0-80L0 96 0 80z" />
    </Icon>
);

export default Filter;