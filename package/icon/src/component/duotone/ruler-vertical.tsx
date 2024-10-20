
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-vertical?s=duotone ruler-vertical}
 * @preview ![ruler-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ruler-vertical.svg)
 */
const RulerVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 48C0 21.5 21.5 0 48 0L208 0c26.5 0 48 21.5 48 48l0 48-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 48z" />
        <path d="M176 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0-32-80 0zM160 208c0 8.8 7.2 16 16 16l80 0 0-32-80 0c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0-32-80 0zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0-32-80 0z" />
    </Icon>
);

export default RulerVertical;