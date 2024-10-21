
import { Icon, generic } from "../../index";

/**
 * A component that renders the `weight-scale` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-scale?s=duotone weight-scale}
 * @preview ![weight-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/weight-scale.svg)
 */
const WeightScale: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M432 176A176 176 0 1 1 80 176a176 176 0 1 1 352 0zM216 224c0 22.1 17.9 40 40 40s40-17.9 40-40c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40z" />
        <path d="M256 352c97.2 0 176-78.8 176-176c0-42.5-15.1-81.6-40.2-112L448 64c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l56.2 0C95.1 94.4 80 133.5 80 176c0 97.2 78.8 176 176 176zm40-128c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-22 17.8-39.9 39.7-40l33.6-78.3c3.5-8.1 12.9-11.9 21-8.4s11.9 12.9 8.4 21l-33.6 78.3c6.7 7.2 10.9 16.8 10.9 27.4z" />
    </Icon>
);

export default WeightScale;