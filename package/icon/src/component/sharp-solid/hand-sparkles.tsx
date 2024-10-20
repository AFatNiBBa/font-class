
import { Icon } from "../../index";

/**
 * A component that renders the `hand-sparkles` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-sparkles?s=sharp-solid hand-sparkles}
 * @preview ![hand-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-sparkles.svg)
 */
const HandSparkles: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 32l0-32L288 0l0 32 0 224-32 0 0-192 0-32-64 0 0 32 0 272c0 1.5 0 3.1 .1 4.6l-43.6-41.5-29-27.6L64.3 329.4l29 27.6 95.5 91c43.1 41.1 100.4 64 160 64l19.2 0c44.4 0 84.9-16.4 115.9-43.5L448 453.1l0-42.2 63.6-27.3L544 308.1 544 128l0-32-64 0 0 32 0 128-32 0 0-192 0-32-64 0 0 32 0 192-32 0 0-224zM288 352l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16zM56 120L0 144l56 24 24 56 24-56 56-24-56-24L80 64 56 120zM560 352l-24 56-56 24 56 24 24 56 24-56 56-24-56-24-24-56z" />
    </Icon>
);

export default HandSparkles;