
import { Icon } from "../../index";

/**
 * A component that renders the `people-arrows` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-arrows?s=sharp-solid people-arrows}
 * @preview ![people-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/people-arrows.svg)
 */
const PeopleArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 128A64 64 0 1 0 128 0a64 64 0 1 0 0 128zm9.4 198.6L114.7 304l22.6-22.6 88-88L224 160 32 160 24 352l40 0 0 160 128 0 0-130.7-54.6-54.6zM512 128A64 64 0 1 0 512 0a64 64 0 1 0 0 128zM616 352l-8-192-192 0-1.4 33.4 88 88L525.3 304l-22.6 22.6L448 381.3 448 512l128 0 0-160 40 0zM272 192L160 304 272 416l0-80 96 0 0 80L480 304 368 192l0 80-96 0 0-80z" />
    </Icon>
);

export default PeopleArrows;