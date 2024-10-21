
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=sharp-thin box-ballot}
 * @preview ![box-ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/box-ballot.svg)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 16l0 224 288 0 0-224L144 16zM128 0l16 0L432 0l16 0 0 16 0 224 0 16-16 0-288 0-16 0 0-16 0-224 0-16zM16 160l80 0 0 16-80 0 0 144 544 0 0-144-80 0 0-16 80 0 16 0 0 16 0 144 0 8 0 8 0 160 0 16-16 0L16 512 0 512l0-16L0 336l0-8 0-8L0 176l0-16 16 0zM560 336L16 336l0 160 544 0 0-160z" />
    </Icon>
);

export default BoxBallot;