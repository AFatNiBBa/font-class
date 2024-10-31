
import { Icon } from "../../index";

/**
 * A component that renders the `h6` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h6?s=sharp-light h6}
 * @preview ![h6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/h6.svg)
 */
const H6: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 80l0-16L0 64 0 80 0 256 0 432l0 16 32 0 0-16 0-160 256 0 0 160 0 16 32 0 0-16 0-176 0-176 0-16-32 0 0 16 0 160L32 240 32 80zM487.9 64L383.3 207.8C363 235.7 352 269.4 352 304c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144c-15 0-29.6 2.3-43.2 6.6L527.4 64l-39.6 0zM496 192a112 112 0 1 1 0 224 112 112 0 1 1 0-224z" />
    </Icon>
);

export default H6;