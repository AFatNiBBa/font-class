
import { Icon, generic } from "../../index";

/**
 * A component that renders the `check-double` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-double?s=duotone check-double}
 * @preview ![check-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/check-double.svg)
 */
const CheckDouble: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 144c0 8.2 3.1 16.4 9.4 22.6l80 80c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l160-160c12.5-12.5 12.5-32.8 0-45.3C336.4 35.1 328.2 32 320 32s-16.4 3.1-22.6 9.4L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0C51.1 127.6 48 135.8 48 144z" />
        <path d="M438.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 393.4 169.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default CheckDouble;