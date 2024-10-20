
import { Icon } from "../../index";

/**
 * A component that renders the `command` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=solid command}
 * @preview ![command](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/command.svg)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 43 43 0 96 0s96 43 96 96l0 32 128 0 0-32c0-53 43-96 96-96s96 43 96 96s-43 96-96 96l-32 0 0 128 32 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96l0-32-128 0 0 32c0 53-43 96-96 96s-96-43-96-96s43-96 96-96l32 0 0-128-32 0C43 192 0 149 0 96zm128 32l0-32c0-17.7-14.3-32-32-32S64 78.3 64 96s14.3 32 32 32l32 0zm64 192l128 0 0-128-128 0 0 128zm-64 64l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32l0-32zm256 0l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32l-32 0zm0-256l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32l0 32z" />
    </Icon>
);

export default Command;