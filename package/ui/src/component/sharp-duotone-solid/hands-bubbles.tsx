
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-bubbles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-bubbles?s=sharp-duotone-solid hands-bubbles}
 * @preview ![hands-bubbles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hands-bubbles.svg)
 */
const HandsBubbles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 128l0 32 .1 99.1c0 47.6 24.9 91.1 64.5 115.6c-.4-4.9-.6-9.8-.6-14.7l0-8c0-71.8 37-138.6 97.9-176.7l60.2-37.6 27.1-17 7.1-4.4 39-67.5 12-20.8L297.8 4l-12 20.8L215.5 146.5l-20.8-12 49.5-85.7 12-20.8L214.6 4l-12 20.8-49.5 85.7c-19 32.9-38.1 65.9-57.1 98.8L96 160l0-32L32 128zM64 464a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM316.1 116.2l9.2 14.7 19.6 31.4 28.7-49.8 12-20.8-41.6-24-12 20.8-16 27.7zm43.2 69.1L373.5 208l28.2 0L420 176.2l12-20.8-41.6-24-12 20.8-19.1 33.1zM384 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M298.2 147.9l-27.1 17-60.2 37.6C159.3 234.7 128 291.2 128 352c0 0 0 0 0 0l0 8s0 0 0 0c0 8.9 .8 17.6 2.2 26.1c35.4 8.3 61.8 40 61.8 77.9c0 6.3-.7 12.5-2.1 18.4C215.1 501 246.3 512 280 512l176 0 24 0 0-48-24 0-104 0 0-24 136 0 24 0 0-48-24 0-136 0 0-24 168 0 24 0 0-48-24 0-168 0 0-24 136 0 24 0 0-48-24 0-136 0s0 0 0 0l-93.2 0L305 219.1l27.1-17-33.9-54.3z" />
    </Icon>
);

export default HandsBubbles;