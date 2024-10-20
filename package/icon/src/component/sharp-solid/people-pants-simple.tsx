
import { Icon } from "../../index";

/**
 * A component that renders the `people-pants-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-pants-simple?s=sharp-solid people-pants-simple}
 * @preview ![people-pants-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/people-pants-simple.svg)
 */
const PeoplePantsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 128A64 64 0 1 0 128 0a64 64 0 1 0 0 128zM232 352l-8-192L32 160 24 352l40 0 0 160 128 0 0-160 40 0zM384 128A64 64 0 1 0 384 0a64 64 0 1 0 0 128zM488 352l-8-192-192 0-8 192 40 0 0 160 128 0 0-160 40 0z" />
    </Icon>
);

export default PeoplePantsSimple;