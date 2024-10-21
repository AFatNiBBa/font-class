
import { Icon } from "../../index";

/**
 * A component that renders the `crow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crow?s=sharp-thin crow}
 * @preview ![crow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/crow.svg)
 */
const Crow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 0c-48.6 0-88 39.4-88 88l0 59.9L3.3 401.5l6.6 14.2L137 384l149 0 52.7 128 17.3 0L303.2 384l32.8 0c15.1 0 29.8-1.7 43.9-5l54.8 133 17.3 0L395.4 374.6c77-25 132.6-97.3 132.6-182.6l0-44 112-28 0-36L592 48l-73.6 0C503.8 19.5 474.2 0 440 0zM624 107.5l-96 24L528 88c0-8.3-1.2-16.4-3.3-24l62 0L624 92l0 15.5zM201 368l21.3-5.3C307.9 341.3 368 264.3 368 176l0-8 0-80c0-39.8 32.2-72 72-72s72 32.2 72 72l0 104c0 97.2-78.8 176-176 176l-135 0zM352 168l0 8c0 81-55.1 151.5-133.6 171.2L46 390.3 352 167.7l0 .3zM456 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Crow;