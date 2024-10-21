
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-up?s=sharp-regular circle-caret-up}
 * @preview ![circle-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-caret-up.svg)
 */
const CircleCaretUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 272l0 32 256 0 0-32L256 144 128 272z" />
    </Icon>
);

export default CircleCaretUp;