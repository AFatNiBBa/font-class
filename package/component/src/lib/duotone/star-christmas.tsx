
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-christmas` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-christmas?s=duotone star-christmas}
 * @preview ![star-christmas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/star-christmas.svg)
 */
const StarChristmas: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 88c0 6.1 2.3 12.3 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L105 71c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7s-7 10.8-7 17zm0 336c0 6.1 2.3 12.3 7 17s10.8 7 17 7s12.3-2.3 17-7l48-48c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L71 407c-4.7 4.7-7 10.8-7 17zM359 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17s-10.8-7-17-7s-12.3 2.3-17 7l-48 48zm0 240c-9.4 9.4-9.4 24.6 0 33.9l48 48c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7s7-10.8 7-17s-2.3-12.3-7-17l-48-48c-9.4-9.4-24.6-9.4-33.9 0z" />
        <path d="M192 320L15.5 275.9C6.4 273.6 0 265.4 0 256s6.4-17.6 15.5-19.9L192 192 236.1 15.5C238.4 6.4 246.6 0 256 0s17.6 6.4 19.9 15.5L320 192l176.5 44.1c9.1 2.3 15.5 10.5 15.5 19.9s-6.4 17.6-15.5 19.9L320 320 275.9 496.5c-2.3 9.1-10.5 15.5-19.9 15.5s-17.6-6.4-19.9-15.5L192 320z" />
    </Icon>
);

export default StarChristmas;