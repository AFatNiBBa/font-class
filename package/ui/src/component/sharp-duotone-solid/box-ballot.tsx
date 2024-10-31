
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=sharp-duotone-solid box-ballot}
 * @preview ![box-ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/box-ballot.svg)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l128 0 0 64-48 0-16 0 0 32 16 0 48 0 320 0 48 0 16 0 0-32-16 0-48 0 0-64 128 0 0 160L0 320 0 160z" />
        <path d="M448 0l0 256-320 0L128 0 448 0zM576 512L0 512 0 320l576 0 0 192z" />
    </Icon>
);

export default BoxBallot;