
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-bound` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-bound?s=sharp-duotone-solid hands-bound}
 * @preview ![hands-bound](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hands-bound.svg)
 */
const HandsBound: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 0l0 32 0 32 0 32 0 80 0 16 0 32 0 11.8 7.7 9L131.6 352 288 352l0-32 0-88 0-12.2-8.1-9.1-64-72-21.3-23.9-47.8 42.5 21.3 23.9L207.9 226l-35.7 24.2L96 163.9 96 96l0-32 0-32L96 0 32 0zM160 480l0 32 128 0 0-32-128 0zM352 219.8l0 12.2 0 88 0 32 156.4 0 91.9-107.2 7.7-9 0-11.8 0-32 0-16 0-80 0-32 0-32 0-32L544 0l0 32 0 32 0 32 0 67.9-76.2 86.4L432.1 226l39.8-44.8 21.3-23.9-47.8-42.5-21.3 23.9-64 72-8.1 9.1zM352 480l0 32 128 0 0-32-128 0z" />
        <path d="M128 352l-24 0 0 48 24 0 384 0 24 0 0-48-24 0-384 0zm0 80l-24 0 0 48 24 0 384 0 24 0 0-48-24 0-384 0z" />
    </Icon>
);

export default HandsBound;