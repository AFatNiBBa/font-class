
import { Icon, generic } from "../../index";

/**
 * A component that renders the `input-numeric` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-numeric?s=duotone input-numeric}
 * @preview ![input-numeric](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/input-numeric.svg)
 */
const InputNumeric: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm64 0l512 0 0 256L64 384l0-256z" />
        <path d="M294.6 214.4c5.7-8 17.5-8.6 24-1.2c5.2 5.9 5 14.7-.3 20.5l-72 78c-6.5 7-8.2 17.2-4.3 25.9s12.5 14.4 22 14.4l88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-33.2 0 34.8-37.7c22-23.8 22.4-60.3 1.1-84.7c-26.9-30.7-75.4-28.4-99.2 4.9l-11.1 15.6c-7.7 10.8-5.2 25.8 5.6 33.5s25.8 5.2 33.5-5.6l11.1-15.6zM128 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 96-16 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0-120c0-13.3-10.7-24-24-24l-32 0z" />
    </Icon>
);

export default InputNumeric;