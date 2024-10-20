
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=sharp-solid box-ballot}
 * @preview ![box-ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/box-ballot.svg)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 0L448 0l0 224-320 0L128 0zM0 352l576 0 0 160L0 512 0 352zM0 160l96 0 0 96 384 0 0-96 96 0 0 160L0 320 0 160z" />
    </Icon>
);

export default BoxBallot;