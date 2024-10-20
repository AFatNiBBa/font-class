
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=sharp-solid plus-large}
 * @preview ![plus-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/plus-large.svg)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0-32L224 0l0 32 0 192L32 224 0 224l0 64 32 0 192 0 0 192 0 32 64 0 0-32 0-192 192 0 32 0 0-64-32 0-192 0 0-192z" />
    </Icon>
);

export default PlusLarge;