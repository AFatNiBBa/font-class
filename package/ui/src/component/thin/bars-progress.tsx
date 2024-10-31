
import { Icon } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=thin bars-progress}
 * @preview ![bars-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bars-progress.svg)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 80c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-144 0 0-128 144 0zM48 80l256 0 0 128L48 208c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm0-16C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 64zM464 304c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-272 0 0-128 272 0zM48 304l128 0 0 128L48 432c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm0-16c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 288z" />
    </Icon>
);

export default BarsProgress;