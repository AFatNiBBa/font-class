
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=regular plus-large}
 * @preview ![plus-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/plus-large.svg)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M488 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0 0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208L24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l208 0 0-208c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208 208 0z" />
    </Icon>
);

export default PlusLarge;