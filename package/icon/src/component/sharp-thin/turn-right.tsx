
import { Icon } from "../../index";

/**
 * A component that renders the `turn-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-right?s=sharp-thin turn-right}
 * @preview ![turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/turn-right.svg)
 */
const TurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 256l-16 0L96 256l-16 0 0 16 0 192-64 0 0-272 304 0 16 0 0-16 0-96 9.4 0 144 144-144 144-9.4 0 0-96 0-16zm16 128L500.7 235.3 512 224l-11.3-11.3L352 64l-16 0-16 0 0 16 0 80 0 16-16 0L16 176 0 176l0 16L0 464l0 16 16 0 64 0 16 0 0-16 0-176 0-16 16 0 192 0 16 0 0 16 0 80 0 16 16 0 16 0z" />
    </Icon>
);

export default TurnRight;