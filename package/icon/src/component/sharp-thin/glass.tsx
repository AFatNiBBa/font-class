
import { Icon } from "../../index";

/**
 * A component that renders the `glass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=sharp-thin glass}
 * @preview ![glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/glass.svg)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M26 128L358 128 329.2 496 54.8 496 26 128zm-1.2-16L17.3 16l349.4 0-7.5 96L24.8 112zM40 512l304 0L382.7 16 384 0 368 0 16 0 0 0 1.2 16 40 512z" />
    </Icon>
);

export default Glass;