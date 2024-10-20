
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=solid cross}
 * @preview ![cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/cross.svg)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176 0c-26.5 0-48 21.5-48 48l0 80-80 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l80 0 0 208c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-208 80 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48l-80 0 0-80c0-26.5-21.5-48-48-48L176 0z" />
    </Icon>
);

export default Cross;