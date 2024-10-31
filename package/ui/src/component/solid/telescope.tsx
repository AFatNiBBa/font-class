
import { Icon } from "../../index";

/**
 * A component that renders the `telescope` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/telescope?s=solid telescope}
 * @preview ![telescope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/telescope.svg)
 */
const Telescope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M375.7 40c-15.3 8.8-20.6 28.4-11.7 43.7L460 250c8.8 15.3 28.4 20.5 43.7 11.7l55.4-32c15.3-8.8 20.5-28.4 11.7-43.7l-96-166.3C466 4.4 446.4-.8 431.1 8L375.7 40zM11.8 343.6C.4 350.3-3.6 364.9 3.1 376.4l25.9 44.9c6.6 11.5 21.3 15.4 32.8 8.8l44.1-25.5 .8 1.4c8.6 15 27.6 20.4 42.8 12.2l88.4-47.4L193.8 478.9c-5 12.3 .9 26.3 13.2 31.3s26.3-.9 31.3-13.2L304 335.6l65.8 161.4c5 12.3 19 18.2 31.3 13.2s18.2-19 13.2-31.3L346.4 312.5l86.1-46.2-.2-.3-96-166.3c-1-1.8-2-3.6-2.8-5.4L62.4 268.4c-14.4 9.2-19 28.1-10.4 42.9l4 6.9L11.8 343.6z" />
    </Icon>
);

export default Telescope;