
import { Icon } from "../../index";

/**
 * A component that renders the `weight-scale` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-scale?s=thin weight-scale}
 * @preview ![weight-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/weight-scale.svg)
 */
const WeightScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 176c0-36-11.9-69.3-32-96c-4.2-5.5-8.7-10.8-13.5-15.8C341.4 34.5 300.9 16 256 16c-44.8 0-85.2 18.4-114.3 48c-4.6 4.6-8.8 9.6-12.8 14.7L128 80c-20.1 26.7-32 60-32 96c0 88.4 71.6 160 160 160s160-71.6 160-160zM403.5 80c18 27.6 28.5 60.6 28.5 96c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-35.4 10.5-68.4 28.5-96L64 80c-26.5 0-48 21.5-48 48l0 320c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48l-44.5 0zM120.2 64C152.5 24.9 201.3 0 256 0s103.5 24.9 135.8 64L448 64c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l56.2 0zM304 224c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48c4.4 0 8.7 .6 12.8 1.7l36-77.1c1.9-4 6.6-5.7 10.6-3.9s5.7 6.6 3.9 10.6l-36 77.1c12.5 8.7 20.7 23.1 20.7 39.5zm-48 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default WeightScale;