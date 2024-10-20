
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-bolt?s=sharp-duotone-solid square-bolt}
 * @preview ![square-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-bolt.svg)
 */
const SquareBolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM112 248L288 112 248 240l88 0 0 24L160 400l40-128-88 0 0-24z" />
        <path d="M336 264L160 400l40-128H112V248L288 112 248 240h88v24z" />
    </Icon>
);

export default SquareBolt;