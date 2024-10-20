
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler-horizontal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=duotone ruler-horizontal}
 * @preview ![ruler-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ruler-horizontal.svg)
 */
const RulerHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 176L0 336c0 26.5 21.5 48 48 48l544 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0c-26.5 0-48 21.5-48 48z" />
        <path d="M144 208l0-80-32 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16zm96-80l-32 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80zm96 80l0-80-32 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16zm96-80l-32 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80zm96 0l-32 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80z" />
    </Icon>
);

export default RulerHorizontal;