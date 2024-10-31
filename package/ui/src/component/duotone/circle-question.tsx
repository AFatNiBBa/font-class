
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-question` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-question?s=duotone circle-question}
 * @preview ![circle-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-question.svg)
 */
const CircleQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm169.4-89.5c.1-.4 .3-.8 .4-1.2c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8c-10.8 6.2-21.5 12.4-32.3 18.5c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24c0-4.5 0-9 0-13.5c0-8.7 4.6-16.6 12.1-20.8c14.8-8.5 29.6-17 44.3-25.4c2.4-1.4 4.3-3.3 5.6-5.5c.7-1.1 1.2-2.4 1.5-3.6c.2-.6 .3-1.3 .4-2c0-.3 .1-.7 .1-1s0-.7 0-1.1c0-.5 0-1-.1-1.5s-.1-1-.2-1.5c-.2-1-.5-1.9-.9-2.8c-.8-1.8-1.9-3.4-3.2-4.8c-2.7-2.7-6.5-4.4-10.7-4.4l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3c-.1 .4-.3 .8-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6zM288 352c0 .3 0 .6 0 0z" />
        <path d="M222.6 128c-23.7 0-44.8 14.9-52.8 37.3l-.4 1.2c-4.4 12.5 2.1 26.2 14.6 30.6s26.2-2.1 30.6-14.6l.4-1.2c1.1-3.2 4.2-5.3 7.5-5.3l58.3 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8l0 13.5c0 13.3 10.7 24 24 24c13.1 0 23.8-10.5 24-23.6l32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1l-58.3 0zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default CircleQuestion;