
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=sharp-duotone-solid bars-progress}
 * @preview ![bars-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bars-progress.svg)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 288l0 64 256 0 0 32-256 0 0 64 256 0 64 0 0-64 0-32 0-64-64 0-256 0zM320 64l0 64 128 0 0 32-128 0 0 64 128 0 64 0 0-64 0-32 0-64-64 0L320 64z" />
        <path d="M0 64H320V224H0V64zM0 288H192V448H0V288z" />
    </Icon>
);

export default BarsProgress;