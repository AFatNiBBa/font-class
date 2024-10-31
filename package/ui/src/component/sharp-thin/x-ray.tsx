
import { Icon } from "../../index";

/**
 * A component that renders the `x-ray` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=sharp-thin x-ray}
 * @preview ![x-ray](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/x-ray.svg)
 */
const XRay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l8 0 32 0 432 0 32 0 8 0 0 16-8 0-24 0 0 416 24 0 8 0 0 16-8 0-32 0L40 480 8 480l-8 0 0-16 8 0 24 0L32 48 8 48 0 48 0 32zM48 48l0 416 416 0 0-416L48 48zM264 96l0 8 0 40 80 0 8 0 0 16-8 0-80 0 0 48 112 0 8 0 0 16-8 0-112 0 0 80 0 1.5 72-25.1 1.3-.4 1.4 0 53.3 0 8 0 0 8 0 65.6 0 2.8-1.7 2.2-42.7 54.4-2.4 3.1-3.9 0-186.7 0-3.9 0-2.4-3.1-42.7-54.4-1.7-2.2 0-2.8 0-65.6 0-8 8 0 53.3 0 1.4 0 1.3 .4 72 25.1 0-1.5 0-80-104 0-8 0 0-16 8 0 104 0 0-48-72 0-8 0 0-16 8 0 72 0 0-40 0-8 16 0zM128 350.8L166.6 400l178.9 0L384 350.8l0-54.8-44 0-81.4 28.4-2.6 .9-2.6-.9L172 296l-44 0 0 54.8zm64 1.2a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default XRay;