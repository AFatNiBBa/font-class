
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trailer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trailer?s=duotone trailer}
 * @preview ![trailer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trailer.svg)
 */
const Trailer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 112l0 152.2c9.8-8.1 20.6-15.2 32-21L96 112c0-8.8-7.2-16-16-16s-16 7.2-16 16zM96 400a80 80 0 1 0 160 0A80 80 0 1 0 96 400zm64-288l0 112.7c5.3-.5 10.6-.7 16-.7s10.7 .2 16 .7L192 112c0-8.8-7.2-16-16-16s-16 7.2-16 16zm96 0l0 131.2c11.4 5.9 22.2 12.9 32 21L288 112c0-8.8-7.2-16-16-16s-16 7.2-16 16zm96 0l0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192c0-8.8-7.2-16-16-16s-16 7.2-16 16zm96 0l0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
        <path d="M48 32C21.5 32 0 53.5 0 80L0 336c0 26.5 21.5 48 48 48l17.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96L488 384l8 0 112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-240c0-26.5-21.5-48-48-48L48 32zM80 96c8.8 0 16 7.2 16 16l0 131.2c-11.4 5.9-22.2 12.9-32 21L64 112c0-8.8 7.2-16 16-16zm96 128c-5.4 0-10.7 .2-16 .7L160 112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112.7c-5.3-.5-10.6-.7-16-.7zm80 19.2L256 112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 152.2c-9.8-8.1-20.6-15.2-32-21zM368 96c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16zm112 16l0 192c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default Trailer;