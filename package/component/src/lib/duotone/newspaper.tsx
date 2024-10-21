
import { Icon, generic } from "../../index";

/**
 * A component that renders the `newspaper` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/newspaper?s=duotone newspaper}
 * @preview ![newspaper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/newspaper.svg)
 */
const Newspaper: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 480c26.5 0 48-21.5 48-48L96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L96 480l-48 0zM160 120l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm0 184c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zM368 112c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16z" />
        <path d="M0 160L0 432c0 26.5 21.5 48 48 48s48-21.5 48-48L96 96 64 96C28.7 96 0 124.7 0 160zM384 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0zM176 288c-8.8 0-16 7.2-16 16s7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0z" />
    </Icon>
);

export default Newspaper;