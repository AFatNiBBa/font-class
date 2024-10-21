
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-confused` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-confused?s=duotone face-confused}
 * @preview ![face-confused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-confused.svg)
 */
const FaceConfused: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144.4-48c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1 0 1.8c0 .5 0 1 0 1.5s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zm3.1 186c-5.5-6.9-4.4-17 2.5-22.5l1.1-.9C205 327.5 272 304 341 304l11 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-11 0c-61.8 0-121.7 21-169.9 59.6l-1.1 .9c-6.9 5.5-17 4.4-22.5-2.5zM368.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default FaceConfused;