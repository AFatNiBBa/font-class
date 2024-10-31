
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gramophone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gramophone?s=sharp-duotone-solid gramophone}
 * @preview ![gramophone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gramophone.svg)
 */
const Gramophone: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M29.2 303.4L72 314.1c57-40.3 108.6-59 151.1-66.6c21.2-3.8 40.1-4.8 56.2-4.4l1.3 0c11.9 .4 22.3 1.6 30.9 3c4.7 .8 9.3 3.7 12.4 8.6c2.6 4.9 4 10.3 4.1 15.6c-.2 18.7-15.3 33.7-34 33.7l-110 0-24 0 0 24 0 32 0 24 48 0 0-24 0-8 86.6 0c45 0 81.4-36.5 81.4-81.4l0-.6 0-24-3.7 0c-1.2-3.8-2.7-7.4-4.5-11c-8.5-17.5-22.9-31.7-40.1-40.4C257.9 159.3 213.4 114 186.4 77.8c-13.5-18.1-22.6-34-28.2-45.1c-2.8-5.6-4.8-9.9-6-12.8c-.6-1.4-1-2.5-1.3-3.2l-.3-.7c-.4-1.1-.8-2.2-1.2-3.3L108.8 2.6l-4 15.3-72 272-3.6 13.5z" />
        <path d="M352 384L32 384l0 64L0 448l0 64 32 0 320 0 32 0 0-64-32 0 0-64z" />
    </Icon>
);

export default Gramophone;