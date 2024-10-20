
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cubes-stacked` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cubes-stacked?s=duotone cubes-stacked}
 * @preview ![cubes-stacked](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cubes-stacked.svg)
 */
const CubesStacked: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM71 250.7c-8.8-15.3-3.6-34.9 11.7-43.7l55.4-32c5-2.9 10.5-4.3 16-4.3c11.1 0 21.8 5.7 27.7 16l32 55.4c8.8 15.3 3.6 34.9-11.7 43.7l-55.4 32c-15.3 8.8-34.9 3.6-43.7-11.7L71 250.7zM320 384c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64z" />
        <path d="M224 32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zm32 192l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zM160 384l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default CubesStacked;