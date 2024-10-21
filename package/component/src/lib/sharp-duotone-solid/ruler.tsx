
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler?s=sharp-duotone-solid ruler}
 * @preview ![ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ruler.svg)
 */
const Ruler: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352L160 512 512 160 352 0 283.3 68.7c16 16 32 32 48 48c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6c-3.8-3.8-7.5-7.5-11.3-11.3c-16-16-32-32-48-48c-13.8 13.8-27.6 27.6-41.4 41.4c16 16 32 32 48 48c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6c-3.8-3.8-7.5-7.5-11.3-11.3c-16-16-32-32-48-48c-13.8 13.8-27.6 27.6-41.4 41.4c16 16 32 32 48 48c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6c-3.8-3.8-7.5-7.5-11.3-11.3c-16-16-32-32-48-48c-13.8 13.8-27.6 27.6-41.4 41.4c16 16 32 32 48 48c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6l-11.3-11.3-48-48C45.8 306.2 22.9 329.1 0 352z" />
        <path d="M283.3 68.7l48 48L342.6 128 320 150.6l-11.3-11.3-48-48 22.6-22.6zm-86.6 86.6l22.6-22.6 48 48L278.6 192 256 214.6l-11.3-11.3-48-48zm-64 64l22.6-22.6 48 48L214.6 256 192 278.6l-11.3-11.3-48-48zm-64 64l22.6-22.6 48 48L150.6 320 128 342.6l-11.3-11.3-48-48z" />
    </Icon>
);

export default Ruler;