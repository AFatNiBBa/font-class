
import { Icon } from "../../index";

/**
 * A component that renders the `file-powerpoint` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-powerpoint?s=sharp-regular file-powerpoint}
 * @preview ![file-powerpoint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-powerpoint.svg)
 */
const FilePowerpoint: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM136 208l-24 0 0 24 0 104 0 56 0 24 48 0 0-24 0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z" />
    </Icon>
);

export default FilePowerpoint;