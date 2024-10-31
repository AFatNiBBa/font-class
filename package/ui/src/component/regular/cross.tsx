
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=regular cross}
 * @preview ![cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cross.svg)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M112 48c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 64 64 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0 0 192c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-192-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l64 0 0-64zm112 0l-64 0 0 88c0 13.3-10.7 24-24 24l-88 0 0 64 88 0c13.3 0 24 10.7 24 24l0 216 64 0 0-216c0-13.3 10.7-24 24-24l88 0 0-64-88 0c-13.3 0-24-10.7-24-24l0-88z" />
    </Icon>
);

export default Cross;