
import { Icon, generic } from "../../index";

/**
 * A component that renders the `command` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=sharp-duotone-solid command}
 * @preview ![command](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/command.svg)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320l0 32L0 480l0 32 32 0 128 0 32 0 0-32 0-96 0-64 0-128-64 0 0 128-96 0L0 320zm64 64l64 0 0 64-64 0 0-64zM320 0l0 32 0 96 0 64 0 128 64 0 0-128 96 0 32 0 0-32 0-128 0-32L480 0 352 0 320 0zm64 64l64 0 0 64-64 0 0-64z" />
        <path d="M0 0L32 0 160 0l32 0 0 32 0 96 128 0 0 64-128 0-64 0-96 0L0 192l0-32L0 32 0 0zM320 320l64 0 96 0 32 0 0 32 0 128 0 32-32 0-128 0-32 0 0-32 0-96-128 0 0-64 128 0zM128 128l0-64L64 64l0 64 64 0zM384 384l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default Command;