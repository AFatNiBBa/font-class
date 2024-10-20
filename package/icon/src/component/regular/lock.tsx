
import { Icon } from "../../index";

/**
 * A component that renders the `lock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=regular lock}
 * @preview ![lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/lock.svg)
 */
const Lock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 128l0 64 160 0 0-64c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 32 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l32 0zM48 256l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192c0-8.8-7.2-16-16-16L64 240c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default Lock;