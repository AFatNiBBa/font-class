
import { Icon } from "../../index";

/**
 * A component that renders the `monkey` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monkey?s=sharp-solid monkey}
 * @preview ![monkey](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/monkey.svg)
 */
const Monkey: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 416c0-80.6 49.6-149.6 120-178l0 18 0 32 32 0 135.9 0L566.1 400.9l9.9 9.5 0 13.7 0 56 0 32-64 0 0-32 0-42.3-96-91.6L416 448l32 0 32 0 0 64-32 0-32 0-256 0C71.6 512 0 440.4 0 352L0 32 0 0 32 0 192 0l32 0 0 32 0 128 0 32-32 0-64 0-32 0 0-64 32 0 32 0 0-64L64 64l0 288c0 53 43 96 96 96l0-32zm96-288c0-35.3 28.6-64 64-64c15.7-37.6 52.8-64 96-64s80.4 26.4 96 64c35.3 0 64 28.7 64 64c0 32.6-24.4 59.6-56 63.5l0 64.5-104 0-72 0-32 0 0-27.8 0-36.7c-31.6-3.9-56-30.9-56-63.5zM384 64c-26.5 0-48 21.5-48 48c0 23.8 17.3 43.5 40 47.3l0 48.7 80 0 0-48.7c22.7-3.8 40-23.6 40-47.3c0-26.5-21.5-48-48-48l-64 0zm0 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Monkey;