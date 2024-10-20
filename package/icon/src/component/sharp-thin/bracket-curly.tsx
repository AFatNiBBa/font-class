
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-curly` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly?s=sharp-thin bracket-curly}
 * @preview ![bracket-curly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bracket-curly.svg)
 */
const BracketCurly: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M72 32l-8 0 0 8 0 148.7L2.3 250.3 0 252.7l0 6.6 2.3 2.3L64 323.3 64 472l0 8 8 0 128 0 8 0 0-16-8 0L80 464l0-144 0-3.3-2.3-2.3L19.3 256l58.3-58.3 2.3-2.3 0-3.3L80 48l120 0 8 0 0-16-8 0L72 32z" />
    </Icon>
);

export default BracketCurly;