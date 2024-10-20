
import { Icon } from "../../index";

/**
 * A component that renders the `command` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=sharp-solid command}
 * @preview ![command](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/command.svg)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L32 0 160 0l32 0 0 32 0 96 128 0 0-96 0-32 32 0L480 0l32 0 0 32 0 128 0 32-32 0-96 0 0 128 96 0 32 0 0 32 0 128 0 32-32 0-128 0-32 0 0-32 0-96-128 0 0 96 0 32-32 0L32 512 0 512l0-32L0 352l0-32 32 0 96 0 0-128-96 0L0 192l0-32L0 32 0 0zM128 128l0-64L64 64l0 64 64 0zm64 192l128 0 0-128-128 0 0 128zm-64 64l-64 0 0 64 64 0 0-64zm256 0l0 64 64 0 0-64-64 0zm0-256l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default Command;