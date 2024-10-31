
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=sharp-light rotate-left}
 * @preview ![rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rotate-left.svg)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64c-48.9 0-93.6 18.3-127.5 48.5l32.9 32.9L184 168l-22.6 22.6L160 192l-96 0-32 0 0-32 0-96 1.4-1.4L56 40 78.6 62.6l27.2 27.2C145.5 53.9 198.2 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-86.4 0-161.4-49-198.8-120.6l28.4-14.8C117.7 406.1 181.9 448 256 448c106 0 192-86 192-192s-86-192-192-192zM64 160l66.7 0L64 93.3 64 160z" />
    </Icon>
);

export default RotateLeft;