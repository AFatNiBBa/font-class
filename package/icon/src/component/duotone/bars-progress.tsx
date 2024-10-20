
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=duotone bars-progress}
 * @preview ![bars-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bars-progress.svg)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 288l0 64 256 0 0 32-256 0 0 64 272 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-272 0zM320 64l0 64 128 0 0 32-128 0 0 64 144 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L320 64z" />
        <path d="M0 112C0 85.5 21.5 64 48 64H320V224H48c-26.5 0-48-21.5-48-48V112zM0 336c0-26.5 21.5-48 48-48H192V448H48c-26.5 0-48-21.5-48-48V336z" />
    </Icon>
);

export default BarsProgress;