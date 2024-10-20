
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flask-vial` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flask-vial?s=sharp-duotone-solid flask-vial}
 * @preview ![flask-vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flask-vial.svg)
 */
const FlaskVial: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 64l32 0 0 288c0 53 43 96 96 96c11.2 0 22-1.9 32-5.5l0-19.6 0-9.1 4.7-7.7L224 309.9 224 64l32 0 0-64L224 0 160 0 96 0 32 0 0 0zM96 64l64 0 0 96-64 0 0-96z" />
        <path d="M480 0L352 0 320 0 288 0l0 64 32 0 0 150.9L196.7 415.2l-4.7 7.7 0 9.1 0 48 0 32 32 0 384 0 32 0 0-32 0-48 0-9.1-4.7-7.7L512 214.9 512 64l32 0 0-64L512 0 480 0zM384 224l0-160 64 0 0 160 0 9.1 4.7 7.7L501.5 320l-171 0 48.8-79.2 4.7-7.7 0-9.1z" />
    </Icon>
);

export default FlaskVial;