
import { Icon, generic } from "../../index";

/**
 * A component that renders the `telescope` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/telescope?s=duotone telescope}
 * @preview ![telescope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/telescope.svg)
 */
const Telescope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M3.1 376.4L29 421.3c4.4 7.7 12.5 12 20.8 12c4.1 0 8.2-1 12-3.2l44.1-25.5 .8 1.4c8.6 15 27.6 20.4 42.8 12.2l88.4-47.4c1.9-4.7 3.9-9.5 5.8-14.2C231.4 342.5 224 324.1 224 304c0-44.2 35.8-80 80-80c1.3 0 2.5 0 3.8 .1s2.5 .1 3.7 .3c2.5 .2 4.9 .6 7.3 1c4.8 .9 9.4 2.2 13.9 3.9c8.9 3.4 17 8.4 24.1 14.5c14.1 12.3 23.8 29.5 26.5 49l77.5-41.6c-.2-.4-.5-.8-.7-1.2L364 83.7c-.7-1.2-1.3-2.4-1.8-3.6c-.2-.6-.5-1.1-.8-2c-.1-.4-.3-.8-.5-1.5L62.4 268.4c-14.4 9.2-19 28.1-10.4 42.9l4 6.9L11.8 343.6C.4 350.3-3.6 364.9 3.1 376.4z" />
        <path d="M375.7 40c-15.3 8.8-20.6 28.4-11.7 43.7L460 250c8.8 15.3 28.4 20.5 43.7 11.7l55.4-32c15.3-8.8 20.6-28.4 11.7-43.7l-96-166.3C466 4.4 446.4-.8 431.1 8L375.7 40zM364.3 356.5C376.6 342.5 384 324.1 384 304c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 20.1 7.4 38.5 19.7 52.5L193.8 478.9c-5 12.3 .9 26.3 13.2 31.3s26.3-.9 31.3-13.2l47-115.3c6 1.5 12.3 2.2 18.8 2.2s12.8-.8 18.8-2.2l47 115.3c5 12.3 19 18.2 31.3 13.2s18.2-19 13.2-31.3L364.3 356.5zM272 304a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Telescope;