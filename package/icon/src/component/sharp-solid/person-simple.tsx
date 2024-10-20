
import { Icon } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=sharp-solid person-simple}
 * @preview ![person-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-simple.svg)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zm160 96l8 192-40 0 0 160L64 512l0-160-40 0 8-192 192 0z" />
    </Icon>
);

export default PersonSimple;