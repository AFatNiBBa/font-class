
import { Icon, generic } from "../../index";

/**
 * A component that renders the `i-cursor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=sharp-duotone-solid i-cursor}
 * @preview ![i-cursor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/i-cursor.svg)
 */
const ICursor: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M32 224l0 64 32 0 32 0 0-64-32 0-32 0zm128 0l0 64 32 0 32 0 0-64-32 0-32 0z" />
        <path d="M32 0L0 0 0 64l32 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L0 448l0 64 32 0c38.2 0 72.5-16.8 96-43.3c23.5 26.6 57.8 43.3 96 43.3l32 0 0-64-32 0c-35.3 0-64-28.7-64-64l0-256c0-35.3 28.7-64 64-64l32 0 0-64L224 0c-38.2 0-72.5 16.8-96 43.3C104.5 16.8 70.2 0 32 0z" />
    </Icon>
);

export default ICursor;