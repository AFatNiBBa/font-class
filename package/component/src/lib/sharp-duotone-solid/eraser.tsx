
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eraser` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=sharp-duotone-solid eraser}
 * @preview ![eraser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/eraser.svg)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M16 336l45.3 45.3L160 480l160 0 192 0 32 0 0-64-32 0-128 0 24-24-45.3-45.3L293.5 416l-5.5 0-101.5 0-80-80L229.3 213.3c-15.1-15.1-30.2-30.2-45.3-45.3c-40.9 40.9-81.8 81.8-122.7 122.7L16 336z" />
        <path d="M184 168L336 16 560 240 408 392 184 168z" />
    </Icon>
);

export default Eraser;