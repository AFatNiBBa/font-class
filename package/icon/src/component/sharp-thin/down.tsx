
import { Icon } from "../../index";

/**
 * A component that renders the `down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=sharp-thin down}
 * @preview ![down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/down.svg)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 272l0-16 0-208 96 0 0 208 0 16 16 0 112 0 0 9.4-176 176L16 281.4l0-9.4 112 0 16 0zM0 288L180.7 468.7 192 480l11.3-11.3L384 288l0-16 0-16-16 0-96 0-16 0 0-16 0-192 0-16-16 0-96 0-16 0 0 16 0 192 0 16-16 0-96 0L0 256l0 16 0 16z" />
    </Icon>
);

export default Down;