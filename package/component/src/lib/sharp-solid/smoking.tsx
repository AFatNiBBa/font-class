
import { Icon } from "../../index";

/**
 * A component that renders the `smoking` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smoking?s=sharp-solid smoking}
 * @preview ![smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/smoking.svg)
 */
const Smoking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 0l0 43c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2l0 43-64 0 0-43c0-12.7-5.1-24.9-14.1-33.9l-21-21C405.9 151.1 384 98.1 384 43l0-43 64 0zM576 288l0-43c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2l0-43 64 0 0 43c0 12.7 5.1 24.9 14.1 33.9l21 21c39 39 60.9 91.9 60.9 147.1l0 43-64 0zM0 352l32 0 384 0 32 0 0 32 0 96 0 32-32 0L32 512 0 512l0-32 0-96 0-32zm224 64l0 32 160 0 0-32-160 0zm320-64l0 32 0 96 0 32-64 0 0-32 0-96 0-32 64 0zm96 0l0 32 0 96 0 32-64 0 0-32 0-96 0-32 64 0z" />
    </Icon>
);

export default Smoking;