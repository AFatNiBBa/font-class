
import { Icon } from "../../index";

/**
 * A component that renders the `h4` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=sharp-solid h4}
 * @preview ![h4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/h4.svg)
 */
const H4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64l0 32 0 128 192 0 0-128 0-32 64 0 0 32 0 160 0 160 0 32-64 0 0-32 0-128L64 288l0 128 0 32L0 448l0-32L0 256 0 96 0 64l64 0zm576 0l0 32 0 320 0 32-64 0 0-32 0-96-160 0-38.4 0 6.9-37.8L424.5 64l65.1 0L454.4 256 576 256l0-160 0-32 64 0z" />
    </Icon>
);

export default H4;