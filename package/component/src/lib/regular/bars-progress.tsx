
import { Icon } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=regular bars-progress}
 * @preview ![bars-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bars-progress.svg)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 112l0 64-144 0 0-64 144 0zM48 64C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 64zM464 336l0 64-272 0 0-64 272 0zM48 288c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 288z" />
    </Icon>
);

export default BarsProgress;