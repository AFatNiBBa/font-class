
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-bracket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-bracket?s=sharp-thin up-to-bracket}
 * @preview ![up-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/up-to-bracket.svg)
 */
const UpToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 352l-16 0-64 0-16 0 0-16 0-16L212.7 171.3 224 160l11.3 11.3L384 320l0 16 0 16-16 0-64 0-16 0 0 16 0 128 0 16-16 0-96 0-16 0 0-16 0-128 0-16zm0-16l16 0 0 16 0 144 96 0 0-144 0-16 16 0 80 0 0-9.4-144-144L80 326.6l0 9.4 80 0zM16 184l0 8L0 192l0-8L0 8C0 3.6 3.6 0 8 0L440 0c4.4 0 8 3.6 8 8l0 176 0 8-16 0 0-8 0-168L16 16l0 168z" />
    </Icon>
);

export default UpToBracket;