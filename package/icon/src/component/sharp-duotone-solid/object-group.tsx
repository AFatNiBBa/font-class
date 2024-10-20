
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-group` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-group?s=sharp-duotone-solid object-group}
 * @preview ![object-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/object-group.svg)
 */
const ObjectGroup: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 128l32 0 0 256L0 384 0 512l128 0 0-32 320 0 0 32 128 0 0-128-32 0 0-256 32 0L576 0 448 0l0 32L128 32l0-32L0 0zM96 96l384 0 0 320L96 416 96 96z" />
        <path d="M320 128l-192 0 0 160 192 0 0-160zM256 384l192 0 0-160-96 0 0 64 0 32-32 0-64 0 0 64z" />
    </Icon>
);

export default ObjectGroup;