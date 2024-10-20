
import { Icon } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=sharp-thin sort-up}
 * @preview ![sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sort-up.svg)
 */
const SortUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 183.1L160 53.5 304 183.1l0 24.9L16 208l0-24.9zM160 32L0 176l0 32 0 16 16 0 288 0 16 0 0-16 0-32L160 32z" />
    </Icon>
);

export default SortUp;