
import { Icon } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=sharp-thin bars-progress}
 * @preview ![bars-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bars-progress.svg)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 80l0 128-176 0 0-128 176 0zM16 80l288 0 0 128L16 208 16 80zm0-16L0 64 0 80 0 208l0 16 16 0 480 0 16 0 0-16 0-128 0-16-16 0L16 64zM496 304l0 128-304 0 0-128 304 0zM16 304l160 0 0 128L16 432l0-128zm0-16L0 288l0 16L0 432l0 16 16 0 480 0 16 0 0-16 0-128 0-16-16 0L16 288z" />
    </Icon>
);

export default BarsProgress;