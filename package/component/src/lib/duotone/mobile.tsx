
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=duotone mobile}
 * @preview ![mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mobile.svg)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 384l0 64c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-64L16 384zm128 64c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16z" />
        <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V384H16V64z" />
    </Icon>
);

export default Mobile;