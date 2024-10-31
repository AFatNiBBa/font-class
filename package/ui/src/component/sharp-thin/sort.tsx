
import { Icon } from "../../index";

/**
 * A component that renders the `sort` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=sharp-thin sort}
 * @preview ![sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sort.svg)
 */
const Sort: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 208l288 0 0-24.9L160 53.5 16 183.1 16 208zM0 176L160 32 320 176l0 32 0 16-16 0L16 224 0 224l0-16 0-32zM16 304l0 24.9L160 458.5 304 328.9l0-24.9L16 304zM0 336l0-32 0-16 16 0 288 0 16 0 0 16 0 32L160 480 0 336z" />
    </Icon>
);

export default Sort;