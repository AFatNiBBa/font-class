
import { Icon } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=sharp-regular forward-step}
 * @preview ![forward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/forward-step.svg)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M240 88l0-24 48 0 0 24 0 144 0 48 0 144 0 24-48 0 0-24 0-114.4L64 418.4 16 448l0-56.4 0-271.2L16 64 64 93.6 240 202.4 240 88zm-4.5 168L64 150.1l0 211.9L235.5 256z" />
    </Icon>
);

export default ForwardStep;