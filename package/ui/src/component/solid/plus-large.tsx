
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=solid plus-large}
 * @preview ![plus-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/plus-large.svg)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 192L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0 0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0 0-192z" />
    </Icon>
);

export default PlusLarge;