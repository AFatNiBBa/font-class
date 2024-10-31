
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=sharp-duotone-solid object-exclude}
 * @preview ![object-exclude](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/object-exclude.svg)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 160l-192 0 0 192 192 0 0-192zm-48 48l0 96-96 0 0-96 96 0z" />
        <path d="M352 0L0 0 0 352l160 0 0 160 352 0 0-352-160 0L352 0zm0 160l0 192-192 0 0-192 192 0z" />
    </Icon>
);

export default ObjectExclude;