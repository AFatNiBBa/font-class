
import { Icon } from "../../index";

/**
 * A component that renders the `link-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple?s=sharp-thin link-simple}
 * @preview ![link-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/link-simple.svg)
 */
const LinkSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 256c0-88.4 71.6-160 160-160l56 0 8 0 0 16-8 0-56 0c-79.5 0-144 64.5-144 144s64.5 144 144 144l56 0 8 0 0 16-8 0-56 0c-88.4 0-160-71.6-160-160zm512 0c0 88.4-71.6 160-160 160l-56 0-8 0 0-16 8 0 56 0c79.5 0 144-64.5 144-144s-64.5-144-144-144l-56 0-8 0 0-16 8 0 56 0c88.4 0 160 71.6 160 160zm-400-8l288 0 8 0 0 16-8 0-288 0-8 0 0-16 8 0z" />
    </Icon>
);

export default LinkSimple;