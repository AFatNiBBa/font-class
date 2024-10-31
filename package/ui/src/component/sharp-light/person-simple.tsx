
import { Icon } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=sharp-light person-simple}
 * @preview ![person-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-simple.svg)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M160 64A32 32 0 1 0 96 64a32 32 0 1 0 64 0zM64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM57.4 320l6.6 0 32 0 64 0 32 0 6.6 0-5.3-128L62.7 192 57.4 320zM64 352l-8 0-32 0 1.3-32L32 160l192 0 6.7 160 1.3 32-32 0-8 0 0 144 0 16-32 0 0-16 0-144-64 0 0 144 0 16-32 0 0-16 0-144z" />
    </Icon>
);

export default PersonSimple;