
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=regular box-ballot}
 * @preview ![box-ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/box-ballot.svg)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 208l224 0 0-160L176 48l0 160zM128 32c0-17.7 14.3-32 32-32L416 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-192zM48 160l48 0 0 48-48 0 0 112 480 0 0-112-48 0 0-48 48 0c26.5 0 48 21.5 48 48l0 112 0 24 0 24 0 96c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-96 0-24 0-24L0 208c0-26.5 21.5-48 48-48zM528 368L48 368l0 96 480 0 0-96z" />
    </Icon>
);

export default BoxBallot;