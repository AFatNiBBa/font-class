
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-portable` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-portable?s=duotone toilet-portable}
 * @preview ![toilet-portable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toilet-portable.svg)
 */
const ToiletPortable: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64l24 0 272 0 24 0 0 24 0 400c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8L48 480l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 88 0 64zM224 240l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
        <path d="M32 0C14.3 0 0 14.3 0 32L0 64l320 0 0-32c0-17.7-14.3-32-32-32L32 0zM256 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
    </Icon>
);

export default ToiletPortable;