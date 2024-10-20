
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bolt-auto` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-auto?s=sharp-duotone-solid bolt-auto}
 * @preview ![bolt-auto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bolt-auto.svg)
 */
const BoltAuto: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288L304 0 253.8 200.8 416 224 112 512l50.2-200.8L0 288z" />
        <path d="M492.7 480l13.7 32 69.6 0L480 288l-64 0L320 512l69.6 0 13.7-32 89.3 0zm-27.4-64l-34.5 0L448 375.8 465.2 416z" />
    </Icon>
);

export default BoltAuto;