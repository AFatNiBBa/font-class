
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=sharp-regular box-ballot}
 * @preview ![box-ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/box-ballot.svg)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 48l0 160 224 0 0-160L176 48zM128 0l48 0L400 0l48 0 0 48 0 160 0 48-48 0-224 0-48 0 0-48 0-160 0-48zM48 160l48 0 0 48-48 0 0 112 480 0 0-112-48 0 0-48 48 0 48 0 0 48 0 112 0 24 0 24 0 96 0 48-48 0L48 512 0 512l0-48 0-96 0-24 0-24L0 208l0-48 48 0zM528 368L48 368l0 96 480 0 0-96z" />
    </Icon>
);

export default BoxBallot;