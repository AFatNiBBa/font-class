
import { Icon } from "../../index";

/**
 * A component that renders the `mistletoe` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mistletoe?s=sharp-thin mistletoe}
 * @preview ![mistletoe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mistletoe.svg)
 */
const Mistletoe: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M296 0l0 8 0 84.7 86 86 2.9 .6 99.8 19.2C537.7 208.6 576 255 576 309c0 41.4-33.6 75-75 75c-54 0-100.3-38.3-110.5-91.3l-19.2-99.8-.6-2.9L296 115.3l0 151.4 2 2.7 66.8 89.1C377.3 375 384 395.2 384 416c0 53-43 96-96 96s-96-43-96-96c0-20.8 6.7-41 19.2-57.6L278 269.3l2-2.7 0-151.4L205.3 190l-.6 2.9-6.7 35c-4.9-1.8-10.2-3-15.6-3.6l4.9-25.7-2-2-91 17.5C48.9 222.9 16 262.7 16 309c0 32.6 26.4 59 59 59c25.4 0 48.8-9.9 66.2-26.3c4.7 3.1 9.9 5.5 15.4 7.3c-20.7 21.7-49.8 35-81.6 35c-41.4 0-75-33.6-75-75c0-54 38.3-100.3 91.3-110.5l99.8-19.2 2.9-.6 86-86L280 8l0-8 16 0zm94.7 196.7l-2 2 17.5 91c8.7 45.5 48.5 78.3 94.8 78.3c32.6 0 59-26.4 59-59c0-46.3-32.9-86.1-78.3-94.8l-91-17.5zM224 368c-10.4 13.8-16 30.7-16 48c0 44.2 35.8 80 80 80s80-35.8 80-80c0-17.3-5.6-34.2-16-48l-64-85.3L224 368zM360 64a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 40a40 40 0 1 1 0-80 40 40 0 1 1 0 80zM176 264a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm40 24a40 40 0 1 1 -80 0 40 40 0 1 1 80 0z" />
    </Icon>
);

export default Mistletoe;