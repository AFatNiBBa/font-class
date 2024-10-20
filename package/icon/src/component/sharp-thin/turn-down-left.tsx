
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-left?s=sharp-thin turn-down-left}
 * @preview ![turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/turn-down-left.svg)
 */
const TurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 256l16 0 224 0 16 0 0-16 0-192 64 0 0 272-304 0-16 0 0 16 0 96-9.4 0L22.6 288l144-144 9.4 0 0 96 0 16zM160 128L11.3 276.7 0 288l11.3 11.3L160 448l16 0 16 0 0-16 0-80 0-16 16 0 288 0 16 0 0-16 0-272 0-16-16 0-64 0-16 0 0 16 0 176 0 16-16 0-192 0-16 0 0-16 0-80 0-16-16 0-16 0z" />
    </Icon>
);

export default TurnDownLeft;