
import { Icon } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=sharp-light bars-progress}
 * @preview ![bars-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bars-progress.svg)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 96l0 96-160 0 0-96 160 0zM32 96l256 0 0 96L32 192l0-96zm0-32L0 64 0 96l0 96 0 32 32 0 448 0 32 0 0-32 0-96 0-32-32 0L32 64zM480 320l0 96-288 0 0-96 288 0zM32 320l128 0 0 96L32 416l0-96zm0-32L0 288l0 32 0 96 0 32 32 0 448 0 32 0 0-32 0-96 0-32-32 0L32 288z" />
    </Icon>
);

export default BarsProgress;