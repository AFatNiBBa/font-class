
import { Icon } from "../../index";

/**
 * A component that renders the `rv` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rv?s=solid rv}
 * @preview ![rv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/rv.svg)
 */
const Rv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16c0-8.8 7.2-16 16-16L368 0c8.8 0 16 7.2 16 16l0 16 128 0c53 0 96 43 96 96c0 17.7-14.3 32-32 32l-192 0 0 256-129.6 0c1 5.2 1.6 10.5 1.6 16c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5 .6-10.8 1.6-16L96 416 18.7 338.7C6.7 326.7 0 310.5 0 293.5L0 96C0 60.7 28.7 32 64 32l160 0 0-16zM112 128c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-128 0zm96 304a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-80-48l0-16 0-80 0-32 0-72 0-24 24 0 76.6 0c12.9 0 25.5 4.5 35.5 12.7l67.4 55.2c13 10.6 20.5 26.5 20.5 43.3l0 16.8 0 64c0 17.7-14.3 32-32 32l-33.6 0c1 5.2 1.6 10.5 1.6 16c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-16zM578.1 288l-56.5-46.2c-1.4-1.2-3.2-1.8-5.1-1.8L464 240l0 48 114.1 0z" />
    </Icon>
);

export default Rv;