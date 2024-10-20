
import { Icon } from "../../index";

/**
 * A component that renders the `overline` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=solid overline}
 * @preview ![overline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/overline.svg)
 */
const Overline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zm192 96a176 176 0 1 0 0 352 176 176 0 1 0 0-352zM336 304a112 112 0 1 1 -224 0 112 112 0 1 1 224 0z" />
    </Icon>
);

export default Overline;