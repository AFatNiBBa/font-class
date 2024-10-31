
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-pen?s=duotone comment-pen}
 * @preview ![comment-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/comment-pen.svg)
 */
const CommentPen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3C1.6 455.8 0 459.9 0 464c0 2.1 .4 4.1 1.2 6.1c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm160 79.9c0-1.3 .2-2.6 .5-3.9l9.2-36.7c1.4-5.6 4.3-10.8 8.4-14.9c24-24 47.9-48 71.9-71.9l53.3 53.3c-24 24-47.9 48-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4c-12.2 3.1-24.4 6.1-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2c-3-3-4.7-7.1-4.7-11.3zM272.6 170c5-5 9.9-9.9 14.9-14.9c7.4-7.4 17-11.1 26.7-11.1s19.3 3.7 26.7 11.1c14.7 14.7 14.7 38.6 0 53.3c-5 5-9.9 9.9-14.9 14.9c-17.8-17.8-35.6-35.6-53.3-53.3z" />
        <path d="M287.5 155L272.6 170l53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3s-38.6-14.7-53.3 0zM250 192.6l-71.9 71.9c-4.1 4.1-7 9.2-8.4 14.9L160.5 316c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9L250 192.6z" />
    </Icon>
);

export default CommentPen;