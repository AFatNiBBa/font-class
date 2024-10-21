
import { Icon, generic } from "../../index";

/**
 * A component that renders the `universal-access` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/universal-access?s=sharp-duotone-solid universal-access}
 * @preview ![universal-access](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/universal-access.svg)
 */
const UniversalAccess: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm121.1-50c5.6-15 11.2-30 16.9-44.9c7.5 2.8 15 5.6 22.5 8.4c20 7.5 39.9 15 59.9 22.5c23.8 0 47.5 0 71.3 0c20-7.5 39.9-15 59.9-22.5c7.5-2.8 15-5.6 22.5-8.4L390.9 206l-22.5 8.4-64 24-.4 .2c0 17.8 0 35.6 0 53.5c10.3 30.8 20.5 61.5 30.8 92.3l7.6 22.8-45.5 15.2-7.6-22.8c-8.8-26.5-17.7-53.1-26.5-79.6c-4.5 0-8.9 0-13.4 0l-26.5 79.6c-2.5 7.6-5.1 15.2-7.6 22.8l-45.5-15.2c2.5-7.6 5.1-15.2 7.6-22.8c10.3-30.8 20.5-61.5 30.8-92.3c0-17.8 0-35.6 0-53.5l-.4-.2-64-24L121.1 206zm95.1-90.1c.1-1.3 .3-2.7 .6-4c.5-2.6 1.3-5.1 2.3-7.5c2-4.8 5-9.1 8.6-12.7C235 84.5 245 80 256 80c22.1 0 40 17.9 40 40s-17.9 40-40 40c-11 0-21-4.5-28.3-11.7c-3.6-3.6-6.5-7.9-8.6-12.7c-1-2.4-1.8-4.9-2.3-7.5c-.3-1.3-.5-2.6-.6-4c-.1-1-.2-2-.2-2L216 120c0-1.4 0-1.7 .1-2.1c0-.7 .1-1.3 .2-2z" />
        <path d="M256 80a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM138 161.1l22.5 8.4L220.4 192l71.3 0 59.9-22.5 22.5-8.4L390.9 206l-22.5 8.4-64 24-.4 .2 0 53.5 30.8 92.3 7.6 22.8-45.5 15.2-7.6-22.8L262.7 320l-13.4 0-26.5 79.6-7.6 22.8-45.5-15.2 7.6-22.8L208 292.1l0-53.5-.4-.2-64-24L121.1 206 138 161.1z" />
    </Icon>
);

export default UniversalAccess;