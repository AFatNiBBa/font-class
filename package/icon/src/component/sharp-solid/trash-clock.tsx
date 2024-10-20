
import { Icon } from "../../index";

/**
 * A component that renders the `trash-clock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-clock?s=sharp-solid trash-clock}
 * @preview ![trash-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-clock.svg)
 */
const TrashClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l274.8 0C285.6 480.1 256 427.5 256 368c0-90.4 68.2-164.9 155.9-174.9L416 128zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM448 288l0 16 0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0z" />
    </Icon>
);

export default TrashClock;