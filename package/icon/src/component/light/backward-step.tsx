
import { Icon } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=light backward-step}
 * @preview ![backward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/backward-step.svg)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 161.9 0 28.2L32 432c0 8.8 7.2 16 16 16s16-7.2 16-16l0-135.8L242.6 441.8c5 4 11.2 6.2 17.6 6.2c15.4 0 27.8-12.4 27.8-27.8l0-328.4C288 76.4 275.6 64 260.2 64c-6.4 0-12.6 2.2-17.6 6.2L64 215.8 64 80zm192 20.6l0 310.7L65.3 256 256 100.6z" />
    </Icon>
);

export default BackwardStep;