
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=sharp-regular light-switch}
 * @preview ![light-switch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/light-switch.svg)
 */
const LightSwitch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M168 64l0-16L48 48l0 416 120 0 0-16 48 0 0 16 120 0 0-416L216 48l0 16-48 0zM0 0L48 0 336 0l48 0 0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0zM144 368l96 0 0-88-96 0 0 88zm0-136l96 0 0-88-96 0 0 88zM96 96l48 0 96 0 48 0 0 48 0 224 0 48-48 0-96 0-48 0 0-48 0-224 0-48z" />
    </Icon>
);

export default LightSwitch;