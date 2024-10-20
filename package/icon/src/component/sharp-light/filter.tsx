
import { Icon } from "../../index";

/**
 * A component that renders the `filter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=sharp-light filter}
 * @preview ![filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/filter.svg)
 */
const Filter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 308.2l-7.7-9L32 84.2 32 64l448 0 0 20.2-184.3 215-7.7 9 0 11.8 0 121.5-64-56 0-65.5 0-11.8zM0 96L192 320l0 80 96 84 32 28 0-42.5L320 320 512 96l0-32 0-32-32 0L32 32 0 32 0 64 0 96z" />
    </Icon>
);

export default Filter;