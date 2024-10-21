
import { Icon } from "../../index";

/**
 * A component that renders the `mandolin` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mandolin?s=sharp-light mandolin}
 * @preview ![mandolin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mandolin.svg)
 */
const Mandolin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M370.6 141.4l72.1-24L471.7 69 443 40.3 394.6 69.3l-24 72.1zM368 48L448 0l64 64-48 80L357.9 179.4l-4 1.3-32.5 32.5C324.9 284.6 324.4 512 176 512C78.8 512 0 433.2 0 336C0 187.6 227.4 187.1 298.8 190.6l32.5-32.5 1.3-4L368 48zM224.5 264.9l43.1-43.1c-28.6-.2-65.6 1.4-102.1 7.8c-37.9 6.6-72.4 18-96.7 35.6C45.9 281.7 32 303.6 32 336c0 79.5 64.5 144 144 144c32.4 0 54.3-13.9 70.8-36.8c17.6-24.3 29-58.8 35.6-96.7c6.4-36.5 7.9-73.5 7.8-102.1l-43.1 43.1c5.6 9.5 8.9 20.6 8.9 32.5c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c11.9 0 23 3.2 32.5 8.9zM224 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Mandolin;