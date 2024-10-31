
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-heart?s=sharp-duotone-solid hand-heart}
 * @preview ![hand-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-heart.svg)
 */
const HandHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.3 329.4l29 27.6 95.5 91c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208 0-32-64 0 0 32 0 128-32 0 0-192 0-32-64 0 0 32 0 192-32 0 0-224 0-32L224 0l0 32 0 224-32 0 0-192 0-32-64 0 0 32 0 272c0 1.5 0 3.1 .1 4.6L84.5 299.1l-29-27.6L.3 329.4zm213.1 30c0-21.8 17.7-39.5 39.5-39.5l1.6 0c10.6 0 20.8 4.1 28.5 11.5l5.1 4.9c1.7-1.6 3.4-3.3 5.1-4.9c7.7-7.4 17.9-11.5 28.5-11.5l1.6 0c10.9 0 20.8 4.4 27.9 11.6c3.6 3.6 6.5 7.8 8.5 12.5c1 2.4 1.8 4.8 2.3 7.4c.3 1.3 .5 2.7 .6 4c.1 .7 .1 1.3 .1 1.9c0 .6 0 1.2 0 1.4c0 .4 0 .5 0 .6s0 .2 0 .6c0 .3 0 1-.1 1.7c0 .6-.1 1.2-.1 1.8c-.1 1.3-.3 2.6-.6 3.9c-.5 2.6-1.3 5.1-2.3 7.5c-2.1 4.8-5.1 9.3-8.9 13c-18.4 17.7-36.8 35.4-55.2 53.1c-2.5 2.4-4.9 4.7-7.4 7.1c-2.5-2.4-4.9-4.7-7.4-7.1c-18.4-17.7-36.8-35.4-55.2-53.1c-7.7-7.4-12.1-17.7-12.1-28.4z" />
        <path d="M252.9 320c-21.8 0-39.5 17.7-39.5 39.5c0 10.7 4.4 21 12.1 28.4L280.7 441l7.4 7.1 7.4-7.1 55.2-53.1c7.7-7.4 12.1-17.7 12.1-28.4c0-21.8-17.7-39.5-39.5-39.5l-1.6 0c-10.6 0-20.8 4.1-28.5 11.5l-5.1 4.9-5.1-4.9c-7.7-7.4-17.9-11.5-28.5-11.5l-1.6 0z" />
    </Icon>
);

export default HandHeart;