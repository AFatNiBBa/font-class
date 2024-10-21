
import { Icon } from "../../index";

/**
 * A component that renders the `walker` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=sharp-light walker}
 * @preview ![walker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/walker.svg)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M115.1 0L128 0 384 0l16 0 0 16 0 370c27.6 7.1 48 32.2 48 62c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-29.8 20.4-54.9 48-62l0-162L98.6 224 39.6 491.4l-3.4 15.6L4.9 500.2l3.4-15.6 104-472L115.1 0zm-9.5 192L368 192l0-160L140.9 32 105.6 192zM352 448a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default Walker;