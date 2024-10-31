
import { Icon } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=light forward-step}
 * @preview ![forward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/forward-step.svg)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M256 80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 161.9 0 28.2L288 432c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-135.8L77.4 441.8c-5 4-11.2 6.2-17.6 6.2C44.4 448 32 435.6 32 420.2L32 91.8C32 76.4 44.4 64 59.8 64c6.4 0 12.6 2.2 17.6 6.2L256 215.8 256 80zM64 100.6l0 310.7L254.7 256 64 100.6z" />
    </Icon>
);

export default ForwardStep;