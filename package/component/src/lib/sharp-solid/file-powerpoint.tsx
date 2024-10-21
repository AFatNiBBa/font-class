
import { Icon } from "../../index";

/**
 * A component that renders the `file-powerpoint` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-powerpoint?s=sharp-solid file-powerpoint}
 * @preview ![file-powerpoint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-powerpoint.svg)
 */
const FilePowerpoint: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM136 240l68 0c42 0 76 34 76 76s-34 76-76 76l-44 0 0 32 0 24-48 0 0-24 0-56 0-104 0-24 24 0zm68 104c15.5 0 28-12.5 28-28s-12.5-28-28-28l-44 0 0 56 44 0z" />
    </Icon>
);

export default FilePowerpoint;