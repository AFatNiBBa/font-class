
import { Icon } from "../../index";

/**
 * A component that renders the `h4` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=solid h4}
 * @preview ![h4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/h4.svg)
 */
const H4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M479 103.8L441 256l135 0 0-160c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-176 0c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l48-192c4.3-17.1 21.7-27.6 38.8-23.3s27.6 21.7 23.3 38.8zM32 64c17.7 0 32 14.3 32 32l0 128 192 0 0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 160 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128L64 288l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 256 0 96C0 78.3 14.3 64 32 64z" />
    </Icon>
);

export default H4;