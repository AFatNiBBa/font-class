
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mandolin` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mandolin?s=duotone mandolin}
 * @preview ![mandolin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mandolin.svg)
 */
const Mandolin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 336c0 97.2 78.8 176 176 176c135.5 0 147.7-189.6 146.2-276.9l-66.2 66.2c0 .9 .1 1.8 .1 2.7c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48c.9 0 1.8 0 2.7 .1c22.1-22.1 44.2-44.2 66.2-66.2C189.6 188.3 0 200.5 0 336z" />
        <path d="M465 7c-7.9-7.9-20.2-9.3-29.7-3.4l-64 40c-5.1 3.2-8.8 8.2-10.4 14L342.8 124 210.7 256.1c24.4 1.3 43.9 20.9 45.3 45.3L388 169.2l66.3-18.1c5.8-1.6 10.8-5.3 14-10.4l40-64c5.9-9.5 4.5-21.8-3.4-29.7L465 7z" />
    </Icon>
);

export default Mandolin;