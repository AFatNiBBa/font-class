
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-tissue` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tissue?s=duotone face-tissue}
 * @preview ![face-tissue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-tissue.svg)
 */
const FaceTissue: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 11.5 .8 22.9 2.2 34c1.9-.6 3.9-1 5.9-1.4l192-32c15.3-2.5 30.9 2.4 41.8 13.4s16 26.5 13.4 41.8l-7.9 47.2 8.5 5.7 39.1-26.1c5.4-3.6 12.4-3.6 17.8 0l40.3 26.8 23.7-11.8c7.9-4 17.5-.7 21.5 7.2s.7 17.5-7.2 21.5l-32 16c-5.1 2.6-11.3 2.2-16-1L304 371.2l-39.1 26.1c-5.4 3.6-12.4 3.6-17.8 0l-5.4-3.6L223.3 503.9c-.3 2-.8 4-1.4 5.9c11.1 1.5 22.5 2.2 34 2.2c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM116 141.1c0-9 9.6-14.7 17.5-10.5l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm172.6 37.4l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8z" />
        <path d="M223.8 306.6c.8-5.1-.8-10.3-4.5-13.9s-8.8-5.3-13.9-4.5l-192 32c-6.7 1.1-11.9 6.3-13.1 13s1.9 13.4 7.8 16.7l45.5 26L32.5 460.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l84.2-21.1 26 45.5c3.4 5.9 10 9 16.7 7.8s11.9-6.4 13-13.1l32-192z" />
    </Icon>
);

export default FaceTissue;