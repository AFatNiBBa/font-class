
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-sad-tear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sad-tear?s=sharp-duotone-solid face-sad-tear}
 * @preview ![face-sad-tear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-sad-tear.svg)
 */
const FaceSadTear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM112 368c0 26.5 21.5 48 48 48s48-21.5 48-48c0-10.4-3.4-20.5-9.6-28.8L160 288l-38.4 51.2c-6.2 8.3-9.6 18.4-9.6 28.8zm31.6-160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM240 320l0 32 16 0c34.9 0 67.2 15.8 92.3 42.9l10.9 11.8 23.5-21.7-10.9-11.7C341.6 340.5 301 320 256 320l-16 0zm63.6-112a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M367.6 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-246 131.2L160 288l38.4 51.2c6.2 8.3 9.6 18.4 9.6 28.8c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-10.4 3.4-20.5 9.6-28.8zm54-163.2a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceSadTear;