
import { Icon } from "../../index";

/**
 * A component that renders the `lamp` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=sharp-solid lamp}
 * @preview ![lamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lamp.svg)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 0L0 256l448 0L352 0 96 0zm64 288l0 32s-64 50.5-64 112c0 48 32 80 32 80l192 0s32-32 32-80c0-61.5-64-112-64-112l0-32-128 0z" />
    </Icon>
);

export default Lamp;