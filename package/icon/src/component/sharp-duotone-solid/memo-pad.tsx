
import { Icon, generic } from "../../index";

/**
 * A component that renders the `memo-pad` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-pad?s=sharp-duotone-solid memo-pad}
 * @preview ![memo-pad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/memo-pad.svg)
 */
const MemoPad: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 128l448 0 0 384L0 512 0 128zm96 80l0 32 16 0 224 0 16 0 0-32-16 0-224 0-16 0zm0 96l0 32 16 0 224 0 16 0 0-32-16 0-224 0-16 0zm0 96l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
        <path d="M448 128L0 128 0 0 448 0l0 128zM112 208l224 0 16 0 0 32-16 0-224 0-16 0 0-32 16 0zm0 96l224 0 16 0 0 32-16 0-224 0-16 0 0-32 16 0zm0 96l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0z" />
    </Icon>
);

export default MemoPad;