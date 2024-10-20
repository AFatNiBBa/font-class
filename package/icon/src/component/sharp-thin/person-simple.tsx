
import { Icon } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=sharp-thin person-simple}
 * @preview ![person-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-simple.svg)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M176 64A48 48 0 1 0 80 64a48 48 0 1 0 96 0zM64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM40.7 336L64 336l48 0 32 0 48 0 23.3 0-6.7-160L47.3 176 40.7 336zM136 352l-16 0 0 152 0 8-8 0-48 0-8 0 0-8 0-152-16 0-16 0 .7-16L32 160l192 0 7.3 176 .7 16-16 0-16 0 0 152 0 8-8 0-48 0-8 0 0-8 0-152zm48 0l-32 0 0 144 32 0 0-144zM72 352l0 144 32 0 0-144-32 0z" />
    </Icon>
);

export default PersonSimple;