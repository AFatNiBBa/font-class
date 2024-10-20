
import { Icon } from "../../index";

/**
 * A component that renders the `command` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=sharp-thin command}
 * @preview ![command](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/command.svg)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L8 0 152 0l8 0 0 8 0 136 192 0L352 8l0-8 8 0L504 0l8 0 0 8 0 144 0 8-8 0-136 0 0 192 136 0 8 0 0 8 0 144 0 8-8 0-144 0-8 0 0-8 0-136-192 0 0 136 0 8-8 0L8 512l-8 0 0-8L0 360l0-8 8 0 136 0 0-192L8 160l-8 0 0-8L0 8 0 0zM144 144l0-128L16 16l0 128 128 0zm16 208l192 0 0-192-192 0 0 192zm-16 16L16 368l0 128 128 0 0-128zm224 0l0 128 128 0 0-128-128 0zm0-224l128 0 0-128L368 16l0 128z" />
    </Icon>
);

export default Command;