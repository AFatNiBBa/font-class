
import { Icon } from "../../index";

/**
 * A component that renders the `watch` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=light watch}
 * @preview ![watch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/watch.svg)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 32l128 0c17.7 0 32 14.3 32 32l0 25.7C259.8 73.3 227 64 192 64s-67.8 9.3-96 25.7L96 64c0-17.7 14.3-32 32-32zM64 112l1 0C25.1 147.2 0 198.7 0 256s25.1 108.8 65 144l-1 0 0 48c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-48-1 0c39.9-35.2 65-86.7 65-144s-25.1-108.8-65-144l1 0 0-48c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 48zM288 422.3l0 25.7c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-25.7c28.2 16.3 61 25.7 96 25.7s67.8-9.4 96-25.7zM32 256a160 160 0 1 1 320 0A160 160 0 1 1 32 256zm176-80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 5.3 2.7 10.3 7.1 13.3l48 32c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L208 247.4l0-71.4z" />
    </Icon>
);

export default Watch;