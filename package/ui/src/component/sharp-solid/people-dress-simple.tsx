
import { Icon } from "../../index";

/**
 * A component that renders the `people-dress-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-dress-simple?s=sharp-solid people-dress-simple}
 * @preview ![people-dress-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/people-dress-simple.svg)
 */
const PeopleDressSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 128A64 64 0 1 0 128 0a64 64 0 1 0 0 128zM256 384L192 160 64 160 0 384l64 0 0 128 128 0 0-128 64 0zm0 0l64 0 0 128 128 0 0-128 64 0L448 160l-128 0L256 384zM384 128A64 64 0 1 0 384 0a64 64 0 1 0 0 128z" />
    </Icon>
);

export default PeopleDressSimple;