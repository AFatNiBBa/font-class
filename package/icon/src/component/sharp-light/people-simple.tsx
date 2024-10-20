
import { Icon } from "../../index";

/**
 * A component that renders the `people-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-simple?s=sharp-light people-simple}
 * @preview ![people-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/people-simple.svg)
 */
const PeopleSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 64A32 32 0 1 0 96 64a32 32 0 1 0 64 0zM64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM57.4 320l6.6 0 32 0 64 0 32 0 6.6 0-5.3-128L62.7 192 57.4 320zM200 352l-8 0 0 144 0 16-32 0 0-16 0-144-64 0 0 144 0 16-32 0 0-16 0-144-8 0-32 0 1.3-32L32 160l192 0 6.7 160 1.3 32-32 0zM416 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 320 64zM298.4 352l171.2 0L423.9 192l-79.7 0L298.4 352zM320 160l128 0 54.9 192 9.1 32-33.3 0L448 384l0 112 0 16-32 0 0-16 0-112-64 0 0 112 0 16-32 0 0-16 0-112-30.7 0L256 384l9.1-32L320 160z" />
    </Icon>
);

export default PeopleSimple;