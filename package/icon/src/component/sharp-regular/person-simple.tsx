
import { Icon } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=sharp-regular person-simple}
 * @preview ![person-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-simple.svg)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M128 0a64 64 0 1 1 0 128A64 64 0 1 1 128 0zM74 304l38 0 32 0 38 0-4-96L78 208l-4 96zM64 352l-40 0 2-48 6-144 192 0 6 144 2 48-40 0 0 136 0 24-48 0 0-24 0-136-32 0 0 136 0 24-48 0 0-24 0-136z" />
    </Icon>
);

export default PersonSimple;