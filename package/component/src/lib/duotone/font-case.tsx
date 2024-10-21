
import { Icon, generic } from "../../index";

/**
 * A component that renders the `font-case` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-case?s=duotone font-case}
 * @preview ![font-case](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/font-case.svg)
 */
const FontCase: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 288l0 64c0 70.7 57.3 128 128 128c24.5 0 47.4-6.9 66.8-18.8c5 11.1 16.2 18.8 29.2 18.8c17.7 0 32-14.3 32-32l0-96 0-64 0-96c0-17.7-14.3-32-32-32c-13 0-24.1 7.7-29.2 18.8C559.4 166.9 536.5 160 512 160c-70.7 0-128 57.3-128 128zm64 0c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-64z" />
        <path d="M206 52.8C201.3 40.3 189.3 32 176 32s-25.3 8.3-30 20.8L2 436.8c-6.2 16.5 2.2 35 18.7 41.2s35-2.2 41.2-18.7L96.2 368l159.6 0L290 459.2c6.2 16.5 24.7 24.9 41.2 18.7s24.9-24.6 18.7-41.2L206 52.8zM231.8 304l-111.6 0L176 155.1 231.8 304z" />
    </Icon>
);

export default FontCase;