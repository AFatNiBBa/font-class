
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paper-plane-top` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane-top?s=duotone paper-plane-top}
 * @preview ![paper-plane-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paper-plane-top.svg)
 */
const PaperPlaneTop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.4 72.3c0 6.1 1.4 12.4 4.7 18.6l70 134.6c63.3 7.9 126.6 15.8 190 23.7c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-190 23.7L6.1 421.1c-14.6 28.1 7.3 58.6 35.2 58.6c5.3 0 10.8-1.1 16.3-3.5L492.9 285.3c11.6-5.1 19.1-16.6 19.1-29.3s-7.5-24.2-19.1-29.3L57.6 35.8C29.5 23.5 1.4 45.6 1.4 72.3z" />
        <path d="M76.1 286.5l190-23.7c3.4-.4 6-3.3 6-6.7s-2.6-6.3-6-6.7l-190-23.7 8.2 15.7c4.8 9.3 4.8 20.3 0 29.5l-8.2 15.7z" />
    </Icon>
);

export default PaperPlaneTop;