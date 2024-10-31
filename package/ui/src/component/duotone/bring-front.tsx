
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=duotone bring-front}
 * @preview ![bring-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bring-front.svg)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 192c0 35.3 28.7 64 64 64l96 0 0-64-96 0L64 64l128 0 0 40.6c9.4-5.4 20.3-8.6 32-8.6l32 0 0-32c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zM384 416l0 32c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-96 0 0 64 96 0 0 128-128 0 0-40.6c-9.4 5.4-20.3 8.6-32 8.6l-32 0z" />
        <path d="M224 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L224 96z" />
    </Icon>
);

export default BringFront;