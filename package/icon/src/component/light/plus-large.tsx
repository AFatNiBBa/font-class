
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=light plus-large}
 * @preview ![plus-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/plus-large.svg)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 224L16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0 0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224 224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0 0-224z" />
    </Icon>
);

export default PlusLarge;