
import { Icon } from "../../index";

/**
 * A component that renders the `people-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-simple?s=sharp-solid people-simple}
 * @preview ![people-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/people-simple.svg)
 */
const PeopleSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 128A64 64 0 1 0 128 0a64 64 0 1 0 0 128zM232 352l-8-192L32 160 24 352l40 0 0 160 128 0 0-160 40 0zM384 128A64 64 0 1 0 384 0a64 64 0 1 0 0 128zM512 384L448 160l-128 0L256 384l64 0 0 128 128 0 0-128 64 0z" />
    </Icon>
);

export default PeopleSimple;