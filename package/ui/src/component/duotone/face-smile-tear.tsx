
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile-tear` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-tear?s=duotone face-smile-tear}
 * @preview ![face-smile-tear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-smile-tear.svg)
 */
const FaceSmileTear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm139.9 90.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6C182 346.2 212.6 368 256 368c8.8 0 16 7.2 16 16s-7.2 16-16 16c-55.1 0-93.8-27.9-116.1-53.5zM208.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM304 369c0-20 28.4-60.4 41.6-77.7c3.2-4.4 9.6-4.4 12.8 0C371.4 308.6 400 349 400 369c0 26-21.5 47-48 47s-48-21-48-47zm64.4-161a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM400 369c0 26-21.5 47-48 47s-48-21-48-47c0-20 28.4-60.4 41.6-77.7c3.2-4.4 9.6-4.4 12.8 0C371.4 308.6 400 349 400 369zM336.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceSmileTear;