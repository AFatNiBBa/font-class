
import { Icon } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=solid forward-step}
 * @preview ![forward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/forward-step.svg)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z" />
    </Icon>
);

export default ForwardStep;