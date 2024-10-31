
import { Icon } from "../../index";

/**
 * A component that renders the `square-heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-heart?s=sharp-thin square-heart}
 * @preview ![square-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-heart.svg)
 */
const SquareHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM211.5 185.9l-9.3-11.6c-11.3-14.1-28.5-22.4-46.6-22.4c-32.9 0-59.6 26.7-59.6 59.6l0 3.6c0 16.8 6.7 32.8 18.5 44.7l24.8 24.8L224 369.3l84.7-84.7 24.8-24.8c11.8-11.9 18.5-27.9 18.5-44.7l0-3.6c0-32.9-26.7-59.6-59.6-59.6c-18.1 0-35.3 8.2-46.6 22.4l-9.3 11.6L224 201.5l-12.5-15.6zm12.5 206l-11.3-11.3L128 295.9l-24.8-24.8c-14.9-14.9-23.2-35-23.2-56l0-3.6c0-41.8 33.9-75.6 75.6-75.6c22.5 0 43.7 10 58.1 27.2c.3 .4 .6 .8 1 1.2l9.3 11.6 9.3-11.6c.3-.4 .6-.8 1-1.2c14.4-17.2 35.6-27.2 58.1-27.2c41.8 0 75.6 33.9 75.6 75.6l0 3.6c0 21-8.3 41.1-23.2 56L320 295.9l-84.7 84.7L224 391.9z" />
    </Icon>
);

export default SquareHeart;