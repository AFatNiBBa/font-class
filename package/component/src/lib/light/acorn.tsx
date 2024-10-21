
import { Icon } from "../../index";

/**
 * A component that renders the `acorn` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=light acorn}
 * @preview ![acorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/acorn.svg)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M267.3 27.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-3.9 3.9C225.5 23.9 215.1 43.2 210.5 64L96 64C43 64 0 107 0 160l0 16c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-16c0-53-43-96-96-96L243.6 64c3.8-12.3 10.6-23.6 19.8-32.8l3.9-3.9zM352 96c35.3 0 64 28.7 64 64l0 16L32 176l0-16c0-35.3 28.7-64 64-64l256 0zM48.4 240c4.1 78.1 39 189.3 165.5 236.4c6.5 2.4 13.7 2.4 20.2 0C360.6 429.3 395.5 318.1 399.6 240l-32 0c-4 70.6-35.5 165.2-143.5 206C116 405.2 84.4 310.6 80.5 240l-32 0z" />
    </Icon>
);

export default Acorn;