
import { Icon } from "../../index";

/**
 * A component that renders the `command` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=sharp-regular command}
 * @preview ![command](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/command.svg)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L24 0 160 0l24 0 0 24 0 112 144 0 0-112 0-24 24 0L488 0l24 0 0 24 0 144 0 24-24 0-112 0 0 128 112 0 24 0 0 24 0 144 0 24-24 0-136 0-24 0 0-24 0-112-144 0 0 112 0 24-24 0L24 512 0 512l0-24L0 344l0-24 24 0 112 0 0-128L24 192 0 192l0-24L0 24 0 0zM136 144l0-8 0-88L48 48l0 96 88 0zm48 176l0 8 144 0 0-8 0-128 0-8-144 0 0 8 0 128zm-48 48l-88 0 0 96 88 0 0-88 0-8zm240 8l0 88 88 0 0-96-88 0 0 8zm0-232l88 0 0-96-88 0 0 88 0 8z" />
    </Icon>
);

export default Command;