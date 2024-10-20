
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-a-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a-lock?s=duotone square-a-lock}
 * @preview ![square-a-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-a-lock.svg)
 */
const SquareALock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 65.1c-54.3 7.8-96 54.4-96 110.9l0 24.6c-9.9 5.7-18.1 14-23.8 24L245.8 141.9c-3.9-8.5-12.4-13.9-21.8-13.9s-17.9 5.4-21.8 13.9l-96 208c-5.6 12-.3 26.3 11.7 31.8s26.3 .3 31.8-11.7l12-26.1 124.4 0 12 26.1c4 8.8 12.7 13.9 21.8 13.9l0 96L64 480c-35.3 0-64-28.7-64-64L0 96zM184 296l40-86.7L264 296l-80 0z" />
        <path d="M432 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default SquareALock;