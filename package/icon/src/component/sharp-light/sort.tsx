
import { Icon } from "../../index";

/**
 * A component that renders the `sort` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=sharp-light sort}
 * @preview ![sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sort.svg)
 */
const Sort: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 190.2L160 75 288 190.2l0 1.7L32 192l0-1.7zM0 224l32 0 256 0 32 0 0-32 0-16L160 32 0 176l0 16 0 32zm32 97.8l0-1.8 256 0 0 1.8L160 437 32 321.8zM0 288l0 32 0 16L160 480 320 336l0-16 0-32-32 0L32 288 0 288z" />
    </Icon>
);

export default Sort;