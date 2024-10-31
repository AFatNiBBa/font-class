
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clarinet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clarinet?s=duotone clarinet}
 * @preview ![clarinet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clarinet.svg)
 */
const Clarinet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 64c0 6.5 4 12.4 10.1 14.9l68.6 27.4c9.4 3.8 19.5 5.7 29.7 5.7l448.3 0c9.5 0 18.7 2.8 26.6 8.1l31.9 21.3c2.7 1.8 5.8 2.7 8.9 2.7c2.6 0 5.2-.6 7.5-1.9c5.2-2.8 8.5-8.2 8.5-14.1l0-192c0-5.9-3.2-11.3-8.5-14.1c-2.4-1.3-5-1.9-7.5-1.9c-3.1 0-6.2 .9-8.9 2.7l-31.9 21.3c-7.9 5.3-17.1 8.1-26.6 8.1L480 192l-32 0-64 0-32 0-64 0-32 0-147.7 0c-10.2 0-20.3 1.9-29.7 5.7L10.1 225.1C4 227.6 0 233.5 0 240zm296 32a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M240 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 32 32 0 0-32 64 0 0 32 32 0 0-32 64 0 0 32 32 0 0-32 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0-96 0-96 0-32 0zm32 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Clarinet;