
import { Icon, generic } from "../../index";

/**
 * A component that renders the `manhole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manhole?s=duotone manhole}
 * @preview ![manhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/manhole.svg)
 */
const Manhole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 256c0 71.3 46.6 131.7 111 152.4c9 2.9 17.8-4.3 23.6-11.8c5.8-7.6 15.1-12.6 25.4-12.6s19.6 4.9 25.4 12.6c5.8 7.5 14.5 14.7 23.6 11.8c64.4-20.7 111-81.1 111-152.4s-46.6-131.7-111-152.4c-9-2.9-17.8 4.3-23.6 11.8c-5.8 7.6-15.1 12.6-25.4 12.6s-19.6-4.9-25.4-12.6c-5.8-7.5-14.5-14.7-23.6-11.8C142.6 124.3 96 184.7 96 256zm112-64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64-128a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64-128a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-448a192 192 0 1 1 0 384 192 192 0 1 1 0-384z" />
    </Icon>
);

export default Manhole;