
import { Icon } from "../../index";

/**
 * A component that renders the `display` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display?s=solid display}
 * @preview ![display](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/display.svg)
 */
const Display: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 288L64 352 64 64l448 0z" />
    </Icon>
);

export default Display;