
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-a` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a?s=duotone square-a}
 * @preview ![square-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-a.svg)
 */
const SquareA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM96 360c0-3.6 .8-7.3 2.5-10.7c34.7-69.3 69.3-138.7 104-208c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3l104 208c.9 1.7 1.5 3.5 1.9 5.3c.2 .9 .4 1.8 .5 2.7c.1 .7 .1 1.3 .1 1.3l0 1.5c0 1.1 0 1.4-.1 1.6c0 .5-.1 1.1-.2 1.6c-.1 1.1-.4 2.1-.7 3.2c-.6 2.1-1.5 4.1-2.6 6c-2.3 3.7-5.6 6.9-9.8 9c-11.9 5.9-26.3 1.1-32.2-10.7c-5.8-11.6-11.6-23.2-17.4-34.7l-130.3 0c-5.8 11.6-11.6 23.2-17.4 34.7c-4.2 8.4-12.7 13.3-21.5 13.3c-3.6 0-7.3-.8-10.7-2.5C100.9 377.3 96 368.8 96 360zm86.8-72l82.3 0L224 205.7c-13.7 27.5-27.4 54.9-41.2 82.3z" />
        <path d="M245.5 141.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-104 208c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7L158.8 336l130.3 0 17.4 34.7c5.9 11.9 20.3 16.7 32.2 10.7s16.7-20.3 10.7-32.2l-104-208zM265.2 288l-82.3 0L224 205.7 265.2 288z" />
    </Icon>
);

export default SquareA;