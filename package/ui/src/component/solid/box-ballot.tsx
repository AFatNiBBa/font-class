
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=solid box-ballot}
 * @preview ![box-ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/box-ballot.svg)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 32c0-17.7 14.3-32 32-32L416 0c17.7 0 32 14.3 32 32l0 192-320 0 0-192zM0 352l576 0 0 112c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 352zM48 160l48 0 0 96 384 0 0-96 48 0c26.5 0 48 21.5 48 48l0 112L0 320 0 208c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default BoxBallot;