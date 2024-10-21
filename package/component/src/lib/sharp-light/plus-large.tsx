
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=sharp-light plus-large}
 * @preview ![plus-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/plus-large.svg)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16l0-16L240 0l0 16 0 224L16 240 0 240l0 32 16 0 224 0 0 224 0 16 32 0 0-16 0-224 224 0 16 0 0-32-16 0-224 0 0-224z" />
    </Icon>
);

export default PlusLarge;