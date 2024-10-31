
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-low` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-low?s=sharp-duotone-solid gauge-low}
 * @preview ![gauge-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gauge-low.svg)
 */
const GaugeLow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm8.4-116.3c14.6-6.4 29.3-12.9 43.9-19.3c3.2 7.3 6.4 14.6 9.7 22c21.4 48.6 42.7 97.1 64.1 145.7c.6 0 1.3 0 1.9 0c35.3 0 64 28.7 64 64s-28.7 64-64 64c-17.7 0-33.7-7.2-45.3-18.7c-5.8-5.8-10.5-12.7-13.7-20.3c-1.6-3.8-2.9-7.8-3.7-12c-.4-2.1-.8-4.2-1-6.4c-.1-1.1-.2-2.2-.2-3.2c-.1-1.1-.1-2.2-.1-3.3c0-1.1 0-2.2 .1-3.3c.1-1.1 .1-2.1 .2-3.2c.2-2.1 .5-4.2 .9-6.2c.8-4.1 2-8.1 3.6-11.8c3.1-7.5 7.7-14.4 13.3-20.1c-21.4-48.6-42.7-97.1-64.1-145.7c-3.2-7.3-6.4-14.6-9.7-22zM288 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm112 48a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48 112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M190 142.3l-9.7-22-43.9 19.3 9.7 22 64.1 145.7C198.9 318.9 192 334.6 192 352c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-.6 0-1.3 0-1.9 0L190 142.3z" />
    </Icon>
);

export default GaugeLow;