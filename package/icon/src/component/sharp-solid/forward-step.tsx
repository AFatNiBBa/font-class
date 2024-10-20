
import { Icon } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=sharp-solid forward-step}
 * @preview ![forward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/forward-step.svg)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M256 96l0-32 64 0 0 32 0 320 0 32-64 0 0-32 0-160L0 448 0 64 256 256l0-160z" />
    </Icon>
);

export default ForwardStep;