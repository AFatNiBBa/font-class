
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-portable` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-portable?s=sharp-duotone-solid toilet-portable}
 * @preview ![toilet-portable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toilet-portable.svg)
 */
const ToiletPortable: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64l24 0 272 0 24 0 0 24 0 400 0 24-48 0 0-24 0-8L48 480l0 8 0 24L0 512l0-24L0 88 0 64zM224 224l0 16 0 64 0 16 32 0 0-16 0-64 0-16-32 0z" />
        <path d="M320 0L0 0 0 64l320 0 0-64zM256 240l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64z" />
    </Icon>
);

export default ToiletPortable;