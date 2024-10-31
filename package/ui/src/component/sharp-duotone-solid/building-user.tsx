
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-user?s=sharp-duotone-solid building-user}
 * @preview ![building-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-user.svg)
 */
const BuildingUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 359L317.1 512 240 512l0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM256 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
        <path d="M496 352a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM640 512L584 384l-176 0L352 512l288 0z" />
    </Icon>
);

export default BuildingUser;