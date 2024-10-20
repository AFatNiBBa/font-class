
import { Icon } from "../../index";

/**
 * A component that renders the `display` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display?s=sharp-solid display}
 * @preview ![display](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/display.svg)
 */
const Display: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 0L0 0 0 416l240 0-10.7 32L160 448l-32 0 0 64 32 0 256 0 32 0 0-64-32 0-69.3 0L336 416l240 0L576 0zM512 64l0 288L64 352 64 64l448 0z" />
    </Icon>
);

export default Display;