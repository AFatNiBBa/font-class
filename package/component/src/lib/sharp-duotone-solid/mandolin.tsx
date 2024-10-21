
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mandolin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mandolin?s=sharp-duotone-solid mandolin}
 * @preview ![mandolin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mandolin.svg)
 */
const Mandolin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 336c0 97.2 78.8 176 176 176c135.5 0 147.7-189.6 146.2-276.9l-66.2 66.2c0 .9 .1 1.8 .1 2.7c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48c.9 0 1.8 0 2.7 .1c22.1-22.1 44.2-44.2 66.2-66.2C189.6 188.3 0 200.5 0 336z" />
        <path d="M448 0L368 48l-25.4 76.1-132 132c24.4 1.3 43.9 20.9 45.3 45.3l132-132L464 144l48-80L448 0z" />
    </Icon>
);

export default Mandolin;