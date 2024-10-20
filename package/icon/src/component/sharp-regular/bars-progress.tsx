
import { Icon } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=sharp-regular bars-progress}
 * @preview ![bars-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bars-progress.svg)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 112l0 64-144 0 0-64 144 0zM48 64L0 64l0 48 0 64 0 48 48 0 416 0 48 0 0-48 0-64 0-48-48 0L48 64zM464 336l0 64-272 0 0-64 272 0zM48 288L0 288l0 48 0 64 0 48 48 0 416 0 48 0 0-48 0-64 0-48-48 0L48 288z" />
    </Icon>
);

export default BarsProgress;