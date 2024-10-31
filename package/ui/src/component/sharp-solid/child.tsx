
import { Icon } from "../../index";

/**
 * A component that renders the `child` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=sharp-solid child}
 * @preview ![child](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/child.svg)
 */
const Child: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm4.9 96l16 0 86.2 0 16 0 9.6 12.8 72.1 96L320 294.4l-51.2 38.4-19.2-25.6L240 294.4 240 480l0 32-64 0 0-32 0-96-32 0 0 96 0 32-64 0 0-32 0-185.6-9.6 12.8L51.2 332.8 0 294.4l19.2-25.6 72.1-96 9.6-12.8z" />
    </Icon>
);

export default Child;