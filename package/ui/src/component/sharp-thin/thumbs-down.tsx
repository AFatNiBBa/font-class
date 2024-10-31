
import { Icon } from "../../index";

/**
 * A component that renders the `thumbs-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-down?s=sharp-thin thumbs-down}
 * @preview ![thumbs-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/thumbs-down.svg)
 */
const ThumbsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480l8 0 80 0 8 0 0-8 0-51.1c0-29.7-6.4-58.6-18.1-84.9L448 336l48 0 8 0 0-8 0-96 0-8-8 0-8 0 0-56 0-8-8 0-8 0 0-56 0-8-8 0-24 0 0-56 0-8-8 0-48 0L272 32l-14.9 0-2.5 0-2.1 1.4-12.3 8.5L160 97.2l0 19.4 89.3-61.6L259.5 48 272 48l112 0 40 0 0 56 0 8 8 0 24 0 0 56 0 8 8 0 8 0 0 56 0 8 8 0 8 0 0 80-40 0-126.9 0-13.2 0 6.1 11.7c14.2 27 21.9 57.5 21.9 89.1l0 43.1-64 0 0-43.1c0-45.9-24.6-88.3-64.5-111.1l-30-17.2-.6-.3-.6-.2L160 286.1l0 17 10.1 3.7 29.5 16.8c34.9 19.9 56.4 57 56.4 97.2l0 51.1 0 8zM16 368l0-256 96 0 0 256-96 0zM0 384l16 0 96 0 16 0 0-16 0-256 0-16-16 0L16 96 0 96l0 16L0 368l0 16z" />
    </Icon>
);

export default ThumbsDown;