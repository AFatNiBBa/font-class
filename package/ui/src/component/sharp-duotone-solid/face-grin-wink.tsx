
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-wink` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-wink?s=sharp-duotone-solid face-grin-wink}
 * @preview ![face-grin-wink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-wink.svg)
 */
const FaceGrinWink: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96 46.8c46.2 18.3 101.2 29 160.2 29s114.1-10.6 160.2-29C400.3 376.7 334.7 432 256.3 432s-144-55.3-160.2-129.2zM208.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm58.8 10.4c34.4-45.9 103.2-45.9 137.6 0l-25.6 19.2c-21.6-28.8-64.8-28.8-86.4 0l-25.6-19.2z" />
        <path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm116.4-2.4c21.6-28.8 64.8-28.8 86.4 0l25.6-19.2c-34.4-45.9-103.2-45.9-137.6 0l25.6 19.2z" />
    </Icon>
);

export default FaceGrinWink;