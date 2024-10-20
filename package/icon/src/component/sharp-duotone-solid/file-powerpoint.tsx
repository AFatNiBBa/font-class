
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-powerpoint` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-powerpoint?s=sharp-duotone-solid file-powerpoint}
 * @preview ![file-powerpoint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-powerpoint.svg)
 */
const FilePowerpoint: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM112 240l0 24 0 104 0 56 0 24 48 0 0-24 0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0-24 0zm48 48l44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28l-44 0 0-56z" />
        <path d="M384 160L224 0l0 160 160 0zM136 240l-24 0 0 24 0 104 0 56 0 24 48 0 0-24 0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z" />
    </Icon>
);

export default FilePowerpoint;