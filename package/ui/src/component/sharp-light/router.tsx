
import { Icon } from "../../index";

/**
 * A component that renders the `router` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/router?s=sharp-light router}
 * @preview ![router](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/router.svg)
 */
const Router: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 0c71.4 0 136.7 26 187 69L516.3 91.7C471.9 54.4 414.5 32 352 32s-119.9 22.4-164.3 59.7L165 69C215.3 26 280.6 0 352 0zm0 96c44.9 0 86.1 15.4 118.8 41.2L448 160c-26.7-20.1-60-32-96-32s-69.3 11.9-96 32l-22.8-22.8C265.9 111.4 307.1 96 352 96zm16 128l0 16 0 80 176 0 32 0 0 32 0 128 0 32-32 0L32 512 0 512l0-32L0 352l0-32 32 0 304 0 0-80 0-16 32 0zM544 352L32 352l0 128 512 0 0-128zM160 392l48 0 0 48-48 0 0-48zm-32 0l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Router;