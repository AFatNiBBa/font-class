
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile-tear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-tear?s=sharp-duotone-solid face-smile-tear}
 * @preview ![face-smile-tear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-smile-tear.svg)
 */
const FaceSmileTear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm129.4 78.4l24.2-21 10.5 12.1C182 346.2 212.6 368 256 368l16 0 0 32-16 0c-55.1 0-93.8-27.9-116.1-53.5l-10.5-12.1zM208.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM304 368c0-10.4 3.4-20.5 9.6-28.8L352 288l38.4 51.2c6.2 8.3 9.6 18.4 9.6 28.8c0 26.5-21.5 48-48 48s-48-21.5-48-48zm64.4-160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM313.6 339.2L352 288l38.4 51.2c6.2 8.3 9.6 18.4 9.6 28.8c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-10.4 3.4-20.5 9.6-28.8zM336.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceSmileTear;