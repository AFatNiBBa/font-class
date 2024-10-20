
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=sharp-light chalkboard}
 * @preview ![chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chalkboard.svg)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 32L32 32l0 16 0 368 32 0L64 64l448 0 0 352 32 0 0-368 0-16-16 0L48 32zM224 352l0 16 0 80L16 448 0 448l0 32 16 0 544 0 16 0 0-32-16 0-144 0 0-80 0-16-16 0-160 0-16 0zm32 32l128 0 0 56-128 0 0-56z" />
    </Icon>
);

export default Chalkboard;