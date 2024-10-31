
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-sad-tear` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sad-tear?s=duotone face-sad-tear}
 * @preview ![face-sad-tear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-sad-tear.svg)
 */
const FaceSadTear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM112 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0C140.6 308.6 112 349 112 369zm31.6-161a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM240 336c0 8.8 7.2 16 16 16c34.9 0 67.2 15.8 92.3 42.9c6 6.5 16.1 6.9 22.6 .9s6.9-16.1 .9-22.6C341.6 340.5 301 320 256 320c-8.8 0-16 7.2-16 16zm63.6-128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M303.6 208a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM112 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0C140.6 308.6 112 349 112 369zm63.6-129a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default FaceSadTear;