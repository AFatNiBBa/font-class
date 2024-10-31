
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-9` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-9?s=sharp-duotone-solid circle-9}
 * @preview ![circle-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-9.svg)
 */
const Circle_9: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160.1-37c.1-1.6 .2-3.2 .4-4.9c.3-3.2 .8-6.4 1.5-9.5c1.3-6.2 3.2-12.3 5.6-18c4.9-11.5 11.9-21.8 20.6-30.5C205.5 138.7 229.5 128 256 128c53 0 96 43 96 96c0 31.7-11.9 62.3-33.3 85.7c-22.7 24.8-45.4 49.5-68.1 74.3l-65.1 0c5-5.4 9.9-10.8 14.9-16.2c14.8-16.1 29.6-32.3 44.4-48.4c-23.8-2.8-45-14.3-60.2-31.3c-7.6-8.5-13.7-18.4-17.9-29.2c-2.1-5.4-3.7-11-4.8-16.9c-.6-2.9-1-5.9-1.3-8.9c-.1-1.5-.2-3-.3-4.5c-.1-1.5-.1-3.1-.1-4.6c0-1.7 0-3.3 .1-5zm48.1 0c-.1 .8-.1 1.6-.2 2.4s-.1 1.6-.1 2.5c0 1 0 1.8 .1 2.5c0 .8 .1 1.6 .2 2.4c.2 1.6 .4 3.2 .7 4.8c.6 3.1 1.6 6.1 2.8 9c2.4 5.7 5.9 10.9 10.3 15.3c8.7 8.7 20.7 14.1 33.9 14.1c26.5 0 48-21.5 48-48s-21.5-48-48-48c-13.3 0-25.3 5.4-33.9 14.1c-4.3 4.3-7.9 9.5-10.3 15.3c-1.2 2.9-2.2 5.9-2.8 9c-.3 1.6-.6 3.1-.7 4.8z" />
        <path d="M304 224a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-59.3 95.3l-44.4 48.4L185.4 384l65.1 0 68.1-74.3c21.4-23.4 33.3-54 33.3-85.7c0-53-43-96-96-96s-96 43-96 96c0 49.2 37 89.8 84.7 95.3z" />
    </Icon>
);

export default Circle_9;