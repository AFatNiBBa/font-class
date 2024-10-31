
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=light box-ballot}
 * @preview ![box-ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/box-ballot.svg)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 32l0 192 256 0 0-192L160 32zm-32 0c0-17.7 14.3-32 32-32L416 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-192zM48 160l48 0 0 32-48 0c-8.8 0-16 7.2-16 16l0 112 512 0 0-112c0-8.8-7.2-16-16-16l-48 0 0-32 48 0c26.5 0 48 21.5 48 48l0 112 0 16 0 16 0 112c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 352l0-16 0-16L0 208c0-26.5 21.5-48 48-48zM544 352L32 352l0 112c0 8.8 7.2 16 16 16l480 0c8.8 0 16-7.2 16-16l0-112z" />
    </Icon>
);

export default BoxBallot;