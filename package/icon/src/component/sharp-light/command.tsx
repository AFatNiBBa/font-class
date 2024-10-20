
import { Icon } from "../../index";

/**
 * A component that renders the `command` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=sharp-light command}
 * @preview ![command](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/command.svg)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L16 0 160 0l16 0 0 16 0 128 160 0 0-128 0-16 16 0L496 0l16 0 0 16 0 144 0 16-16 0-128 0 0 160 128 0 16 0 0 16 0 144 0 16-16 0-144 0-16 0 0-16 0-128-160 0 0 128 0 16-16 0L16 512 0 512l0-16L0 352l0-16 16 0 128 0 0-160L16 176 0 176l0-16L0 16 0 0zM144 144l0-112L32 32l0 112 112 0zm32 192l160 0 0-160-160 0 0 160zm-32 32L32 368l0 112 112 0 0-112zm224 0l0 112 112 0 0-112-112 0zm0-224l112 0 0-112L368 32l0 112z" />
    </Icon>
);

export default Command;