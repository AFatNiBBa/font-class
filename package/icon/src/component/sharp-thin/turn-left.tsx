
import { Icon } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=sharp-thin turn-left}
 * @preview ![turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/turn-left.svg)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 256l16 0 224 0 16 0 0 16 0 192 64 0 0-272-304 0-16 0 0-16 0-96-9.4 0L22.6 224l144 144 9.4 0 0-96 0-16zM160 384L11.3 235.3 0 224l11.3-11.3L160 64l16 0 16 0 0 16 0 80 0 16 16 0 288 0 16 0 0 16 0 272 0 16-16 0-64 0-16 0 0-16 0-176 0-16-16 0-192 0-16 0 0 16 0 80 0 16-16 0-16 0z" />
    </Icon>
);

export default TurnLeft;