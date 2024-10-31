
import { Icon } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=sharp-thin turn-up}
 * @preview ![turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/turn-up.svg)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M160 176l0 16 0 224 0 16-16 0L16 432l0 64 208 0 0-304 0-16 16 0 96 0 0-9.4L192 22.6 48 166.6l0 9.4 96 0 16 0zM32 160L180.7 11.3 192 0l11.3 11.3L352 160l0 16 0 16-16 0-80 0-16 0 0 16 0 288 0 16-16 0L16 512 0 512l0-16 0-64 0-16 16 0 112 0 16 0 0-16 0-192 0-16-16 0-80 0-16 0 0-16 0-16z" />
    </Icon>
);

export default TurnUp;