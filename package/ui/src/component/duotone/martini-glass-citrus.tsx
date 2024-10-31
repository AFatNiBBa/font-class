
import { Icon, generic } from "../../index";

/**
 * A component that renders the `martini-glass-citrus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass-citrus?s=duotone martini-glass-citrus}
 * @preview ![martini-glass-citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/martini-glass-citrus.svg)
 */
const MartiniGlassCitrus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M1.8 142.8c-3.7 9-1.7 19.3 5.2 26.2l177 177L184 464l-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l88 0 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-118.1c33.1-33.1 66.1-66.1 99.2-99.2c11.3-11.3 22.6-22.6 33.9-33.9c14.6-14.6 29.3-29.3 43.9-43.9c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8l-54.7 0-48.4 0L24 128c-9.7 0-18.5 5.8-22.2 14.8z" />
        <path d="M432 240c53 0 96-43 96-96s-43-96-96-96c-47.6 0-87.1 34.6-94.7 80l-48.4 0c8-72 69-128 143.1-128c79.5 0 144 64.5 144 144s-64.5 144-144 144c-39.3 0-74.9-15.7-100.8-41.2l33.9-33.9C382.4 229.7 406 240 432 240z" />
    </Icon>
);

export default MartiniGlassCitrus;