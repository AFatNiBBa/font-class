
import { Icon } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=sharp-solid bars-progress}
 * @preview ![bars-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bars-progress.svg)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 128l0 32-128 0 0-32 128 0zM64 64L0 64l0 64 0 32 0 64 64 0 384 0 64 0 0-64 0-32 0-64-64 0L64 64zM448 384l-256 0 0-32 256 0 0 32zM64 288L0 288l0 64 0 32 0 64 64 0 384 0 64 0 0-64 0-32 0-64-64 0L64 288z" />
    </Icon>
);

export default BarsProgress;