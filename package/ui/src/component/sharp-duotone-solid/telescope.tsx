
import { Icon, generic } from "../../index";

/**
 * A component that renders the `telescope` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/telescope?s=sharp-duotone-solid telescope}
 * @preview ![telescope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/telescope.svg)
 */
const Telescope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 350.5l49.9 86.4 55.9-32.3 16.3 28.2 115.7-62.1c1.9-4.7 3.9-9.5 5.8-14.2c-.8-.9-1.5-1.8-2.2-2.7c-.7-.9-1.5-1.9-2.1-2.8c-1.4-1.9-2.7-3.8-3.9-5.8c-2.4-4-4.5-8.3-6.2-12.7s-3-9-3.9-13.8c-.4-2.4-.8-4.8-1-7.3c-.1-1.2-.2-2.5-.3-3.7c-.1-1.2-.1-2.4-.1-3.7c0-1.4 0-2.8 .1-4.2c.1-1.3 .2-2.7 .3-4c.3-2.7 .7-5.3 1.2-7.9c1.1-5.2 2.6-10.2 4.7-15c4-9.6 9.9-18.2 17.1-25.4C261.9 233 281.9 224 304 224c1.3 0 2.5 0 3.8 .1s2.5 .1 3.7 .3c2.5 .2 4.9 .6 7.3 1c4.8 .9 9.4 2.2 13.9 3.9c8.9 3.4 17 8.4 24.1 14.5c14.1 12.3 23.8 29.5 26.5 49l77.5-41.6c-33.5-58-67-116-100.5-174.1L36.7 284.9l19.2 33.3L0 350.5z" />
        <path d="M476 277.7l97-56L445 0 348 56 476 277.7zM364.3 356.5C376.6 342.5 384 324.1 384 304c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 20.1 7.4 38.5 19.7 52.5L180.3 512l51.8 0 53.1-130.2c6 1.5 12.3 2.2 18.8 2.2s12.8-.8 18.8-2.2L375.9 512l51.8 0L364.3 356.5zM272 304a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Telescope;