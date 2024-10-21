
import { Icon } from "../../index";

/**
 * A component that renders the `face-sleeping` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sleeping?s=sharp-solid face-sleeping}
 * @preview ![face-sleeping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-sleeping.svg)
 */
const FaceSleeping: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 48l0-13.8C346.3 12.5 302.6 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-46.6-12.5-90.3-34.2-128L432 128l-48 0 0-48 0-8 0-8 0-16zM256 64l16 0 64 0 16 0 0 16 0 8 0 8-6.4 4.8L309.3 128l26.7 0 16 0 0 32-16 0-64 0-16 0 0-16 0-8 0-8 6.4-4.8L298.7 96 272 96l-16 0 0-32zM216 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM395.2 234.4l25.6 19.2c-34.4 45.9-103.2 45.9-137.6 0l25.6-19.2c21.6 28.8 64.8 28.8 86.4 0zm-278.4 0c21.6 28.8 64.8 28.8 86.4 0l25.6 19.2c-34.4 45.9-103.2 45.9-137.6 0l25.6-19.2zM432 0L416 0l0 32 16 0 26.7 0L422.4 59.2 416 64l0 8 0 8 0 16 16 0 64 0 16 0 0-32-16 0-26.7 0 36.3-27.2L512 32l0-8 0-8 0-16L496 0 432 0z" />
    </Icon>
);

export default FaceSleeping;